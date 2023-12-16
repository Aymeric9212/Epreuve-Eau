const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let argument = prompt("Saisir un argument");
if (!isNaN(argument)) {
  console.log("La chaîne est un nombre");
} else {
  console.log("La chaîne n'est pas un nombre");
}

if (!argument.trim()) {
  console.error("La saisie est vide");
  process.exit(1);
}
 
