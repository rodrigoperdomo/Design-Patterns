export declare abstract class Figura {
    protected x: number;
    protected y: number;
    protected color: string;
    constructor(x: number, y: number, color: string);
    abstract clone(): Figura;
    setX(x: number): void;
    setY(y: number): void;
    setColor(color: string): void;
}
//# sourceMappingURL=Figura.d.ts.map