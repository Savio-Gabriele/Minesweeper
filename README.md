# Minesweeper

Questo repository contiene due implementazioni del classico gioco Campo Minato (Minesweeper), sviluppate con approcci metodologici differenti.

## Struttura del Progetto

```
Minesweeper/
├── AI/                 # Versione sviluppata con assistenza AI
│   ├── index.html
│   ├── script.js
│   └── style.css
├── Not_AI/            # Versione tradizionale
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── esset/        # Risorse grafiche
│       ├── bomb.png
│       ├── flag.png
│       ├── flag2.png
│       └── grass.png
└── README.md
```

## Analisi Comparativa delle Due Implementazioni

### 1. PROGETTO AI

#### Caratteristiche Principali

**Struttura Dati:**
- Array monodimensionale (`griglia[]`) per rappresentare la griglia di gioco
- Ogni cella è un oggetto con proprietà: `bomba`, `scoperta`, `bandiera`, `numero`
- Approccio moderno e orientato agli oggetti

**Algoritmi Chiave:**
- **Generazione mine**: genera posizioni casuali fino a raggiungere il numero richiesto, evitando duplicati
- **Calcolo vicinato**: funzione `ottieniVicini()` che calcola le coordinate dei vicini considerando i bordi
- **Rivelazione ricorsiva**: quando si clicca una cella vuota (numero = 0), scopre automaticamente tutte le celle vicine
- **Controllo vittoria**: conta le celle scoperte e verifica se corrispondono a totale - numero mine

**Gestione Eventi:**
- Click sinistro: rivela cella
- Click destro (contextmenu): piazza/rimuove bandiera
- Contatore bandiere che mostra quante ne sono state usate

**UI/UX:**
- CSS Grid dinamico (`grid-template-columns`)
- Schermata di fine gioco con overlay per vittoria/sconfitta
- Tre livelli di difficoltà predefiniti:
  - Facile: 8x8, 10 mine
  - Medio: 10x10, 18 mine
  - Difficile: 14x14, 35 mine
- Emoji Unicode per rappresentare bandiere e bombe

---

### 2. PROGETTO NOT_AI

#### Caratteristiche Principali

**Struttura Dati:**
- Array bidimensionali separati per ogni aspetto del gioco:
  - `grid[][]`: numeri delle mine vicine
  - `minesGrid[][]`: posizioni delle bombe
  - `revealed[][]`: stato rivelazione
  - `flagged[][]`: stato bandiere
- Approccio classico e procedurale

**Algoritmi Chiave:**
- **Prima mossa sicura**: le mine vengono piazzate DOPO il primo click, garantendo che il primo click non sia mai una bomba
- **Generazione mine**: simile all'AI ma con protezione per la prima cella cliccata
- **Rivelazione ricorsiva**: implementazione simile ma con controlli più espliciti sui bordi
- **Controllo vittoria**: verifica che tutte le celle non-mina siano state rivelate

**Gestione Eventi:**
- Stesso sistema di click sinistro/destro
- Sistema di visualizzazione mine rimanenti
- Opzione "Rivedi Partita" per analizzare il gioco finito

**UI/UX:**
- Tabella HTML tradizionale (`<table><tr><td>`)
- Dimensioni celle dinamiche (20px o 30px a seconda della larghezza)
- Quattro livelli di difficoltà:
  - Personalizzato: dimensioni e mine a scelta
  - Facile: 9x9, 10 mine
  - Medio: 16x16, 40 mine
  - Difficile: 16x30, 99 mine
- Immagini PNG per risorse grafiche
- Overlay per rivedere la partita dopo la fine
- Nascondi titolo per griglie grandi (maggiori di 16x16)

---

## Tabella Comparativa

| Aspetto | AI | Not_AI |
|---------|-----|---------|
| **Struttura dati** | Array 1D con oggetti | Array 2D multipli |
| **Prima mossa** | Può essere bomba | Sempre sicura |
| **Rendering** | CSS Grid | HTML Table |
| **Risorse grafiche** | Emoji Unicode | Immagini PNG |
| **Configurazione** | 3 livelli fissi | 4 livelli + custom |
| **Post-game** | Semplice overlay | Modalità "rivedi partita" |
| **Dimensioni codice** | Circa 180 righe | Circa 340 righe |
| **Complessità** | Più compatto | Più esteso |

---

## Conclusioni

### Progetto AI
- Codice più moderno e compatto
- Utilizza tecnologie CSS Grid
- Strutture dati semplificate con array monodimensionale
- Maggiore leggibilità e manutenibilità del codice
- Interfaccia minimalista ed essenziale

### Progetto Not_AI
- Implementazione più completa in termini di features
- Approccio tradizionale con tabelle HTML
- Maggiore personalizzazione (modalità custom)
- Feature aggiuntive come "rivedi partita"
- Gestione più sofisticata della prima mossa (sempre sicura)
- Codice più verboso ma dettagliato

Entrambe le implementazioni rispettano le meccaniche fondamentali del Campo Minato, ma con filosofie di sviluppo differenti. Il progetto AI privilegia semplicità ed eleganza del codice, mentre Not_AI punta su completezza delle features e flessibilità per l'utente.

## Tecnologie Utilizzate

- HTML5
- CSS3
- JavaScript (Vanilla)
