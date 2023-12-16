const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

function ispremier(nombre) {
  if (nombre <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) {
      return false;
    }
  }
  return true;
}

function ispremiersup(chiffre) {
  let nombreactuel = chiffre + 1;
  while (true) {
    if (ispremier(nombreactuel)) {
      return nombreactuel;
    }
    nombreactuel++;
  }
}

let nombre = prompt("Entrez un nombre : ");
if (isNaN(nombre)) {
  console.error("Erreur : Veuillez entrez un nombre valide");
  process.exit(1);
}

nombre = parseFloat(nombre);

let resultat = ispremiersup(nombre);

console.log(resultat); 
