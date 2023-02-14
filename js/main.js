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

const btn = document.querySelector('.js__button');
const number =document.querySelector('.js__number');
const clue = document.querySelector('.js__clue');
const attempsNum = document.querySelector('.js__attemps')

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);//número aleatorio
    console.log('Mi número aleatorio es: ' + randomNumber);

function addNumber(){
    const numValue = parseInt(number.value);
    return numValue;
}

function handleClickButton(event){
    event.preventDefault();
    if (numValue > randomNumber){
        clue.innerHTML = 'Demasiado alto';
    }
    console.log(numValue);


}
btn.addEventListener('click' , handleClickButton);//evento
