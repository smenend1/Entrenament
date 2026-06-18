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
    },
    {
      name: 'Salt ofensiu i estabilitat en caiguda',
      minutes: 12,
      material: 'Pilotes, 4 cons i línia de zona.',
      description: 'Treball de salt vertical després de recepció, contacte lleuger i caiguda estable. Finalitza amb tir curt o palmeig controlat.',
      coaching: 'Caure en dos peus, protegir genolls i controlar el tronc abans de córrer.',
      diagram: 'rebound'
    },
    {
      name: 'Circuit físic-tècnic individual',
      minutes: 12,
      material: 'Pilota per jugador/a, cons, escala de coordinació opcional.',
      description: 'Postes curtes amb bot de protecció, canvi de mà, flexió controlada, arrencada i finalització. Cada posta combina força i tècnica.',
      coaching: 'No sacrificar la tècnica per fer més repeticions.',
      diagram: 'stations'
    },
    {
      name: 'Tracció per guanyar espai sense falta',
      minutes: 12,
      material: 'Cons i petos.',
      description: 'Parelles dins d’un quadrat. Objectiu: guanyar posició amb cos baix, braços legals i desplaçaments curts.',
      coaching: 'Contacte segur, esquena forta i peus actius.',
      diagram: 'postfight'
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
    },
    {
      name: 'Bote de velocitat amb canvi de ritme',
      minutes: 12,
      material: 'Pilota per jugador/a i 8 cons.',
      description: 'Recorregut amb arrencada, canvi de mà, frenada i acceleració. El jugador decideix si acaba amb entrada o parada i tir.',
      coaching: 'Canvi real de velocitat després del gest tècnic.',
      diagram: 'zigzag'
    },
    {
      name: 'Contra transició amb superioritat',
      minutes: 12,
      material: 'Pilotes i petos.',
      description: 'Sortida ràpida 2x1 o 3x2 després de rebot. L’atac ha d’ocupar carrils i decidir abans d’arribar a la zona.',
      coaching: 'Mirada avançada, passada al jugador lliure i finalització simple.',
      diagram: 'transition'
    },
    {
      name: 'Arrencades i parades competitives',
      minutes: 12,
      material: 'Cons, pilotes i cronòmetre.',
      description: 'Sèries de 6-8 metres amb sortida reactiva, parada en un o dos temps i acció tècnica final.',
      coaching: 'Frenar baix i sortir sense passos de més.',
      diagram: 'sprint'
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
    },
    {
      name: 'Defensa zonal 2 contra 2',
      minutes: 12,
      material: 'Pilota, petos i 4 cons per marcar dos quadres.',
      description: 'Dos atacants intenten progressar amb passades entre zones. Els dos defensors protegeixen espai sense creuar-se.',
      coaching: 'Comunicar zona, orientar el bot i tancar línies de passada.',
      diagram: 'shell'
    },
    {
      name: 'Acció defensiva 2 contra 1',
      minutes: 12,
      material: 'Pilota i petos.',
      description: 'En trios, un jugador ataca amb dos possibles suports. Els defensors han de temporitzar, ajudar i recuperar.',
      coaching: 'No regalar la penetració central i decidir quan saltar a l’ajuda.',
      diagram: 'help'
    },
    {
      name: 'Defensa del tall i porta enrere',
      minutes: 12,
      material: 'Pilota, petos i mitja pista.',
      description: 'L’atac busca tall horitzontal o diagonal; la defensa treballa negar línia de passada i recuperar si hi ha porta enrere.',
      coaching: 'Veure pilota i jugador, cos entre atacant i cistella.',
      diagram: 'offball'
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
    },
    {
      name: '3x3 dins-fora i tir exterior',
      minutes: 12,
      material: 'Pilota, petos i cons per marcar cantonades.',
      description: 'Entrada de pilota a zona, sortida cap a exterior i tir o penetració segons ajuda defensiva.',
      coaching: 'Passar fora quan arriba l’ajuda i recol·locar-se després del passada.',
      diagram: 'corners'
    },
    {
      name: '3x3 pick and roll lateral',
      minutes: 12,
      material: 'Pilota i petos.',
      description: 'Bloqueig directe lateral amb tercer jugador en cantonada. Es decideix entre penetrar, continuació o passada exterior.',
      coaching: 'Angle útil del bloqueig i lectura del defensor del costat feble.',
      diagram: 'pick'
    },
    {
      name: '3x3 possessió amb 10 passades',
      minutes: 12,
      material: 'Pilota, petos i mitja pista.',
      description: 'L’atac suma punt si arriba a 10 passades amb mobilitat constant. La defensa puntua si roba o força mala recepció.',
      coaching: 'Donar línies de passada, tallar després de passar i parlar en defensa.',
      diagram: 'three'
    }
  ]
};

