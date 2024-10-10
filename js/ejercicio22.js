
const labelBuscar = document.createElement('label');
labelBuscar.textContent = "Ingresa números separados por comas para buscar:";
document.body.appendChild(labelBuscar);

const inputBuscar = document.createElement('input');
inputBuscar.setAttribute('type', 'text');
inputBuscar.setAttribute('placeholder', '10,20,30,40,50');
document.body.appendChild(inputBuscar);

const buttonBuscar = document.createElement('button');
buttonBuscar.textContent = 'Buscar Número';
document.body.appendChild(buttonBuscar);

const resultBuscarText = document.createElement('p');
resultBuscarText.textContent = 'Posición: ';
const resultBuscarSpan = document.createElement('span');
resultBuscarSpan.setAttribute('id', 'resultadoBuscar');
resultBuscarText.appendChild(resultBuscarSpan);
document.body.appendChild(resultBuscarText);


buttonBuscar.addEventListener('click', function() {
    let numeros = inputBuscar.value.split(',').map(Number);
    let buscar = prompt('¿Qué número deseas buscar?');
    let posicion = numeros.indexOf(Number(buscar));
    resultBuscarSpan.textContent = (posicion !== -1) ? `El número se encuentra en la posición: ${posicion}` : "Número no encontrado";
});
