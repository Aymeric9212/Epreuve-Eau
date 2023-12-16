const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

let arg = prompt(" Entrez une phrase à inverser : ");
let arginverse = arg.split(" ").reverse().join("\n");

/* affiche une errreur si rien n'est tapé */

if (!arg.trim()) {
  console.error("La phrase ne peut être vide");
  process_params.exit(1);
}
console.log(arginverse);
