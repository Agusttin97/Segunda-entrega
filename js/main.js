let opmovie;
let comprar;
let tickets_disp;
let cant_tickets;

let op_filtro;

alert("¡Bienvenido a CoderMovies!")
let usuario = prompt("===CoderMovies===\n\nIngrese su nombre: ")
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
        op_filtro = prompt("===CoderMovies===\n\nIngrese nombre de pelicula: ")
        const res_filtro = movies.filter((pelicula) => pelicula.title.includes(op_filtro))
        if(res_filtro.length > 0) {
            listaPeliculas(res_filtro)
            alert("===CoderMovies===\n\nSe han encontrado " + res_filtro.length + " resultados.")
        }else {
            alert("Sin resultados")
        }
    }else if(op == 0){
        alert("Bienvenido al panel de Administracion")
        let opadmin = menuAdmin()
        while(opadmin != 2){
            if(opadmin == 1){
                agregarPelicula(movies)
            }
            opadmin = menuAdmin()
        }
    }

    op = menu()
    console.clear()
    
}
alert("¡Gracias por visitar CoderMovies " + usuario + "!")



// Funciones

function menu(){// Menu, retorna una opcion
    let opcion = prompt("===CoderMovies===\n\n0. Menu Administracion\n1. Lista de Peliculas\n2. Buscar Pelicula\n3. Salir\n Seleccione opcion: ") 
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

function agregarPelicula(array){
    let titulo = prompt("Ingrese titulo: ")
    let genero = prompt("Ingrese genero: ")
    let duracion = prompt("Ingrese duracion: ")
    let anio = prompt("Ingrese año: ")
    let entradas = Number(prompt("Ingrese entradas disponibles: "))

    array.push({title: titulo, genre: genero, duration: duracion, year: anio, entradas: 10})
    alert("Pelicula agregada con exito")
}

function menuAdmin(){// Menu administracion, retorna una opcion
    let opcion = prompt("===CoderMovies===\n\n1. Agregar Pelicula\n2. Salir\nSeleccione opcion: ") 
    return opcion
}