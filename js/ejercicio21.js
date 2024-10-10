
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

const resultCocheText = document.createElement('p');
resultCocheText.textContent = 'Coche: ';
resultCocheText.textContent += `Marca: ${coche.marca}, Modelo: ${coche.modelo}, Año: ${coche.año}`;
document.body.appendChild(resultCocheText);

coche.año = 2021;


const resultCocheModificadoText = document.createElement('p');
resultCocheModificadoText.textContent = 'Coche Modificado: ';
resultCocheModificadoText.textContent += `Marca: ${coche.marca}, Modelo: ${coche.modelo}, Año: ${coche.año}`;
document.body.appendChild(resultCocheModificadoText);


