// scripts/fix-accents.cjs - Versión blindada v3
// NUNCA toca líneas que contengan image:, cover:, imageAlt: o rutas .jpg
const fs   = require('fs');
const path = require('path');

const DRY          = process.argv.includes('--dry');
const CHAPTERS_DIR = path.join(__dirname, '..', 'src', 'data', 'chapters');

const DICT = {
  'anos':'años','despues':'después','tambien':'también',
  'mama':'mamá','papa':'papá','dia':'día','dias':'días','manana':'mañana',
  'pais':'país','paises':'países',
  'publico':'público','publica':'pública',
  'titulo':'título','titulos':'títulos','tramite':'trámite','tramites':'trámites',
  'extranjeria':'extranjería',
  'companero':'compañero','companera':'compañera','companeros':'compañeros','companeras':'compañeras',
  'nino':'niño','nina':'niña','ninos':'niños','ninas':'niñas',
  'pequeno':'pequeño','pequena':'pequeña','pequenos':'pequeños','pequenas':'pequeñas',
  'enseno':'enseñó',
  'habia':'había','tenia':'tenía','sabia':'sabía',
  'raices':'raíces','raiz':'raíz',
  'migracion':'migración','decision':'decisión','corazon':'corazón','practica':'práctica',
  'reunion':'reunión','telefono':'teléfono',
  'humedo':'húmedo','humeda':'húmeda','meson':'mesón','detras':'detrás',
  'todavia':'todavía','Podria':'Podría','Sonrie':'Sonríe',
  'mas':'más','pestanear':'pestañear',
  'suenos':'sueños','sueno':'sueño',
  'Dona Rosa':'Doña Rosa',
  'Cucuta':'Cúcuta','Peru':'Perú','Haiti':'Haití','Bolivar':'Bolívar',
  'montana':'montaña','montanas':'montañas',
  'frio':'frío','fria':'fría',
  'sonreir':'sonreír','accion':'acción',
  'aqui':'aquí','asi':'así','alli':'allí','alla':'allá',
  'segun':'según','ademas':'además','jamas':'jamás',
};

const AMBIGUOUS = ['que','como','donde','cuando','quien','cual','cuales',
                   'aun','esta','estan','hacia','solo','el','tu','mi','se','si','de','mas','papa'];

const esc    = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const reWord = w => new RegExp(`(?<![\\p{L}\\p{N}_])${esc(w)}(?![\\p{L}\\p{N}_])`, 'gu');

// Línea "intocable": rutas, alt, importaciones, etc.
const esLineaProtegida = (line) =>
  /image\s*:|cover\s*:|imageAlt\s*:|\.jpg['"]|\.jpeg['"]|\.png['"]|\.webp['"]|import\s|from\s+['"]/.test(line);

function processFile(file) {
  const full = path.join(CHAPTERS_DIR, file);
  const lines = fs.readFileSync(full, 'utf8').split(/\r?\n/);
  const applied = [];
  const flagged = [];
  let out = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Si la línea está protegida, la dejamos TAL CUAL
    if (esLineaProtegida(line)) {
      out.push(line);
      continue;
    }

    let newLine = line;
    for (const [from, to] of Object.entries(DICT)) {
      if (from === to) continue;
      const re = reWord(from);
      if (re.test(newLine)) {
        newLine = newLine.replace(re, to);
        applied.push(`L${i+1}: ${from} → ${to}`);
      }
    }
    out.push(newLine);

    for (const w of AMBIGUOUS) {
      if (reWord(w).test(newLine)) {
        flagged.push(`L${i+1}: [${w}]  ${newLine.trim().slice(0, 90)}`);
        break;
      }
    }
  }

  const result = out.join('\n');
  if (!DRY && result !== lines.join('\n')) {
    fs.writeFileSync(full, result, 'utf8');
  }
  return { applied, flagged };
}

(function main() {
  const files = fs.readdirSync(CHAPTERS_DIR).filter(f => /^cap\d+\.ts$/.test(f)).sort();
  let totalApplied = 0, totalFlagged = 0;

  for (const f of files) {
    const { applied, flagged } = processFile(f);
    console.log(`\n════ ${f} ════`);
    console.log(`  ✅ Correcciones (${applied.length}):`);
    applied.slice(0, 30).forEach(a => console.log(`     · ${a}`));
    if (applied.length > 30) console.log(`     … (+${applied.length - 30})`);
    totalApplied += applied.length;
    if (flagged.length) {
      console.log(`  ⚠️  Ambigüedades (${flagged.length}) — revisar manualmente`);
      totalFlagged += flagged.length;
    }
  }

  console.log(`\n──── RESUMEN ${DRY ? '(DRY RUN)' : ''} ────`);
  console.log(`Correcciones aplicadas : ${totalApplied}`);
  console.log(`Ambigüedades a revisar : ${totalFlagged}`);
  console.log('🔒 Líneas con image:/cover:/imageAlt: PROTEGIDAS (no se tocaron).');
})();