---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Campo Minato in JavaScript
  Confronto tra sviluppo manuale e sviluppo con supporto di Intelligenza Artificiale
drawings:
  persist: false
transition: slide-left
title: Campo Minato in JavaScript
mdc: true
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --slidev-theme-primary: #0ea5e9;
}

.slidev-layout {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%) !important;
  color: #0f172a;
}

.slidev-page {
  background: transparent;
}

h1 {
  color: #0c4a6e !important;
  font-weight: 700 !important;
  margin-bottom: 1.5rem !important;
  font-size: 2.5rem !important;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h2 {
  color: #0369a1 !important;
  font-weight: 600 !important;
  margin-top: 1rem !important;
  margin-bottom: 0.8rem !important;
  font-size: 1.5rem !important;
}

h3 {
  color: #0284c7 !important;
  font-weight: 600 !important;
  margin-top: 0.8rem !important;
  margin-bottom: 0.5rem !important;
  font-size: 1.1rem !important;
}

.subtitle {
  font-size: 0.95rem !important;
  line-height: 1.6;
  color: #334155;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.small-text {
  font-size: 0.85rem !important;
  color: #475569;
}

ul, ol {
  margin-top: 0.5rem;
  margin-left: 1.5rem;
}

li {
  margin-bottom: 0.4rem;
  line-height: 1.5;
  color: #334155;
  font-size: 0.95rem;
}

strong {
  color: #0c4a6e;
  font-weight: 700;
}

.highlight {
  background-color: #fef08a;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  color: #713f12;
  font-weight: 600;
  display: inline-block;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Stile tabelle originale */
.comparison-table {
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: separate;
  border-spacing: 0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 0.5rem;
  overflow: hidden;
}

.comparison-table th {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  padding: 0.9rem;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid #0284c7;
}

.comparison-table td {
  padding: 0.8rem;
  border: 1px solid #cbd5e1;
  color: #1e293b;
  font-size: 0.9rem;
  line-height: 1.5;
  background-color: white;
  vertical-align: top;
}

.comparison-table td:first-child {
  font-weight: 600;
  background-color: #f1f5f9;
  color: #0369a1;
  text-align: center;
}

.comparison-table tr:hover td {
  background-color: #f0f9ff;
}

/* Box per vantaggi/svantaggi */
.advantage-box {
  background: linear-gradient(135deg, #ecfeff 0%, #cffafe 100%);
  border-left: 4px solid #06b6d4;
  padding: 1.2rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.advantage-box h3 {
  color: #0e7490 !important;
  margin-bottom: 0.8rem;
  font-size: 1rem !important;
}

.advantage-box h4 {
  color: #0891b2 !important;
  font-size: 0.9rem !important;
  font-weight: 600;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
}

.advantage-box p, .advantage-box li {
  font-size: 0.85rem;
  color: #164e63;
  line-height: 1.6;
}

.disadvantage-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-left: 4px solid #f59e0b;
  padding: 1.2rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.disadvantage-box h4 {
  color: #92400e !important;
  font-size: 0.9rem !important;
  font-weight: 600;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
}

.disadvantage-box p, .disadvantage-box li {
  font-size: 0.85rem;
  color: #78350f;
  line-height: 1.6;
}

/* Conclusioni */
.conclusion-box {
  background: white;
  border: 2px solid #0ea5e9;
  padding: 1.2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.conclusion-box h3 {
  color: #0369a1 !important;
  font-size: 1.1rem !important;
  margin-bottom: 0.8rem;
}

.conclusion-box p, .conclusion-box li {
  font-size: 0.88rem;
  color: #334155;
  line-height: 1.6;
}

/* Griglia per layout */
.two-col-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}
</style>

# Campo Minato in JavaScript

<div class="mt-4 text-xl">
Confronto tra sviluppo manuale e sviluppo con supporto di Intelligenza Artificiale
</div>

---
layout: default
---

# OBIETTIVO DEL PROGETTO

<div class="mt-10">

<p class="text-lg">Realizzare il gioco Campo Minato in JavaScript senza usare librerie esterne.</p>

<div class="mt-8">

<p class="text-lg">Confrontare due metodi di sviluppo:</p>

<div class="subtitle">

o Sviluppo manuale

o Sviluppo con supporto di Intelligenza Artificiale

</div>
</div>
</div>

---
layout: default
---

# ORGANIZZAZIONE DEL LAVORO

<div class="two-col-grid mt-8">

<div class="advantage-box">

<h3>Studente 1</h3>

<p>Sviluppo completo del gioco scrivendo tutto il codice a mano, senza utilizzo dell'intelligenza artificiale nemmeno per cercare funzioni o selettori</p>

</div>

<div class="advantage-box">

<h3>Studente 2</h3>

<p>Sviluppo dello stesso gioco con supporto di un modello di Intelligenza Artificiale per la scrittura di funzioni</p>

</div>

</div>

<div class="mt-10 text-center small-text">
Ogni gioco è stato sviluppato da una coppia di studenti
</div>

---
layout: default
---

# METODO 1: SVILUPPO MANUALE

<div class="mt-8">

<p class="text-lg">Il gioco è stato progettato e programmato interamente a mano</p>

<div class="mt-6">

<p class="text-base">Tutta la logica è stata scritta senza aiuti automatici:</p>

<div class="subtitle">

o Creazione della griglia

o Gestione delle mine

o Calcolo dei numeri

o Gestione del click e del tasto destro

o Controllo vittoria e sconfitta

</div>
</div>
</div>

---
layout: default
---

# METODO 2: SVILUPPO CON SUPPORTO DELL'AI

<div class="mt-8">

<p class="text-lg">Lo studente utilizza l'IA come:</p>

<div class="subtitle mt-6">

o Aiuto per scrivere funzioni

o Supporto per correggere errori

o Spiegazione di parti di codice difficili

</div>

<div class="mt-10 text-center">
<span class="highlight">Il codice non viene copiato alla cieca, ma capito e adattato</span>
</div>

</div>

---
layout: default
---

# Analisi comparativa dei due progetti

## Progetto AI

<div class="two-col-grid mt-4">

<div>

<h3>Struttura dati</h3>

<div class="subtitle">

o Utilizza un array monodimensionale

o Ogni cella è un oggetto con proprietà:
  <div class="ml-6 small-text">
  • Bomba<br>
  • Scoperta<br>
  • Bandiera
  </div>

o Approccio più compatto

</div>

</div>

<div>

<h3>Algoritmi</h3>

<div class="subtitle">

o Mine: posizionamento casuale

o Calcolo del vicinato: funzione dedicata che gestisce automaticamente i bordi

o Rivelazione ricorsiva: le celle vuote rivelano automaticamente le adiacenti

o Condizione di vittoria: confronto tra celle scoperte e celle totali non-mina

</div>

</div>

</div>

---
layout: default
---

# Analisi comparativa dei due progetti

## Progetto AI

<div class="mt-6">

<h3>UI / UX</h3>

<div class="subtitle">

o Layout realizzato con CSS Grid

o Overlay finale per vittoria o sconfitta

o 3 livelli di difficoltà

o Uso di emoji Unicode (💣) per una grafica semplice e immediata

</div>

</div>

---
layout: default
---

# Analisi comparativa dei due progetti

## Progetto senza AI

<div class="two-col-grid mt-4">

<div>

<h3>Struttura dati</h3>

<div class="subtitle">

o Uso di array bidimensionali separati, uno per ogni aspetto:
  <div class="ml-6 small-text">
  • grid[][] → numeri delle celle<br>
  • minesGrid[][] → posizione delle mine<br>
  • revealed[][] → celle scoperte<br>
  • flagged[][] → bandiere
  </div>

o Approccio procedurale e classico

</div>

</div>

<div>

<h3>Algoritmi</h3>

<div class="subtitle">

o Prima mossa sicura: le mine vengono piazzate solo dopo il primo click

o Generazione mine con esclusione della cella iniziale

o Rivelazione con controlli sui limiti

o Vittoria quando tutte le celle non-mina sono rivelate

</div>

</div>

</div>

---
layout: default
---

# Analisi comparativa dei due progetti

## Progetto senza AI

<div class="mt-6">

<h3>UI / UX</h3>

<div class="subtitle">

o Struttura basata su tabella HTML

o Celle ridimensionabili (20px / 30px)

o 4 livelli di difficoltà, inclusa modalità personalizzata

o Risorse grafiche PNG (bombe, bandiere, sfondo)

o Overlay post-game avanzato

o Titolo nascosto automaticamente per griglie molto grandi

</div>

</div>

---
layout: default
---

# Differenze principali nei metodi

<table class="comparison-table">
  <thead>
    <tr>
      <th></th>
      <th>AI</th>
      <th>Non AI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Struttura dati</td>
      <td>Array 1D con oggetti</td>
      <td>Più array 2D separati</td>
    </tr>
    <tr>
      <td>Prima mossa</td>
      <td>Può essere una bomba</td>
      <td>Sempre sicura</td>
    </tr>
    <tr>
      <td>Rendering</td>
      <td>CSS Grid</td>
      <td>Tabella HTML</td>
    </tr>
    <tr>
      <td>Risorse grafiche</td>
      <td>Emoji Unicode</td>
      <td>Immagini PNG</td>
    </tr>
    <tr>
      <td>Configurazione</td>
      <td>3 livelli fissi</td>
      <td>4 livelli + personalizzato</td>
    </tr>
    <tr>
      <td>Post-game</td>
      <td>Overlay semplice</td>
      <td>Modalità "rivedi partita"</td>
    </tr>
    <tr>
      <td>Codice</td>
      <td>Più compatto (~180 righe)</td>
      <td>Più esteso (~340 righe)</td>
    </tr>
  </tbody>
</table>

---
layout: default
---

# Differenze principali nei metodi

<div class="two-col-grid mt-4">

<div>

<table class="comparison-table">
  <thead>
    <tr>
      <th colspan="2">Sviluppo manuale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); color: #065f46;">Vantaggi</td>
      <td>
        o Comprensione profonda del funzionamento del programma<br>
        o Migliora il ragionamento logico<br>
        o Aiuta a organizzare meglio il codice<br>
        o Rafforza l'apprendimento della programmazione<br>
        o Codice originale scritto dallo studente
      </td>
    </tr>
    <tr>
      <td style="background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%); color: #9a3412;">Svantaggi</td>
      <td>
        o Richiede molto tempo rispetto a quello fatto con l'aiuto dell'AI<br>
        o Facile bloccarsi su errori complessi<br>
        o Necessita di una buona preparazione iniziale<br>
        o Debugging lungo e complicato
      </td>
    </tr>
  </tbody>
</table>

</div>

<div>

<table class="comparison-table">
  <thead>
    <tr>
      <th colspan="2">Uso dell'Intelligenza Artificiale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); color: #065f46;">Vantaggi</td>
      <td>
        o Riduce i tempi di sviluppo<br>
        o Aiuta a trovare e correggere errori<br>
        o Migliora e semplifica il codice<br>
        o Supporta la scrittura di parti complesse<br>
        o Utile come assistente, tutor e supporto allo studio
      </td>
    </tr>
    <tr>
      <td style="background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%); color: #9a3412;">Svantaggi</td>
      <td>
        o Rischio di non comprendere realmente il codice<br>
        o Possibile uso di soluzioni non spiegabili<br>
        o Difficoltà nel verificare la correttezza senza basi solide<br>
        o Possibile generazione di codice non ottimizzato
      </td>
    </tr>
  </tbody>
</table>

</div>

</div>

---
layout: default
---

# Conclusioni

<div class="mt-4">

<p class="text-base">Entrambi implementano correttamente le meccaniche fondamentali del Campo Minato, ma:</p>

<div class="two-col-grid mt-6">

<div class="conclusion-box">

<h3>Progetto AI</h3>

<div class="subtitle">

o Più moderno ed elegante

o Codice compatto e leggibile

o Ideale per dimostrare uso di CSS Grid e strutture dati semplificate

o <strong>AI privilegia semplicità e pulizia del codice</strong>

</div>

</div>

<div class="conclusion-box">

<h3>Progetto non AI</h3>

<div class="subtitle">

o Più ricco di funzionalità

o Maggiore controllo sul flusso di gioco

o Offre personalizzazione e strumenti di analisi post-partita

o <strong>Not_AI punta su completezza e flessibilità per l'utente</strong>

</div>

</div>

</div>
</div>
