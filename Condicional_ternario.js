let isMember = true;

//condicional ternaria (?)
//deu certo >> 2 >> deu errado? >> 10
let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Você é membro' : 'Você não é membro');
console.log("Frete: " + shipping);


// Teste
let team = "Palmeiras"
let isResponse = team === "Palmeiras" ? "Palmeiras é o meu time." : "Você escolheu o time errado.";

console.log(isResponse);



// Teste 2
let age = 14;
let isAdult = ((age >= 18 && age < 60) ? 'Sim' : 'Não');
console.log(isAdult);