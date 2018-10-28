'use strict'
/**
 * Created by Jessica on 28/10/2018.
 */
let formPelis = document.querySelector("#formpeliculas");
let ul = document.querySelector("#peliculasList");

formPelis.addEventListener('submit', function () {

    let title =  document.querySelector("#addpelicula").value;
    if(title.length >= 1){
        localStorage.setItem(title, title);
    }

});


for(let i in localStorage){
    //console.log(localStorage[i]);
    if(typeof localStorage[i] =='string'){
        let li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

let formDelPelis = document.querySelector("#formDelpeliculas");

formDelPelis.addEventListener('submit', function (e) {
    e.preventDefault();
    let title =  document.querySelector("#delpelicula").value;

    /**
    //Si el valor mide 1 o más o el titulo coincide con alguno de los elementos guardas
    alert(localStorage.getItem(title));
    if(title.length >= 1 && (title == localStorage.getItem(title))){
        localStorage.removeItem(title);
    }else{
        console.log("La película no existe o no has introducido un valor válido");
    }*/


    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        if( localStorage.getItem( localStorage.key( i ) ) == title){
            localStorage.removeItem(localStorage.key( i ));
            return false; //Corta la ejecución del for
        }
    };


    ul.innerHTML = "";

    for(let i in localStorage){
        //console.log(localStorage[i]);
        if(typeof localStorage[i] =='string'){

            let li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }


});