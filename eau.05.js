const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

function recherchechaine(chainePrincipal, sousChaine) {
  if (!sousChaine) {
    console.error("Erreur la sous chaine est vide");
    process.exit(1);
  }
  if (chainePrincipal.includes(sousChaine)) {
    console.log(
      "La sous chaine " + sousChaine + " a été trouvé dans la chaine principal"
    );
  } else {
    console.log(
      "La sous chaine " +
        sousChaine +
        " n' a pas été trouvé dans la sous chaine"
    );
  }
}

const sousChaine = "comment";
const chainePrincipal = "Salut commment çà va ";

recherchechaine(chainePrincipal, sousChaine);
 
