const libraries = {
  warmup: [
    {
      name: 'Activació + mobilitat amb pilota',
      type: 'inici',
      minutes: 10,
      material: '1 pilota per jugador/a, 8 cons.',
      description: 'Bot suau, canvis de mà, mobilitat articular i entrades progressives. Acaba amb 3 acceleracions curtes sense oposició.',
      coaching: 'Ritme de menys a més, cap amunt i bona postura.',
      diagram: 'warmup'
    },
    {
      name: 'Roda d’entrades i coordinació',
      type: 'inici',
      minutes: 10,
      material: 'Pilotes, 6 cons i dues files.',
      description: 'Dues files treballen entrada, rebot i canvi de fila. Cada volta afegeix una consigna: mà feble, canvi de ritme o parada en dos temps.',
      coaching: 'Prioritza qualitat de peus i control de pilota abans d’accelerar.',
      diagram: 'lanes'
    },
    {
      name: 'Joc d’activació per portes',
      type: 'inici',
      minutes: 10,
      material: 'Pilotes i 10 cons per fer portes.',
      description: 'Per parelles, superar portes amb bot, passada i recepció. Cada 90 segons canvia la norma: només mà feble, canvi de direcció o passada després de finta.',
      coaching: 'Moltes repeticions, cues curtes i comunicació constant.',
      diagram: 'gates'
    }
  ],
  coolDown: [
    {
      name: 'Tornada a la calma i estiraments',
      type: 'final',
      minutes: 10,
      material: 'Aigua, espai lliure i esterilles opcionals.',
      description: 'Respiració, caminar suau i estiraments de bessons, quàdriceps, isquios, glutis, esquena i espatlles. Tancament amb una idea tècnica i una actitudinal.',
      coaching: 'Sense rebots. Mantenir cada posició 20-25 segons.',
      diagram: 'cooldown'
    },
    {
      name: 'Recuperació activa + flexibilitat',
      type: 'final',
      minutes: 10,
      material: 'Aigua i zona tranquil·la.',
      description: 'Cursa molt suau, mobilitat de maluc i turmell, estiraments guiats i revisió ràpida dels objectius assolits.',
      coaching: 'Baixar pulsacions, hidratar i acabar amb consignes clares.',
      diagram: 'cooldown'
    }
  ],
  forca: [
    {
      name: 'Circuit força-potència 6 postes',
      minutes: 12,
      material: '6 cons, bancs baixos opcionals, gomes i cronòmetre.',
      description: '3 voltes: salts a peus junts, flexions, planxa, salt lateral, braç de carrera i esquat amb parada defensiva. 30 segons de treball i 30 de canvi.',
      coaching: 'Aterratges suaus, genolls alineats i tronc estable.',
      diagram: 'stations'
    },
    {
      name: 'Finalització amb contacte i equilibri',
      minutes: 12,
      material: 'Pilotes, cons i escut de contacte opcional.',
      description: 'Sortida des de 45°, contacte controlat abans de la finalització i rebot propi. Canvia costat i mà de finalització.',
      coaching: 'Protegir pilota, acabar fort i caure equilibrat.',
      diagram: 'finish'
    },
    {
      name: 'Rebot, bloqueig i segon salt',
      minutes: 12,
      material: 'Pilotes, petos i 4 cons.',
      description: 'Per trios: tir, bloqueig de rebot, captura i segon salt per finalitzar. Rota tirador, defensor i rebotador.',
      coaching: 'Contacte legal, braços forts i primer pas cap a la pilota.',
      diagram: 'rebound'
    },
    {
      name: 'Lluita controlada per posició',
      minutes: 12,
      material: 'Cons per delimitar zona i pilotes.',
      description: '1x1 sense bot dins d’un espai petit. L’atacant intenta rebre o guanyar posició; el defensor treballa cos, peus i anticipació.',
      coaching: 'Contacte segur, centre de gravetat baix i mans actives.',
      diagram: 'postfight'
    },
    {
      name: 'Tren inferior amb desplaçament defensiu',
      minutes: 12,
      material: 'Cons i línies de pista.',
      description: 'Seqüència: esquat, lliscament defensiu, canvi de direcció, frenada i sortida curta. Treballa per parelles amb relleus.',
      coaching: 'No creuar peus en defensa i mantenir espatlles estables.',
      diagram: 'zigzag'
    },
    {
      name: 'Carrera resistida per parelles',
      minutes: 12,
      material: 'Gomes elàstiques o tovalloles, cons.',
      description: 'Un jugador ofereix resistència lleugera mentre l’altre accelera 6-8 metres. Després finalitza amb entrada o parada i tir curt.',
      coaching: 'Resistència moderada, tècnica neta i recuperació suficient.',
      diagram: 'sprint'
    },
    {
      name: 'Força de core amb passada',
      minutes: 12,
      material: 'Pilotes i esterilles opcionals.',
      description: 'Parelles en planxa o posició asseguda. Passades de pit, picades i laterals mantenint estabilitat. Cada sèrie acaba amb sortida ràpida a con.',
      coaching: 'Maluc estable i passades precises, no només força.',
      diagram: 'passing'
    }
  ],
  velocitat: [
    {
      name: 'Número i corre',
      minutes: 12,
      material: '4 cons numerats i pilotes opcionals.',
      description: 'Els jugadors reaccionen al número que diu l’entrenador/a i han d’arribar al con correcte abans del company. Afegeix bot en la segona ronda.',
      coaching: 'Sortida baixa, primer pas explosiu i frenada segura.',
      diagram: 'cones4'
    },
    {
      name: 'Sprints curts amb presa de decisió',
      minutes: 12,
      material: '8 cons, pilotes i petos de dos colors.',
      description: 'Sortides de 5-10 metres. El color o senyal marca si cal atacar cistella, passar o canviar de mà abans de finalitzar.',
      coaching: 'Mirada alta, reacció immediata i control en l’última passa.',
      diagram: 'sprint'
    },
    {
      name: 'Contraatac per 3 carrils',
      minutes: 12,
      material: 'Pilotes i cons per marcar carrils.',
      description: 'Grups de 3 surten a pista sencera: bot central, dos carrils oberts i finalització ràpida. Després intercanvien rols.',
      coaching: 'Córrer oberts, passar per davant i ocupar cantonades.',
      diagram: 'lanes3'
    },
    {
      name: '1 contra 2 i retorn 2 contra 1',
      minutes: 12,
      material: 'Pilotes, petos i pista sencera o mitja.',
      description: 'Un atacant surt amb avantatge. Dos defensors el persegueixen. Després de tir o recuperació, els dos defensors ataquen 2x1 en sentit contrari.',
      coaching: 'Decidir ràpid: finalitzar, parar o passar. Defensa sense falta.',
      diagram: 'transition'
    },
    {
      name: 'Canvis de ritme en ziga-zaga',
      minutes: 12,
      material: 'Cons i pilotes.',
      description: 'Circuit de bot amb canvis de ritme, frenada i arrencada. Cada jugador rep una consigna final: entrada, tir curt o passada exterior.',
      coaching: 'Accelerar després del canvi, no abans. Pilota protegida.',
      diagram: 'zigzag'
    },
    {
      name: 'Persecució per equips',
      minutes: 12,
      material: '4 zones marcades amb cons i petos.',
      description: 'Quatre equips surten des de cantonades. Han de capturar el grup del davant sense trencar la fila ni perdre distàncies.',
      coaching: 'Coordinació, ritme compartit i comunicació.',
      diagram: 'chase'
    },
    {
      name: 'Velocitat de reacció amb passada llarga',
      minutes: 12,
      material: 'Pilotes i 6 cons.',
      description: 'A la senyal, receptor surt a l’espai, rep passada llarga i finalitza. El passador corre al rebot i canvien rols.',
      coaching: 'Sortir en el moment correcte i passar a l’avantatge.',
      diagram: 'longpass'
    }
  ],
  defensa: [
    {
      name: '1x1 defensa de pilota en espai reduït',
      minutes: 12,
      material: 'Pilotes, cons i petos.',
      description: 'L’atacant intenta superar en un carril delimitat. Defensa treballa angle, distància i mans actives sense fer falta.',
      coaching: 'Pit davant pilota, passos curts i orientar cap a banda.',
      diagram: 'defense1'
    },
    {
      name: 'Ajuda i recuperació',
      minutes: 12,
      material: 'Pilotes, 4 cons i petos.',
      description: 'El defensor salta a l’ajuda quan la pilota penetra i recupera al seu atacant després de la passada.',
      coaching: 'Cridar “ajuda”, tancar línia de penetració i recuperar equilibrat.',
      diagram: 'help'
    },
    {
      name: 'Close-out i contenció',
      minutes: 12,
      material: 'Pilotes, cons i línia de tres.',
      description: 'Defensor surt des de la zona fins a l’exterior, frena amb passos curts i conté un bot de l’atacant.',
      coaching: 'Arribar ràpid, frenar baix i no saltar a la finta.',
      diagram: 'closeout'
    },
    {
      name: 'Defensa del bloqueig directe',
      minutes: 12,
      material: 'Pilotes i petos.',
      description: 'Situació 2x2: bloqueig directe lateral. Treballa passar per sobre, canvi o flash segons nivell.',
      coaching: 'Comunicar abans del contacte i recuperar rols.',
      diagram: 'pickdef'
    },
    {
      name: 'Rebot defensiu i primera passada',
      minutes: 12,
      material: 'Pilotes, petos i dues files.',
      description: 'Tir exterior, bloqueig de rebot, captura i primera passada al base o sortida per banda.',
      coaching: 'Veure jugador, contactar, anar a pilota i obrir línia de sortida.',
      diagram: 'rebound'
    },
    {
      name: 'Shell drill 4x4',
      minutes: 12,
      material: 'Pilota i petos.',
      description: 'Quatre atacants oberts mouen pilota. La defensa ajusta posició: pilota, primera ajuda i costat feble.',
      coaching: 'Parlar cada passada i mantenir triangles defensius.',
      diagram: 'shell'
    },
    {
      name: 'Balance defensiu després de tir',
      minutes: 12,
      material: 'Pilotes i petos.',
      description: 'Després d’un tir, dos jugadors van al rebot i dos baixen a protegir transició. Si defensa recupera, surt contraatac.',
      coaching: 'Responsabilitats clares: rebot, seguretat i comunicació.',
      diagram: 'balance'
    }
  ],
  '3x3': [
    {
      name: '3x3 passar i tallar',
      minutes: 12,
      material: 'Pilota, petos i mitja pista.',
      description: 'Norma: després de passar, cal tallar a cistella o reemplaçar. Punt extra si es genera porta enrere.',
      coaching: 'Amplitud, timing i lectura del defensor.',
      diagram: 'three'
    },
    {
      name: '3x3 amb bloqueig directe',
      minutes: 12,
      material: 'Pilota i petos.',
      description: 'Bloqueig directe central o lateral. L’atac decideix: penetrar, passar al continuador o invertir.',
      coaching: 'Angle del bloqueig, separar-se i defensa comunicativa.',
      diagram: 'pick'
    },
    {
      name: '3x3 ocupació de cantonades',
      minutes: 12,
      material: 'Pilota, petos i 4 cons.',
      description: 'Un jugador amb pilota a capçalera i dos a cantonades. Cada penetració obliga a reemplaçar i oferir línia de passada.',
      coaching: 'Separació, cantonada ocupada i decisió en dos bots.',
      diagram: 'corners'
    },
    {
      name: '3x3 contraatac i tràiler',
      minutes: 12,
      material: 'Pilotes, petos i pista sencera.',
      description: 'Tres atacants surten en transició. El tercer jugador arriba com a tràiler per tirar, passar o bloquejar.',
      coaching: 'Carrer central, carrils oberts i lectura del primer avantatge.',
      diagram: 'lanes3'
    },
    {
      name: '3x3 amb norma de 10 segons',
      minutes: 12,
      material: 'Pilota, petos i cronòmetre.',
      description: 'Partides curtes. L’atac té 10 segons per crear un tir clar. Rota defensa si recupera o força mal tir.',
      coaching: 'Decisions ràpides sense precipitar la primera opció dolenta.',
      diagram: 'three'
    },
    {
      name: '3x3 defensa d’ajudes',
      minutes: 12,
      material: 'Pilota, petos i cons.',
      description: 'L’atac juga lliure però cada penetració puntua doble si la defensa no fa ajuda i recuperació correcta.',
      coaching: 'Costat feble atent, parlar i tancar rebot.',
      diagram: 'help'
    },
    {
      name: '3x3 bloqueig indirecte i sortida',
      minutes: 12,
      material: 'Pilota i petos.',
      description: 'Un jugador bloqueja indirecte per alliberar un tirador. Després es juga continuïtat amb tall o reemplaçament.',
      coaching: 'Esperar el bloqueig, sortir enganxat i llegir defensa.',
      diagram: 'offball'
    }
  ]
};

