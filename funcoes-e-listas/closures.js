function soma(x) {
    return (y) => {
        return x + y;
    }
}

const someParcial = soma(10);

console.log(someParcial(20));
console.log(someParcial(30));
console.log(someParcial(40));
console.log(someParcial(50));