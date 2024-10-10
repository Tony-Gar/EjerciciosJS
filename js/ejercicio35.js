
const labelCalculadora = document.createElement('label');
labelCalculadora.textContent = "Ingresa dos números para calcular:";
document.body.appendChild(labelCalculadora);

const inputCalculadora1 = document.createElement('input');
inputCalculadora1.setAttribute('type', 'number');
inputCalculadora1.setAttribute('placeholder', 'Número 1');
document.body.appendChild(inputCalculadora1);

const inputCalculadora2 = document.createElement('input');
inputCalculadora2.setAttribute('type', 'number');
inputCalculadora2.setAttribute('placeholder', 'Número 2');
document.body.appendChild(inputCalculadora2);

const buttonSumaCalculadora = document.createElement('button');
buttonSumaCalculadora.textContent = 'Sumar';
document.body.appendChild(buttonSumaCalculadora);

const resultCalculadoraText = document.createElement('p');
resultCalculadoraText.textContent = 'Resultado de la suma: ';
const resultCalculadoraSpan = document.createElement('span');
resultCalculadoraSpan.setAttribute('id', 'resultadoCalculadora');
resultCalculadoraText.appendChild(resultCalculadoraSpan);
document.body.appendChild(resultCalculadoraText);


let calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
};


buttonSumaCalculadora.addEventListener('click', function() {
    let a = Number(inputCalculadora1.value);
    let b = Number(inputCalculadora2.value);
    resultCalculadoraSpan.textContent = calculadora.sumar(a, b);
});
