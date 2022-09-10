addEventListener('load', function(){

    console.log("movies success");

    let bodymovies = document.querySelector("body");
    let h1movies = document.querySelector("h1");

    let blackmode = confirm("¿desea el modo oscuro?");

    if(blackmode){
        document.querySelector("body").style.backgroundColor = "#7f7f7f"
        bodymovies.classList.add("fondoMoviesList");
    }

    h1movies.innerHTML = "LISTADO DE PELICULAS"
    h1movies.style.color = "white";
    h1movies.style.backgroundColor = "teal"
    h1movies.style.padding = "20px"

})