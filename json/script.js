// Sem JSON:
/*let nome = "Andrelon";
let idade = 23;
let produtos = ["Mouse dell", "Teclado lenovo", "Monitor fmaxx"];
let valorProdutos = [29.90, 140.00, 329.99];

gerarPedido(nome, produtos, valorProdutos, idade);

function gerarPedido(name, produtos, valorProdutos, idade) {
    console.log("O comprador é " + nome);
    console.log("A idade é " + idade);
    console.log("------------------");
    console.log("O produto é " + produtos[0]);
    console.log("O valor é " + valorProdutos[0]);
}*/

// Com JSON:
let invoice = {
    nome: "Andrelon",
    idade: 23,
    produtos: {
        0: ["Mouse dell", 29.90],
        1: ["Teclado lenovo", 140.00],
        2: ["Monitor fmaxx", 329.99],
        2: ["Televisão 65 polegadas", 2199.90],
    }
}

gerarPedidoJSON(invoice);

function gerarPedidoJSON(invoice) {
    console.log(`O comprador é ${invoice.nome}`);
    console.log(`A idade é ${invoice.idade}`);
    console.log("------------------");

    for(let index in invoice.produtos){
        let [produtoNome, produtoValor] = invoice.produtos[index]
        console.log(`- ${produtoNome}: ${produtoValor    }`);
    }
}