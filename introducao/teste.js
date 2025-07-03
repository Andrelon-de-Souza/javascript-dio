function soma(a, b) {
    return a + b;
}

console.log(soma(3, 5));

function returnEventValues (array) {
    let eventNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            eventNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);  
        }
    }
    console.log("Os números pares são: ", eventNums);
}

let array = [1, 2, 4, 5, 7, 8]; 

returnEventValues(array);