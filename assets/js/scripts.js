var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var subtrair = document.getElementById('subtrair');
var adicionar = document.getElementById('adicionar');

adicionar.addEventListener('click', function increment() {
    if(currentNumber <= 9){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else {
        currentNumber = currentNumber;
    }
});

subtrair.addEventListener('click', function decrement() {
    if(currentNumber >= 1) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else {
        currentNumber = currentNumber;
    }
});