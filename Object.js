//Objeto - Criação
let personagem = {
    nome: 'Naruto',
    idade: 23,
    pais: 'Konoha',

    //Array dentro de objeto
    roupas: ['laranja', 'branco'],

    //Objeto dentro de objeto
    caracteristicas:{ 
        forca: 25,
        patente: 'shinobi',
        golpe: 'hasengan'
    }
}

console.log(`O ${personagem.nome} nasceu em ${personagem.pais}.`);
console.log(personagem.caracteristicas.golpe);
console.log(personagem.roupas[1]);



//Objeto - Alteração
let aluno = {
    nome: 'José',
    idade: 12,
    ano: '7º ano',

    //Array dentro de objeto
    roupas: ['laranja', 'branco'],

    //Objeto dentro de objeto
    caracteristicas:{ 
        forca: 25,
        patente: 'shinobi',
        golpe: 'hasengan'
    }
}

aluno.nome = 'Pedro';
aluno.roupas.push('verde');
console.log(aluno.roupas[2]);




//Objeto - Array
let piloto = {
    nome: 'Hamilton',
    idade: 33,

    //objetos dentro de um array
    carros: [
        {modelo: 'Mercedes', cor:'preto'},  
        {modelo: 'Ferrari', cor:'vermelho'}
    ]
}

console.log(piloto.carros[0].modelo);
console.log(piloto.carros[0].cor);
console.log(piloto.carros[1].modelo);
console.log(piloto.carros[1].cor);
