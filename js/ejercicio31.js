
const buttonCallback = document.createElement('button');
buttonCallback.textContent = 'Ejecutar Callback';
document.body.appendChild(buttonCallback);

const resultCallbackText = document.createElement('p');
resultCallbackText.textContent = 'Mensaje del Callback: ';
const resultCallbackSpan = document.createElement('span');
resultCallbackSpan.setAttribute('id', 'resultadoCallback');
resultCallbackText.appendChild(resultCallbackSpan);
document.body.appendChild(resultCallbackText);

buttonCallback.addEventListener('click', function() {
    function ejecutarCallback(callback) {
        callback();
    }

    ejecutarCallback(function() {
        resultCallbackSpan.textContent = "Este es el mensaje del callback.";
    });
});
