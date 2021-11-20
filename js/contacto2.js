

//Variables para obtener los inputs

const inputName = document.querySelector("#input-name");
const inputLastName = document.querySelector("#input-lastName");
const inputMail = document.querySelector("#input-email");
const inputTel = document.querySelector("#input-tel");
const textArea = document.querySelector("#text-area");




//Variables

const formulario = document.querySelectorAll('.validation');
const buttonEnviar = document.querySelector("#enviar");
const parrafoError = document.querySelector("#parrafoError");
//console.log(parrafoError);
//console.log(buttonEnviar);


//Funciones

/* function addEventListener(){
    buttonEnviar.classList.add("not-allowed");
}
 */
const addEventListener = ()=> buttonEnviar.classList.add("not-allowed");

addEventListener();


//Valida formulario
/* function estadoValido( estado, destino){
    if(estado){
        //console.log(estado);
        //console.log(destino);
        destino.classList.add("success");
        destino.classList.remove("error");
        
    }else{
        destino.classList.add("error");
        destino.classList.remove("success");
    }
    
    return estado;

} */

const estadoValido = (estado, destino) =>{
    if(estado){
        //console.log(estado);
        //console.log(destino);
        destino.classList.add("success");
        destino.classList.remove("error");
        
    }else{
        destino.classList.add("error");
        destino.classList.remove("success");
    }
    return estado
}

/* function validar (e) {
    const intro = e.target;
    if (estadoValido(intro.value !== '', intro) ){
        //Elimina el mensaje de error
        const mensajeError = document.querySelector("p.error");
        //Compara y ejecuta el remove
        mensajeError != null && mensajeError.remove()
    } else {
        showError("Todos los campos son obligatorios");
    }
    //Validar email
    if (intro.type === "email"){
        //console.log("es un email");
        //const resultado = e.target.value.indexOf("@");
        const resultado = intro.value.split("@").length == 2;
        //console.log(resultado);
        estadoValido(resultado, intro);

        if(!resultado){
            showError("No es un mail valido");
        }
    }
    
    if(intro != "" && intro.type === "email"){
        console.log("cualquiera");
    }
} */

const validar = (e, ef) =>{
    console.log(e);
    const intro = e?.target || ef;
    let valido = intro.value !== '';
    
    if (estadoValido(valido, intro) ){
        //Elimina el mensaje de error
        const mensajeError = document.querySelector("p.error");
        //Compara y ejecuta el remove
        mensajeError != null && mensajeError.remove()

    } else {
        showError("Todos los campos son obligatorios");
    }
    //Validar email
    if (intro.type === "email"){
        //console.log("es un email");
        //const resultado = e.target.value.indexOf("@");
        const resultado = intro.value.split("@").length == 2;
        //console.log(resultado);
        valido = resultado;
        estadoValido(resultado, intro);

        if(!resultado){
            showError("No es un mail valido");
        }
    }
    //retorna 
    return valido?1:0
}


const habilitar = (e)=>{

    let valido = 0;
    let eventoFalso = {};
    formulario.forEach(input => {
        eventoFalso = input;
        //valido = valido + validar(eventoFalso)
        valido += validar(null, eventoFalso)
        validar(e);
        //console.log(input);
        console.log(valido);
        
    });
    if(valido == formulario.length){
        console.log("valido", valido);
        buttonEnviar.classList.toggle("not-allowed");
    }
}




//Aplico el evento a todos los inputs
formulario.forEach(input => {
    //input.addEventListener("blur", validar)
    input.addEventListener("blur", habilitar)
});




//Funcion para crear el mensaje de error

/* function showError(mensaje){
    //console.log("error");
    
    const msjeError = document.createElement("p");
    msjeError.classList.add("error", "error__msje");
    msjeError.textContent = mensaje;
    //
    //Muestra un solo mensaje de error
    const mensajeError = document.querySelectorAll(".error");
    //console.log(mensajeError);
    if(mensajeError.length === 1 ){
        parrafoError.appendChild(msjeError);
    }
} */

const showError = mensaje => {
    //console.log("error");
    const msjeError = document.createElement("p");
    msjeError.classList.add("error", "error__msje");
    msjeError.textContent = mensaje;
    //Muestra un solo mensaje de error
    const mensajeError = document.querySelectorAll(".error");
    //console.log(mensajeError);
    if(mensajeError.length === 1 ){
        parrafoError.appendChild(msjeError);
    }
}

