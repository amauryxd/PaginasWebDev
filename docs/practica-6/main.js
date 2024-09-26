const d = document;
const $listaCarrito = d.querySelector("#lista-carrito");
const $totalCarrito = d.querySelector("#total-carrito");
const $btnCompra = d.querySelector("#btn-compra");
const $mensajeCompra = d.querySelector("#mensaje-compra");
const $carrito = d.querySelector("#carrito");
let $btnAdd = d.querySelectorAll("#btn-agregar");
let $btnAdd2 = d.querySelectorAll("#btn-agregado");

/*
d.addEventListener("click", function(e){
    if(!e.target.matches(".producto")){
        return false;
    }
    
    //console.log(e);
    const $producto = e.target;
    let nombre = $producto.getAttribute("data-nombre");
    let precio = parseFloat($producto.getAttribute("data-precio"));

    const $itemCarrito = d.createElement("li");
    $itemCarrito.innerText = `${nombre} - $${precio}`

    $listaCarrito.appendChild($itemCarrito);

    let totalActual = parseFloat($totalCarrito.innerText);
    $totalCarrito.innerText = (totalActual + precio).toFixed(2);

});
*/
d.addEventListener("click",function(e){
    if(!e.target.matches(".btnid")){
        
    }else{
        $btnAdd.forEach( e =>{
            e.addEventListener("click",function(e){
                const $producto = e.target;
                let nombre = $producto.getAttribute("data-nombre");
                let precio = parseFloat($producto.getAttribute("data-precio"));
                let multi = 1
                let subtotalxd =  0;
                //console.log(d.querySelector(`#${$producto.nombre}`));
            if(d.querySelector(`#${$producto.getAttribute("data-nombre")}`)){
                const $itemCarrito = d.querySelector(`#${$producto.getAttribute("data-nombre")}`)
                console.log($itemCarrito);
                let tempmult = 0;
                tempmult = $itemCarrito.dataset.multi.parseFloat + 1;
                $itemCarrito.dataset.multi = tempmult;
                subtotalxd += $itemCarrito.dataset.precio * multi;
                $itemCarrito.innerHTML = `
                <h3>Nombre del artiuclo: ${nombre}</h3>
                <p>precio individual: $${$itemCarrito.dataset.precio}</p>
                <p>Cantidad:<div><button id="btn-quitar">-</button><p id="cantidad${nombre}">${$itemCarrito.dataset.multi}</p><button id="btn-agregar" data-nombre="${nombre}">+</button></div>
                <p id="subto${nombre}">Subtotal: ${subtotalxd}</p>
                `;
                let totalActual = parseFloat($totalCarrito.innerText);
                $totalCarrito.innerText = (totalActual + subtotalxd).toFixed(2);
            }else{
                const $itemCarrito = d.createElement("li");
                subtotalxd = precio * multi;
                $itemCarrito.id = $producto.dataset.nombre;
                $itemCarrito.dataset.nombre = $producto.dataset.nombre;
                $itemCarrito.dataset.precio = $producto.dataset.precio;
                $itemCarrito.dataset.multi = 1;
                $itemCarrito.innerHTML = `
                <h3>Nombre del artiuclo: ${nombre}</h3>
                <p>precio individual: $${precio}</p>
                <p>Cantidad:<div><button id="btn-quitar">-</button><p id="cantidad${nombre}">${multi}</p><button id="btn-agregar" data-nombre="${nombre}">+</button></div>
                <p id="subto${nombre}">Subtotal: ${subtotalxd}</p>
                `;
            
                $listaCarrito.appendChild($itemCarrito);
                let totalActual = parseFloat($totalCarrito.innerText);
                $totalCarrito.innerText = (totalActual + subtotalxd).toFixed(2);
            }
            $btnAdd = d.querySelectorAll("#btn-agregar");
            });
            
        });
    }
});
/*
$btnAdd.addEventListener("click",function(e){
    //console.log(e);
    const $producto = e.target;
    if(d.querySelector("#Camiseta")){
        console.log("eiste");
    }else{
        let nombre = $producto.getAttribute("data-nombre");
        let precio = parseFloat($producto.getAttribute("data-precio"));
        const $itemCarrito = d.createElement("li");
    
        $itemCarrito.id = $producto.dataset.nombre;
        $itemCarrito.innerHTML = `
        <h3>Nombre del artiuclo:${nombre}</h3>
        <p>precio individual: $${precio}</p>
        <p>Cantidad:<div><button id="btn-quitar">-</button><p id="cantidad${nombre}">1</p><button id="btn-agregar">+</button></p></div>
        
        `
    
        $listaCarrito.appendChild($itemCarrito);
    
        let totalActual = parseFloat($totalCarrito.innerText);
        $totalCarrito.innerText = (totalActual + precio).toFixed(2);
    }
    
});*/


$btnAdd2.forEach(e => {
    e.addEventListener("click",function(e){
        console.log("asuhdas");
    })
})

$listaCarrito.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        const $item = e.target;
        $item.remove();

        let precio = parseFloat($item.innerText.split("- $")[1]);


        let totalActual = parseFloat($totalCarrito.innerText);
        $totalCarrito.innerText = (totalActual - precio).toFixed(2);
    }
});

$btnCompra.addEventListener("click", function(e){
    console.log($listaCarrito.children);
    if($listaCarrito.children.length > 0){
        $mensajeCompra.classList.remove("hidden");
    }else{
        alert("El carrito está vacío, no se puede realizar la compra.");
    }
});