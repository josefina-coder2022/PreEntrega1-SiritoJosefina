let numero1 = "";
let numero2 = "";
let parImpar = "";

while (true) {
    parImpar = prompt("Presiona 1 para los números impares o 2 para los números pares")
    break;
}

verificar(parImpar);

function verificar(opcionParImpar) {

    numero1 = parseInt(prompt("Ingresá el primer número"));
    numero2 = parseInt(prompt("Ingresá el segundo número"));
    let auxNum1 = numero1;
    let mostrarNumeros = "";

    if (opcionParImpar == 1) { //IMPAR

        for (numero1; numero1 <= numero2; numero1++) {

            if (numero1 % 2 != 0) {
                mostrarNumeros = mostrarNumeros + " " + numero1;
            }

        }

        alert("Éstos son los números impares comprendidos entre " + auxNum1 + " y " + numero2 + "\n" + mostrarNumeros);

    } else if (opcionParImpar == 2) { //PAR

        for (numero1; numero1 <= numero2; numero1++) {

            if (numero1 % 2 == 0) {
                mostrarNumeros = mostrarNumeros + " " + numero1;
            }

        }

        alert("Éstos son los números pares comprendidos entre " + auxNum1 + " y " + numero2 + "\n" + mostrarNumeros);

    }
}