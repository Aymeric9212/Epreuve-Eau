const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let min = parseInt(prompt("Entrez une valeur minimale : "));
let max = parseInt(prompt("Entrez une valeur maximale : "));

function numeration(min, max) {
  for (i = min; i < max; i++) console.log(i);
}

if (min >= max) {
  console.error(" Le minimum ne peut pas être plus grand que le maximum");
  process.exit(1);
}
if (isNaN(min) || isNaN(max)) {
  console.error("Les valeurs doivent être des chiffres");
  process.exit(2);
}

resultat = numeration(min, max);
 
