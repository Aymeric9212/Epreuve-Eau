const prompt = require("prompt-sync")(); //cette ligne permet d'autoriser prompt sur visual code



function trieSelection(array){
  const n = array.length;

  
  for (let i = 0; i < n - 1; i++) {

   
    let minIndex = i;

    
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }


  return array;
  }
  let arguments = prompt ("Entrez des nombres séparés par des espaces : ")
  let tableau = arguments.split(" ").map(Number)
  if (tableau.some(isNaN )) {
    console.error("Vous n'avez pas entré un chiffre valide")
    process.exit(1)
  }

console.log(trieSelection(tableau))
