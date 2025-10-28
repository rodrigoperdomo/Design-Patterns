"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangulo = void 0;
const Figura_1 = require("./Figura");
class Rectangulo extends Figura_1.Figura {
    constructor(x, y, color, alto, ancho) {
        if (x instanceof Rectangulo) {
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
        return new Rectangulo(this);
    }
}
exports.Rectangulo = Rectangulo;
//# sourceMappingURL=Rectangulo.js.map