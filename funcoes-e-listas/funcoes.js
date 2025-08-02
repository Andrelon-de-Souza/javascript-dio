// FUNCTION DECLARATION:
function falarMeuNome() {
    console.log('Meu nome é Andrelon');
    
}

const referencia = falarMeuNome;

referencia();

function falarMeuSobrenomeCompleto(falarMeuNome) {
    falarMeuNome();
    console.log('De Souza Xavier');
}

falarMeuSobrenomeCompleto(falarMeuNome);

// FUNCTION EXPRESSION:
const falarMeuNomeCompleto = function() {
    console.log('Meu nome é Andrelon de Souza Xavier!');
}

falarMeuNomeCompleto();