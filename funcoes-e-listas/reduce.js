const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaTodosNumeros = lista.reduce((previous, curent) => {
    console.log(previous, curent);
    return previous + curent;
}, 0);

console.log(somaTodosNumeros);
