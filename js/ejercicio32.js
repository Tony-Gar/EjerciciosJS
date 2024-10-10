
const labelMultiplicarPorDos = document.createElement('label');
labelMultiplicarPorDos.textContent = "Ingresa números separados por comas para multiplicar por 2:";
document.body.appendChild(labelMultiplicarPorDos);

const inputMultiplicarPorDos = document.createElement('input');
inputMultiplicarPorDos.setAttribute('type', 'text');
inputMultiplicarPorDos.setAttribute('placeholder', '1,2,3,4,5');
document.body.appendChild(inputMultiplicarPorDos);

const buttonMultiplicarPorDos = document.createElement('button');
buttonMultiplicarPorDos.textContent = 'Multiplicar por 2';
document.body.appendChild(buttonMultiplicarPorDos);

const resultMultiplicarPorDosText = document.createElement('p');
resultMultiplicarPorDosText.textContent = 'Números multiplicados por 2: ';
const resultMultiplicarPorDosSpan = document.createElement('span');
resultMultiplicarPorDosSpan.setAttribute('id', 'resultadoMultiplicarPorDos');
resultMultiplicarPorDosText.appendChild(resultMultiplicarPorDosSpan);
document.body.appendChild(resultMultiplicarPorDosText);


buttonMultiplicarPorDos.addEventListener('click', function() {
    let array = inputMultiplicarPorDos.value.split(',').map(Number);
    let multiplicarPorDos = (array) => array.map(num => num * 2);
    resultMultiplicarPorDosSpan.textContent = multiplicarPorDos(array).join(', ');
});
