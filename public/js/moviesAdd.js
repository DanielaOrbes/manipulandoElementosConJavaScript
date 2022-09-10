addEventListener('load', function(){

    console.log("moviesAdd success");

    let h1moviesAdd = document.querySelector("h1");
    let sectionmoviesAdd = document.querySelector("section");
    let articlemoviesAdd = document.querySelector("article");

    h1moviesAdd.innerHTML = "AGREGAR PELICULAS";
    h1moviesAdd.classList.add("titulo");
    articlemoviesAdd.classList.add("fondoTransparente");
    sectionmoviesAdd.classList.add("fondoCRUD");



})