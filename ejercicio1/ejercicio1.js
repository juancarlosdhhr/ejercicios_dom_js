//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showMeButton = document.querySelector(".showme");
console.log(showMeButton);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1Element = document.querySelector("#pillado");
console.log(h1Element);

//1.3 Usa querySelector para mostrar por consola todos los p

const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

//1.4 Usa querySelector para mostrar por consola todos los elementos con 
//	la clase.pokemon

const AllPokemon = document.querySelectorAll (".pokemon");
console.log (AllPokemon);



//1.5 Usa querySelector para mostrar por consola todos los elementos con 
//el atributo data-function="testMe".

const showTestMe = document.querySelectorAll('[data-function="testMe]');
console.log(showTestMe);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".t

const thirdElement = document.querySelector('[data-function="testMe]:nth-of-type(3)');
console.log(thirdElement); 