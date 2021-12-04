



const carrito = [];


let divisa = [
    {
        id: "divisa1",
        nombre: "DOLAR",
        valorC: 99.75,
        valorV: 105.75,
        simbolo: "U$S",
        img: "../img/dolar.png"
    },
    {
        id: "divisa2",
        nombre: "EURO",
        valorC: 114.50,
        valorV: 120.50,
        simbolo: "€",
        img: "../img/euro.png"
    }
    ,
    {
        id: "divisa3",
        nombre: "REAL",
        valorC: 17.96,
        valorV: 17.97,
        simbolo: "R$",
        img: "../img/reales.png"
    }
]


const contenedor = document.querySelector(".cotizaciones")

//console.log(compra);

// impresion de cards en el html



const cardHtmlPrueba = ((moneda, elemento)=>{
    const cardDiv = document.querySelector(elemento);
    cardDiv.innerHtml = "";
    

    moneda.forEach( valores => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="../imagenes/bariloche300x200.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${valores.nombre}</h5>
                                <p class="card-text compra__prueba">${valores.simbolo} ${valores.valorC}</p>
                                <p class="venta"> ${valores.simbolo} ${valores.valorV}</p>
                                <button href="#" id="${valores.id}" class="btn btn-primary compra">Compra</button>
                                <button href="#" id="${valores.id}" class="btn btn-danger ventas">Venta</button>
                                </div>
                        </div>`
        //console.log(compra);
        cardDiv.appendChild(div)
})
});

cardHtmlPrueba(divisa, "#cardHtmlPrueba")

const buttonsCompra = document.querySelectorAll(".compra");


const agregarCarrito = (e)=>{
    //console.log(e.target);
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;

    console.log(padre);
    let img = padre.querySelector("img").src;
    //console.log(img);
    let nombre = padre.querySelector("h5").textContent;
    let venta = padre.querySelector("p.venta").textContent;
    let compra = padre.querySelector("p.compra__prueba").textContent; 

    class Objeto {
        constructor(titulo, precio){
            this.titulo = titulo;
            this.precio = precio;
        }

    }

    const resultado = new Objeto(nombre, compra);

    carrito.push(resultado);

    mostrarCompra(carrito);
    console.log(carrito);
}



buttonsCompra.forEach(elemento => {
    elemento.addEventListener("click", agregarCarrito);
});
//console.log(buttonsCompra);

const mostrarCompra = ()=>{
    //console.log(carrito[0].titulo);
    carrito.forEach((producto) =>{
        console.log(producto.titulo);
    })
}