const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

function majusculesurdeux(sentence) {
  let result = "";
  for (let i = 0; i < sentence.length; i++) {
    if (i % 2 === 0) {
      result += sentence[i].toUpperCase();
    } else {
      result += sentence[i].toLowerCase();
    }
  }
  return result;
}

let sentence = prompt("Entrez une phrase : ");
if (!sentence.trim()) {
  console.error("La saisie est vide");
  process.exit(1);
}

let result = majusculesurdeux(sentence);

console.log(result);
