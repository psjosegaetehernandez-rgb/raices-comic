import sharp from 'sharp';
import { stat } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const fullPath = join(projectRoot, 'public', 'imagenes', 'portadas', 'cap3-portada.jpg');
const tempPath = fullPath + '.tmp';

const origStats = await stat(fullPath);

await sharp(fullPath)
  .resize({ width: 1400, height: 1400, fit: 'inside', withoutEnlargement: true })
  .jpeg({ quality: 78, progressive: true, mozjpeg: true })
  .toFile(tempPath);

const newStats = await stat(tempPath);
const fs = await import('fs/promises');
await fs.rename(tempPath, fullPath);

console.log('cap3-portada.jpg: ' + (origStats.size / 1024).toFixed(0) + ' KB -> ' + (newStats.size / 1024).toFixed(0) + ' KB');