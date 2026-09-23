import sharp from 'sharp';
import { readdir, mkdir, stat, readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const sourceDir = join(projectRoot, 'public', 'imagenes');
const outputDir = join(projectRoot, 'public', 'imagenes-optimized');

async function getAllImages(dir) {
  const result = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await getAllImages(fullPath);
      result.push(...nested);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      result.push(fullPath);
    }
  }
  return result;
}

async function optimizeImage(inputPath, outputPath) {
  const originalStats = await stat(inputPath);
  const originalSize = originalStats.size;

  await sharp(inputPath)
    .resize({
      width: 1400,
      height: 1400,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({
      quality: 78,
      progressive: true,
      mozjpeg: true,
    })
    .toFile(outputPath);

  const newStats = await stat(outputPath);
  const newSize = newStats.size;
  const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

  return {
    original: (originalSize / 1024).toFixed(0) + ' KB',
    optimized: (newSize / 1024).toFixed(0) + ' KB',
    savings: savings + '%',
  };
}

(async () => {
  console.log('');
  console.log('=========================================');
  console.log(' OPTIMIZADOR DE IMAGENES');
  console.log('=========================================');
  console.log('');

  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true });
  }

  const images = await getAllImages(sourceDir);
  console.log('Encontradas ' + images.length + ' imagenes');
  console.log('');

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const inputPath of images) {
    const relPath = inputPath.replace(sourceDir, '').replace(/^[\\\/]/, '');
    const outputPath = join(outputDir, relPath);

    const outputFileDir = dirname(outputPath);
    if (!existsSync(outputFileDir)) {
      await mkdir(outputFileDir, { recursive: true });
    }

    try {
      const result = await optimizeImage(inputPath, outputPath);
      console.log('  ' + relPath);
      console.log('    ' + result.original + ' -> ' + result.optimized + ' (-' + result.savings + ')');

      totalOriginal += parseFloat(result.original);
      totalOptimized += parseFloat(result.optimized);
    } catch (err) {
      console.log('  ERROR: ' + relPath + ' - ' + err.message);
    }
  }

  console.log('');
  console.log('=========================================');
  console.log(' RESUMEN');
  console.log('=========================================');
  console.log('Original total:  ' + (totalOriginal / 1024).toFixed(2) + ' MB');
  console.log('Optimizado:      ' + (totalOptimized / 1024).toFixed(2) + ' MB');
  console.log('Ahorro:          ' + (((1 - totalOptimized / totalOriginal) * 100).toFixed(1)) + '%');
  console.log('');
  console.log('Archivos en: public/imagenes-optimized/');
  console.log('');
})().catch((err) => {
  console.error('ERROR: ' + err.message);
  process.exit(1);
});