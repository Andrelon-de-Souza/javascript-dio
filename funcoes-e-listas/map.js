class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

const lista = [new Pessoa('Andre'), new Pessoa('Andrelon'), new Pessoa('Valeska'), new Pessoa('Leka')];

console.log(lista);


const listaNomes = lista.map((element) => {
    return element.name;
})

console.log(listaNomes);


// OUTRA FORMAS:

// FORMATO REDUZIDO
const listaNomesRed = lista.map((element) => element.name);

console.log(listaNomesRed);


// LISTA EM HTML
const listaNomesEmHtml = lista.map((element) => {
    return `
    <li>
    ${element.name}
    </li>
    `
});

console.log(listaNomesEmHtml);