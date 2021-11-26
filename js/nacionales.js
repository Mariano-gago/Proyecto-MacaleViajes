
//Variables

const inputBuscar = document.querySelector("#inputBuscar");
const resultadoBusqueda = document.querySelector(".resultado-busqueda");
const ciudadesNacionalesPromos = [];



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






//Funcion para filtrar 
const filtro = ( e =>{

    const input = e.target.value.toLowerCase();
    //console.log(input);

    /* Filtro ciudades por nombre*/
    let resultado = ciudadesNacionalesPromos.filter( producto => producto.nombre.toLowerCase() == input);
    
    cardsFiltrado(resultado);
    
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

inputBuscar.addEventListener("keyup", filtro);
