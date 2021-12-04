
//Variables

const inputBuscar = document.querySelector("#inputBuscar");
const resultadoBusqueda = document.querySelector(".resultado-busqueda");
const ciudadesNacionalesPromos = [];
const ciudadesIntenacionalesPromos = [];




// Clase para cards de Ciudades Nacionales

class cardsCiudades {
    constructor (nombre, informacion, precio, imagen){
        this.nombre = nombre;
        this.informacion = informacion;
        this.precio = precio;
        this.imagen = imagen;
    }
}


ciudadesNacionalesPromos.push(new cardsCiudades ("Bariloche", "Paquete 3 noches", "Desde $110.000", "../imagenes/bariloche300x200.png"), new cardsCiudades ("Mendoza", "Paquete 3 noches", "Desde $20.000", "../imagenes/mendoza300x200.png"),
                        new cardsCiudades ("Cataratas del Iguazu", "Paquete 3 noches", "Desde $80.000", "../imagenes/iguazu300x200.png"), new cardsCiudades ("Calafate", "Paquete 3 noches", "Desde $50.000", "../imagenes/calafate300x200.png"),
                        new cardsCiudades ("Salta", "Paquete 3 noches", "Desde $50.000", "../imagenes/salta300x200.png"), new cardsCiudades ("Ushuaia", "Paquete 3 noches", "Desde $10.000", "../imagenes/ushuaia300x200.png"),
                        new cardsCiudades ("Tucuman", "Paquete 3 noches", "Desde $10.000", "../imagenes/tucuman300x200.png"),  new cardsCiudades ("Puerto Madryn", "Paquete 3 noches", "Desde $100.000", "../imagenes/puertomadryn300x200.png"), new cardsCiudades ("Mar Del PLata", "Paquete 3 noches", "Desde $90.000", "../imagenes/mardelplata300x200.png"));

ciudadesIntenacionalesPromos.push(new cardsCiudades ("Cancun", "Paquete 7 noches", "Desde $210.000", "../imagenes/bariloche300x200.png"), new cardsCiudades ("Miami", "Paquete 4 noches", "Desde $110.000", "../imagenes/bariloche300x200.png"), 
                        new cardsCiudades ("Cartagena de Indias", "Paquete 5 noches", "Desde $95.000", "../imagenes/bariloche300x200.png"), new cardsCiudades ("Madrid", "Paquete 3 noches", "Desde $210.000", "../imagenes/bariloche300x200.png"), 
                        new cardsCiudades ("Roma", "Paquete 3 noches", "Desde $110.000", "../imagenes/bariloche300x200.png"), new cardsCiudades ("Panama", "Paquete 5 noches", "Desde $250.000", "../imagenes/bariloche300x200.png"),
                        new cardsCiudades ("Grecia", "Paquete 3 noches", "Desde $110.000", "../imagenes/bariloche300x200.png"), new cardsCiudades ("Tailandia", "Paquete 3 noches", "Desde $110.000", "../imagenes/bariloche300x200.png"),
                        new cardsCiudades ("Berlin", "Paquete 6 noches", "Desde 150.000", "../imagenes/bariloche300x200.png"));





const cardsPromos = (ciudad, elemento) => {
    console.log(elemento);
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




//Funcion para mostrar lo filtrado
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
        
});

inputBuscar.addEventListener("input", filtro);