// Exercicis afegits a la v4 a partir d'idees generals de guies de treball: transicio/velocitat,
// tir i finalitzacio, defensa/recuperacio, passades/coordinacio, situacions variables,
// i drills com Castillos, Tiro amb pressio, Winchister, 3/4 de pista, 2c2 amb handicap,
// Palomero, Circus i Shell Drill.
Object.assign(libraries, {
  tir: [
    {
      name: 'Tir amb pressio des de diferents angles',
      minutes: 12,
      material: 'Pilotes, 2 cons, 2 defensors i petos.',
      description: 'Un passador activa el tirador i un defensor surt a puntejar des d’un lateral. El tirador ha de rebre, quadrar-se i decidir si tira, fa una finta o ataca un bot.',
      coaching: 'Mecanica estable, peus preparats abans de rebre i lectura del defensor.',
      diagram: 'closeout'
    },
    {
      name: 'Roda de finalitzacions amb decisio',
      minutes: 12,
      material: 'Pilotes, cons i dues files.',
      description: 'Recepcio en carrera i finalitzacio segons senyal: entrada normal, ma feble, parada i tir curt o passada extra al company que arriba.',
      coaching: 'Acabar equilibrat i decidir abans de fer passos de mes.',
      diagram: 'finish'
    },
    {
      name: 'Tir despres de passar i tallar',
      minutes: 12,
      material: 'Pilotes, cons i tres files.',
      description: 'Passada, tall a cistella i reemplaçament. El jugador que rep decideix tir exterior, passada al tall o penetracio curta.',
      coaching: 'Timing del tall, mans preparades i bona orientacio corporal.',
      diagram: 'three'
    },
    {
      name: 'Finalitzacio amb contacte controlat',
      minutes: 12,
      material: 'Pilotes, escut de contacte opcional i cons.',
      description: 'Sortida des de 45 graus, contacte lleuger del defensor o ajudant i finalitzacio protegint pilota. Canvia costat i ma.',
      coaching: 'Cos entre pilota i defensor, mirada al taulell i caiguda segura.',
      diagram: 'finish'
    },
    {
      name: 'Concurs de tir amb rebot ofensiu',
      minutes: 12,
      material: 'Pilotes i petos.',
      description: 'Equips de 3: tir, rebot ofensiu i passada exterior. Puntua el tir anotat i el rebot capturat despres de tir fallat.',
      coaching: 'No mirar el tir parat: carregar rebot i comunicar la sortida.',
      diagram: 'rebound'
    },
    {
      name: 'Tir en transicio amb trailer',
      minutes: 12,
      material: 'Pilotes i pista sencera.',
      description: 'Tres carrils. El jugador central passa a banda i el trailer arriba per rebre a capçalera o continuar cap a aro.',
      coaching: 'Carrils oberts, passada a l’avantatge i seleccio de tir.',
      diagram: 'lanes3'
    }
  ],
  passades: [
    {
      name: 'Passades i coordinacio per portes',
      minutes: 12,
      material: '10 cons, pilotes i petos.',
      description: 'Parelles han de travessar portes amb passada de pit, picada o lateral. Cada porta superada exigeix canvi de ritme i comunicacio verbal.',
      coaching: 'Passar al moviment, orientar cos i demanar la pilota amb objectiu clar.',
      diagram: 'gates'
    },
    {
      name: 'Rondo 4x2 amb sortida rapida',
      minutes: 12,
      material: 'Pilota, 4 cons i petos.',
      description: 'Quatre atacants conserven contra dos defensors. Quan arriben a 8 passades, surten en contraatac curt cap a cistella.',
      coaching: 'Angles de suport, passades tensades i no quedar-se darrere del defensor.',
      diagram: 'shell'
    },
    {
      name: 'Passada llarga i recepcio en carrera',
      minutes: 12,
      material: 'Pilotes, cons i pista sencera.',
      description: 'El receptor arrenca a l’espai i rep passada llarga per finalitzar. El passador segueix per rebot i substitueix el receptor.',
      coaching: 'Passar davant del company, no al cos. Rebre sense perdre velocitat.',
      diagram: 'longpass'
    },
    {
      name: 'Triangle de passades amb tall',
      minutes: 12,
      material: 'Pilota, 3 cons i grups de 3.',
      description: 'Passada, tall i reemplaçament en triangle. A cada volta s’afegeix defensa passiva o activa segons nivell.',
      coaching: 'Desmarcatge abans de rebre, mans visibles i tall profund.',
      diagram: 'three'
    },
    {
      name: 'Passada sota pressio i canvi d’orientacio',
      minutes: 12,
      material: 'Pilotes, petos i mitja pista.',
      description: 'L’atac rep pressio a un costat i ha de trobar la inversio a costat feble amb una passada segura o una passada extra.',
      coaching: 'No botar sense objectiu, protegir pilota i veure el costat feble.',
      diagram: 'corners'
    }
  ],
  bot: [
    {
      name: 'Castells de bot i proteccio',
      minutes: 12,
      material: '4 cons per quadrat, pilota per jugador/a.',
      description: 'Dins d’un quadrat, atacant i defensor boten. L’atacant protegeix la pilota i el defensor intenta tocar-la amb la seva sense llançar-la. Canvi de rols cada minut.',
      coaching: 'Cap amunt, cos baix, canvis de ma i no girar-se d’esquena.',
      diagram: 'postfight'
    },
    {
      name: 'Ziga-zaga de canvis de ma',
      minutes: 12,
      material: 'Pilota per jugador/a i 8 cons.',
      description: 'Recorregut amb canvi per davant, entre cames, revers o esquena segons nivell. Acaba amb entrada o parada i tir.',
      coaching: 'Canvi de ritme real despres del gest i pilota protegida.',
      diagram: 'zigzag'
    },
    {
      name: '1x1 a 3/4 de pista',
      minutes: 12,
      material: 'Pilotes i petos.',
      description: 'L’atacant recull pilota rodada i ataca aro llunya. El defensor pressiona des del primer metre mantenint pit-pilota.',
      coaching: 'Defensa activa, atac vertical i limit de bots si cal pujar dificultat.',
      diagram: 'defense1'
    },
    {
      name: 'Bot amb dues decisions finals',
      minutes: 12,
      material: 'Cons, pilotes i dos senyals de color.',
      description: 'Despres del circuit de bot, el color indica si cal finalitzar, passar a cantonada o frenar per tir curt.',
      coaching: 'Mirada alta abans d’arribar a la decisio.',
      diagram: 'cones4'
    },
    {
      name: 'Proteccio de pilota en espai reduit',
      minutes: 12,
      material: 'Cons, pilotes i cronometre.',
      description: 'Parelles dins d’un carril. L’atacant ha de mantenir pilota viva i avançar; el defensor orienta cap a banda.',
      coaching: 'Bot lluny de la defensa, espatlla protectora i canvis curts.',
      diagram: 'defense1'
    }
  ],
  situacions: [
    {
      name: '2x2 amb handicap i recuperacio',
      minutes: 12,
      material: 'Pilota, petos i mitja pista.',
      description: 'Comença en 2x1. El jugador que tira o perd pilota toca linia de fons abans de recuperar i convertir-ho en 2x2.',
      coaching: 'Aprofitar avantatge temporal i defensa amb fintas per guanyar temps.',
      diagram: 'transition'
    },
    {
      name: 'Palomero 3x2 continu',
      minutes: 12,
      material: 'Pilota, petos i pista sencera.',
      description: 'Situacions constants de 3x2 amb un jugador que s’incorpora com a palomero. En perdre o tirar, canvi immediat de rol atac-defensa.',
      coaching: 'Canvi de xip, balance defensiu i ocupacio rapida de carrils.',
      diagram: 'lanes3'
    },
    {
      name: 'Circus 3x3 comunicacio defensiva',
      minutes: 12,
      material: 'Pilota, petos i mitja pista.',
      description: 'Atacants passen perimetralment mentre defenses ajusten. A la senyal, tots toquen pilota amb entrenador/a i tornen sense emparellar-se amb el mateix atacant.',
      coaching: 'Comunicar, recuperar posicio i defensar jugador nou.',
      diagram: 'three'
    },
    {
      name: 'Winchister: 1x1 encadenat',
      minutes: 12,
      material: 'Pilotes, petos i 5 punts de sortida.',
      description: 'Un defensor encadena diversos close-out i 1x1 curts. L’objectiu es frenar primer i segon bot sense falta.',
      coaching: 'Resistencia mental, primera frenada i verticalitat defensiva.',
      diagram: 'closeout'
    },
    {
      name: '2c0, 2c1 i 2c2 progressiu',
      minutes: 12,
      material: 'Pilota, petos i cons.',
      description: 'La mateixa accio evoluciona: primer sense defensa, despres amb un defensor i finalment 2x2 real. Serveix per ajustar lectures.',
      coaching: 'Progressio clara: tecnica, lectura i competicio.',
      diagram: 'pick'
    },
    {
      name: 'Shell drill amb variants',
      minutes: 12,
      material: 'Pilota i petos.',
      description: '4x4 en mitja pista. Cada passada obliga a ajustar posicio defensiva. Es poden afegir bots, ma a ma, talls o bloquejos indirectes.',
      coaching: 'Pilota, ajuda, costat feble i comunicacio constant.',
      diagram: 'shell'
    }
  ]
});


