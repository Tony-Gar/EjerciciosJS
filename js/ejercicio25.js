
const labelPar = document.createElement('label');
labelPar.textContent = "Ingresa un número:";
document.body.appendChild(labelPar);

const inputPar = document.createElement('input');
inputPar.setAttribute('type', 'number');
inputPar.setAttribute('id', 'numeroPar');
document.body.appendChild(inputPar);

const buttonPar = document.createElement('button');
buttonPar.textContent = 'Verificar Paridad';
document.body.appendChild(buttonPar);

const resultParText = document.createElement('p');
resultParText.textContent = 'El número es: ';
const resultParSpan = document.createElement('span');
resultParSpan.setAttribute('id', 'resultadoPar');
resultParText.appendChild(resultParSpan);
document.body.appendChild(resultParText);


buttonPar.addEventListener('click', function() {
    let numero = Number(document.getElementById('numeroPar').value);
    let resultado = (numero % 2 === 0) ? 'Par' : 'Impar';
    resultParSpan.textContent = resultado;
});

