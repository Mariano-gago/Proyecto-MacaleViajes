
// Clase para Cards del Index
/* class CardsPrincipal {

    constructor(titulo, subtitulo, texto, imagen, precio, region){
        
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.texto = texto;
        this.imagen = imagen;
        this.precio = precio;
        this.region = region;
    }
} */


//Cards de Index
/* const cardPeru = new CardsPrincipal ("Cuzco, Peru", "Machu Piccu", "Explora el fascinante mundo Inca", "./imagenes/cuzco-peru.jpg", "$100.000", "Internacional");
const cardItalia = new CardsPrincipal("Roma, Italia", "Imperio Romano", "Visita el Imperio Romano","./imagenes/roma-italia.jpg", "100.000", "Internacional");
const cardColombia = new CardsPrincipal("San Andres, Colombia", "Isla San Andres", "Descansa en el Caribe", "./imagenes/san-andres-colombia.jpg", "100.000", "Internacional");
const cardMexico = new CardsPrincipal("Cancun, Mexico", "Quintana Roo", "Todo el caribe Mexicano al mejor precio","./imagenes/cancun.png", "$100.000", "Internacional" );
const cardMiami = new CardsPrincipal("Miami, Estados Unidos","Miami Beach", "Disfruta las Playas", "./imagenes/mia.png", "$100.000", "Internacional" );
const cardBrasil = new CardsPrincipal("Brasil", "Rio de Janeiro", "Disfruta las playas", "./imagenes/rio.png", "Desde 100.000", "intrnacional" );


const internacionales = []
internacionales.push(cardPeru, cardItalia, cardColombia, cardMexico, cardMiami, cardBrasil);
 */

//cardsHtml(internacionales, "#cardsHtml");


////////////////////////////////////////////////////////////////////////////////////

/* class CardsPrincipal {
    constructor(titulo, subtitulo, texto, imagen, precio, region){
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.texto = texto;
        this.imagen = imagen;
        this.precio = precio;
        this.region = region;
    }
} */

//Declaracion de array para agregar las card de viajes
/* const internacionales = [] */

//Cards de viajes
/* const cardPeru = new CardsPrincipal ("Cuzco, Peru", "Machu Piccu", "Explora el fascinante mundo Inca", "./imagenes/cuzco-peru.jpg", "$100.000", "Internacional");
const cardItalia = new CardsPrincipal("Roma, Italia", "Imperio Romano", "Visita el Imperio Romano","./imagenes/roma-italia.jpg", "100.000", "Internacional");
const cardColombia = new CardsPrincipal("San Andres, Colombia", "Isla San Andres", "Descansa en el Caribe", "./imagenes/san-andres-colombia.jpg", "100.000", "Internacional");
const cardMexico = new CardsPrincipal("Cancun, Mexico", "Quintana Roo", "Todo el caribe Mexicano al mejor precio","./imagenes/cancun.png", "$100.000", "Internacional" );
const cardMiami = new CardsPrincipal("Miami, Estados Unidos","Miami Beach", "Disfruta las Playas", "./imagenes/mia.png", "$100.000", "Internacional" );
const cardBrasil = new CardsPrincipal("Brasil", "Rio de Janeiro", "Disfruta las playas", "./imagenes/rio.png", "Desde 100.000", "intrnacionales" );
 */
//Agrego las cards al array "internacionales"
/* internacionales.push(cardPeru, cardItalia, cardColombia, cardMexico, cardMiami, cardBrasil); */


//console.log(internacionales);

/*
internacionales.forEach(producto =>{
    console.log(producto);
})*/



/////////////////////////////////////////////////////////////////////////////////////////////

//CARDS PROMOS

/*  CON JQUERY  
const inputBuscar = $("#inputBuscar");
const resultadoBusqueda = $(".resultado-busqueda");
*/

/* 
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
 */

                        //CARDS CON JQUERY

/* const cardsPromos = (ciudad, elemento) => {
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
} */




/* if(window.location.pathname.includes("internacionales")){
    cardsPromos(ciudadesIntenacionalesPromos , "#cardsInternacionales");
}else if (window.location.pathname.includes("nacionales")){
    cardsPromos(resultadoNacional, "#cardsNacionales");
}; */


/* //Funcion para mostrar lo filtrado con Jquery
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
        
}); */

/* Agrego el evento al input Buscar con Jquery*/
/* inputBuscar.change(filtro) */