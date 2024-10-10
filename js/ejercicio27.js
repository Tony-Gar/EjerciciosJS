
const labelPromedio = document.createElement('label');
labelPromedio.textContent = "Ingresa números separados por comas para calcular el promedio:";
document.body.appendChild(labelPromedio);

const inputPromedio = document.createElement('input');
inputPromedio.setAttribute('type', 'text');
inputPromedio.setAttribute('placeholder', '10,20,30');
document.body.appendChild(inputPromedio);

const buttonPromedio = document.createElement('button');
buttonPromedio.textContent = 'Calcular Promedio';
document.body.appendChild(buttonPromedio);

const resultPromedioText = document.createElement('p');
resultPromedioText.textContent = 'Promedio: ';
const resultPromedioSpan = document.createElement('span');
resultPromedioSpan.setAttribute('id', 'resultadoPromedio');
resultPromedioText.appendChild(resultPromedioSpan);
document.body.appendChild(resultPromedioText);

buttonPromedio.addEventListener('click', function() {
    let array = inputPromedio.value.split(',').map(Number);
    let suma = array.reduce((acc, num) => acc + num, 0);
    let promedio = suma / array.length;
    resultPromedioSpan.textContent = promedio;
});

