var teclado = require("prompt-sync")();
console.log("-----------------");
console.log("- Calculo media -");
console.log("-----------------");
var nome = teclado("Digite o nome do aluno: ");
var n1 = parseInt(teclado("Digite a nota N1: "));
var n2 = parseInt(teclado("Digite a nota N2: "));
var media = (n1 + n2) / 2;
console.log("O nome do aluno \u00E9 ".concat(nome, " e a m\u00E9dia \u00E9 ").concat(media));
