/* 1. Funções e Variáveis */
console.log("1. Variáveis e Funções");

function media(num1 : number, num2 : number) : number{
    return (num1 + num2) / 2;
}

let result = media(43, 90);
let result2 = media(100, 90);

let media2 = (num1, num2) => (num1 + num2) / 2;


console.log(result);
console.log(result2);


const hora: number = 19;

console.log( hora < 18 ? "Boa Tarde" : "Boa Noite");

console.log("- - - - - - -");


/* 2. Condicionais */
console.log("2. Condicionais");
if (hora < 12) {
    console.log("BOM DIA!");
}



if (hora < 12) {
    console.log("BOM DIA!");
} else {
    console.log("BOA TARDE");
}



if (hora < 12) {
    console.log("BOM DIA!");
} else if (hora >= 12 && hora <= 17 ){
    console.log("BOA TARDE");
} else {
    console.log("BOA NOITE!");
}


/* Switch Case */
let dia : string;
switch ( new Date().getDay()) {
    case 0: 
    dia = "Domingo";
    break;
    case 1: 
    dia = "Segunda";
    break;
    case 2: 
    dia = "Terça";
    break;
    case 3: 
    dia = "Quarta";
    break;
    case 4: 
    dia = "Quinta";
    break;
    case 5: 
    dia = "Sexta";
    break;
    case 6: 
    dia = "Sábado";
}


console.log(dia);

console.log("- - - - - - -");


/* 3. Repetições */
console.log("3. Repetições");


/* Laço for */
let contador : number;
for (contador = 1; contador < 10; contador++) {
    console.log("Contador é: " + contador);
}

/* Laço while */
contador = 0;
while (contador < 10) {
    console.log(contador);
    contador += 2;
}

/* Laço do/while */
contador = 0;
do {
    console.log("número " + contador);
    contador += 5;
} while(contador <= 100);



/* 4. Classes */
class Carro {
    nomedocarro: string;

    public constructor(marca: string) {
        this.nomedocarro = marca;
    }

    public apresentacao() {
        return "Eu tenho um " + this.nomedocarro;
    }
}

let meucarro = new Carro("Amarok"); //Cria o objeto "Carro", armazenando ele na variável "meucarro" e passa "marca" como parâmetro.

meucarro.apresentacao();


console.log(meucarro.apresentacao());




/* 5. Heranças */
// Uma classe criada com uma herança, herda todos os métodos de outra classe,
// e é útil para reutilização de código. Para criar uma herança de classe,
// use a palavra-chave extends. A sintaxe básica para estender uma classe é:





