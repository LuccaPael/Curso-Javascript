// Criando uma variável de escopo global
let count = 0;

function add() {
    count++;      
}

add();
add();

console.log(count);



// Criando uma variável de escopo local (dentro da function)
let contador = 0;

function add() {
    let contador = 0;
    contador++
}

add()
add()

console.log(contador); 


// A variável de escopo global tem preferência sobre uma função de escopo global de mesmo nome