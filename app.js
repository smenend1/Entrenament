const libraries = {
  warmup: [
    {
      name: 'Activació + mobilitat amb pilota',
      type: 'inici',
      minutes: 10,
      material: '1 pilota per jugador/a, 6 cons.',
      description: 'Entrada progressiva: bot suau, canvis de mà, mobilitat de turmells, malucs, espatlles i final amb entrades sense oposició.',
      coaching: 'Control postural, cap amunt i ritme progressiu.',
      diagram: 'warmup'
    }
  ],
  coolDown: [
    {
      name: 'Tornada a la calma i estiraments',
      type: 'final',
      minutes: 10,
      material: 'Esterilles opcionals, aigua.',
      description: 'Respiració, estiraments de bessons, quàdriceps, isquios, glutis, esquena i espatlles. Tancament amb 2 idees clau de la sessió.',
      coaching: 'Sense rebots. Mantenir cada posició 20-25 segons.',
      diagram: 'cooldown'
    }
  ],
  forca: [
    {
      name: 'Circuit de força funcional',
      minutes: 15,
      material: 'Cons, gomes elàstiques opcionals, bancs o línies de pista.',
      description: '4 estacions: esquats, planxa amb toc d’espatlla, salts laterals i desplaçament defensiu amb frenada.',
      coaching: 'Prioritza tècnica abans que velocitat. Genolls alineats i aterratges suaus.',
      diagram: 'stations'
    },
    {
      name: 'Contacte i equilibri en finalització',
      minutes: 15,
      material: 'Pilotes, cons i un escut de contacte opcional.',
      description: 'Sortida des de 45°, contacte controlat abans de la finalització i rebot propi.',
      coaching: 'Protegir pilota, acabar fort i caure equilibrat.',
      diagram: 'finish'
    }
  ],
  velocitat: [
    {
      name: 'Sprints curts amb presa de decisió',
      minutes: 15,
      material: '8 cons, pilotes, petos de dos colors.',
      description: 'Sortides de 5-10 m. L’entrenador/a indica color o mà de bot i el jugador/a reacciona abans d’atacar cistella.',
      coaching: 'Primer pas explosiu, mirada alta i frenada en dos temps.',
      diagram: 'sprint'
    },
    {
      name: 'Contraatac 2 carrils',
      minutes: 15,
      material: 'Pilotes i cons per marcar carrils.',
      description: 'Parelles surten en transició. Passada llarga, ocupació de carrils i finalització ràpida alternant costat.',
      coaching: 'Córrer oberts, passar per davant i finalitzar sense bot extra.',
      diagram: 'lanes'
    }
  ],
  defensa: [
    {
      name: '1x1 defensa de pilota',
      minutes: 15,
      material: 'Pilotes, cons, petos.',
      description: 'Atacant intenta superar en espai reduït. Defensa treballa angle, distància i mans actives sense fer falta.',
      coaching: 'Pit davant pilota, passos curts i orientar cap a banda.',
      diagram: 'defense1'
    },
    {
      name: 'Ajuda i recuperació',
      minutes: 15,
      material: 'Pilotes, 4 cons, petos.',
      description: 'Defensor/a salta a l’ajuda quan la pilota penetra i recupera al seu atacant després de la passada.',
      coaching: 'Comunicar “ajuda”, tancar línia de penetració i recuperar amb control.',
      diagram: 'help'
    }
  ],
  '3x3': [
    {
      name: '3x3 ocupació d’espais',
      minutes: 15,
      material: 'Pilota, petos, cons per delimitar mitja pista.',
      description: 'Joc reduït amb norma: després de passar, cal tallar o reemplaçar. Punt extra si hi ha porta enrere.',
      coaching: 'Amplitud, timing de tall i lectura del defensor.',
      diagram: 'three'
    },
    {
      name: '3x3 amb bloqueig directe',
      minutes: 15,
      material: 'Pilota, petos.',
      description: 'Situació de bloqueig directe central o lateral. L’atac decideix: penetrar, passar al continuador o invertir.',
      coaching: 'Angle del bloqueig, separar-se després del contacte i defensa comunicativa.',
      diagram: 'pick'
    }
  ]
};

