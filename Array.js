// Declarar array utilizando função construtora - function
const carro = new Array ();
const pessoas = new Array ('Amanda', 'Bruno', 'Carlos'); 
const numeros = new Array (5);  /* O tamanho será igual a 5  */

console.log(numeros.length);
console.log(numeros);
console.log(pessoas.length);

// Declarar array
const paises = [];
const clubes = ['Palmeiras', 'Flamengo', 'Santos'];




// Remover o último elemento do array:  nomeArray.pop('elemento')
// Remover o primeiro elemento do array:  nomeArray.shift('elemento')
// Adicionar elemento no início do array:  nomeArray.unshift('elemento')



// Remove
const cores = ["Azul", "Branco", "Vermelho"];
console.log(cores.splice(1, 1)); // posição 1, remove 1

// outuput:
// ["Joaquim"]

// array atual: 
// ["Maria", "Marcos"]


// Adiciona
const pessoas = ["Maria", "Joaquim", "Marcos"];
console.log(pessoas.splice(1, 0, "Marcia", "Paulo")); // posição 1, remove nenhum, adiciona "Marcia" e "Paulo"

// outuput:
// [] 

// array atual: 
// ["Maria", "Marcia", "Paulo", "Joaquim", "Marcos"]