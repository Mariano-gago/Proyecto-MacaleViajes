
//Variables
const inputOrigen = document.querySelector("#input-origen");
const inputDestino = document.querySelector("#input-destino");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const inputPersona = document.querySelector("#input-personas");

const inputsViaje = document.querySelectorAll(".input-viaje");


// Objeto Seleccion de inputs viaje

let viaje = {
    origen:"",
    destino:"",
    fechaSalida:"",
    fechaRegreso:"",
    personas:""
}

//Funcion para agregar el atributo a la fecha de regreso
const fecha = (e) => {
    let fechaStart = e.target.value;

    viaje.fechaSalida = fechaStart;
    //Agrego el atributo "min" al input "Fecha Regreso"
    endDate.setAttribute("min", fechaStart);
}
startDate.addEventListener("change", fecha)


//Funcion para agregar los valores de los inputs al objeto
const handleInput = (e) => {
    viaje = {
    ...viaje,
    [e.target.name]: e.target.value.toUpperCase(),
    };
    //console.log(viaje);
};


inputsViaje.forEach((input) =>{
    input.addEventListener("input", handleInput);
})

//Funcion para agregar el evento change al select
inputPersona.addEventListener("change", (e) =>{
    viaje = {
        ...viaje,
        [e.target.name]: e.target.value,
    };
    //console.log(viaje);
    localStorage.setItem("miViaje", JSON.stringify(viaje));
    showMiViaje();
})




//Obtengo el objeto del Local Storage y lo muestro en el html
const showMiViaje = ()=> {

    //Obtengo el valor del local Storage
    const resultadoMiViaje = JSON.parse( localStorage.getItem("miViaje"));

    const miViaje = document.querySelector("#mi-viaje");
    const div = document.createElement("ul");
    div.classList.add("lista-viaje")
    div.innerHTML = `<li>Origen: ${resultadoMiViaje.origen}</li>
                    <li>Destino: ${resultadoMiViaje.destino}</li>
                    <li>Fecha de Salida: ${resultadoMiViaje.fechaSalida}</li>
                    <li>Fecha de Regreso: ${resultadoMiViaje.fechaRegreso}</li>
                    <li>Cantidad de Personas: ${resultadoMiViaje.personas}</li>`;
    miViaje.appendChild(div);
}

//console.log(resultadoMiViaje);