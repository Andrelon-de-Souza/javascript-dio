
const { gets, print} = require('./funcoes-auxiliares');

const entradas = gets()
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < entradas; i++) {
    const numero = gets();
    if(numero % 2 === 0){
        if( maiorNumeroPar === null || numero > maiorNumeroPar) {
        maiorNumeroPar = numero;
    }
    }else {
        if(menorNumeroImpar === null || numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        } else if(numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número ímpar: ${menorNumeroImpar}`);