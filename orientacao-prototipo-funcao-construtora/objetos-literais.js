const pessoa = {
    genero: 'Feminino'
}

const cleide = Object.create(pessoa)

cleide.nome = 'Cleide'

console.log(cleide);
console.log(cleide.genero);