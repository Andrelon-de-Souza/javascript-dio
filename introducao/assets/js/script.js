var currentNumberwrapper = document.getElementById('currentNumber');
var buttonAdicionar = document.getElementById('adicionar');
var buttonSubtrair = document.getElementById('subtrair');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberwrapper.innerHTML = currentNumber;

    if(currentNumber < 0) {
        currentNumberwrapper.style.color = "red";
    } else if(currentNumber > 0){
        currentNumberwrapper.style.color = "blue";
    } else{
        currentNumberwrapper.style.color = "black";
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberwrapper.innerHTML = currentNumber;

    if(currentNumber < 0) {
        currentNumberwrapper.style.color = "red";
    } else if(currentNumber > 0){
        currentNumberwrapper.style.color = "blue";
    } else{
        currentNumberwrapper.style.color = "black";
    }
}