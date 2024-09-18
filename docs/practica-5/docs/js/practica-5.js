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
    setTimeout(function(){
        console.log(`Compra completada. Total a pagar: $${aplicarDescuento(calcularTotal())}`)
    },3000)
}

agregaAlCarrito("Pantalones",3);
agregaAlCarrito("Pantalones",4);
agregaAlCarrito("Pantalones",5);
agregaAlCarrito("Zapatos",2);
agregaAlCarrito("Camisteas",3);
agregaAlCarrito("Camiseta",3);
agregaAlCarrito("Pantalones",2);

console.log(carrito)
procesarCompra()