// Questão 3

//Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// 🔸O menor valor de faturamento ocorrido em um dia do mês;
// 🔸O maior valor de faturamento ocorrido em um dia do mês;
// 🔸Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

//Importar os dados
import { dados } from "./dados.js";

//Iterar sobre dados e selecionar os valores
const valores = dados.map(function (objeto) {
  let array = [];
  array.push(objeto.valor);
  return array;
});

console.log("Faturamento mensal:");
console.log(valores);

//Retornar maior valor dos dados
const maiorFaturamento = valores.reduce(function (valorAcumulado, valorAtual) {
  return Math.max(valorAcumulado, valorAtual);
});

//Retornar menor valor dos dados (que não seja 0 )
const menorFaturamento = valores
  .filter((valor) => valor > 0)
  .reduce(function (valorAcumulado, valorAtual) {
    return Math.min(valorAcumulado, valorAtual);
  });

//Retornar número de dias no mês em que o valor de faturamento diário foi superior à média mensal
// (1) - Definir dias em que há faturamento
let diasdeFaturamento = 0;
for (let i = 0; i < dados.length; i++) {
  if (dados[i].valor > 0) {
    diasdeFaturamento = diasdeFaturamento + 1;
  }
}
// (2) - Calcular média mensal
const mediaMensal =
  valores.reduce(
    (valorAcumulado, valorAtual) =>
      Math.round(valorAcumulado) + Math.round(valorAtual)
  ) / diasdeFaturamento;

// (3) - Definir número de dias
let diasMaior = 0;
for (let i = 0; i < dados.length; i++) {
  if (dados[i].valor > mediaMensal) {
    diasMaior = diasMaior + 1;
  }
}
console.log(`Menor valor de faturamento: $${menorFaturamento}`);
console.log(`Maior valor de faturamento: $${maiorFaturamento}`);
console.log(`Número de dias em que o faturamento diário foi superior à média mensal: ${diasMaior} dias`);
