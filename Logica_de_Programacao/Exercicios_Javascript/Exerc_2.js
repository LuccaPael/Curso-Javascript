//Suponha que temos um array de números e queremos calcular a média e o desvio padrão desses valores. Podemos efetuar esses mesmos cálculos no estilo funcional conciso, usando os métodos de array map() e reduce()


// Primeiramente, define duas funções simples
var sum = function(x,y) {
    return x+y;
};
var square = function(x) {
    return x*x;
};

// Então, usa essas funções com os métodos Array para calcular a média e o desvio padrão
let data = [1,1,3,5,5];
let mean = data.reduce(sum)/data.length;
let deviations = data.map(function(x) { return x-mean; });