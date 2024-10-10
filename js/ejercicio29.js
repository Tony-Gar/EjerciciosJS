
const labelVocales = document.createElement('label');
labelVocales.textContent = "Ingresa una palabra para contar vocales:";
document.body.appendChild(labelVocales);

const inputVocales = document.createElement('input');
inputVocales.setAttribute('type', 'text');
inputVocales.setAttribute('placeholder', 'Hola Mundo');
document.body.appendChild(inputVocales);

const buttonVocales = document.createElement('button');
buttonVocales.textContent = 'Contar Vocales';
document.body.appendChild(buttonVocales);

const resultVocalesText = document.createElement('p');
resultVocalesText.textContent = 'Número de vocales: ';
const resultVocalesSpan = document.createElement('span');
resultVocalesSpan.setAttribute('id', 'resultadoVocales');
resultVocalesText.appendChild(resultVocalesSpan);
document.body.appendChild(resultVocalesText);

buttonVocales.addEventListener('click', function() {
    let palabra = inputVocales.value;
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    resultVocalesSpan.textContent = contador;
});
