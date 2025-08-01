const pessoa =  {
    idade: 18,
}

const andre = {
    nome: 'Andre',
    idade: 23,
    __proto__: pessoa
}

const valeska = {
    nome: 'Valeska',
    idade: 26,
    __proto__: pessoa
}

console.log(andre.idade);
console.log(valeska.idade);