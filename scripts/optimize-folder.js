import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const targetDir = process.argv[2] || 'public/imagenes/cap2';
const fullTargetDir = join(projectRoot, targetDir);

(async () => {
  console.log('');
  console.log('Optimizando: ' + targetDir);
  console.log('');

  const files = await readdir(fullTargetDir);

  let totalOrig = 0;
  let totalNew = 0;

  for (const file of files) {
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;

    const fullPath = join(fullTargetDir, file);
    const tempPath = fullPath + '.tmp';

    const origStats = await stat(fullPath);
    totalOrig += origStats.size;

    await sharp(fullPath)
      .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 78, progressive: true, mozjpeg: true })
      .toFile(tempPath);

    const newStats = await stat(tempPath);
    totalNew += newStats.size;

    const fs = await import('fs/promises');
    await fs.rename(tempPath, fullPath);

    const reduction = ((1 - newStats.size / origStats.size) * 100).toFixed(0);
    console.log('  ' + file + ' (' + (origStats.size / 1024).toFixed(0) + ' KB -> ' + (newStats.size / 1024).toFixed(0) + ' KB, -' + reduction + '%)');
  }

  console.log('');
  console.log('Original total: ' + (totalOrig / 1024 / 1024).toFixed(2) + ' MB');
  console.log('Optimizado:     ' + (totalNew / 1024 / 1024).toFixed(2) + ' MB');
  console.log('');
})().catch((err) => {
  console.error('ERROR: ' + err.message);
  process.exit(1);
});