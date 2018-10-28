'use strict'


let pelicula = {
    title: 'Batman VS Superman',
    year: 2017,
    country: 'USA'
}

let peliculas = [
    {title: "La verdad duele", year: 2016, country: "Francia"},
    pelicula
];

let caja_peliculas = document.querySelector("#peliculas");
let index;
for (index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].title + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}
console.log(peliculas);