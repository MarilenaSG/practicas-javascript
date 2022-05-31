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
