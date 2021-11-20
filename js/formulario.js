
//Variables
const formulario = document.querySelectorAll('.validation');
const buttonEnviar = document.querySelector("#enviar");


//funcion para validar formulario
/* Obtengo el evento del input y se lo paso a la funcion buttonAllowed que toma el formulario ([...formulario] transforma la lista de nodos en un array)
el metodo "every" devuelve todos los valores unicos (todos true o todos false) y se lo pasa a campoValido
le paso a la funcion classHandler (agrega las clases si es tru o false) el target y la validacion de campoValido (true o false) */

const validarForm = (e) => {
    //buttonAllowed (formulario.map(item => campoValido(item)).every(i => i == true));
    buttonAllowed ([...formulario].every(i => campoValido(i)));
    classHandler(e.target, campoValido(e.target));
}

const buttonAllowed = estado => buttonEnviar.classList.toggle("not-allowed", !estado);

//funcion para validar campos

/* Campo valido recibe un objeto (input), 
let isValid tiene el valor del input y devuelve tru o false (verifica si esta vacio o lleno el input)
En el if, comparo el type del input, y si es un "email" le paso a la variable isValid la funcion validarEmail con el valor del input email.
La funcion campoValido retorna isValue, true o false  */

const campoValido = (objeto) => {
    let isValid =  objeto.value !== "";
    if(objeto.type == "email"){
        isValid = validarEmail(objeto.value);
    }
    return isValid
}

//funcion para agregar la clase a los campos
/* Agrega la clase dependiendo si es true o false.
"toggle" agrega la clase si no esta, y si esta, la elimina */
const classHandler = (objeto, isValid) => {
    objeto.classList.toggle("error", !isValid)
    objeto.classList.toggle("success", isValid)
}

//funcion para validar el correo
/* La Funcion validarEmail obtiene "correo" (es el valor del input.type de la funcion campoValido),
let mail guarda el contenido del input y verific si hay un @ 
Retorna true, si se cumple la condicion de que haya un @ y un . (punto) */
const validarEmail = (correo) => {
    let mail = correo.split("@")
    return (mail.length == 2) && (mail[1].split(".").length >= 2)
}

//Desactivo el boton de enviar
buttonAllowed(false);

// funcion para agregar evento a los inputs
formulario.forEach(element => {
    element.addEventListener("blur", validarForm);
});