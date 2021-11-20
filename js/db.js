

// Clase para Cards del Index.html
class CardsPrincipal {
    constructor(titulo, subtitulo, texto, imagen, precio, region){
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.texto = texto;
        this.imagen = imagen;
        this.precio = precio;
        this.region = region;
    }
}


//Cards de viajes
const cardPeru = new CardsPrincipal ("Cuzco, Peru", "Machu Piccu", "Explora el fascinante mundo Inca", "./imagenes/cuzco-peru.jpg", "$100.000", "Internacional");
const cardItalia = new CardsPrincipal("Roma, Italia", "Imperio Romano", "Visita el Imperio Romano","./imagenes/roma-italia.jpg", "100.000", "Internacional");
const cardColombia = new CardsPrincipal("San Andres, Colombia", "Isla San Andres", "Descansa en el Caribe", "./imagenes/san-andres-colombia.jpg", "100.000", "Internacional");
const cardMexico = new CardsPrincipal("Cancun, Mexico", "Quintana Roo", "Todo el caribe Mexicano al mejor precio","./imagenes/cancun.png", "$100.000", "Internacional" );
const cardMiami = new CardsPrincipal("Miami, Estados Unidos","Miami Beach", "Disfruta las Playas", "./imagenes/mia.png", "$100.000", "Internacional" );
const cardBrasil = new CardsPrincipal("Brasil", "Rio de Janeiro", "Disfruta las playas", "./imagenes/rio.png", "Desde 100.000", "intrnacionales" );


const internacionales = []
internacionales.push(cardPeru, cardItalia, cardColombia, cardMexico, cardMiami, cardBrasil);




// Clase para cards de Ciudades Nacionales

class cardsCiudades {
    constructor (nombre, informacion, precio, imagen){
        this.nombre = nombre;
        this.informacion = informacion;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const ciudadesNacionalesPromos = [];
ciudadesNacionalesPromos.push(new cardsCiudades ("Bariloche", "Paquete 3 noches", "Desde $10.000", "../imagenes/bariloche300x200.png"), new cardsCiudades ("Mendoza", "Paquete 3 noches", "Desde $10.000", "../imagenes/mendoza300x200.png"),
                        new cardsCiudades ("Cataratas del Iguazu", "Paquete 3 noches", "Desde $10.000", "../imagenes/iguazu300x200.png"), new cardsCiudades ("Calafate", "Paquete 3 noches", "Desde $10.000", "../imagenes/calafate300x200.png"),
                        new cardsCiudades ("Salta", "Paquete 3 noches", "Desde $10.000", "../imagenes/salta300x200.png"), new cardsCiudades ("Ushuaia", "Paquete 3 noches", "Desde $10.000", "../imagenes/ushuaia300x200.png"),
                        new cardsCiudades ("Tucuman", "Paquete 3 noches", "Desde $10.000", "../imagenes/tucuman300x200.png"),  new cardsCiudades ("Puerto Madryn", "Paquete 3 noches", "Desde $10.000", "../imagenes/puertomadryn300x200.png"), new cardsCiudades ("Mar Del PLata", "Paquete 3 noches", "Desde $10.000", "../imagenes/mardelplata300x200.png"));

///////////////////////////////////////////////////////////////////////

