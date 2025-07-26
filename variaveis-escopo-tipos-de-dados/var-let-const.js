if(true) {
    var var1 = 10;
}

console.log();


function teste() {
    var var2 = 10;
}

teste();
//console.log(var2); // Dará erro pois a variável dentro de função não pode ser acessada fora dela.



if(true) {
    let var3 = 10;
}

//console.log(var3); // Dará erro pois o let se restringi a qualquer tipo de bloco


if(true) {
    const x = 10;
}

//console.log(x); // Dará erro pois o const se restringi a qualquer tipo de bloco igual ao let

x = 11 // A diferença é que ele também não pode ser  reatribuido um novo valor, nem mesmo dentro do próprio bloco onde ele está declarado, diferente do var e let que podem ter essa reatribuição.