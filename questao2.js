// Questão 2

//Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function fibonacci(num) {
  // x representa o primeiro termo,
  // y representa o segundo termo e,
  // z representa a soma de x e y .
  var resposta = [];
  var x = 0;
  var y = 1;
  var z;

  // Como os primeiros elementos são fixados.
  // Armazena os dois primeiros termos.
  resposta.push(x);
  resposta.push(y);

  var i = 2;
  while (i < num) {
    z = x + y;
    x = y;
    y = z;

    // Armazena o elemento atual
    resposta.push(z);
    i = i + 1;
  }
  return resposta;
}

const numeroTermos = 50; //para os 50 primeiros termos
const resposta = fibonacci(numeroTermos);
console.log(resposta);

const numeroEscolhido = function (numeroEscolhido) {
  if(resposta.includes(numeroEscolhido)){
    console.log(`O número ${numeroEscolhido} está contido `)
  }else{console.log(`O número ${numeroEscolhido} não está contido `)}}
  
  numeroEscolhido(13)
  numeroEscolhido(355)