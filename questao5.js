//Questão 5
//Escreva um programa que inverta os caracteres de um string.

function inverterString(str) {
  // (1). Usar o método split() para retornar um novo array
  const splitString = str.split(""); 

  // (2) Usar o método reverse() para espelhar o novo array
  const reverseArray = splitString.reverse(); 

  // (3) Usar o método join() para juntar os elementos de volta
  const joinArray = reverseArray.join(""); 

  //Step 4. Retorna a string invertidas
  return joinArray; // "olleh"
}

const stringInvertida = inverterString("inverter");
console.log(stringInvertida);
