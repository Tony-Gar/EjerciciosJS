// Crear elementos en el DOM
const labelSuma = document.createElement('label');
labelSuma.textContent = "Ingresa números separados por comas:";
document.body.appendChild(labelSuma);

const inputSuma = document.createElement('input');
inputSuma.setAttribute('type', 'text');
inputSuma.setAttribute('id', 'arraySumaInput');
inputSuma.setAttribute('placeholder', '10,20,30,40');
document.body.appendChild(inputSuma);

const buttonSuma = document.createElement('button');
buttonSuma.textContent = 'Sumar Elementos';
document.body.appendChild(buttonSuma);

const resultText = document.createElement('p');
resultText.textContent = 'Suma: ';
const resultSpan = document.createElement('span');
resultSpan.setAttribute('id', 'resultadoSuma');
resultText.appendChild(resultSpan);
document.body.appendChild(resultText);

buttonSuma.addEventListener('click', function() {
    let array = document.getElementById('arraySumaInput').value.split(',').map(Number);
    let suma = array.reduce((acc, num) => acc + num, 0);
    document.getElementById('resultadoSuma').textContent = suma;
});

