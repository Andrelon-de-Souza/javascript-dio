let x = 10;
x = 20;

let  y = {numero: 10};
y.numero = 20;

// BOOLEAN
console.log(10 + '10');
console.log(10 - '10');

console.log(10 == '10');
console.log(10 === '10');

// NULL
let a = null; // Ausência de valor;
console.log(a);

// UNDEFINED
let b; // Ausência de declaração;
console.log(b);

// NUMBER
let i = 10;
let j = NaN;
console.log(typeof i);
console.log(typeof j);

// STRING
const id = 20;
console.log('<div id="' + id + '">\n\t teste\n<div>');
console.log(`<div id="${id}">
    teste
    <div>`);

// SYNBOL
const s = Symbol('10');
const l = Symbol('10');
const m = s;
console.log(s === l);
console.log(s === m);


// OBJECT
const pessoa = {
    nome: "Andrelon",
    idade: 23,
    apresentar: function() {
    console.log(`Meu nome é ${this.nome}`);
}
};

pessoa.sobrenome = "De Souza Xavier";
pessoa['nome'] = 'Valeska';

console.log(pessoa.nome);
console.log(pessoa['nome']);

pessoa.apresentar();

const o = pessoa.apresentar;

o();