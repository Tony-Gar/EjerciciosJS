
const labelMaxMin = document.createElement('label');
labelMaxMin.textContent = "Ingresa números separados por comas para encontrar el máximo y mínimo:";
document.body.appendChild(labelMaxMin);

const inputMaxMin = document.createElement('input');
inputMaxMin.setAttribute('type', 'text');
inputMaxMin.setAttribute('placeholder', '10,20,30,40');
document.body.appendChild(inputMaxMin);

const buttonMaxMin = document.createElement('button');
buttonMaxMin.textContent = 'Calcular Máximo y Mínimo';
document.body.appendChild(buttonMaxMin);

const resultMaxMinText = document.createElement('p');
resultMaxMinText.textContent = 'Máximo y Mínimo: ';
const resultMaxMinSpan = document.createElement('span');
resultMaxMinSpan.setAttribute('id', 'resultadoMaxMin');
resultMaxMinText.appendChild(resultMaxMinSpan);
document.body.appendChild(resultMaxMinText);

buttonMaxMin.addEventListener('click', function() {
    let array = inputMaxMin.value.split(',').map(Number);
    let max = Math.max(...array);
    let min = Math.min(...array);
    resultMaxMinSpan.textContent = `Máximo: ${max}, Mínimo: ${min}`;
});