// Ampliació v6: idees reinterpretades a partir de les categories i objectius revisats.
libraries.warmup.push(
  {
    name: 'Les 4 cantonades amb decisió',
    type: 'inici',
    minutes: 10,
    material: '4 cons grans, petos i pilotes opcionals.',
    description: 'Els jugadors ocupen cantonades. A la senyal canvien de cantonada, amb consignes de sortida, parada, pivot o bot segons edat.',
    coaching: 'Ideal per a menors de 8 i 8-11: joc, percepció i frenada segura.',
    diagram: 'corners',
    category: 'fisics'
  },
  {
    name: 'Quitar el peto adaptat amb bot',
    type: 'inici',
    minutes: 10,
    material: 'Petos i pilotes per a la segona ronda.',
    description: 'Joc de persecució on cal protegir el peto. Progressió: primer sense pilota, després amb bot controlat i espai reduït.',
    coaching: 'Treballa velocitat, percepció, protecció del cos i diversió sense cues.',
    diagram: 'chase',
    category: 'psicologics'
  }
);

libraries.coolDown.push(
  {
    name: 'Flexibilitat guiada cervical i espatlla',
    type: 'final',
    minutes: 10,
    material: 'Espai tranquil i aigua.',
    description: 'Baixada de pulsacions i estiraments suaus de coll, espatlla, esquena, maluc i cames. Cap moviment brusc.',
    coaching: 'Respiració fluida, sense dolor i sense rebots.',
    diagram: 'cooldown',
    category: 'fisics'
  }
);

