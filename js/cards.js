
//Clase constructora para crear dinamicamente las cards

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



//Llamo a la funcion y le paso como parametro el array con los objetos y el elemento 


function cardsHtml(region, elemento) {
    const cardDiv = document.querySelector(elemento);
    //console.log(cardDiv);
    cardDiv.innerHTML = "";

    region.forEach(destino => {
        const div = document.createElement("div");
        //console.log(div);
        div.innerHTML = `
        <div class="col-sm-12 col-md-6 col-lg-4 ">
            <div class="card card__hover" id="card__style" style="width: 18rem;">
                <img src=${destino.imagen} class="card-img-top" alt="Cuzco Peru">
                    <div class="card-body">
                        <h5 class="card-title">${destino.titulo}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${destino.subtitulo}</h6>
                        <p class="card-text">${destino.texto}</p>
                        <p class="card-text textBtn">${destino.precio}</p>
                        <a href="#" class="btn btn-primary ">Ver paquete</a>
                    </div>
            </div>
        </div>`;
        cardDiv.appendChild(div);
    });
}

cardsHtml(internacionales, "#cardsHtml");
