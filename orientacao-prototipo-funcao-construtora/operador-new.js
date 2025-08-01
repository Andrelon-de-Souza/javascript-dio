function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`);
    
}

const fran = {
    genero: 'Feminino'
}

Pessoa.call(fran, 'Francielle', 14);

console.log(fran);

