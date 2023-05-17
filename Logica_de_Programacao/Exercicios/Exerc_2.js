//Suponha que temos um array de números e queremos calcular a média e o desvio padrão desses valores. Podemos efetuar esses mesmos cálculos no estilo funcional conciso, usando os métodos de array map() e reduce()


// Primeiramente, define duas funções simples
var sum = function(x,y) { return x+y; };
var square = function(x) { return x*x; };

// Calculando a média
var data = [4,6,8,10,12];
var mean = data.reduce(sum)/data.length;
console.log(mean);
// Calculando o desvio padrão
var deviations = data.map(function(x) {return x-mean;});
var stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));

console.log(stddev);