const ageLabels = {
  mini: 'Mini: 8-10 anys',
  infantil: 'Infantil: 11-13 anys',
  cadet: 'Cadet: 14-16 anys',
  junior: 'Júnior/Sènior: +17 anys'
};

const adjustments = {
  mini: 'Redueix files llargues, més joc i sèries de 30-45 segons.',
  infantil: 'Combina joc i correcció tècnica. Normes tàctiques simples i rotacions ràpides.',
  cadet: 'Augmenta exigència física i presa de decisions sota pressió.',
  junior: 'Treballa ritme competitiu, detalls tàctics i intensitat sostinguda.'
};

const levelNotes = {
  iniciacio: 'Objectiu: entendre consignes simples, tècnica bàsica i participació alta.',
  mitja: 'Objectiu: consolidar hàbits, afegir oposició i millorar lectures.',
  avancat: 'Objectiu: ritme alt, decisions ràpides i transferència directa al partit.'
};

let generation = 0;

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
    lanes3: `<path d="M45 45 H250" stroke="#f97316" stroke-width="5"/><path d="M45 95 H250" stroke="#f97316" stroke-width="5"/><path d="M45 145 H250" stroke="#f97316" stroke-width="5"/><circle cx="60" cy="45" r="8" fill="#2563eb"/><circle cx="60" cy="95" r="8" fill="#2563eb"/><circle cx="60" cy="145" r="8" fill="#2563eb"/>`,
    defense1: `<circle cx="125" cy="95" r="9" fill="#2563eb"/><circle cx="145" cy="95" r="9" fill="#ef4444"/><path d="M125 95 C165 60 205 75 235 95" stroke="#f97316" stroke-width="5" fill="none"/><path d="M145 95 C175 105 205 105 230 95" stroke="#111827" stroke-width="4" fill="none"/>`,
    help: `<circle cx="95" cy="60" r="9" fill="#2563eb"/><circle cx="205" cy="60" r="9" fill="#2563eb"/><circle cx="150" cy="130" r="9" fill="#ef4444"/><path d="M205 60 L160 120" stroke="#111827" stroke-width="4"/><path d="M160 120 L95 60" stroke="#f97316" stroke-width="5"/>`,
    three: `<circle cx="95" cy="65" r="9" fill="#2563eb"/><circle cx="95" cy="125" r="9" fill="#2563eb"/><circle cx="205" cy="95" r="9" fill="#2563eb"/><path d="M95 65 L205 95 L95 125" stroke="#f97316" stroke-width="4" fill="none"/><path d="M95 125 C135 145 175 135 205 95" stroke="#111827" stroke-width="3" fill="none"/>`,
    pick: `<circle cx="125" cy="105" r="9" fill="#2563eb"/><circle cx="155" cy="105" r="9" fill="#2563eb"/><circle cx="175" cy="85" r="9" fill="#ef4444"/><path d="M125 105 C150 70 205 65 245 95" stroke="#f97316" stroke-width="5" fill="none"/><path d="M155 105 C170 125 200 130 225 120" stroke="#111827" stroke-width="4" fill="none"/>`,
    rebound: `<circle cx="220" cy="75" r="8" fill="#2563eb"/><circle cx="245" cy="95" r="9" fill="#ef4444"/><path d="M220 75 L260 95" stroke="#f97316" stroke-width="4"/><path d="M245 95 L210 125" stroke="#111827" stroke-width="4"/><circle cx="210" cy="125" r="9" fill="#16a34a"/>`,
    postfight: `<rect x="205" y="65" width="45" height="60" rx="8" fill="none" stroke="#f97316" stroke-width="4"/><circle cx="220" cy="95" r="9" fill="#2563eb"/><circle cx="238" cy="95" r="9" fill="#ef4444"/>`,
    zigzag: `<path d="M60 150 L105 115 L60 80 L105 45 L210 45" stroke="#f97316" stroke-width="5" fill="none"/><circle cx="60" cy="150" r="9" fill="#2563eb"/><circle cx="105" cy="115" r="6" fill="#111827"/><circle cx="60" cy="80" r="6" fill="#111827"/><circle cx="105" cy="45" r="6" fill="#111827"/>`,
    passing: `<circle cx="100" cy="95" r="9" fill="#2563eb"/><circle cx="200" cy="95" r="9" fill="#2563eb"/><path d="M110 95 C140 75 160 75 190 95" stroke="#f97316" stroke-width="4" fill="none"/><path d="M190 105 C160 125 140 125 110 105" stroke="#111827" stroke-width="3" fill="none"/>`,
    cones4: `<circle cx="75" cy="55" r="8" fill="#111827"/><circle cx="225" cy="55" r="8" fill="#111827"/><circle cx="75" cy="145" r="8" fill="#111827"/><circle cx="225" cy="145" r="8" fill="#111827"/><circle cx="150" cy="95" r="9" fill="#2563eb"/><path d="M150 95 L225 55" stroke="#f97316" stroke-width="5"/>`,
    transition: `<circle cx="55" cy="95" r="9" fill="#2563eb"/><circle cx="85" cy="120" r="9" fill="#ef4444"/><circle cx="85" cy="70" r="9" fill="#ef4444"/><path d="M55 95 C120 70 180 70 245 95" stroke="#f97316" stroke-width="5" fill="none"/>`,
    chase: `<circle cx="55" cy="45" r="8" fill="#2563eb"/><circle cx="245" cy="45" r="8" fill="#16a34a"/><circle cx="245" cy="145" r="8" fill="#ef4444"/><circle cx="55" cy="145" r="8" fill="#f59e0b"/><path d="M60 45 H240 V145 H60 Z" stroke="#f97316" stroke-width="4" fill="none"/>`,
    longpass: `<circle cx="55" cy="130" r="9" fill="#2563eb"/><circle cx="85" cy="60" r="9" fill="#16a34a"/><path d="M60 128 C120 45 190 45 245 90" stroke="#f97316" stroke-width="4" fill="none"/><path d="M85 60 C140 65 190 75 245 90" stroke="#111827" stroke-width="3" fill="none"/>`,
    closeout: `<circle cx="145" cy="140" r="9" fill="#ef4444"/><circle cx="220" cy="75" r="9" fill="#2563eb"/><path d="M145 140 L220 75" stroke="#111827" stroke-width="5"/><path d="M220 75 C240 95 240 120 220 140" stroke="#f97316" stroke-width="4" fill="none"/>`,
    pickdef: `<circle cx="135" cy="105" r="9" fill="#2563eb"/><circle cx="160" cy="105" r="9" fill="#2563eb"/><circle cx="145" cy="85" r="9" fill="#ef4444"/><circle cx="180" cy="85" r="9" fill="#ef4444"/><path d="M145 85 C165 65 215 70 245 95" stroke="#111827" stroke-width="4" fill="none"/>`,
    shell: `<circle cx="85" cy="55" r="8" fill="#2563eb"/><circle cx="215" cy="55" r="8" fill="#2563eb"/><circle cx="85" cy="135" r="8" fill="#2563eb"/><circle cx="215" cy="135" r="8" fill="#2563eb"/><path d="M85 55 H215 V135 H85 Z" stroke="#f97316" stroke-width="4" fill="none"/><circle cx="120" cy="90" r="7" fill="#ef4444"/><circle cx="180" cy="90" r="7" fill="#ef4444"/>`,
    balance: `<circle cx="225" cy="95" r="9" fill="#2563eb"/><circle cx="200" cy="75" r="8" fill="#ef4444"/><circle cx="200" cy="115" r="8" fill="#ef4444"/><path d="M200 75 L80 55 M200 115 L80 135" stroke="#111827" stroke-width="4"/><path d="M225 95 L70 95" stroke="#f97316" stroke-width="4"/>`,
    corners: `<circle cx="150" cy="55" r="9" fill="#2563eb"/><circle cx="65" cy="150" r="9" fill="#2563eb"/><circle cx="235" cy="150" r="9" fill="#2563eb"/><path d="M150 55 L65 150 M150 55 L235 150" stroke="#f97316" stroke-width="4"/>`,
    offball: `<circle cx="90" cy="105" r="9" fill="#2563eb"/><circle cx="150" cy="95" r="9" fill="#2563eb"/><circle cx="205" cy="105" r="9" fill="#2563eb"/><path d="M90 105 C120 70 175 70 205 105" stroke="#f97316" stroke-width="4" fill="none"/><path d="M150 95 V125" stroke="#111827" stroke-width="5"/>`,
    gates: `<circle cx="65" cy="55" r="5" fill="#111827"/><circle cx="90" cy="55" r="5" fill="#111827"/><circle cx="205" cy="95" r="5" fill="#111827"/><circle cx="230" cy="95" r="5" fill="#111827"/><circle cx="115" cy="145" r="5" fill="#111827"/><circle cx="140" cy="145" r="5" fill="#111827"/><path d="M40 150 C100 120 80 60 210 95" stroke="#f97316" stroke-width="5" fill="none"/>`
  };
  return base + (shapes[kind] || shapes.warmup) + end;
}

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function selectedTypes() {
  return [...document.querySelectorAll('input[name="exerciseType"]:checked')].map(i => i.value);
}

