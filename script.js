/* 1. Funções e Variáveis */
console.log("1. Variáveis e Funções");
function media(num1, num2) {
    return (num1 + num2) / 2;
}
var result = media(43, 90);
var result2 = media(100, 90);
var media2 = function (num1, num2) { return (num1 + num2) / 2; };
console.log(result);
console.log(result2);
var hora = 19;
console.log(hora < 18 ? "Boa Tarde" : "Boa Noite");
console.log("- - - - - - -");
/* 2. Condicionais */
console.log("2. Condicionais");
if (hora < 12) {
    console.log("BOM DIA!");
}
if (hora < 12) {
    console.log("BOM DIA!");
}
else {
    console.log("BOA TARDE");
}
if (hora < 12) {
    console.log("BOM DIA!");
}
else if (hora >= 12 && hora <= 17) {
    console.log("BOA TARDE");
}
else {
    console.log("BOA NOITE!");
}
/* Switch Case */
var dia;
switch (new Date().getDay()) {
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
var contador;
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
} while (contador <= 100);
/* 3. Classes */
var Carro = /** @class */ (function () {
    function Carro(marca) {
        this.nomedocarro = marca;
    }
    Carro.prototype.apresentacao = function () {
        return "Eu tenho um " + this.nomedocarro;
    };
    return Carro;
}());
var meucarro = new Carro("Amarok"); //Cria o objeto "Carro", armazenando ele na variável "meucarro" e passa "marca" como parâmetro.
meucarro.apresentacao();
console.log(meucarro.apresentacao());
