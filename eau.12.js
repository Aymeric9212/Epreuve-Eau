const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let nombres = prompt(" Entrez une série de chiffre : ");
let tableau = nombres.split(" ").map(Number);
function bubbleSort(tableau) {
  const n = tableau.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (tableau[j] > tableau[j + 1]) {
        let temp = tableau[j];
        tableau[j] = tableau[j + 1];
        tableau[j + 1] = temp;
      }
    }
  }
}
if (tableau.some(isNaN)) {
  console.error("la saisie n'est pas un nombre");
  process.exit(1);
}
bubbleSort(tableau);
console.log(tableau); 
