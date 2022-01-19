
//Variables
const inputBuscar = document.querySelector("#inputBuscar");
const resultadoBusqueda = document.querySelector(".resultado-busqueda");



//Filtro para seleccionar por regiones
const filtroRegion = resultado =>{

    let resultadoNacional = resultado.filter( region => region.region === "Nacional");
    let resultadoInternacional = resultado.filter( region => region.region === "Internacional");
    //console.log(resultadoInternacional);

    //Envio los parametros a la funcion "cardsPromos" dependiendo de la seleccion
    if(window.location.pathname.includes("internacionales")){
        cardsPromos(resultadoInternacional , "#cardsInternacionales");
    }else if (window.location.pathname.includes("nacionales")){
        cardsPromos(resultadoNacional, "#cardsNacionales");
    };
};


//Muestro en el HTML las cards
const cardsPromos = (ciudad, elemento) => {
    //console.log(elemento);
    const divCard = document.querySelector(elemento)
    
    divCard.innerHTML = ""
    //console.log(divCard);
    ciudad.forEach(ciudad =>{
    const div = document.createElement("div");
    //console.log(ciudad);
    //console.log(div);
    div.innerHTML = `
    <div class="col-md-12 mb-4">
        <a id="${ciudad.id}" class="seleccion" href="../assets/nacionales2.html"">
            <img src="${ciudad.imagen.imagen2}">
            <div class="titulo">
                <h4>${ciudad.nombre}</h4>
            </div>
            <div class= "paquete">
                <span class="iconify mt-1" data-icon="ph:suitcase-simple-bold"></span>
                <p class="paquete__info">${ciudad.informacion}</p>
                <p class="precio__info">Desde ${ciudad.precio}</p>
            </div> 
        </a>         
    </div> `
    
    divCard.appendChild(div);

    });
} 


//Funcion para buscar un producto por el input
function filtro (e) {

    const input = e.target.value.toLowerCase();

    const url = "https://mariano-gago.github.io/Proyecto-MacaleViajes/db/dataBase.json";

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => {
        //console.log(resultado);
        let resultadoNacional = resultado.filter( nombre => nombre.nombre.toLowerCase() === input);
        let resultadoInternacional = resultado.filter( nombre => nombre.nombre.toLowerCase() === input);
        cardsFiltrado(resultadoNacional);
        cardsFiltrado(resultadoInternacional);
    });
};




//Funcion para mostrar lo filtrado
const cardsFiltrado =  resultado => {
    //console.log(resultado);
    resultado.forEach(item =>{
        //console.log(item.imagen.imagen1); 
        resultadoBusqueda.innerHTML = "";

        const div = document.createElement("div");

        div.innerHTML = `
            <div class=" col-md-12 mb-4">
                <a id="prueba" href="../assets/nacionales2.html">
                    <img src="${item.imagen.imagen2}">
                    <div class="titulo">
                        <h4>${item.nombre}</h4>
                    </div>
                    <div class= "paquete">
                        <span class="iconify mt-1" data-icon="ph:suitcase-simple-bold"></span>
                        <p class="paquete__info">${item.informacion}</p>
                        <p class="precio__info">Desde ${item.precio}</p>
                    </div> 
                </a>         
            </div> `

        resultadoBusqueda.appendChild(div);
        })
}; 

// Evento para el input
inputBuscar.addEventListener("input", filtro);


// Cuando el DOM esta listo, llamo a la funcion db
document.addEventListener("DOMContentLoaded", db(filtroRegion));

