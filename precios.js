function calcularDescuento() {
    const precio = document.getElementById("inputPrecio");
    const descuento = document.getElementById("inputDescuento");
    const precioFinal = (precio * (100 - descuento)) / 100;
    return precioFinal;
}