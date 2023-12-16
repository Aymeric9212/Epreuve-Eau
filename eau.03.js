const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code

function fibo(n) {
  if (n <= 1) {
    return n;
  } else {
    let a = 0,
      b = 1,
      temp;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
}

let position = prompt("Entrez une position dans la suite de Fibonacci : ");
if (isNaN(position) || position < 0) {
  console.error("Veuillez entrer une position valide");
  process.exit(1);
}

let resultat = fibo(position);

console.log(resultat); 
