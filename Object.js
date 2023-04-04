//Objeto
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
