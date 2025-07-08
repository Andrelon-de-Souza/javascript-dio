torrar();

function torrar() {
    console.log("Torrando pão");
    injetarPao();
}

function injetarPao() {
    console.log("Preparando para injetar o pão");
    console.log("Finalizado");
}


// Com parâmetros:
torrarPao("Pão de Forma", "Valeska", 10.90);
torrarPao("Pão integral");

function torrarPao(pao, nome = "Cliente", valor) {
    console.log("Torrada feita com " + pao);
    console.log("Ele é um pedido de " + nome);
    console.log("O valor total é de " + valor);
}


// Com retorno:
let resultado = soma(5, 10);
console.log("O resultado dessa função é " + resultado);


function soma(numA, numB) {
    let somatoria = numA + numB;
    return somatoria;
}

let userName = getFirstName("Andrelon de Souza Xavier");
console.log("Seja bem vindo " + userName);

userName = getFirstName("Valeska Souza Melo");
console.log("Seja bem vindo " + userName);

function getFirstName(name, splitChar = " ") {
    let firstName = name.split(splitChar)[0];
    return firstName;
}
