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

agregaAlCarrito("Pantalones",3);
agregaAlCarrito("Pantalones",4);
agregaAlCarrito("Pantalones",5);