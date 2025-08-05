const promessaDeUmNumero = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100);
    // Se der certo, chamará:
    resolve(numero);
    // Bloco de código;
    // Se der errado, chamará:
    reject();
    }, 1000);
});

console.log('Boraaa');

promessaDeUmNumero.then((value) => {
    console.log(value);
    return value + 10;
})
.then((value) => {
    console.log(value);
    
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log('Finalizou!');
})