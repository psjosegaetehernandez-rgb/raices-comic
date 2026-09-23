import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync, statSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const url = process.argv[2] || 'http://localhost:5173/capitulo/cap1';
const outputName = process.argv[3] || 'raices-capitulo-1.pdf';
const outputPath = join(projectRoot, 'public', outputName);

console.log('');
console.log('=========================================');
console.log(' GENERADOR DE PDF - RAICES COMIC');
console.log('=========================================');
console.log('');
console.log('URL origen: ' + url);
console.log('Destino:    ' + outputPath);
console.log('');

(async () => {
  const publicDir = join(projectRoot, 'public');
  if (!existsSync(publicDir)) {
    mkdirSync(publicDir, { recursive: true });
  }

  console.log('[1/6] Lanzando navegador headless...');
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--font-render-hinting=none',
    ],
  });
  console.log('      OK');

  const page = await browser.newPage();
  await page.setViewport({
    width: 800,
    height: 1000,
    deviceScaleFactor: 2,
  });

  console.log('[2/6] Cargando pagina...');
  await page.goto(url, {
    waitUntil: 'networkidle0',
    timeout: 90000,
  });
  console.log('      OK');

  console.log('[3/6] Scroll completo para cargar todas las imagenes...');
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          setTimeout(resolve, 1000);
        }
      }, 100);
    });
  });
  console.log('      OK');

  console.log('[4/6] Esperando imagenes...');
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    await Promise.all(
      images.map((img) => {
        if (img.complete && img.naturalHeight > 0) return Promise.resolve();
        return new Promise((resolve) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve);
          setTimeout(resolve, 15000);
        });
      })
    );
  });
  await new Promise((r) => setTimeout(r, 3000));
  console.log('      OK');

  console.log('[5/6] Activando modo impresion...');
  await page.emulateMediaType('print');
  await new Promise((r) => setTimeout(r, 500));
  console.log('      OK');

  console.log('[6/6] Generando PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
    preferCSSPageSize: false,
  });
  console.log('      OK');

  await browser.close();

  const stats = statSync(outputPath);
  const sizeKB = (stats.size / 1024).toFixed(1);
  const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

  console.log('');
  console.log('=========================================');
  console.log(' PDF GENERADO EXITOSAMENTE');
  console.log('=========================================');
  console.log('');
  console.log('Archivo: ' + outputPath);
  console.log('Tamano:  ' + sizeKB + ' KB (' + sizeMB + ' MB)');
  console.log('');
})().catch((error) => {
  console.error('');
  console.error('ERROR: ' + error.message);
  console.error(error.stack);
  process.exit(1);
});