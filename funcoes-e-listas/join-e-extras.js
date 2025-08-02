const lista = [{nome: 'Andrelon'}, {nome: 'Valeska'}, {nome: 'Cleide'}, {nome: 'Andre'}];

console.log(
    lista.map(e => e.nome)
        .filter((e) => e.startsWith('A'))
        .join('; ')
);

console.log(lista.map((e) => e.nome).join('; '));


const elementosEmHtml = lista
        .filter((e) => e.nome.startsWith('A'))
        .map(e => `<li>${e.nome}</li>`)
        .join('');

        console.log(elementosEmHtml);
        