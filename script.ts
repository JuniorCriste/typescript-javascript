/* Funções e Variáveis */

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


/* Condicionais */
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

console.log("- - - - - - -");

/* Switch Case */
let dia : string;
switch ( new Date().getDate()) {
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