// Crear elementos en el DOM
const label = document.createElement('label');
label.textContent = "Ingresa elementos separados por comas:";
document.body.appendChild(label);

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('id', 'arrayInput');
input.setAttribute('placeholder', '1,2,3,4,5');
document.body.appendChild(input);

const button = document.createElement('button');
button.textContent = 'Invertir Array';
document.body.appendChild(button);

const originalText = document.createElement('p');
originalText.textContent = 'Array Original: ';
const originalSpan = document.createElement('span');
originalSpan.setAttribute('id', 'arrayOriginal');
originalText.appendChild(originalSpan);
document.body.appendChild(originalText);

const invertedText = document.createElement('p');
invertedText.textContent = 'Array Invertido: ';
const invertedSpan = document.createElement('span');
invertedSpan.setAttribute('id', 'arrayInvertido');
invertedText.appendChild(invertedSpan);
document.body.appendChild(invertedText);

// Lógica del programa
button.addEventListener('click', function() {
    let array = document.getElementById('arrayInput').value.split(',').map(Number);
    document.getElementById('arrayOriginal').textContent = array;
    let arrayInvertido = array.reverse();
    document.getElementById('arrayInvertido').textContent = arrayInvertido;
});

