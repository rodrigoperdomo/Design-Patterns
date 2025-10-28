export abstract class Figura {
    protected x: number;
    protected y: number;
    protected color: string;

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    abstract clone(): Figura;

    public setX(x:number):void{
        this.x=x;
    }

    public setY(y:number):void{
        this.y=y;
    }
    
    public setColor(color:string):void{
        this.color=color;
    }   
}

