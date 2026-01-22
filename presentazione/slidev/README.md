# Presentazione Slidev - Campo Minato

Presentazione del progetto Campo Minato creata con Slidev.

## Requisiti

- Node.js (versione 14 o superiore)
- npm o yarn

## Installazione

1. Apri il terminale nella cartella `slidev`
2. Installa le dipendenze:

```bash
npm install
```

## Utilizzo

### Modalità sviluppo (con hot reload)

```bash
npm run dev
```

Questo comando aprirà automaticamente il browser con la presentazione. Ogni modifica al file `slides.md` sarà immediatamente visibile.

### Build per produzione

```bash
npm run build
```

Questo comando genera una versione statica della presentazione nella cartella `dist/`.

### Esportazione in PDF

```bash
npm run export
```

Questo comando esporta la presentazione in formato PDF.

## Struttura dei file

- `slides.md` - Contenuto della presentazione
- `package.json` - Dipendenze e script npm
- `style.css` - Stili personalizzati
- `README.md` - Questo file

## Personalizzazione

Puoi modificare il contenuto delle slide editando il file `slides.md`. La sintassi è Markdown con alcune estensioni di Slidev.

Per cambiare lo stile, modifica il file `style.css` o le configurazioni nel frontmatter di `slides.md`.

## Documentazione Slidev

Per maggiori informazioni su Slidev, visita: https://sli.dev
