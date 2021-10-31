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