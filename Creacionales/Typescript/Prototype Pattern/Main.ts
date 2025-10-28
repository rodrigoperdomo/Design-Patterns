import { Circulo } from "./Circulo";
import { Figura } from "./Figura";
import { Rectangulo } from "./Rectangulo";

const circuloOriginal = new Circulo(10, 20, "rojo");
const circuloClonado: Figura = circuloOriginal.clone();

circuloClonado.setColor("azul");

console.log("Círculo Original:", circuloOriginal);
console.log("Círculo Clonado:", circuloClonado);

const rectanguloOriginal = new Rectangulo(30, 40, "verde");
const rectanguloClonado: Figura = rectanguloOriginal.clone();

rectanguloClonado.setColor("Violeta");

console.log("Rectángulo Original:", rectanguloOriginal);
console.log("Rectángulo Clonado:", rectanguloClonado);