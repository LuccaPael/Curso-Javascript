//Crie uma função chamada calculaMedia que recebe um array de números como parâmetro e retorna a média dos valores.

//Dica: para calcular a média, some todos os valores do array e divida pelo tamanho do array.



const numeros = [10, 20, 30, 40, 50];




let tamanhoArray = numeros.length;
console.log(tamanhoArray);

function calculaMedia(numeros) {
    let posicao = 0;
    let soma = 0;
    for (let i = 0; i < tamanhoArray; i++) {
        posicao = numeros[i];
        soma += posicao;
    }
    return soma
}


let media = calculaMedia(numeros);
console.log(media)


