//Questão 4
//Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado
//Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const dados = [
  {
    estado: "SP",
    valor: 67836.43,
  },
  {
    estado: "RJ",
    valor: 36678.66,
  },
  {
    estado: "MG",
    valor: 29229.88,
  },
  {
    estado: "ES",
    valor: 27165.48,
  },
  {
    estado: "outros",
    valor: 19849.53,
  },
];

const valores = dados.map(function (estado) {
  const array = [];
  array.push(estado.valor);
  return array;
});

//calcular faturamento total
let faturamentoTotal = valores.reduce(function (valorAcumulado, valorAtual) {
  let soma = parseFloat(valorAcumulado) + parseFloat(valorAtual);
  return soma;
});

let percentuais = dados.map(function (objeto) {
  let percentual = Math.floor((objeto.valor / faturamentoTotal) * 100);
  let retorno = `${objeto.estado}: ${percentual}% `;
  return retorno;
});
console.log(`Faturamento total: $${faturamentoTotal}`);
console.log(percentuais);
