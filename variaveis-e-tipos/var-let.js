numberOne = 1;

console.log(numberOne + 2);

var numberOne; // let só pode ser declarado antes da atribuição;

var firstName = 'João';
let lastName = 'Souza';

if(firstName === 'João') {
    let lastName = 'Rodrigues';
    var firstName = 'Pedro';
    lastName = 'Silva';

    console.log(lastName);
    
}

console.log(firstName, lastName);
