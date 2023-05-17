let pessoa = {
    nome: 'Lucca',
    sobrenome: 'Pael',
    idade: 25,
    
     //criei uma function dentro do objeto
    nomeCompleto: function() {
        //This - Elemento que se refere ao próprio objeto
        return `${this.nome} ${this.sobrenome}`;    

    }

}

console.log(pessoa.nomeCompleto());


//OBS.: Arrow function não tem acesso ao 'this'