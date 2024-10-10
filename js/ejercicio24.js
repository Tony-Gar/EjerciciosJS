
const labelSumaNumeros = document.createElement('label');
labelSumaNumeros.textContent = "Ingresa el primer número:";
document.body.appendChild(labelSumaNumeros);

const inputSuma1 = document.createElement('input');
inputSuma1.setAttribute('type', 'number');
inputSuma1.setAttribute('id', 'numero1');
document.body.appendChild(inputSuma1);

const labelSuma2 = document.createElement('label');
labelSuma2.textContent = "Ingresa el segundo número:";
document.body.appendChild(labelSuma2);

const inputSuma2 = document.createElement('input');
inputSuma2.setAttribute('type', 'number');
inputSuma2.setAttribute('id', 'numero2');
document.body.appendChild(inputSuma2);

const buttonSumaNumeros = document.createElement('button');
buttonSumaNumeros.textContent = 'Sumar Números';
document.body.appendChild(buttonSumaNumeros);

const resultSumaNumerosText = document.createElement('p');
resultSumaNumerosText.textContent = 'Resultado de la suma: ';
const resultSumaNumerosSpan = document.createElement('span');
resultSumaNumerosSpan.setAttribute('id', 'resultadoSumaNumeros');
resultSumaNumerosText.appendChild(resultSumaNumerosSpan);
document.body.appendChild(resultSumaNumerosText);


buttonSumaNumeros.addEventListener('click', function() {
    let a = Number(document.getElementById('numero1').value);
    let b = Number(document.getElementById('numero2').value);
    let resultado = a + b;
    resultSumaNumerosSpan.textContent = resultado;
});

