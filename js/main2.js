// alert()

// Script sin usar console.log solo mediante alert() -- INCOMPLETO -- 

function menu(){
    let op = prompt("1. Lista de Peliculas\n2. Buscar Pelicula\n3. Salir\n\n Seleccione opcion:")
    return op
}

function listmovies(movies){
    let listapeliculas = "";
    let i = 1;
    movies.forEach(movie => {
        listapeliculas += i + ". " + movie.title + ' - ' + movie.year + "\n"
        i++;
    })
    let pelicula = prompt("Cartelera: \n" + listapeliculas + "\n Seleccione una pelicula: ")
    return pelicula
}


alert("¡Bienvenido a CoderMovies! \nLas mejores salas de cine del mundo.")
let peli;
let comprar;
let ticket;
let resfilter;
let opfilter;

let titlefilter;
let i;


let op = menu();
while(op != 3) {
    if(op == 1){
        peli = listmovies(movies)
        comprar = prompt(
            'Titulo: ' + movies[peli - 1].title + '\n' + 
            'Genero: ' + movies[peli - 1].genre + '\n' +
            'Duracion: ' + movies[peli - 1].duration + '\n' +
            'Año: ' + movies[peli - 1].year + '\n' +
            'Comprar tickets (S / N): '
            )
        if(comprar == 'S') {
            if(movies[peli-1].tickets > 0){
                ticket = prompt("Quedan " + movies[peli-1].tickets + " tickets disponibles.\n\n Ingrese cantidad de tickets: ")
                if(ticket > movies[peli-1].tickets){
                    alert("No hay tickets disponibles.")
                }else{
                    movies[peli-1].tickets -= ticket
                    alert("Tickets comprados.")
                }
            }else {
                alert("No hay tickets disponibles para esta pelicula")
            }
        }
    }else if(op == 2){
        let titlefilter = prompt("Ingrese titulo de pelicula: ")
        resfilter = movies.filter((movie) =>
        movie.title.includes(titlefilter))
        if(resfilter.length > 0){
            i=1
            let listfilter = ""
            resfilter.forEach(res => {
                listfilter += i + '. ' + res.title + ' - ' + res.year + '\n'
                i++
            })
            alert(listfilter)  
        } else {
            alert("Sin resultados")
        }
    }
    op = menu()
    }

    alert("¡Gracias por visitar CoderMovies!")
