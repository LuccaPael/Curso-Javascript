let fruits = ['Banana', 'Laranja', 'Maça', 'Pêra', 'Uva'];

//filter
let bigfruits = fruits.filter((item) => {
    //executada em todos os itens do array
    return item.length > 4;

});

console.log(bigfruits);



//every = só retorna true quando todos os itens do array satisfazem a condição
let testandoEvery = fruits.every((value) => {
    return value.length > 3;
});

if (testandoEvery) {
    console.log('Todos são maiores que 3');
} else {
    console.log('Não são todos maior que 3');
}



//some = retorna true se algum item do array satisfaz a condição
let testandoSome = fruits.some((value) => {
    return value.length > 3;
});

if (testandoSome) {
    console.log('Algum item é maior que 3');
} else {
    console.log('Nenhum item é maior que 3');
}



//includes = saber se há algum elemento dentro do meu array
if (fruits.includes('Uva')) {
    console.log('Tem uva no meu array');
} else {
    console.log('Não tem uva no meu array');
}