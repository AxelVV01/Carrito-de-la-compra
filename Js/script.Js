
// function lista() {

// let pomelo = document.getElementById("pomelo").textContent
// let kiwi = document.getElementById("kiwi").textContent
// let limon = document.getElementById("limon").textContent
// let costo = 2.50
// let precio = prompt("Que cantidad de pomelo desea?" ) * costo

// // let carrito =document.getElementById("carrito").innerHTML
// // carrito = pomelo+ " =  " + precio+"€"
// document.getElementById("carrito").innerHTML = pomelo+ " =  " + precio+"€"

// document.getElementById("preuFinal").innerHTML = precio+"€"
// }


//Con esta funcion puedes seleccionar cada elemento poniendo nombre y precio, en el html.
let cuenta = 0


function lista(nombre, precio) {

    let respuesta = prompt("Que cantidad de " + nombre + " deseas?") 
    let costo =  respuesta * precio
    

    document.getElementById("carrito").innerHTML += `${nombre} ${precio}€ * ${respuesta}/kg = ${costo}€ <br>`
    
    //LA Creación de cuenta = "" + "" da el resultado de total

    cuenta = costo + cuenta

    document.getElementById("preuFinal").innerHTML = cuenta




    // console.log(costo);

}

console.log(lista);