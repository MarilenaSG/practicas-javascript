function calcularDescuento(precio, descuento) {
    
    const precioConDescuento = 100 - descuento;
    const precioFinal = (precio * precioConDescuento) / 100;
    return precioFinal;
}

function onclickPrecio(){
    const precio = document.getElementById("inputPrecio");
    const priceValue = inputPrecio.value;
    const descuento = document.getElementById("inputDescuento");
    const descuentoValue = inputDescuento.value;
    const precioConDescuento = calcularDescuento(priceValue, descuentoValue);
    ResultadoPrecio.innerText = "El precio con descuento es " + precioConDescuento + "€";
}

const cupones = ["desc10", "desc25", "desc40"];

function onclickCupon() {
    const precio = document.getElementById("inputPrecio");
    const priceValue = inputPrecio.value;
    const cupon = document.getElementById("inputCupon");
    const cuponValue = inputCupon.value;
    let descuento;

    if (!cupones.includes(cuponValue)) {
        alert("¡El cupón " + cuponValue + " no es válido!")
    }
    
    else if (cuponValue === cupones[0]) {
       descuento = 10;
    }

    else if (cuponValue === cupones[1]) {
       descuento = 25;
    }

    else if (cuponValue === cupones[2]) {
       descuento = 40;
    }
    

    const precioConDescuento = calcularDescuento(priceValue, descuento);
    const resultadoPrecio = document.getElementById(ResultadoPrecio);
    ResultadoPrecio.innerText = "El precio con descuento es " + precioConDescuento + "€";

}

