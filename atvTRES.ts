let teclado = require(`prompt-sync`) ();
let tempcelcius = parseInt(teclado(`Digite o número de graus celcius`));

let Fahrenheit: number = tempcelcius * (9/5) + 32;

console.log (`O valor transformado de celcius em Fahrenheit é de ${Fahrenheit}`);
