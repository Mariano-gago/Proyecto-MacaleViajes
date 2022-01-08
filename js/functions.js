function db (callback){
    const url = "../db/dataBase.json";
                        
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => {
        //console.log(resultado);
        callback(resultado); 
    });
}