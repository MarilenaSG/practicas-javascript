// Código de un cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " centímetros");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " centímetros");

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
const radioCirculo = 5;
const diametroCirculo = radioCirculo * 2;
const pi = 3.1416;




