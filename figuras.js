// Código de un cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " centímetros");

function perimetroCuadrado(lado) {
    return lado * 4;
}


console.log("El perímetro del cuadrado es: " + perimetroCuadrado(8) + " centímetros");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " centímetros cuadrados");
console.groupEnd;

// Código de un triángulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo= 5.5;
console.log("Los lados de mi triángulo miden " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm y " + baseTriangulo + " cm.");
console.log("La altura del triángulo es " + alturaTriangulo + " centímetros");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es " + perimetroTriangulo + " centímetros");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es " + areaTriangulo + " centímetros cuadrados");
console.groupEnd;

// Código del círculo

console.group("Círculo");
const radioCirculo = 4;
console.log("El radio del círculo es " + radioCirculo + " cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es " + diametroCirculo + " cm");

// PI
const PI = Math.PI;
console.log("PI es " + PI);

// Perímtro circunferencia
const circunferencia = PI * diametroCirculo;
console.log("La circunferencia mide " + circunferencia + " cm");

// Área Circulo
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es " + areaCirculo + " cm cuadrados");
console.groupEnd;





