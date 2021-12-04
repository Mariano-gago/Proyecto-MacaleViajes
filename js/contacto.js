// Variables
const formulario = document.querySelectorAll(".validation");
const btnEnviar = document.querySelector("#enviar");
const parrafoError = document.querySelector("#parrafoError");
const reset = document.querySelector(".reset");
const btnBorrar = document.querySelector("#borrar")

//Variables para obtener los inputs

const inputName = document.querySelector("#input-name");
const inputLastName = document.querySelector("#input-lastName");
const inputMail = document.querySelector("#input-email");
const inputTel = document.querySelector("#input-tel");
const textArea = document.querySelector("#text-area");


//Deshabilito boton de enviar
btnEnviar.disable = true;
btnEnviar.classList.add("not-allowed");

//Funcion para resetear el formulario
const resetFormulario = () => reset.reset()


//Valida el formulario
const validarFormulario = e => {
    
    let input = e.target;
    //console.log(input.value);
    if(input.value !== ""){
        //Elimina mensaje de error si hay 
        const errores = document.querySelector("p.error__msje");
        if(errores){
            errores.remove()
        }
        //Agrega las clases de css
        input.classList.add("success");
        input.classList.remove("error");
    }else{
        input.classList.add("error");
        input.classList.remove("success");

        //Envia mensaje a la funcion showError 
        showError("Todos los campos son obligatorios");
    }
    //Valida el input del email
    if(input.type === "email"){
        const resultado = e.target.value.indexOf("@");
        //console.log(resultado);
        //const resultado = input.value.split("@").length == 2;


        //Elimina mensaje de error si hay
        if(resultado < 0){
            const errores = document.querySelector("p.error__msje");
            if(errores){
                errores.remove()
            }
            //Agrega las clases de css
            input.classList.add("error");
            input.classList.remove("success");
            //Envia mensaje de error a showError
            showError("No es un email valido");
        }
    }
    
    //Habilita el boton de enviar
    if((inputName.value !== "" && inputLastName.value !== "") && (inputTel.value !== "" && inputMail.value !== "") && (textArea.value !=="")){
        btnEnviar.classList.remove("not-allowed");
    }
}


//Muestra el mensaje de error
const showError = mensaje => {
    const mensajeError = document.createElement("p");
    mensajeError.textContent = mensaje ;
    mensajeError.classList.add("error__msje");

    const error = document.querySelectorAll(".error__msje");
    if(error.length == 0){
        parrafoError.appendChild(mensajeError);
    }
}


//Agrega el evento a todos los inputs
formulario.forEach( input =>  input.addEventListener("blur", validarFormulario));




//Envia el formulario, muestra spinner
const enviarFormulario = e => {
    e.preventDefault();
    //console.log("click");
    const spinner = document.querySelector(".spinner");
    //console.log(spinner);
    spinner.innerHTML = "";
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="btn-success" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Enviando...
    </button>
    `
    spinner.appendChild(div);

    //Elimina el spinner despues de 3 segundos y crea el mensaje de email enviado
    setTimeout(() => {
        div.remove()
        
        spinner.innerHTML = "Enviar";

        //Se crea un div para mostrar el mensaje de email enviado
        const divMsje = document.querySelector(".divMsje");
        const msjeEnviado = document.createElement("div");
        msjeEnviado.innerHTML = `
        <div class="alert alert-success " role="alert">
            Consulta enviada con exito!
        </div>`
        divMsje.appendChild(msjeEnviado);
        setTimeout(() => {
            msjeEnviado.remove();

        },2000);
        resetFormulario();
    },3000);

}
//console.log(reset);


//Boton para borrar el formulario
btnBorrar.addEventListener("click", ()=> resetFormulario());

//Evento del boton enviar
btnEnviar.addEventListener("click", enviarFormulario);


