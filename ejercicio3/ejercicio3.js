/* //1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const Printinbody = document.querySelector('body');

const ul = document.createElement ('ul'); //Crea un ul

countries.forEach(function(country) { //Recorre el array

const li= document.createElement('li'); //Crea un li por cada pais
li.textContent = country; //El contenido de cada li va a ser cada pais del array
ul.appendChild(li); //Mete los li dentro del ul

}

);
Printinbody.appendChild(ul);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.


const RemoveElement = document.querySelector('.fn-remove-me');

if(RemoveElement) {
RemoveElement.remove();

} 


//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".

const createUlCars = document.querySelector ('[data-function="printHere"]');

const ulCars = document.createElement('ul');

countries.forEach(function(cars)  {
const li = document.createElement('li');
li.textContent = country;
ul.appendChild(li);

}

);

createUlCars.appendChild(ul); 


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];  */

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; 

const CreateH4Img = document.querySelector('body');

countries.forEach(function(country) {
const div = document.createElement('div');   
const h4 = document.createElement('h4');
const img =document.createElement('img'); 

//Ahora vamos a asignarle la Url al src:

img.src = country.imgUrl;

//Para asignarle el texto al h4:

h4.textContent  = country.title;

//Para meter los h4 y los img a los divs:

div.appendChild(h4);
div.appendChild(img);

CreateH4Img.appendChild(div);

}


);


//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la serie de divs.

const ButtonRemoveLastElement =document.createElement('button');

ButtonRemoveLastElement.textContent = "Remove Last Element"

ButtonRemoveLastElement.addEventListener("click", function() {
const divs =document.querySelectorAll('body > div');
const lastElement = divs[divs.length -1];
if (lastElement) {
lastElement.remove();

}


});
document.body.appendChild(ButtonRemoveLastElement);


//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//divs que elimine ese mismo elemento del html.



//Primero seleccionamos todos los divs del body
const divs = document.querySelectorAll('body > div');

//Recorremos cada div
divs.forEach(function(div) {

	//Creamos el boton
	const ButtonRemoveEachElement = document.createElement('button');
	ButtonRemoveEachElement.textContent = "Remove Element";
	
	//Creamos un evento click a cada boton
	ButtonRemoveEachElement.addEventListener ("click", function() {
	
	div.remove()	
	});


//Añadimos los botones a los divs

div.appendChild(ButtonRemoveEachElement);
}); 