const adjustments = {
  mini: 'Redueix files llargues, usa reptes curts i reforç positiu constant.',
  infantil: 'Combina joc i correcció tècnica. Introducció progressiva de normes tàctiques.',
  cadet: 'Augmenta exigència física i presa de decisions sota pressió.',
  junior: 'Treballa ritme competitiu, detalls tàctics i intensitat sostinguda.'
};

const levelNotes = {
  iniciacio: 'Objectiu: entendre consignes simples, tècnica bàsica i participació alta.',
  mitja: 'Objectiu: consolidar hàbits, afegir oposició i millorar lectures.',
  avancat: 'Objectiu: ritme alt, decisions ràpides i transferència directa al partit.'
};

function courtSvg(kind) {
  const base = `<svg viewBox="0 0 300 190" role="img" aria-label="Gràfic de l'exercici">
    <rect x="5" y="5" width="290" height="180" rx="10" fill="#fff7ed" stroke="#fb923c" stroke-width="3"/>
    <line x1="150" y1="5" x2="150" y2="185" stroke="#fdba74" stroke-width="2"/>
    <circle cx="150" cy="95" r="25" fill="none" stroke="#fdba74" stroke-width="2"/>
    <rect x="5" y="55" width="48" height="80" fill="none" stroke="#fdba74" stroke-width="2"/>
    <rect x="247" y="55" width="48" height="80" fill="none" stroke="#fdba74" stroke-width="2"/>
    <circle cx="35" cy="95" r="5" fill="#111827"/><circle cx="265" cy="95" r="5" fill="#111827"/>`;
  const end = `</svg>`;
  const shapes = {
    warmup: `<path d="M40 160 C95 110 80 60 145 45 C205 30 240 65 250 120" fill="none" stroke="#f97316" stroke-width="5" stroke-linecap="round"/><circle cx="40" cy="160" r="9" fill="#2563eb"/><circle cx="250" cy="120" r="9" fill="#16a34a"/>`,
    cooldown: `<circle cx="95" cy="95" r="9" fill="#2563eb"/><circle cx="130" cy="95" r="9" fill="#2563eb"/><circle cx="165" cy="95" r="9" fill="#2563eb"/><circle cx="200" cy="95" r="9" fill="#2563eb"/><path d="M80 135 H220" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>`,
    stations: `<rect x="60" y="45" width="42" height="32" rx="6" fill="#fed7aa" stroke="#f97316"/><rect x="198" y="45" width="42" height="32" rx="6" fill="#fed7aa" stroke="#f97316"/><rect x="60" y="118" width="42" height="32" rx="6" fill="#fed7aa" stroke="#f97316"/><rect x="198" y="118" width="42" height="32" rx="6" fill="#fed7aa" stroke="#f97316"/><path d="M105 60 H194 M220 80 V114 M195 135 H106 M80 114 V82" stroke="#111827" stroke-width="4" fill="none"/>`,
    finish: `<circle cx="82" cy="50" r="9" fill="#2563eb"/><path d="M88 55 C130 75 150 95 250 95" stroke="#f97316" stroke-width="5" fill="none"/><circle cx="200" cy="95" r="10" fill="#ef4444"/>`,
    sprint: `<circle cx="60" cy="145" r="9" fill="#2563eb"/><path d="M70 140 L225 55" stroke="#f97316" stroke-width="5"/><polygon points="225,55 210,55 219,68" fill="#f97316"/><circle cx="225" cy="55" r="9" fill="#16a34a"/>`,
    lanes: `<path d="M45 55 H250" stroke="#f97316" stroke-width="5"/><path d="M45 135 H250" stroke="#f97316" stroke-width="5"/><circle cx="65" cy="55" r="9" fill="#2563eb"/><circle cx="65" cy="135" r="9" fill="#2563eb"/><circle cx="245" cy="95" r="9" fill="#16a34a"/>`,
    defense1: `<circle cx="125" cy="95" r="9" fill="#2563eb"/><circle cx="145" cy="95" r="9" fill="#ef4444"/><path d="M125 95 C165 60 205 75 235 95" stroke="#f97316" stroke-width="5" fill="none"/><path d="M145 95 C175 105 205 105 230 95" stroke="#111827" stroke-width="4" fill="none"/>`,
    help: `<circle cx="95" cy="60" r="9" fill="#2563eb"/><circle cx="205" cy="60" r="9" fill="#2563eb"/><circle cx="150" cy="130" r="9" fill="#ef4444"/><path d="M205 60 L160 120" stroke="#111827" stroke-width="4"/><path d="M160 120 L95 60" stroke="#f97316" stroke-width="5"/>`,
    three: `<circle cx="95" cy="65" r="9" fill="#2563eb"/><circle cx="95" cy="125" r="9" fill="#2563eb"/><circle cx="205" cy="95" r="9" fill="#2563eb"/><path d="M95 65 L205 95 L95 125" stroke="#f97316" stroke-width="4" fill="none"/><path d="M95 125 C135 145 175 135 205 95" stroke="#111827" stroke-width="3" fill="none"/>`,
    pick: `<circle cx="125" cy="105" r="9" fill="#2563eb"/><circle cx="155" cy="105" r="9" fill="#2563eb"/><circle cx="175" cy="85" r="9" fill="#ef4444"/><path d="M125 105 C150 70 205 65 245 95" stroke="#f97316" stroke-width="5" fill="none"/><path d="M155 105 C170 125 200 130 225 120" stroke="#111827" stroke-width="4" fill="none"/>`
  };
  return base + (shapes[kind] || shapes.warmup) + end;
}

