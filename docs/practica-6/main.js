const d = document;
const $listaCarrito = d.querySelector("#lista-carrito");
const $totalCarrito = d.querySelector("#total-carrito");
const $btnCompra = d.querySelector("#btn-compra");
const $mensajeCompra = d.querySelector("#mensaje-compra");
const $carrito = d.querySelector("#carrito");
const $btnAdd = d.querySelectorAll("#btn-agregar");
const $loader = d.querySelector("#mensaje-loader");

let prodctosid = [];

d.addEventListener("click",function(e){
    if(!e.target.matches(".btnid")){
        
    }else{
        let prodcto= e.target;
        let nombre = prodcto.dataset.nombre;
        let precio = parseFloat(prodcto.dataset.precio);
        if(!prodctosid.includes(prodcto.dataset.id)){
        prodctosid.push(prodcto.dataset.id);
        const $itemCarrito = d.createElement("li");
        $itemCarrito.id = `lista${prodcto.dataset.id}`;
        $itemCarrito.innerHTML = `
                <h3>Nombre del artiuclo: ${nombre}</h3>
                <p>precio individual: $${precio}</p>
                <p>Cantidad:<div><button class="btnresta" data-id="${prodcto.dataset.id}" data-nombre="${nombre}" data-precio="${precio}">-</button><p id="cantidad${nombre}" data-cantidad="1">1</p><button class="btnsuma" data-id="${prodcto.dataset.id}" data-nombre="${nombre}" data-precio="${precio}">+</button></div>
                <p id="subto${nombre}">Subtotal: $${precio}</p>
                <button class="quitarcarrito" data-nombre="${nombre}" data-id="${prodcto.dataset.id}">Quitar del carrito</button>
                `;
                $listaCarrito.appendChild($itemCarrito);
        console.log(prodctosid);
        }else{
            let $itemcantidad = d.querySelector("#cantidad"+nombre);
            let itemcantidad = parseFloat($itemcantidad.getAttribute("data-cantidad"))
            itemcantidad++;
            $itemcantidad.setAttribute("data-cantidad",itemcantidad);
            $itemcantidad.innerText = `${itemcantidad}`;
            let subtotal = d.querySelector(`#subto${nombre}`);
            subtotal.innerText=`Subtotal: $`+itemcantidad*precio;
        }
        let totalActual = parseFloat($totalCarrito.innerText);
        $totalCarrito.innerText = (totalActual+precio).toFixed(2);
    }
});

d.addEventListener("click",function(e){
    if(e.target.matches(".btnsuma")){
        const $btnmas = e.target
        let id = $btnmas.dataset.id;
        let nombre = $btnmas.dataset.nombre;
        let precio = parseFloat($btnmas.dataset.precio);
        let $itemcantidad = d.querySelector("#cantidad"+nombre);
        let itemcantidad = parseFloat($itemcantidad.getAttribute("data-cantidad"))
        itemcantidad++;
        $itemcantidad.setAttribute("data-cantidad",itemcantidad);
        $itemcantidad.innerText = `${itemcantidad}`;
        let subtotal = d.querySelector(`#subto${nombre}`);
        subtotal.innerText=`Subtotal: $`+itemcantidad*precio;
        let totalActual = parseFloat($totalCarrito.innerText);
        $totalCarrito.innerText = (totalActual+precio).toFixed(2);
    }
    if(e.target.matches(".btnresta")){
        const $btnmas = e.target
        let id = $btnmas.dataset.id;
        let nombre = $btnmas.dataset.nombre;
        let precio = parseFloat($btnmas.dataset.precio);
        let $itemcantidad = d.querySelector("#cantidad"+nombre);
        let itemcantidad = parseFloat($itemcantidad.getAttribute("data-cantidad"))
        itemcantidad--;
        $itemcantidad.setAttribute("data-cantidad",itemcantidad);
        $itemcantidad.innerText = `${itemcantidad}`;
        let subtotal = d.querySelector(`#subto${nombre}`);
        subtotal.innerText=`Subtotal: $`+itemcantidad*precio;
        let totalActual = parseFloat($totalCarrito.innerText);
        $totalCarrito.innerText = (totalActual-precio).toFixed(2);
        if(itemcantidad == 0){
            eliminar(id);
        }
        }
});

function eliminar(id){
    let liid = d.querySelector("#lista"+id);
    removeItemOnce(prodctosid,id);
    liid.remove();
}

function removeItemOnce(arr,value){
    var index = arr.indexOf(value);
    if(index > -1){
        arr.splice(index,1);
    }
    return arr;
}

d.addEventListener("click",function(e){
    if(!e.target.matches(".quitarcarrito")){
        return;
    }else{
        const $btnquitar = e.target;
        let idquitar = $btnquitar.dataset.id;
        let nombre = $btnquitar.dataset.nombre;
        let subtotal = d.querySelector(`#subto${nombre}`);
        console.log(subtotal);
        let subtotal2 = subtotal.innerText.split("$")[1]
        console.log(subtotal2);
        let totalActual = parseFloat($totalCarrito.innerText);

        $totalCarrito.innerText = (totalActual-subtotal2).toFixed(2);
        eliminar(idquitar);
    }
});

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
/*
d.addEventListener("click",function(e){
    if(!e.target.matches(".btnid")){
        return;
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
                let $itemCarrito = d.querySelector(`#${$producto.getAttribute("data-nombre")}`)
                //console.log($itemCarrito);
                let tempmult = 0;
                tempmult = parseInt($itemCarrito.dataset.multi) + 1;
                console.log(tempmult);
                $itemCarrito.dataset.multi = tempmult;
                subtotalxd += parseFloat($itemCarrito.dataset.precio) * multi;
                $itemCarrito.innerHTML = `
                <h3>Nombre del artiuclo: ${nombre}</h3>
                <p>precio individual: $${$itemCarrito.dataset.precio}</p>
                <p>Cantidad:<div><button id="btn-quitar">-</button><p id="cantidad${nombre}">${$itemCarrito.dataset.multi}</p><button id="btn-agregar" data-nombre="${nombre}" data-precio="${precio}">+</button></div>
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
            return;
            });
            return;
        });
    }
});
*/
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

/*
$listaCarrito.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        const $item = e.target;
        $item.remove();

        let precio = parseFloat($item.innerText.split("- $")[1]);


        let totalActual = parseFloat($totalCarrito.innerText);
        $totalCarrito.innerText = (totalActual - precio).toFixed(2);
    }
});*/

$btnCompra.addEventListener("click", function(e){
    console.log($listaCarrito.children);
    if($listaCarrito.children.length > 0){
        //$mensajeCompra.classList.remove("hidden");
        $loader.classList.remove("hidden");
        setTimeout(()=>{
            $mensajeCompra.classList.remove("hidden");
            $loader.classList.add("hidden");
        },5000);
    }else{
        alert("El carrito está vacío, no se puede realizar la compra.");
    }
});

f