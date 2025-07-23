
const { gets, print } = require('./funcoes-auxiliares');

const valorSalario = gets();
const ValorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
    
}

function pegarAliquota(salario) {
    let percentualBase = 0; 
if(salario > 0 && salario <= 1100) {
        percentualBase = 5; 
    } else if(salario > 1100 && salario <= 2500) {
        percentualBase = 10;
    } else {
        percentualBase = 15;
    }

    return percentualBase;
}

const aliquotasImposto = pegarAliquota(valorSalario);
const valorImposto = calcularPorcentagem(valorSalario, aliquotasImposto);
const valorATransferir = valorSalario - valorImposto + ValorBeneficios;

print(valorATransferir);