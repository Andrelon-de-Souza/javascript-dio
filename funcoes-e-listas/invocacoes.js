const pessoa = {
    nome: 'Andre',
    idade: 24
}

function gritar(prefixo) {
    console.log(prefixo, this.nome);
}

gritar('Olaaaa'); // Invoção Direta

gritar.apply(pessoa, ['Olaaaa']); // Invocaçao Apply

gritar.call(pessoa, 'Olaaaa'); // Invocaçao Call

