'use strict'
/**
 * Created by Jessica on 28/10/2018.
 */
// Localstorage

//Comprobar si el local storage funciona en nuestro navegador
// (los navegadores antiguos no lo soportan)

if(typeof (Storage) !== 'undefined'){
    console.log("Localstorage disponible!");
}else{
    console.log('Tu navegador es incompatible con localstorage');
}

//Guardar datos

localStorage.setItem("titulo", "Curso de Symfony de Victo Robles");

// Recuperar elemento

console.log(localStorage.getItem("titulo"));

// Añadirlo al DOM

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos JSON

let usuario = {
    nombre: "Jessica",
    email: "jessicamcav13@gmail.com",
    web: "jessicamcandas.es"
};

    //Convertir a string para localStorage sepa interpretarlo con JSON.stringify

    localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar object JSON

let userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#peliculas").append(" " + userjs.web + " - " + userjs.nombre);

//Borrar elemento del localStorage
//localStorage.removeItem("usuario");

//Borrar localStorage

//localStorage.clear();