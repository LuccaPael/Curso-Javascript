// Declarar array utilizando função letrutora - function
let carro = new Array ();
let pessoas = new Array ('Amanda', 'Bruno', 'Carlos'); 
let numeros = new Array (5);  /* O tamanho será igual a 5  */

console.log(numeros.length);
console.log(numeros);
console.log(pessoas.length);

// Declarar array
let paises = [];
let clubes = ['Palmeiras', 'Flamengo', 'Santos'];




// Remover o último elemento do array:  nomeArray.pop('elemento')
// Remover o primeiro elemento do array:  nomeArray.shift('elemento')
// Adicionar elemento no início do array:  nomeArray.unshift('elemento')
// Adicionar elemento separador (string) entre os objetos do array: nomeArray.join(', ')





// Remove
let cores = ["Azul", "Branco", "Vermelho"];
console.log(cores.splice(1, 1)); // posição 1, remove 1

// outuput:
// ["Joaquim"]

// array atual: 
// ["Maria", "Marcos"]





// Adiciona
let nomes = ["Maria", "Joaquim", "Marcos"];
console.log(nomes.splice(1, 0, "Marcia", "Paulo")); // posição 1, remove nenhum, adiciona "Marcia" e "Paulo"

// outuput:
// [] 

// array atual: 
// ["Maria", "Marcia", "Paulo", "Joaquim", "Marcos"]



//Comando Join
let fruits = ['Maçã', 'Uva', 'Laranja'];
console.length(fruits);

//Alterar elemento Array
fruits [1] = "Pêra";
fruits[fruits.lenght - 1] = "Abacaxi";
console.length(fruits);


/* Outras funções de array: https://www.freecodecamp.org/portuguese/news/como-manipular-arrays-em-javascript/
    - toString()     → Converte array em string separa por vírgulas.
    - join()         → Combina todos os elementos do array em uma string.
    - concat()       → Combina dois arrays/adiciona itens em e retorna um novo array.
    - push()         → Adiciona itens ao final de um array e altera o original.
    - pop()          → remove o último item de um array e o retorna
    - shift()        → Remove o primeiro item 
    - unshift()      → Adiciona itens ao início do array e altera o original.
    - splice()       → Altera um array adicionando, removendo e inserindo elementos.
    - slice()        → Copia uma parte do array e transforma em novo array.
    - split()        → Divide uma string em substrings e as retorna como um array.
    - indexOf()      → Procura por item e retorna o índice onde foi encontrado.
    - lastIndexOf()  → Procura tem (direita p/ esquerda) e retorna o último índice.
    - filter()       → Cria array se os itens passarem por um teste condicional.
    - map()          → Cria um array manipulando os valores do array.
    - reduce()       → Calcula um único valor com base em um array.
    - forEach()      → Itera por um array, aplicando uma função em todos os itens.
    - every()        → Verifica se todos  passam em  um teste condicional.
    - some()         → Verifica se alguns dos itens passam em  um teste condicional.
    - includes()     → Verifica se um array contém um item determinado.

    */


//Acessar array dentro de array
let lista = ['lucca', ['x', 'y']];

console.log(lista[1][0])
