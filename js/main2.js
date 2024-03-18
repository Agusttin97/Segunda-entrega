alert("¡Bienvenido a CoderMovies!")

let opmovie;
let comprar;
let tickets_disp;
let cant_tickets;

let op = menu()
while(op != 3){
    //Lista de peliculas
    if(op == 1){
        listaPeliculas(movies)
        opmovie = prompt("===CoderMovies===\n\nSeleccione pelicula:")
        comprar = mostrarPelicula(movies,opmovie)
        tickets_disp = movies[opmovie-1].tickets
        if(comprar == 'S'){
            if(movies[opmovie-1].tickets > 0){
                cant_tickets = prompt("===CoderMovies===\n\n" + "Quedan " + movies[opmovie-1].tickets + " tickets disponibles\n\nIngrese cantidad de tickets: ")
                if(cant_tickets <= movies[opmovie-1].tickets){
                    movies[opmovie-1].tickets -= cant_tickets
                    alert("===CoderMovies===\n\n¡Tickets comprados con exito!")
                }else{
                    alert("===CoderMovies===\n\nNo hay tickets disponibles")
                }
            }else {
                alert("===CoderMovies===\n\nTickets agotados")
            }
        }
        //Filtro de peliculas
    }else if(op == 2){
        
    }
    console.clear()
    op = menu()
}



// Funciones

function menu(){// Menu, retorna una opcion
    let opcion = prompt("===CoderMovies===\n\n1. Lista de Peliculas\n2. Buscar Pelicula\n3. Salir\n Seleccione opcion: ") 
    return opcion
}

function listaPeliculas(movies){ //Muestra todas las peliculas
    let i = 1;
    movies.forEach(movie => {
        console.log(i + '. ' + movie.title + '  -  ' + movie.year)
        i++
    });
}

function mostrarPelicula(array,num){ //Muestra la peli seleccionada y retorna si se desea comprar entradas
    let comprar = prompt(
        "===CoderMovies===\n\n" + 
        "Titulo: " + array[num - 1].title + "\n" +
        "Genero: " + array[num - 1].genre + "\n" +
        "Duracion: " + array[num - 1].duration + "\n" +
        "Año: " + array[num - 1].year + "\n\n" +
        "¿Comprar tickets?(S/N): ")

    return comprar
}