libraries.velocitat.push(
  {
    name: 'Velocitat i tir progressiu',
    minutes: 12,
    material: 'Cons, pilotes i cistella.',
    description: 'Recorregut de menys a més velocitat: trote, canvi de ritme, esprint i tir final. Rota el costat i la mà de bot.',
    coaching: 'Accelerar de manera progressiva i arribar equilibrat al tir.',
    diagram: 'sprint',
    category: 'fisics'
  },
  {
    name: 'Roda de contraatac entre 4',
    minutes: 12,
    material: 'Pilotes i pista sencera.',
    description: 'Quatre jugadors alternen rols: bot, passada, carril de finalització i rebot. Després de cada acció ocupen el lloc següent.',
    coaching: 'Ocupar carrils, passar per davant i no frenar la cursa.',
    diagram: 'lanes3',
    category: 'estrategics'
  },
  {
    name: 'Contraatac 1x2 i retorn 2x1',
    minutes: 12,
    material: 'Pilotes i petos.',
    description: 'Un atacant inicia amb desavantatge perseguit per dos defensors. En recuperar o finalitzar, els defensors ataquen 2x1 de tornada.',
    coaching: 'Canvi de rol immediat, lectura de superioritat i finalització ràpida.',
    diagram: 'transition',
    category: 'globalitzats'
  }
);

libraries.tir.push(
  {
    name: 'Finalitzacions exteriors en 3 zones',
    minutes: 12,
    material: 'Pilotes, 3 zones marcades i passadors.',
    description: 'Tres zones frontals. El jugador rep des de diferents angles i ha de orientar cos, decidir ràpid i finalitzar amb tir o entrada.',
    coaching: 'Preparar peus abans de rebre i finalitzar amb equilibri.',
    diagram: 'finish',
    category: 'especifics'
  },
  {
    name: 'Finalització exterior amb oposició',
    minutes: 12,
    material: 'Pilotes, petos i 3 zones de llançament.',
    description: 'Atacants limitats a zones de tir i un defensor mòbil que arriba a puntejar. Es pot permetre passada extra entre atacants.',
    coaching: 'Llegir defensor, tirar ràpid o moure la pilota.',
    diagram: 'closeout',
    category: 'especifics'
  },
  {
    name: 'Tir exterior en últims segons',
    minutes: 12,
    material: 'Pilotes, cronòmetre i petos.',
    description: 'Acció curta de banda o fons: bloqueig, sortida al perímetre i tir amb compte enrere de 5 segons.',
    coaching: 'Precisió en el timing, recepció preparada i tir equilibrat sota pressió.',
    diagram: 'offball',
    category: 'estrategics'
  }
);

libraries.passades.push(
  {
    name: 'Passades en formació M',
    minutes: 12,
    material: '2 pilotes i 5 cons en forma de M.',
    description: 'Els jugadors encadenen controls orientats i passades, desplaçant-se al lloc on han entregat la pilota. Treball amb dues pilotes.',
    coaching: 'Passada tensa, recepció orientada i ritme sense aturades.',
    diagram: 'passing',
    category: 'tecnics'
  },
  {
    name: 'Passar i reemplaçar amb lectura',
    minutes: 12,
    material: 'Pilotes, cons i petos.',
    description: 'Després de passar, el jugador talla o reemplaça segons la resposta del defensor. Afegir defensor passiu i després actiu.',
    coaching: 'No quedar-se quiet després de passar; ocupar espais lliures.',
    diagram: 'offball',
    category: 'tactics'
  }
);