function buildSession() {
  const age = document.getElementById('age').value;
  const level = document.getElementById('level').value;
  const selected = [...document.querySelectorAll('input[name="exerciseType"]:checked')].map(i => i.value);
  const types = selected.length ? selected : ['defensa', 'velocitat'];
  const core = [];
  let index = 0;
  while (core.reduce((sum, item) => sum + item.minutes, 0) < 70) {
    const type = types[index % types.length];
    const option = libraries[type][Math.floor(index / types.length) % libraries[type].length];
    core.push({ ...option, type });
    index++;
  }
  const current = core.reduce((sum, item) => sum + item.minutes, 0);
  if (current > 70) core[core.length - 1].minutes -= current - 70;
  return [...libraries.warmup, ...core, ...libraries.coolDown].map((item, i) => ({ ...item, order: i + 1, age, level }));
}

function render() {
  const session = buildSession();
  const ageLabel = document.getElementById('age').selectedOptions[0].text;
  const levelLabel = document.getElementById('level').selectedOptions[0].text;
  const types = [...document.querySelectorAll('input[name="exerciseType"]:checked')].map(i => i.parentElement.textContent.trim());
  document.getElementById('sessionTitle').textContent = `Sessió de 90 min · ${levelLabel}`;
  document.getElementById('summary').innerHTML = `
    <div><span>Edat</span><strong>${ageLabel}</strong></div>
    <div><span>Nivell</span><strong>${levelLabel}</strong></div>
    <div><span>Objectius</span><strong>${types.length ? types.join(', ') : 'Defensa, velocitat'}</strong></div>
    <div><span>Durada</span><strong>90 min</strong></div>
  `;
  const timeline = document.getElementById('timeline');
  const template = document.getElementById('exerciseCardTemplate');
  timeline.innerHTML = '';
  session.forEach(item => {
    const node = template.content.cloneNode(true);
    node.querySelector('.duration').innerHTML = `${item.minutes}<br>min`;
    node.querySelector('h3').innerHTML = `<span class="badge">${item.order}</span> ${item.name}`;
    node.querySelector('.description').textContent = item.description;
    node.querySelector('.material').innerHTML = `<strong>Material:</strong> ${item.material}`;
    node.querySelector('.coaching').innerHTML = `<strong>Adaptació:</strong> ${adjustments[item.age]} ${levelNotes[item.level]}`;
    node.querySelector('.court-wrap').innerHTML = courtSvg(item.diagram);
    timeline.appendChild(node);
  });
}

document.getElementById('trainingForm').addEventListener('submit', event => {
  event.preventDefault();
  render();
});
document.querySelectorAll('select, input[type="checkbox"]').forEach(el => el.addEventListener('change', render));
document.getElementById('printBtn').addEventListener('click', () => window.print());

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
render();
