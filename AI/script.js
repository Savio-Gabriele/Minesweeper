let dimensione = 8;
let numeroBombe = 10;
let griglia = [];
let partitaFinita = false;
let bandierePiazzate = 0;

function avviaPartita() {
  nascondiSchermataFinale();

  const difficolta = document.getElementById("difficolta").value;

  if (difficolta === "facile") {
    dimensione = 8;
    numeroBombe = 10;
  }
  if (difficolta === "medio") {
    dimensione = 10;
    numeroBombe = 18;
  }
  if (difficolta === "difficile") {
    dimensione = 14;
    numeroBombe = 35;
  }

  const gioco = document.getElementById("gioco");
  gioco.innerHTML = "";
  gioco.style.gridTemplateColumns = `repeat(${dimensione}, 40px)`;

  griglia = [];
  partitaFinita = false;
  bandierePiazzate = 0;
  aggiornaContatoreBandiere();

  for (let i = 0; i < dimensione * dimensione; i++) {
    const cella = document.createElement("div");
    cella.className = "cella";

    cella.addEventListener("click", () => cliccaCella(i));
    cella.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      mettiOTogliBandiera(i);
    });

    gioco.appendChild(cella);

    griglia.push({
      bomba: false,
      scoperta: false,
      bandiera: false,
      numero: 0,
    });
  }

  let bombePiazzate = 0;
  while (bombePiazzate < numeroBombe) {
    const i = Math.floor(Math.random() * griglia.length);
    if (!griglia[i].bomba) {
      griglia[i].bomba = true;
      bombePiazzate++;
    }
  }

  for (let i = 0; i < griglia.length; i++) {
    if (!griglia[i].bomba) {
      griglia[i].numero = contaBombeVicine(i);
    }
  }
}

function aggiornaContatoreBandiere() {
  document.getElementById("contatoreBandiere").textContent =
    `${bandierePiazzate} / ${numeroBombe}`;
}

function ottieniVicini(indice) {
  const vicini = [];
  const x = indice % dimensione;
  const y = Math.floor(indice / dimensione);

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < dimensione && ny >= 0 && ny < dimensione) {
        vicini.push(ny * dimensione + nx);
      }
    }
  }
  return vicini;
}

function contaBombeVicine(indice) {
  return ottieniVicini(indice).filter((i) => griglia[i].bomba).length;
}

function mettiOTogliBandiera(indice) {
  if (partitaFinita) return;

  const cella = griglia[indice];
  const divCella = document.getElementsByClassName("cella")[indice];

  if (cella.scoperta) return;

  if (cella.bandiera) {
    cella.bandiera = false;
    bandierePiazzate--;
    divCella.classList.remove("bandiera");
    divCella.textContent = "";
  } else {
    if (bandierePiazzate >= numeroBombe) return;
    cella.bandiera = true;
    bandierePiazzate++;
    divCella.classList.add("bandiera");
    divCella.textContent = "🚩";
  }
  aggiornaContatoreBandiere();
}

function cliccaCella(indice) {
  if (partitaFinita) return;

  const cella = griglia[indice];
  const divCella = document.getElementsByClassName("cella")[indice];

  if (cella.scoperta || cella.bandiera) return;

  cella.scoperta = true;
  divCella.classList.add("scoperta");

  if (cella.bomba) {
    divCella.textContent = "💣";
    divCella.classList.add("bomba");
    mostraTutteLeBombe();
    mostraSchermataSconfitta();
    partitaFinita = true;
    return;
  }

  if (cella.numero > 0) {
    divCella.textContent = cella.numero;
  } else {
    ottieniVicini(indice).forEach((i) => cliccaCella(i));
  }

  controllaVittoria();
}

function mostraTutteLeBombe() {
  const celle = document.getElementsByClassName("cella");
  for (let i = 0; i < griglia.length; i++) {
    if (griglia[i].bomba) {
      celle[i].textContent = "💣";
      celle[i].classList.add("bomba");
    }
  }
}

function controllaVittoria() {
  let scoperte = 0;
  for (let c of griglia) {
    if (c.scoperta) scoperte++;
  }

  if (scoperte === dimensione * dimensione - numeroBombe) {
    mostraSchermataVittoria();
    partitaFinita = true;
  }
}

function mostraSchermataVittoria() {
  const schermata = document.getElementById("schermataFinale");
  schermata.className = "vittoria";
  schermata.style.display = "flex";
  document.getElementById("titoloFinale").textContent = "Hai vinto!";
  document.getElementById("testoFinale").textContent =
    "Complimenti, hai trovato tutte le celle sicure.";
}

function mostraSchermataSconfitta() {
  const schermata = document.getElementById("schermataFinale");
  schermata.className = "sconfitta";
  schermata.style.display = "flex";
  document.getElementById("titoloFinale").textContent = "Hai perso!";
  document.getElementById("testoFinale").textContent =
    "Hai cliccato su una bomba.";
}

function nascondiSchermataFinale() {
  const schermata = document.getElementById("schermataFinale");
  schermata.style.display = "none";
  schermata.className = "";
}

function chiudiSchermataEAvvia() {
  avviaPartita();
}

avviaPartita();
