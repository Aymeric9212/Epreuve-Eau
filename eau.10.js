const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let phrase =
  " Déboguer, c'est comme être le détective dans un film policier où vous êtes aussi le meurtrier.";
console.log(phrase);
let tableau = phrase.split(" ");
let elementRechercher = prompt("Entrez l'élément à rechercher : ");

function rechercheIndex(tableau, elementRechercher) {
  const elementsARechercher = tableau.slice(0, -1);

  const index = elementsARechercher.indexOf(elementRechercher);

  if (index !== -1) {
    console.log(
      "L'élément ${elementRechercher} a été trouvé à l'index ${index}."
    );
  } else {
    n;
    console.log(
      "L'élément ${elementRechercher} n'a pas été trouvé dans le tableau."
    );
  }

  return index;
}

if (tableau.length < 2) {
  console.error("La phrase doit posséder deux argument minimums");
  process.exit(1);
}

rechercheIndex(tableau, elementRechercher);
