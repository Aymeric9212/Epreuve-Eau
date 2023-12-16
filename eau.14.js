const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

function trieAscii(element) {
  return element.sort(function (a, b) {
    return a.charCodeAt(0) - b.charCodeAt(0);
  });
}

let phrase = prompt("Entrez des arguements a trier : ");
let tableau = phrase.split(" ");

if (tableau.length === 0) {
  console.error("La phrase doit contenir des éléments");
  process.exit(1);
}

console.log(trieAscii(tableau));
 
