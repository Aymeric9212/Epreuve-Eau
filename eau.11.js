const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let nombre = prompt("Entrez des nombres: ");
let tableau = nombre.split(" ").map(Number);
console.log(tableau);

tableau.sort(function (a, b) {
  return a - b;
});

let differenceMinimum = Infinity;
for (let i = 1; i < tableau.length; i++) {
  const difference = tableau[i] - tableau[i - 1];
  if (difference < differenceMinimum) {
    differenceMinimum = difference;
  }
}
console.log(differenceMinimum);

if (tableau.some(isNaN)) {
  console.error("La saisie n'est pas un nombre");
}
process.exit(1);
