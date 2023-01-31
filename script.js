var valorEmDolar = 30;
var cotacaoDoDolar = 5.12;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);

var valorEmEuro = 30;
var cotacaoDoEuro = 5.55;
var valorEmReal1 = valorEmEuro * cotacaoDoEuro;
valorEmReal1 = valorEmReal1.toFixed(2);

alert("Valor em Dólar: U$ " + valorEmDolar + " | Valor em Real: R$ " + valorEmReal + "\nValor em Euro: € " + valorEmEuro + " | Valor em Real: R$ " + valorEmReal1);
