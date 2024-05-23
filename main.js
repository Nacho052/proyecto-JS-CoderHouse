function calcularIMC() {
    let imcPersonas = [];
    let nombre = null;
    let peso = null;
    let altura = null;
    let imc = null;
    let nombreOk = false;
    let pesoOk = false;
    let altOk = false;
    let p1 = null;

    do {
        nombre = prompt("¿Cual es tu nombre? (Escribe 'salir' para terminar)");
        if (nombre.toLowerCase() === "salir") {
            break;
        } else if (nombre === "") {
            alert("Coloca un nombre correcto");
            nombreOk = false;
        } else {
            nombreOk = true;
        }


        
        peso = prompt("¿Cuál es tu peso en kg?");
        if (peso.toLowerCase() === "salir") {
            break;
        } else if (isNaN(peso) || peso <= 0 || peso === "") {
            alert("Coloca un peso correcto");
            pesoOk = false;
        } else {
            pesoOk = true;
        }

        altura = prompt("¿Cuál es tu altura en CM?");
        if (altura.toLowerCase() === "salir") {
            break;
        } else if (isNaN(altura) || altura <= 0 || altura === "") {
            alert("Coloca una altura correcta");
            altOk = false;
        } else {
            altOk = true;
        }

        if (nombreOk && pesoOk && altOk) {
            imc = calcularIMCValor(peso, altura);

            if (imc < 18.5) {
                console.log("Bajo peso");
                p1 = "Bajo peso";
            } else if (imc < 25) {
                console.log("Peso normal");
                p1 = "Peso normal";
            } else if (imc < 30) {
                console.log("Sobrepeso");
                p1 = "Sobrepeso";
            } else {
                console.log("Obesidad");
                p1 = "Obesidad";
            }

            let datosPersonas = {
                persona: nombre,
                masa: peso,
                estatura: altura,
                resultado: p1
            };
            imcPersonas.push(datosPersonas);
        }

    } while (true);

    console.log(imcPersonas);
}

function calcularIMCValor(peso, altura) {
    return peso / ((altura / 100) ** 2);
}

calcularIMC();