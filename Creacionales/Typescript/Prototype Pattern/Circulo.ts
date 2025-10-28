import { Figura } from "./Figura";

export class Circulo extends Figura {
    private alto: number;
    private ancho: number;

    constructor(x: number | Circulo, y?: number, color?: string, alto?: number, ancho?: number) {
        if (x instanceof Circulo) {
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
        return new Circulo(this);
    }
}