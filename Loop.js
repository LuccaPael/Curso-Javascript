let cores = ['preto', 'branco', 'azul', 'vermelho'];
let frutas = ['maçã', 'laranja', 'banana', 'uva'];
let times = ['Palmeiras', 'Flamengo', 'Santos'];


//Primeiro For:
for (let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
}


//Segundo For:
for (let i in frutas) {
    console.log(cores[i]);
}


//Terceiro For:
for (let time in times) {
    console.log(time);
}




//Array com objetos
let passaportes = [
    {nome: 'Carlos', pais: 'Brasil'},
    {nome: 'Peter', pais: 'EUA'},
    {nome: 'Mario', país: 'Itália'}
];


for (let passaporte of passaportes){
    console.log(passaporte.nome);
}


