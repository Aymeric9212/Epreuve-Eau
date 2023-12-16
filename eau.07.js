const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

function modifmot(mot) {
  return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
}

let phrase = prompt("Entrez votre phrase : ");
let tableaumot = phrase.split(" ");
let tableaumodifie = tableaumot.map(modifmot);

if (!phrase.trim()) {
  console.error("La saisie est vide");
  process.exit(1);
}

resultat = tableaumodifie.join(" ");

console.log(resultat);
