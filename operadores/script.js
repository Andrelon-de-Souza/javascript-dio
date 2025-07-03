// Operadores Aritméticos:
// +, -, /, * e %
let idade = 30;

console.log(idade);

idade = 30 + 6;

console.log(idade);

// Operadores Relacionais:
// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente?
// > Maior que
// < Menor que
// >= Maior ou igual a
// <= Menor ou igual a
let numero = "1";
console.log(numero === 1);

let marca = "Apple"
let resultado = marca !== "Samsung"
console.log(resultado);


let idadeMinima = 18;
let idadeUsuario = 18;
let idadePermitidaValida = idadeUsuario >= idadeMinima;

console.log(idadePermitidaValida);

// Operadores Lógicos:
// AND - &&
// OR - ||
// NOT - !
let anos = 18;
let cpfVerificado = true;
let aprovado = (anos > 18) && (cpfVerificado === true);
console.log(aprovado);

aprovado = (anos > 18) || (cpfVerificado === true);
console.log(aprovado);

aprovado = (anos > 18) || (cpfVerificado !== true);
console.log(!aprovado);