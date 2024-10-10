
const labelAgregarEliminar = document.createElement('label');
labelAgregarEliminar.textContent = "Ingresa números separados por comas:";
document.body.appendChild(labelAgregarEliminar);

const inputAgregarEliminar = document.createElement('input');
inputAgregarEliminar.setAttribute('type', 'text');
inputAgregarEliminar.setAttribute('placeholder', '1,2,3,4,5');
document.body.appendChild(inputAgregarEliminar);

const buttonAgregarEliminar = document.createElement('button');
buttonAgregarEliminar.textContent = 'Agregar y Eliminar Elementos';
document.body.appendChild(buttonAgregarEliminar);

const resultAgregarEliminarText = document.createElement('p');
resultAgregarEliminarText.textContent = 'Array Modificado: ';
const resultAgregarEliminarSpan = document.createElement('span');
resultAgregarEliminarSpan.setAttribute('id', 'resultadoAgregarEliminar');
resultAgregarEliminarText.appendChild(resultAgregarEliminarSpan);
document.body.appendChild(resultAgregarEliminarText);

buttonAgregarEliminar.addEventListener('click', function() {
    let numeros = inputAgregarEliminar.value.split(',').map(Number);
    numeros.push(6);  // Agregar elemento
    numeros.pop();    // Eliminar último elemento
    resultAgregarEliminarSpan.textContent = numeros.join(', ');
});

