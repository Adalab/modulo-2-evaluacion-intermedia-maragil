'use strict'

// App genera un número al azar entre 1 y 100 (como el del smile)
//Pistas de número alto o bajo.
//Contabiliza número de intentos.
//Si se quiere adivinar otro número, hay que cargar la página.
//Veces que se ha pulsado el botón prueba.

//Número aleatorio: function getRandomNumber(max) {
//return Math.ceil(Math.random() * max);}
//Mostrar el número aleatorio generado: console.log
//Al pulsar el botón de prueba acceder al contenido del input y mostrarlo en consola (event)
//Comparar el número escrito cn el input aleatorio y pintar las pistas en la pantalla
//Actualizar el contador de intentos por cada prueba.

const inpNumber = document.querySelector('.js__number');
const btn = document.querySelector('.js__button');
const attempsNum = document.querySelector('.js__attemps');
const msj = document.querySelector('.js__msj');

function userMsj(){
    const inpNumValue = parseInt(inpNumber.value);
    let msjResult = "Tienes que introducir un numero";
    if (inpNumValue === randomNumber){
    console.log('Has ganado campeona!!!');
        msjResult = 'Has ganado campeona';
    } else if (inpNumValue < randomNumber){
        console.log('Demasiado bajo');
        msjResult = "Demasiado bajo";
    } else if (inpNumValue > randomNumber){
        console.log('Demasiado alto');
        msjResult = "Demasiado alto";
    }
    msj.innerHTML = msjResult;
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);
console.log('Mi número aleatorio es: ' + randomNumber);

function handleClick(event){
    event.preventDefault();

    userMsj()
}

btn.addEventListener('click' , handleClick);