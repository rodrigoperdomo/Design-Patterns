import { Figura } from "./Figura";

export class Rectangulo extends Figura {

    private alto: number;
    private ancho: number;

    constructor(x: number | Rectangulo, y?: number, color?: string, alto?: number, ancho?: number) {
        if (x instanceof Rectangulo) {
            super(x.x, x.y, x.color);
            this.alto = x.alto;
            this.ancho = x.ancho;
        } else {
            super(x, y!, color!);
            this.alto = alto!;
            this.ancho = ancho!;
        }
    }

    clone(): Figura {
        return new Rectangulo(this);
    }

}