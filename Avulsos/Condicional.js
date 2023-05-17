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
let idadeTeste = "20";

if(idadeTeste === 20) {
	console.log("O dado informado foi do tipo correto");
} else{
	console.log("O dado informado não foi do tipo correto");
}


// Multicondicionais II
let cargo = "diretor";

if (cargo === "secretário" || cargo === "assistente"){
	
	console.log("Este cargo informado receberá auxílio, por se enquadrar no requisito: secretário ou assistente");
} else{
	console.log("Este cargo informado não receberá auxílio");
	
}

// Multicondicionais &&
let saborPicole = "uva";
let precoPicole = 5;

if (saborPicole === "uva" && precoPicole <= 8.50){
	
	console.log("Comprarei o picolé");
} else{
	console.log("Não comprarei o picolé");
	
}


// Teste
let x = 10;
let y = 5;

console.log(x < y);
