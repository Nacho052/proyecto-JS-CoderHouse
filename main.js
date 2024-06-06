document.addEventListener('DOMContentLoaded', (event) => {

    // Carga los datos del localStorage si existen
    cargarDatos();

    document.querySelector('button').addEventListener('click', calcularIMC);
});

function calcularIMC() {
    let nombre = document.getElementById('name').value.trim();
    let peso = parseFloat(document.getElementById('weight').value);
    let altura = parseFloat(document.getElementById('height').value);

    if (nombre === "") {
        alert("Coloca un nombre correcto");
        return;
    }

    if (isNaN(peso) || peso <= 0) {
        alert("Coloca un peso correcto");
        return;
    }

    if (isNaN(altura) || altura <= 0) {
        alert("Coloca una altura correcta");
        return;
    }

    let imc = calcularIMCValor(peso, altura);
    let estado;

    if (imc < 18.5) {
        estado = "Bajo peso";
    } else if (imc < 25) {
        estado = "Peso normal";
    } else if (imc < 30) {
        estado = "Sobrepeso";
    } else {
        estado = "Obesidad";
    }

    let resultado = `Nombre: ${nombre}, Tu IMC es: ${imc.toFixed(2)}, Tienes: ${estado}`;
    
    document.getElementById('result').innerText = resultado;

    // Guardar datos en localStorage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('peso', peso);
    localStorage.setItem('altura', altura);
    localStorage.setItem('imc', imc.toFixed(2));
    localStorage.setItem('estado', estado);
}

// function para calcular el IMC
function calcularIMCValor(peso, altura) {
    return peso / ((altura / 100) ** 2);
}

// function cargarDatos en localStorge
function cargarDatos() {
    let nombre = localStorage.getItem('nombre');
    let peso = localStorage.getItem('peso');
    let altura = localStorage.getItem('altura');
    let imc = localStorage.getItem('imc');
    let estado = localStorage.getItem('estado');

    if (nombre && peso && altura && imc && estado) {
        document.getElementById('name').value = nombre;
        document.getElementById('weight').value = peso;
        document.getElementById('height').value = altura;

        let resultado = `Nombre: ${nombre}, Tu IMC es: ${imc}, Tienes: ${estado}`;
        document.getElementById('result').innerText = resultado;
    }
}
