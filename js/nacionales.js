
// Clase constructor para crear los objetos
/* class cardsCiudades {
    constructor (nombre, informacion, precio, imagen){
        this.nombre = nombre;
        this.informacion = informacion;
        this.precio = precio;
        this.imagen = imagen;
    }
} */

/* const bariloche = new cardsCiudades ("Bariloche", "paquete 3 noches", "Desde $10.000");
const mendoza = new cardsCiudades ("Mendoza", "paquete 3 noches", "Desde $10.000");
const cataratas = new cardsCiudades ("Cataratas del Iguazu", "paquete 3 noches", "Desde $10.000");
const calafate = new cardsCiudades ("Calafate", "paquete 3 noches", "Desde $10.000");
const salta = new cardsCiudades ("Salta", "paquete 3 noches", "Desde $10.000");
const ushuaia = new cardsCiudades ("Ushuaia", "paquete 3 noches", "Desde $10.000");
const tucuman = new cardsCiudades ("Mar Del PLata", "paquete 3 noches", "Desde $10.000"); */

/* const ciudadesNacionalesPromos = [];
ciudadesNacionalesPromos.push(new cardsCiudades ("Bariloche", "Paquete 3 noches", "Desde $10.000", "../imagenes/bariloche300x200.png"), new cardsCiudades ("Mendoza", "Paquete 3 noches", "Desde $10.000", "../imagenes/mendoza300x200.png"),
                        new cardsCiudades ("Cataratas del Iguazu", "Paquete 3 noches", "Desde $10.000", "../imagenes/iguazu300x200.png"), new cardsCiudades ("Calafate", "Paquete 3 noches", "Desde $10.000", "../imagenes/calafate300x200.png"),
                        new cardsCiudades ("Salta", "Paquete 3 noches", "Desde $10.000", "../imagenes/salta300x200.png"), new cardsCiudades ("Ushuaia", "Paquete 3 noches", "Desde $10.000", "../imagenes/ushuaia300x200.png"),
                        new cardsCiudades ("Tucuman", "Paquete 3 noches", "Desde $10.000", "../imagenes/tucuman300x200.png"),  new cardsCiudades ("Puerto Madryn", "Paquete 3 noches", "Desde $10.000", "../imagenes/puertomadryn300x200.png"), new cardsCiudades ("Mar Del PLata", "Paquete 3 noches", "Desde $10.000", "../imagenes/mardelplata300x200.png"));
 */
const ciudadesNacionales = [];
ciudadesNacionales.push()



const cardsPromosNacionales = (ciudad, elemento) => {
    const divCard = document.querySelector(elemento);
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
    
}

cardsPromosNacionales(ciudadesNacionalesPromos, "#cardsNacionales");