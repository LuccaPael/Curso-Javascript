let nomeCarro = "Fiat";

if (nomeCarro == "Ferrari"){
	console.log("O seu carro é ferrari.");
} else{
	console.log("O seu carro não é fiat");
}



let idade = 30;
if (idade < 27){
	console.log("Idade é menor que 27.");
	
} else{
	console.log("Idade maior que 27.");
}


let ano = 2025;
if (ano <= 2027){
	console.log("O ano é menor ou igual a 2027.");
	
} else{
	console.log("O ano é maior que 2027.");
}




// Diferença entre == e === (verificação estrita)
let idade = "20";

if(idade === 20) {
	console.log("O dado informado foi do tipo correto")	
} else{
	console.log("O dado informado não foi do tipo correto")
}
