
//Variables

/* const inputBuscar = document.querySelector("#inputBuscar");
const resultadoBusqueda = document.querySelector(".resultado-busqueda");


/* CON JQUERY  */
const inputBuscar = $("#inputBuscar");
const resultadoBusqueda = $(".resultado-busqueda");

const ciudadesNacionalesPromos = [];
const ciudadesIntenacionalesPromos = [];




// Clase para cards de Ciudades Nacionales

class cardsCiudades {
    constructor (nombre, informacion, precio, imagen, descripcion, traslado, alojamiento, excursion){
        this.nombre = nombre;
        this.informacion = informacion;
        this.precio = precio;
        this.imagen = imagen;
        this.traslado = traslado;
        this.alojamiento = alojamiento;
        this.excursion = excursion;
    }
}


ciudadesNacionalesPromos.push(new cardsCiudades ("Bariloche", "Paquete 3 noches", "Desde $110.000", "../imagenes/bariloche300x200.png", "Traslado de llegada y salida", "03 Noches de alojamiento con desayuno en Hotel Nahuel Huapi"), new cardsCiudades ("Mendoza", "Paquete 3 noches", "Desde $20.000", "../imagenes/mendoza300x200.png",  "Traslado de llegada y salida", "03 Noches de alojamiento con desayuno en Hotel Nahuel Huapi"),
                        new cardsCiudades ("Cataratas del Iguazu", "Paquete 3 noches", "Desde $80.000", "../imagenes/iguazu300x200.png",  "Traslado de llegada y salida", "03 Noches de alojamiento con desayuno en Hotel Nahuel Huapi"), new cardsCiudades ("Calafate", "Paquete 3 noches", "Desde $50.000", "../imagenes/calafate300x200.png",  "Traslado de llegada y salida", "03 Noches de alojamiento con desayuno en Hotel Nahuel Huapi"),
                        new cardsCiudades ("Salta", "Paquete 3 noches", "Desde $50.000", "../imagenes/salta300x200.png",  "Traslado de llegada y salida", "03 Noches de alojamiento con desayuno en Hotel Nahuel Huapi"), new cardsCiudades ("Ushuaia", "Paquete 3 noches", "Desde $10.000", "../imagenes/ushuaia300x200.png",  "Traslado de llegada y salida", "03 Noches de alojamiento con desayuno en Hotel Nahuel Huapi"),
                        new cardsCiudades ("Tucuman", "Paquete 3 noches", "Desde $10.000", "../imagenes/tucuman300x200.png",  "Traslado de llegada y salida", "03 Noches de alojamiento con desayuno en Hotel Nahuel Huapi"),  new cardsCiudades ("Puerto Madryn", "Paquete 3 noches", "Desde $100.000", "../imagenes/puertomadryn300x200.png",  "Traslado de llegada y salida", "03 Noches de alojamiento con desayuno en Hotel Nahuel Huapi"), new cardsCiudades ("Mar Del PLata", "Paquete 3 noches", "Desde $90.000", "../imagenes/mardelplata300x200.png",  "Traslado de llegada y salida", "03 Noches de alojamiento con desayuno en Hotel Nahuel Huapi"));

ciudadesIntenacionalesPromos.push(new cardsCiudades ("Cancun", "Paquete 7 noches", "Desde $210.000", "../imagenes/cun300x200.png"), new cardsCiudades ("Miami", "Paquete 4 noches", "Desde $110.000", "../imagenes/miami300x200.png"), 
                        new cardsCiudades ("Cartagena de Indias", "Paquete 5 noches", "Desde $95.000", "../imagenes/cartagena300x200.png"), new cardsCiudades ("Madrid", "Paquete 3 noches", "Desde $210.000", "../imagenes/madrid300x200.png"), 
                        new cardsCiudades ("Roma", "Paquete 3 noches", "Desde $110.000", "../imagenes/roma300x200.png"), new cardsCiudades ("Panama", "Paquete 5 noches", "Desde $250.000", "../imagenes/panama300x200.png"),
                        new cardsCiudades ("Grecia", "Paquete 3 noches", "Desde $110.000", "../imagenes/grecia300x200.png"), new cardsCiudades ("Tailandia", "Paquete 3 noches", "Desde $110.000", "../imagenes/tai300x200.png"),
                        new cardsCiudades ("Berlin", "Paquete 6 noches", "Desde 150.000", "../imagenes/berlin300x200.png"));




