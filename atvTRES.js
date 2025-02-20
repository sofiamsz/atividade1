var teclado = require("prompt-sync")();
var tempcelcius = parseInt(teclado("Digite o n\u00FAmero de graus celcius"));
var Fahrenheit = tempcelcius * (9 / 5) + 32;
console.log("O valor transformado de celcius em Fahrenheit \u00E9 de ".concat(Fahrenheit));