libraries.bot.push(
  {
    name: 'Bote de protecció: castell reduït',
    minutes: 12,
    material: '4 cons per quadrat i una pilota per jugador.',
    description: 'Dins del quadrat, l’atacant protegeix la pilota mentre el defensor intenta tocar-la amb la seva. Canvi de rol cada minut.',
    coaching: 'No donar l’esquena, cap amunt i canvis de mà útils.',
    diagram: 'gates',
    category: 'tecnics'
  },
  {
    name: 'Canvi de mà + canvi de ritme',
    minutes: 12,
    material: 'Cons i pilota per jugador/a.',
    description: 'Seqüència de canvis de mà, frenada, pivot i sortida explosiva. Acaba amb entrada o passada a cantonada.',
    coaching: 'El canvi ha de generar avantatge, no ser decoratiu.',
    diagram: 'zigzag',
    category: 'tecnics'
  }
);

libraries.defensa.push(
  {
    name: 'Balance defensiu-ofensiu continu',
    minutes: 12,
    material: 'Pilotes i petos de dos colors.',
    description: 'Després de tir o pèrdua, l’equip ha de fer balanç, protegir centre i comunicar emparellaments abans de contraatacar.',
    coaching: 'Primer córrer enrere, després assignar i parlar.',
    diagram: 'balance',
    category: 'tactics'
  },
  {
    name: 'Defensa de recepció i finta',
    minutes: 12,
    material: 'Pilotes i petos.',
    description: 'Atacant treballa finta de recepció; defensor nega línia de passada sense perdre visió de pilota i jugador.',
    coaching: 'Cos entre atacant i cistella, mà en línia de passada.',
    diagram: 'defense1',
    category: 'tecnics'
  }
);

libraries['3x3'].push(
  {
    name: '2x2 amb suports exteriors',
    minutes: 12,
    material: 'Pilota, petos i dos suports fora del triple.',
    description: '2x2 real amb dos comodins exteriors. Si l’atac anota, rota amb suports; si falla, defensa i atac canvien rol.',
    coaching: 'Crear avantatge, passar fora i tornar a atacar l’espai.',
    diagram: 'three',
    category: 'globalitzats'
  },
  {
    name: 'Aprofitar el bloqueig amb passador',
    minutes: 12,
    material: 'Pilota, petos i dos bloquejadors.',
    description: 'Atacant i defensor a la zona; dos bloquejos disponibles i un passador exterior. L’atacant decideix quin bloqueig aprofita.',
    coaching: 'Llegir angle del bloqueig i sortir preparat per rebre.',
    diagram: 'pick',
    category: 'globalitzats'
  }
);

libraries.situacions.push(
  {
    name: 'Banda: caixa simple amb doble opció',
    minutes: 12,
    material: 'Pilota i petos.',
    description: 'Sortida de banda amb disposició en caixa: tall interior o sortida exterior després de bloqueig. Adaptar a nivell i edat.',
    coaching: 'Timing, fintes prèvies i lectura de la defensa.',
    diagram: 'offball',
    category: 'estrategics'
  },
  {
    name: 'Fons: box horitzontal-vertical',
    minutes: 12,
    material: 'Pilota i petos.',
    description: 'Servei de fons amb bloqueig horitzontal i continuació vertical per generar tir exterior o passada interior.',
    coaching: 'Angles de bloqueig, paciència del sacador i ocupació d’espais.',
    diagram: 'shell',
    category: 'estrategics'
  },
  {
    name: 'Cohesió: repte de comunicació sense bot',
    minutes: 12,
    material: 'Pilota i petos.',
    description: 'Atac sense bot durant 20 segons per aconseguir avantatge amb passades, talls i suport verbal. Defensa pressiona línies de passada.',
    coaching: 'Parlar, mirar abans de rebre i ajudar al company sense pilota.',
    diagram: 'passing',
    category: 'psicologics'
  }
);

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

function selectedCategories() {
  const values = [...document.querySelectorAll('input[name="exerciseCategory"]:checked')].map(i => i.value);
  return values.length ? values : ['fisics', 'tecnics', 'tactics', 'globalitzats'];
}

const typeCategories = {
  forca: ['fisics'],
  velocitat: ['fisics', 'globalitzats'],
  defensa: ['tactics', 'tecnics'],
  '3x3': ['globalitzats', 'tactics'],
  tir: ['tecnics', 'especifics'],
  passades: ['tecnics', 'tactics'],
  bot: ['tecnics', 'especifics'],
  situacions: ['globalitzats', 'estrategics', 'psicologics']
};

const categoryLabels = {
  fisics: 'Físics',
  tecnics: 'Tècnics',
  tactics: 'Tàctics',
  globalitzats: 'Globalitzats',
  estrategics: 'Estratègics',
  psicologics: 'Psicològics',
  especifics: 'Específics'
};


