"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circulo_1 = require("./Circulo");
const Rectangulo_1 = require("./Rectangulo");
const circuloOriginal = new Circulo_1.Circulo(10, 20, "rojo");
const circuloClonado = circuloOriginal.clone();
circuloClonado.setColor("azul");
console.log("Círculo Original:", circuloOriginal);
console.log("Círculo Clonado:", circuloClonado);
const rectanguloOriginal = new Rectangulo_1.Rectangulo(30, 40, "verde");
const rectanguloClonado = rectanguloOriginal.clone();
rectanguloClonado.setColor("Violeta");
console.log("Rectángulo Original:", rectanguloOriginal);
console.log("Rectángulo Clonado:", rectanguloClonado);
//# sourceMappingURL=Main.js.map