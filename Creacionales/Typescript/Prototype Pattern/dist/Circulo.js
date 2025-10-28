"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
const Figura_1 = require("./Figura");
class Circulo extends Figura_1.Figura {
    constructor(x, y, color, alto, ancho) {
        if (x instanceof Circulo) {
            super(x.x, x.y, x.color);
            this.alto = x.alto;
            this.ancho = x.ancho;
        }
        else {
            super(x, y, color);
            this.alto = alto;
            this.ancho = ancho;
        }
    }
    clone() {
        return new Circulo(this);
    }
}
exports.Circulo = Circulo;
//# sourceMappingURL=Circulo.js.map