const objectiveLabels = {
  qualsevol: 'Qualsevol objectiu compatible',
  calentament: 'Calentament',
  acondicionament: 'Acondicionament general',
  velocitat: 'Velocitat',
  coordinacio: 'Coordinació',
  'forca-inferior': 'Força tren inferior',
  'forca-superior': 'Força tren superior',
  'resistencia-aerobica': 'Resistència aeròbica',
  'resistencia-anaerobica': 'Resistència anaeròbica',
  flexibilitat: 'Flexibilitat / recuperació',
  circuits: 'Circuits',
  concentracio: 'Concentració',
  competitivitat: 'Competitivitat',
  agressivitat: 'Agressivitat esportiva',
  comunicacio: 'Comunicació / expressió',
  memoria: 'Assimilació / memorització',
  cohesio: 'Cohesió grupal',
  creativitat: 'Creativitat',
  ludic: 'Lúdic / recreatiu',
  percepcio: 'Percepció',
  'bot-proteccio': 'Bot: protecció',
  'bot-velocitat': 'Bot: velocitat',
  'bot-canvi-ma': 'Bot: canvi de mà',
  'bot-canvi-ritme': 'Bot: canvi de ritme',
  'pase-dos-mans': 'Passada dues mans',
  'pase-una-ma': 'Passada una mà',
  'recepcio-alta': 'Recepció alta',
  'recepcio-baixa': 'Recepció baixa',
  'tir-suspensio': 'Tir en suspensió',
  'tir-bandeja': 'Entrada / safata',
  'tir-ganxo': 'Tir de ganxo',
  'fintes-tir': 'Fintes de tir',
  'fintes-penetracio': 'Fintes de penetració',
  'fintes-pase': 'Fintes de passada',
  'defensa-exterior': 'Defensa pilota exterior',
  'defensa-interior': 'Defensa pilota interior',
  'posicio-defensiva': 'Posició bàsica defensiva',
  'rebote-ofensiu': 'Rebot ofensiu',
  'rebote-defensiu': 'Rebot defensiu',
  'contra-primari': 'Contraatac primari',
  'contra-secundari': 'Contraatac secundari',
  transicio: 'Transició',
  'balance-defensiu': 'Balanç defensiu',
  'passar-tallar': 'Passar i tallar',
  'passar-bloquejar': 'Passar i bloquejar',
  'bloqueig-directe': 'Bloqueig directe',
  'bloqueig-indirecte': 'Bloqueig indirecte',
  'servei-fons': 'Servei de fons',
  'servei-banda': 'Servei de banda',
  'atac-14': 'Atac 1-4',
  'atac-32': 'Atac 3-2',
  'atac-caixa-u': 'Atac caixa i un'
};

const typeObjectives = {
  forca: ['forca-inferior', 'forca-superior', 'acondicionament', 'circuits'],
  velocitat: ['velocitat', 'coordinacio', 'resistencia-anaerobica', 'contra-primari', 'transicio'],
  defensa: ['defensa-exterior', 'defensa-interior', 'posicio-defensiva', 'balance-defensiu', 'rebote-defensiu'],
  '3x3': ['passar-tallar', 'passar-bloquejar', 'bloqueig-directe', 'competitivitat', 'creativitat'],
  tir: ['tir-suspensio', 'tir-bandeja', 'tir-ganxo', 'fintes-tir'],
  passades: ['pase-dos-mans', 'pase-una-ma', 'recepcio-alta', 'recepcio-baixa', 'comunicacio'],
  bot: ['bot-proteccio', 'bot-velocitat', 'bot-canvi-ma', 'bot-canvi-ritme', 'fintes-penetracio'],
  situacions: ['percepcio', 'memoria', 'cohesio', 'creativitat', 'competitivitat', 'servei-fons', 'servei-banda']
};

function selectedPrimaryObjective() {
  return document.getElementById('primaryObjective')?.value || 'qualsevol';
}

