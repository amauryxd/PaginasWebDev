//Instruccion uno
let productos = [
    {nombre: "Camiseta",precio: 15,stock: 10},
    {nombre: "Pantalones",precio: 25,stock: 8},
    {nombre: "Zapatos",precio: 50,stock: 5},
    {nombre: "Sombrero",precio: 10,stock: 20},
];

//Instruccion dos
let carrito = [];

function agregaAlCarrito(productoNombre, cantidad){
    for (let producto of productos) {
        if(producto.nombre === productoNombre){
            if(producto.stock >= cantidad){
                carrito.push({
                    nombre: productoNombre,
                    cantidad: cantidad,
                    precio: producto.precio
                });

                producto.stock -= cantidad;
                console.info(`${cantidad} ${productoNombre}(s) agregado(s) al carrito`);
            }else{
                console.error(`No hay suficiente stock de ${producto.nombre}`);
            }
            return;
        }
    }
    console.error(`El producto "${productoNombre}" no existe`);
}

//Instruccion 3
function calcularTotal(){
    let total = 0;
    for (let item of carrito) {
        total += item.precio * item.cantidad;
    }

    return total;
}

//instruccion 4
function aplicarDescuento(total){
    if(total > 100){
        return  total * .9;
    }
}

//Instruccion 5
function procesarCompra(){
    console.log("procesando Compra...");
    console.log("3...");
    setTimeout(function(){
        console.log("2...");
        setTimeout(function(){
            console.log("1...");
            setTimeout(function(){
        console.log(`Compra completada. Total a pagar: $${aplicarDescuento(calcularTotal())}`)
            },1000)
        },1000)
    },1000)
}
//reto numero 1 elimiar del carrito
function eliminarCarrito(productoNom, cantidad){
    for (let item of carrito) {
        if(productoNom == item.nombre){
            item.cantidad -= cantidad;
            if(item.cantidad <= 0){
                carrito.splice(carrito.indexOf(item),1);
                console.log(`${productoNom}, a sido eliminado del carrito`)
            }
            console.log(`Se ha(n) quitado ${cantidad} ${productoNom} del carrito`);
        }
    }
}

agregaAlCarrito("Pantalones",3);
agregaAlCarrito("Pantalones",4);
agregaAlCarrito("Pantalones",5);
agregaAlCarrito("Zapatos",2);
agregaAlCarrito("Camisteas",3);
agregaAlCarrito("Camiseta",3);
agregaAlCarrito("Pantalones",2);
//eliminar del carrito
eliminarCarrito("Zapatos",2);
eliminarCarrito("Camiseta",1);



console.log(carrito)
procesarCompra()