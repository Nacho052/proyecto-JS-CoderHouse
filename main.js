let peso = null;
let altura = null;
let resultado = null;
let pesoOk = false;
let altok = false;


while (pesoOk == false || peso == "" ){
    peso = prompt("¿Cual es tu peso en kg?")

    if (isNaN(peso) || peso < 0){
        alert("Coloca un peso correcto")
    } else {
        pesoOk = true;
    }
}

while (altok == false || altura == "" ){
    altura = prompt("¿Cual es tu altura en CM?")

    if (isNaN(altura) || altura < 0){
        alert("Coloca una altura correcta")
    } else {
        altok = true;
    }
}

resultado = peso / ((altura / 100) ** 2)


if (resultado < 18.5){
    console.log("Bajo peso")

} else if (resultado < 25){
    console.log("Peso normal");

} else if (resultado < 30){
    console.log("Sobrepeso");

} else {
    console.log("Obesidad");
}