function inferObjectives(exercise, type) {
  const text = `${exercise.name} ${exercise.description} ${exercise.coaching || ''}`.toLowerCase();
  const objectives = new Set(typeObjectives[type] || []);
  const addIf = (objective, words) => {
    if (words.some(word => text.includes(word))) objectives.add(objective);
  };
  addIf('calentament', ['activació', 'mobilitat', 'escalf', 'entrada progressiva']);
  addIf('velocitat', ['velocitat', 'sprint', 'acceler', 'ràpid', 'contraatac', 'transició']);
  addIf('coordinacio', ['coordinació', 'portes', 'escala', 'peus', 'canvi de mà']);
  addIf('forca-inferior', ['salt', 'esquat', 'tren inferior', 'caiguda', 'rebot', 'lliscament']);
  addIf('forca-superior', ['flexions', 'gomes', 'tracció', 'contacte', 'core']);
  addIf('resistencia-aerobica', ['fartlek', 'continu', 'recuperació activa']);
  addIf('resistencia-anaerobica', ['relleus', 'sprints', '30 segons', 'alta intensitat']);
  addIf('flexibilitat', ['flexibilitat', 'estiraments', 'tornada a la calma', 'recuperació']);
  addIf('circuits', ['circuit', 'postes', 'estacions']);
  addIf('concentracio', ['senyal', 'decisió', 'lectura', 'memòria', 'recordar']);
  addIf('competitivitat', ['puntua', 'competició', 'guanya', 'rival', 'oposició']);
  addIf('agressivitat', ['contacte', 'agressivitat', 'fort', 'atacar espai']);
  addIf('comunicacio', ['comunicació', 'demanar', 'parlar', 'cridar']);
  addIf('memoria', ['memòria', 'patró', 'sistema', 'consigna', 'recordar']);
  addIf('cohesio', ['equip', 'grupal', 'parelles', 'trios', 'ajuda']);
  addIf('creativitat', ['lliure', 'creativitat', 'avantatge', 'decidir', 'variable']);
  addIf('ludic', ['joc', 'lúdic', 'recreatiu', 'gates', 'portes']);
  addIf('percepcio', ['percepció', 'llegir', 'lectura', 'senyal', 'color']);
  addIf('bot-proteccio', ['bot de protecció', 'protegir pilota']);
  addIf('bot-velocitat', ['bot de velocitat', 'bot central', 'pista sencera']);
  addIf('bot-canvi-ma', ['canvi de mà', 'mà feble']);
  addIf('bot-canvi-ritme', ['canvi de ritme', 'ritme']);
  addIf('pase-dos-mans', ['passada de pit', 'dues mans']);
  addIf('pase-una-ma', ['una mà', 'beisbol', 'llarga']);
  addIf('recepcio-alta', ['recepció alta', 'alta']);
  addIf('recepcio-baixa', ['recepció baixa', 'baixa']);
  addIf('tir-suspensio', ['tir exterior', 'suspensió', 'llançament']);
  addIf('tir-bandeja', ['entrada', 'safata', 'finalització']);
  addIf('tir-ganxo', ['ganxo']);
  addIf('fintes-tir', ['finta de tir']);
  addIf('fintes-penetracio', ['finta', 'penetració']);
  addIf('fintes-pase', ['finta de passada']);
  addIf('defensa-exterior', ['close-out', 'exterior', 'baló exterior', '1x1']);
  addIf('defensa-interior', ['interior', 'poste', 'post']);
  addIf('posicio-defensiva', ['posició defensiva', 'desplaçament defensiu', 'lliscament']);
  addIf('rebote-ofensiu', ['rebot ofensiu', 'segon salt', 'palmeig']);
  addIf('rebote-defensiu', ['rebot defensiu', 'bloqueig de rebot']);
  addIf('contra-primari', ['contraatac', '3 carrils']);
  addIf('contra-secundari', ['secundari', 'arribada tardana']);
  addIf('transicio', ['transició', 'retorn', 'canvi immediat']);
  addIf('balance-defensiu', ['balanç', 'retorn defensiu']);
  addIf('passar-tallar', ['passar i tallar', 'tall']);
  addIf('passar-bloquejar', ['passar i bloquejar']);
  addIf('bloqueig-directe', ['bloqueig directe', 'pick', 'pick and roll']);
  addIf('bloqueig-indirecte', ['bloqueig indirecte', 'indirecte']);
  addIf('servei-fons', ['fons', 'servei de fons', 'saque de fondo']);
  addIf('servei-banda', ['banda', 'servei de banda', 'saque lateral']);
  addIf('atac-14', ['1-4']);
  addIf('atac-32', ['3-2']);
  addIf('atac-caixa-u', ['caixa i un', 'caja y uno']);
  return [...objectives];
}

function objectiveScore(exercise, type, objective) {
  if (!objective || objective === 'qualsevol') return 1;
  const objectives = inferObjectives(exercise, type);
  if (objectives.includes(objective)) return 4;
  const label = (objectiveLabels[objective] || objective).toLowerCase();
  const text = `${exercise.name} ${exercise.description} ${exercise.coaching || ''}`.toLowerCase();
  return label.split(/[:/ ]+/).some(part => part.length > 4 && text.includes(part)) ? 3 : 0;
}

function objectiveMatches(exercise, type, objective) {
  return objectiveScore(exercise, type, objective) > 0;
}

function exerciseCategories(exercise, type) {
  const explicit = exercise.category ? [exercise.category] : [];
  return [...new Set([...explicit, ...(typeCategories[type] || [])])];
}

function categoryMatches(exercise, type, categories) {
  return exerciseCategories(exercise, type).some(cat => categories.includes(cat));
}

function durationPatternFor(count) {
  const coreMinutes = 70;
  const base = Math.floor(coreMinutes / count);
  let remainder = coreMinutes - base * count;
  return Array.from({ length: count }, () => base).map(value => {
    if (remainder > 0) {
      remainder -= 1;
      return value + 1;
    }
    return value;
  });
}

