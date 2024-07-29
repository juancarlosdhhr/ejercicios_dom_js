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


 //Util para informar al usuario, por ejemplo, de la debilidad o fortaleza de una contraseña a medida que la introduce



//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. 

input.addEventListener('input', function() {


console.log(input.value);


});


//Util, por ejemplo, para el autocompletado o sugerencias mientras el usuario escribe

//1.4.Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
//que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

//Crear el espacio donde se insertará la lista

const PrintAlbums = document.getElementById('PrintAlbumHere');

//Creamos el ul

const ul = document.createElement('ul');

//Recorremos el array de los albunes

albums.forEach (function(album) {

//Creamos un li por cada album

const li = document.createElement('li');
li.textContent = album;

//Metemos los li dentro del ul
ul.appendChild(li);


}
);

PrintAlbums.appendChild(ul);