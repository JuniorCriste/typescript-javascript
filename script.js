/* Funções e Variáveis */
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
/* Condicionais */
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
console.log("- - - - - - -");
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