function pickCore(types) {
  const durationPattern = [12, 12, 12, 12, 11, 11];
  const pools = Object.fromEntries(types.map(type => [type, shuffle(libraries[type])]));
  const usedNames = new Set();
  const core = [];

  for (let slot = 0; slot < durationPattern.length; slot++) {
    const preferredTypes = shuffle(types);
    const type = preferredTypes.find(t => pools[t].some(ex => !usedNames.has(ex.name))) || types[slot % types.length];
    const exercise = pools[type].find(ex => !usedNames.has(ex.name));
    if (!exercise) continue;
    usedNames.add(exercise.name);
    core.push({ ...exercise, type, minutes: durationPattern[slot] });
  }

  return core;
}

function buildSession() {
  const age = document.getElementById('age').value;
  const level = document.getElementById('level').value;
  const types = selectedTypes().length ? selectedTypes() : ['defensa', 'velocitat'];
  const warmup = { ...shuffle(libraries.warmup)[0], age, level, minutes: 10 };
  const cooldown = { ...shuffle(libraries.coolDown)[0], age, level, minutes: 10 };
  const core = pickCore(types).map(item => ({ ...item, age, level }));
  return [warmup, ...core, cooldown].map((item, i) => ({ ...item, order: i + 1 }));
}

function render() {
  const session = buildSession();
  const ageSelect = document.getElementById('age');
  const levelSelect = document.getElementById('level');
  const ageLabel = ageSelect.selectedOptions[0].text;
  const levelLabel = levelSelect.selectedOptions[0].text;
  const checked = [...document.querySelectorAll('input[name="exerciseType"]:checked')];
  const types = checked.map(i => i.parentElement.textContent.trim());
  const total = session.reduce((sum, item) => sum + item.minutes, 0);
  document.getElementById('sessionTitle').textContent = `Sessió de ${total} min · ${levelLabel}`;
  document.getElementById('summary').innerHTML = `
    <div><span>Edat</span><strong>${ageLabel}</strong></div>
    <div><span>Nivell</span><strong>${levelLabel}</strong></div>
    <div><span>Objectius</span><strong>${types.length ? types.join(', ') : 'Defensa, velocitat'}</strong></div>
    <div><span>Durada</span><strong>${total} min</strong></div>
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
  generation += 1;
  render();
});

document.querySelectorAll('select, input[type="checkbox"]').forEach(el => el.addEventListener('change', () => {
  generation += 1;
  render();
}));

document.getElementById('printBtn').addEventListener('click', () => window.print());

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}

render();
