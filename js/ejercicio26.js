
const labelFactorial = document.createElement('label');
labelFactorial.textContent = "Ingresa un número para calcular su factorial:";
document.body.appendChild(labelFactorial);

const inputFactorial = document.createElement('input');
inputFactorial.setAttribute('type', 'number');
inputFactorial.setAttribute('id', 'numeroFactorial');
document.body.appendChild(inputFactorial);

const buttonFactorial = document.createElement('button');
buttonFactorial.textContent = 'Calcular Factorial';
document.body.appendChild(buttonFactorial);

const resultFactorialText = document.createElement('p');
resultFactorialText.textContent = 'Factorial: ';
const resultFactorialSpan = document.createElement('span');
resultFactorialSpan.setAttribute('id', 'resultadoFactorial');
resultFactorialText.appendChild(resultFactorialSpan);
document.body.appendChild(resultFactorialText);


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


buttonFactorial.addEventListener('click', function() {
    let numero = Number(document.getElementById('numeroFactorial').value);
    let resultado = factorial(numero);
    resultFactorialSpan.textContent = resultado;
});

