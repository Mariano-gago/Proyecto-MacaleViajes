
const tituloNombreCiudad = document.querySelector("#input-nombreCiudad");
const inputTraslado = document.querySelector("#input-traslado");
const inputAlojamiento = document.querySelector("#input-alojamiento");
const inputExcursion = document.querySelector("#input-excursion");
const inputPasajes = document.querySelector("#input-pasajes");
const inputInfo = document.querySelector("#input-info");

const arrayInputs = [];

arrayInputs.push(tituloNombreCiudad, inputTraslado, inputAlojamiento, inputExcursion, inputPasajes, inputInfo);
console.log(arrayInputs);
/* console.log(tituloNombreCiudad);
console.log(inputTraslado);
console.log(inputAlojamiento);
console.log(inputExcursion);
console.log(inputPasajes);
console.log(inputInfo); */

/* class claseEditor{
    constructor(nombre, traslado, alojamiento, excursion, pasajes, info){
        this.nombre = nombre;
        this.traslado = traslado;
        this.alojamiento = alojamiento;
        this.excursion = excursion;
        this.pasajes = pasajes;
        this.info = info;
    }
}

const objetoEditor = new claseEditor (tituloNombreCiudad, inputTraslado, inputAlojamiento, inputExcursion, inputPasajes, inputInfo);

console.log(objetoEditor);

objetoEditor.array.forEach(element => {
    
}); */

const editar = (e) => {
    let nombreCiudad = e.target.value;
    console.log(nombreCiudad);
}


arrayInputs.forEach((input) => {
    //console.log(input);
    input.addEventListener("keyup", editar);
})


tituloNombreCiudad.addEventListener("keyup", editar);

