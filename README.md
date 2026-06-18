# Planificador d'entrenaments de bàsquet - PWA

PWA per generar sessions d'entrenament de bàsquet de **90 minuts** segons edat, nivell, tipus d'exercicis, categories pedagògiques, objectiu específic i quantitat d'exercicis principals.

## Què inclou

- Formulari amb menús desplegables i caselles de selecció.
- Generació automàtica d'una sessió completa d'1 h 30 min.
- Escalfament inicial, bloc principal i estiraments finals.
- Selecció de la quantitat d'exercicis principals: 3, 4, 5, 6, 7 o 8.
- Filtres per edat, nivell, tipus d'exercici, categoria pedagògica i objectiu específic.
- Fitxes d'exercici amb:
  - durada,
  - explicació,
  - material necessari,
  - adaptació segons edat i nivell,
  - objectius específics,
  - gràfic de pista.
- Botó per imprimir la sessió.
- Manifest i service worker per funcionar com a PWA instal·lable.

## Com provar-la ràpidament

1. Descomprimeix el fitxer ZIP.
2. Obre `index.html` amb el navegador.
3. Tria edat, nivell, objectius i quantitat d'exercicis.
4. Prem **Genera un entrenament nou**.

Això serveix per provar la interfície. Perquè la PWA funcioni plenament com a aplicació instal·lable, és millor servir-la amb un servidor local o penjar-la a un hosting amb HTTPS.

## Com executar-la amb servidor local

Si tens Python instal·lat:

```bash
cd pwa_basket_v8
python3 -m http.server 8000
```

Després obre:

```text
http://localhost:8000
```

## Instal·lació com a PWA

Quan estigui servida per `localhost` o per una web amb HTTPS:

1. Obre la pàgina amb Chrome, Edge o un navegador compatible.
2. Cerca l'opció **Instal·la l'aplicació** o la icona d'instal·lació a la barra d'adreces.
3. Accepta la instal·lació.

## Fitxers principals

- `index.html`: estructura de la pàgina.
- `styles.css`: disseny visual i colors càlids.
- `app.js`: base d'exercicis i lògica del generador.
- `manifest.webmanifest`: configuració PWA.
- `sw.js`: service worker i cache.
- `icons/`: icones SVG de l'aplicació.

## Sobre la base d'exercicis

La base d'exercicis està inspirada en idees, categories i objectius de recursos públics de bàsquet, però els textos s'han adaptat i reescrit per a aquesta PWA. No és una còpia literal dels exercicis de les webs.

S'han tingut en compte blocs com:

- força,
- velocitat,
- defensa,
- 3x3,
- tir i finalització,
- passades i coordinació,
- bot i 1x1,
- situacions variables,
- objectius físics, tècnics, tàctics, psicològics i estratègics.

## Recomanació per actualitzar versions

Si fas canvis en `app.js`, `styles.css` o `index.html`, actualitza també el nom de la cache dins `sw.js` perquè el navegador no mantingui una versió antiga.

Exemple:

```js
const CACHE = 'basquet-pwa-v8';
```


## Millores de la versió v8

- Contrast reforçat al botó principal per millorar l'accessibilitat.
- Metadescripció SEO afegida al document.
- Dades estructurades JSON-LD de tipus `SoftwareApplication`.
- JavaScript carregat amb `defer` i CSS pre-carregat.
- Bloc de resultat amb `aria-live`, `tabindex` i focus automàtic després de generar una sessió.
- Enllaç de salt al resultat per a navegació amb teclat.
- Service worker actualitzat amb cache `basquet-pwa-v8` i estratègia cache + actualització de xarxa.
- Preferència `prefers-reduced-motion` per reduir animacions si l'usuari ho té configurat.

## Limitacions actuals

- Els exercicis es generen a partir d'una base interna, no d'una connexió en directe a cap web.
- Els gràfics són esquemàtics i pensats per orientar, no per substituir una pissarra tàctica completa.
- Les càrregues físiques s'han d'ajustar segons el grup real, espai, nombre de jugadors i estat físic.

## Possibles millores futures

- Afegir edició manual de cada exercici.
- Guardar entrenaments favorits.
- Exportar a PDF.
- Afegir rols per jugador/a.
- Afegir més gràfics específics per exercici.
- Afegir temporitzador integrat per blocs.
