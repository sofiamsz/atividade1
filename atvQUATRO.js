var teclado = require("prompt-sync")();
var Fahrenheit = parseInt(teclado("Digite o n\u00FAmero de graus celcius"));
var celcius = (Fahrenheit - 32) * 5 / 9;
console.log("O valor transformado de celcius em Fahrenheit \u00E9 de ".concat(celcius));
