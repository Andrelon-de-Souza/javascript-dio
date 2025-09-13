let nome = 'Pedro';
let sobrenome = 'Silva';

let concatenado = nome.concat(sobrenome);

console.log(typeof nome);
console.log(typeof sobrenome);
console.log(typeof concatenado);
console.log(concatenado.length);

let exemplo = new String("Blablabla");
console.log(typeof exemplo);
console.log(concatenado);
concatenado = nome + " " + sobrenome;
console.log(concatenado);

let frase = "Olá, tudo bem?";


console.log(frase.split(""));
console.log(frase.split(" "));
console.log(frase.includes("tudo"));
console.log(frase.startsWith("O"));
console.log(frase.startsWith("R"));
console.log(frase.endsWith("?"));
console.log(frase.replace(",", "!"));

let stringModificada = frase.replace(",", "!");

console.log(stringModificada);