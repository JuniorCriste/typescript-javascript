/* Funções e Variáveis */
function media(num1, num2) {
    return (num1 + num2) / 2;
}
var result = media(43, 90);
var result2 = media(100, 90);
var media2 = function (num1, num2) { return (num1 + num2) / 2; };
console.log(result);
console.log(result2);
var hora = 15;
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
