
const labelEstudiante = document.createElement('label');
labelEstudiante.textContent = "Ingresa el nombre, edad y grado del estudiante:";
document.body.appendChild(labelEstudiante);

const inputEstudianteNombre = document.createElement('input');
inputEstudianteNombre.setAttribute('type', 'text');
inputEstudianteNombre.setAttribute('placeholder', 'Nombre');
document.body.appendChild(inputEstudianteNombre);

const inputEstudianteEdad = document.createElement('input');
inputEstudianteEdad.setAttribute('type', 'number');
inputEstudianteEdad.setAttribute('placeholder', 'Edad');
document.body.appendChild(inputEstudianteEdad);

const inputEstudianteGrado = document.createElement('input');
inputEstudianteGrado.setAttribute('type', 'text');
inputEstudianteGrado.setAttribute('placeholder', 'Grado');
document.body.appendChild(inputEstudianteGrado);

const buttonEstudiante = document.createElement('button');
buttonEstudiante.textContent = 'Mostrar Información';
document.body.appendChild(buttonEstudiante);

const resultEstudianteText = document.createElement('p');
resultEstudianteText.textContent = '';
const resultEstudianteSpan = document.createElement('span');
resultEstudianteSpan.setAttribute('id', 'resultadoEstudiante');
resultEstudianteText.appendChild(resultEstudianteSpan);
document.body.appendChild(resultEstudianteText);


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return "Hola, mi nombre es " + this.nombre + ".";
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    mostrarGrado() {
        return "Soy estudiante de " + this.grado + ".";
    }
}


buttonEstudiante.addEventListener('click', function() {
    let nombre = inputEstudianteNombre.value;
    let edad = Number(inputEstudianteEdad.value);
    let grado = inputEstudianteGrado.value;
    let estudiante1 = new Estudiante(nombre, edad, grado);
    resultEstudianteSpan.textContent = estudiante1.saludar() + ' ' + estudiante1.mostrarGrado();
});

