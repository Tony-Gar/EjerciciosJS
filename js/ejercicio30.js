
const labelMultiplicar = document.createElement('label');
labelMultiplicar.textContent = "Ingresa dos números para multiplicar:";
document.body.appendChild(labelMultiplicar);

const inputMultiplicar1 = document.createElement('input');
inputMultiplicar1.setAttribute('type', 'number');
inputMultiplicar1.setAttribute('placeholder', 'Número 1');
document.body.appendChild(inputMultiplicar1);

const inputMultiplicar2 = document.createElement('input');
inputMultiplicar2.setAttribute('type', 'number');
inputMultiplicar2.setAttribute('placeholder', 'Número 2');
document.body.appendChild(inputMultiplicar2);

const buttonMultiplicar = document.createElement('button');
buttonMultiplicar.textContent = 'Multiplicar';
document.body.appendChild(buttonMultiplicar);

const resultMultiplicarText = document.createElement('p');
resultMultiplicarText.textContent = 'Resultado de la multiplicación: ';
const resultMultiplicarSpan = document.createElement('span');
resultMultiplicarSpan.setAttribute('id', 'resultadoMultiplicar');
resultMultiplicarText.appendChild(resultMultiplicarSpan);
document.body.appendChild(resultMultiplicarText);


buttonMultiplicar.addEventListener('click', function() {
    let a = Number(inputMultiplicar1.value);
    let b = Number(inputMultiplicar2.value);
    let multiplicar = function(a, b) {
        return a * b;
    };
    resultMultiplicarSpan.textContent = multiplicar(a, b);
});
