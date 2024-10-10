// Crear elementos en el DOM
const labelPersona = document.createElement('label');
labelPersona.textContent = "Ingresa tu nombre y edad:";
document.body.appendChild(labelPersona);

const inputNombre = document.createElement('input');
inputNombre.setAttribute('type', 'text');
inputNombre.setAttribute('placeholder', 'Nombre');
document.body.appendChild(inputNombre);

const inputEdad = document.createElement('input');
inputEdad.setAttribute('type', 'number');
inputEdad.setAttribute('placeholder', 'Edad');
document.body.appendChild(inputEdad);

const buttonPersona = document.createElement('button');
buttonPersona.textContent = 'Saludar';
document.body.appendChild(buttonPersona);

const resultPersonaText = document.createElement('p');
resultPersonaText.textContent = '';
const resultPersonaSpan = document.createElement('span');
resultPersonaSpan.setAttribute('id', 'resultadoPersona');
resultPersonaText.appendChild(resultPersonaSpan);
document.body.appendChild(resultPersonaText);


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return "Hola, mi nombre es " + this.nombre + ".";
    }
}


buttonPersona.addEventListener('click', function() {
    let nombre = inputNombre.value;
    let edad = Number(inputEdad.value);
    let persona1 = new Persona(nombre, edad);
    resultPersonaSpan.textContent = persona1.saludar();
});