function pickCore(types, count, categories, objective) {
  const durationPattern = durationPatternFor(count);
  const pools = Object.fromEntries(types.map(type => {
    const categoryFiltered = libraries[type].filter(ex => categoryMatches(ex, type, categories));
    const objectiveFiltered = categoryFiltered.filter(ex => objectiveMatches(ex, type, objective));
    const basePool = objectiveFiltered.length ? objectiveFiltered : categoryFiltered.length ? categoryFiltered : libraries[type];
    return [type, shuffle(basePool).sort((a, b) => objectiveScore(b, type, objective) - objectiveScore(a, type, objective))];
  }));
  const usedNames = new Set();
  const core = [];
  const typeOrder = shuffle(types);

  for (let slot = 0; slot < durationPattern.length; slot++) {
    const orderedTypes = [...typeOrder.slice(slot % typeOrder.length), ...typeOrder.slice(0, slot % typeOrder.length)];
    const type = orderedTypes.find(t => pools[t].some(ex => !usedNames.has(ex.name))) || types[slot % types.length];
    let exercise = pools[type].find(ex => !usedNames.has(ex.name));

    if (!exercise) {
      const fallbackType = shuffle(Object.keys(libraries).filter(k => !['warmup', 'coolDown'].includes(k))).find(t => libraries[t].some(ex => !usedNames.has(ex.name) && categoryMatches(ex, t, categories) && objectiveMatches(ex, t, objective))) || shuffle(Object.keys(libraries).filter(k => !['warmup', 'coolDown'].includes(k))).find(t => libraries[t].some(ex => !usedNames.has(ex.name) && categoryMatches(ex, t, categories))) || shuffle(Object.keys(libraries).filter(k => !['warmup', 'coolDown'].includes(k))).find(t => libraries[t].some(ex => !usedNames.has(ex.name)));
      if (!fallbackType) continue;
      exercise = shuffle(libraries[fallbackType]).find(ex => !usedNames.has(ex.name));
    }

    usedNames.add(exercise.name);
    core.push({ ...exercise, type, objectives: inferObjectives(exercise, type), minutes: durationPattern[slot] });
  }

  return core;
}

function buildSession() {
  const age = document.getElementById('age').value;
  const level = document.getElementById('level').value;
  const types = selectedTypes().length ? selectedTypes() : ['defensa', 'velocitat'];
  const categories = selectedCategories();
  const count = Number(document.getElementById('exerciseCount').value || 6);
  const objective = selectedPrimaryObjective();
  const warmup = { ...shuffle(libraries.warmup)[0], age, level, minutes: 10 };
  const cooldown = { ...shuffle(libraries.coolDown)[0], age, level, minutes: 10 };
  const core = pickCore(types, count, categories, objective).map(item => ({ ...item, age, level }));
  return [warmup, ...core, cooldown].map((item, i) => ({ ...item, order: i + 1 }));
}

function render(options = {}) {
  const session = buildSession();
  const ageSelect = document.getElementById('age');
  const levelSelect = document.getElementById('level');
  const ageLabel = ageSelect.selectedOptions[0].text;
  const levelLabel = levelSelect.selectedOptions[0].text;
  const checked = [...document.querySelectorAll('input[name="exerciseType"]:checked')];
  const types = checked.map(i => i.parentElement.textContent.trim());
  const categories = selectedCategories().map(cat => categoryLabels[cat] || cat);
  const objective = selectedPrimaryObjective();
  const total = session.reduce((sum, item) => sum + item.minutes, 0);
  document.getElementById('sessionTitle').textContent = `Sessió de ${total} min · ${levelLabel}`;
  document.getElementById('summary').innerHTML = `
    <div><span>Edat</span><strong>${ageLabel}</strong></div>
    <div><span>Nivell</span><strong>${levelLabel}</strong></div>
    <div><span>Tipus</span><strong>${types.length ? types.join(', ') : 'Defensa, velocitat'}</strong></div>
    <div><span>Objectiu específic</span><strong>${objectiveLabels[objective] || objective}</strong></div>
    <div><span>Exercicis</span><strong>${document.getElementById('exerciseCount').value}</strong></div>
    <div><span>Categories</span><strong>${categories.join(', ')}</strong></div>
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
    const itemObjectives = (item.objectives || inferObjectives(item, item.type)).slice(0, 4).map(obj => objectiveLabels[obj] || obj).join(', ');
    node.querySelector('.objectives').innerHTML = itemObjectives ? `<strong>Objectius específics:</strong> ${itemObjectives}` : '';
    node.querySelector('.court-wrap').innerHTML = courtSvg(item.diagram);
    timeline.appendChild(node);
  });

  if (options.focusOutput) {
    const result = document.getElementById('result');
    result.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.getElementById('trainingForm').addEventListener('submit', event => {
  event.preventDefault();
  generation += 1;
  render({ focusOutput: true });
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
