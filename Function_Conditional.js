function maiorDeIdade (idade) {
   if(idade >= 18) {
      return true;
   } else {
      return false; 
   }
}

//let verificacao = maiorDeIdade(14);
//console.log(verificacao);

let idade = 25;
let verificacao = maiorDeIdade(idade);


//esse if vai analisar se "verificacao" é true ou false
if (verificacao) {      
    console.log("É maior de idade");
} else {
 console.log("É menor de idade"); 
}


