const pessoa = {
    genero: 'Masculino'
}

const andrelon = {
    nome: 'Andrelon',
    idade: 23,
    __proto__: pessoa
}

console.log(andrelon.genero);
