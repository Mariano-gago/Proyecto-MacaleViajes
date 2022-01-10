function db (callback){
    const url = "https://mariano-gago.github.io/Proyecto-MacaleViajes/db/dataBase.json";
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => {
        //console.log(resultado);
        callback(resultado); 
    });
}