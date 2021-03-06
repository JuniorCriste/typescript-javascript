//ANOTAÇÕES: Usar "tsc script.ts" para gerar javascript. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/* 4. Classes */
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
/* 5. Heranças */
// Uma classe criada com uma herança, herda todos os métodos de outra classe,
// e é útil para reutilização de código. Para criar uma herança de classe,
// use a palavra-chave extends. A sintaxe básica para estender uma classe é:
var Modelo = /** @class */ (function (_super) {
    __extends(Modelo, _super);
    function Modelo(marca, mod) {
        var _this = _super.call(this, marca) || this;
        _this.modelo = mod;
        return _this;
    }
    Modelo.prototype.mostre = function () {
        return this.apresentacao() + ' ' + this.modelo;
    };
    return Modelo;
}(Carro));
var carromod = new Modelo("Chevrolet", "Blazer");
carromod.mostre();
console.log(carromod.mostre());
/* 5. Conceitos */
// Requisições Assíncronas: No JavaScript a programação é em thread único, ou seja, ele faz apenas uma rotina
//por vez.  Usando JavaScript assíncrono, é possível executar longas solicitações de rede sem bloquear a
//thread principal, ou seja sem bloquear a página Web.
// PROMISES = Promises (ou promessa) são uma das maneiras de lidar com operações assíncronas em JavaScript.
//Uma promise é semelhante a uma promessa da vida real: quando fazemos uma promessa na vida real,
//é uma garantia de que faremos algo no futuro. Podem ser "pending" ( estado inicial, antes de receber algum resultado;)
//"resolved" (Promessa cumprida) ou "rejected" (Promessa fracassada).
