//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click


const btnToClick = document.createElement('button');
btnToClick.id = 'btnToClick';
btnToClick.textContent = 'Click';

document.body.appendChild(btnToClick); //Para poner el boton en el body

btnToClick.addEventListener('click', function(event) { //Para añadir un evento click al boton

console.log(event);

}
);



//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.


 const inputs = document.querySelectorAll('imput'); //Para seleccionar todos los inputs

 inputs.forEach (function(input) {
inputs.addEventListener('focus', function() {

console.log(input.value);

});

});


 



//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. 