//CARDS CON JAVASCRIPT VAINILLA

/* const cardsPromos = (ciudad, elemento) => {
    //console.log(elemento);
    const divCard = document.querySelector(elemento)
    
    divCard.innerHTML = ""
    //console.log(divCard);
    ciudad.forEach(ciudad =>{
    const div = document.createElement("div");
    
    //console.log(div);
    div.innerHTML = `
    <div class=" col-md-12 mb-4">
        <a href="../assets/nacionales2.html">
            <img src="${ciudad.imagen}">
            <div class="titulo">
                <h4>${ciudad.nombre}</h4>
            </div>
            <div class= "paquete">
                <span class="iconify mt-1" data-icon="ph:suitcase-simple-bold"></span>
                <p class="paquete__info">${ciudad.informacion}</p>
                <p class="precio__info">${ciudad.precio}</p>
            </div> 
        </a>         
    </div> `
    
    divCard.appendChild(div);

    });
} */


//CARDS CON JQUERY

const cardsPromos = (ciudad, elemento) => {
    const divCard = $(elemento);
    
    divCard.innerHTML = ""
    //console.log(divCard);
    ciudad.forEach(ciudad =>{
    
    $(elemento).prepend(`
    <div>
        <div class=" col-md-12 mb-4">
            <a href="../assets/nacionales2.html">
                <img src="${ciudad.imagen}">
                <div class="titulo">
                    <h4>${ciudad.nombre}</h4>
                </div>
                <div class= "paquete">
                    <span class="iconify mt-1" data-icon="ph:suitcase-simple-bold"></span>
                    <p class="paquete__info">${ciudad.informacion}</p>
                    <p class="precio__info">${ciudad.precio}</p>
                </div> 
            </a>         
        </div>
    </div> `);
    });
}




if(window.location.pathname.includes("internacionales")){
    cardsPromos(ciudadesIntenacionalesPromos , "#cardsInternacionales");
}else if (window.location.pathname.includes("nacionales")){
    cardsPromos(ciudadesNacionalesPromos, "#cardsNacionales");
};




//Funcion para filtrar 
const filtro = ( e =>{

    const input = e.target.value.toLowerCase();
    //console.log(input);

    /* Filtro ciudades por nombre*/
    let resultadoNacional = ciudadesNacionalesPromos.filter( producto => producto.nombre.toLowerCase() === input);
    let resultadoInternacional = ciudadesIntenacionalesPromos.filter(producto => producto.nombre.toLowerCase() === input);

    cardsFiltrado(resultadoNacional);
    cardsFiltrado(resultadoInternacional);
    
})




/* //Funcion para mostrar lo filtrado
const cardsFiltrado =  (resultado => {
    //console.log(resultado);
    resultado.forEach(item =>{
        //console.log(item.nombre); 
        resultadoBusqueda.innerHTML = "";

        const div = document.createElement("div");

        div.innerHTML = `
            <div class=" col-md-12 mb-4">
                <a href="../assets/nacionales2.html">
                    <img src="${item.imagen}">
                    <div class="titulo">
                        <h4>${item.nombre}</h4>
                    </div>
                    <div class= "paquete">
                        <span class="iconify mt-1" data-icon="ph:suitcase-simple-bold"></span>
                        <p class="paquete__info">${item.informacion}</p>
                        <p class="precio__info">${item.precio}</p>
                    </div> 
                </a>         
            </div> `

        resultadoBusqueda.appendChild(div);
        })
        
}); */





//Funcion para mostrar lo filtrado
const cardsFiltrado =  (resultado => {
    //console.log(resultado);
    resultado.forEach(item =>{
        //console.log(item.nombre); 
        $(".resultado-busqueda").prepend( `
        <div class=" col-md-12 mb-4">
            <a href="../assets/nacionales2.html">
                <img src="${item.imagen}">
                <div class="titulo">
                    <h4>${item.nombre}</h4>
                </div>
                <div class= "paquete">
                    <span class="iconify mt-1" data-icon="ph:suitcase-simple-bold"></span>
                    <p class="paquete__info">${item.informacion}</p>
                    <p class="precio__info">${item.precio}</p>
                </div> 
            </a>         
        </div> `)
        })
        
});



//inputBuscar.addEventListener("input", filtro);

/* Agrego el evento al input Buscar con Jquery*/
inputBuscar.change(filtro)







