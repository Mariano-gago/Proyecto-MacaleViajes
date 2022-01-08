// Evento para detectar cuando esta listo el DOM
document.addEventListener("DOMContentLoaded", db);


//Funcion para recopilar informacion de la base de datos (API)
function db (){
    const url = "/db/dataBase.json";

    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => {
            console.log(resultado);
            filtro(resultado);
        });
}


//Funcion para filtrar por region y pasar a la funcion "cardsHtml" para mostrar en el HTML
const filtro = ( resultado =>{
    let resultadoInternacional = resultado.filter( informacion => informacion.region === "Internacional" & informacion.promo === "true");
    cardsHtml(resultadoInternacional, "#cardsHtml"); 
});




//Funcion para mostrar las cards en el HTML
const cardsHtml = ((resultado, elemento) => {
    const cardDiv = document.querySelector(elemento);
    //console.log(cardDiv);
    cardDiv.innerHTML = "";

    resultado.forEach(destino => {
        //console.log(destino.imagen.imagen1);
        const div = document.createElement("div");
        //console.log(div);
        div.innerHTML = `
        <div class="col-sm-12 col-md-6 col-lg-4 ">
            <div class="card card__hover" id="card__style" style="width: 18rem;">
                <img src=${destino.imagen.imagen1} class="card-img-top" alt="Cuzco Peru">
                    <div class="card-body">
                        <h5 class="card-title">${destino.titulo}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${destino.subtitulo}</h6>
                        <p class="card-text">${destino.texto}</p>
                        <p class="card-text textBtn">${destino.precio}</p>
                        <button href="#" class="btn color-btn ">Ver paquete</button>
                    </div>
            </div>
        </div>`;
        cardDiv.appendChild(div);
    });
});






setTimeout(() => {
    let prueba = document.querySelector(".btn");
    console.log(prueba);
},2000);








