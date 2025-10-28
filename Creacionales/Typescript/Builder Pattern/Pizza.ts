type Builder = {
    tamanio: string
    masa: string | undefined
    salsa: string | undefined
    queso: string | undefined
    toppings: string[] | undefined
}

export class Pizza {
    private tamanio: string
    private masa: string
    private salsa: string
    private queso: string
    private toppings: string[]

    private constructor(builder: Builder) {
        this.tamanio = builder.tamanio
        this.masa = builder.masa!
        this.salsa = builder.salsa!
        this.queso = builder.queso!
        this.toppings = builder.toppings!
    }

    static Builder = class {
        tamanio: string
        masa: string | undefined
        salsa: string | undefined
        queso: string | undefined
        toppings: string[] | undefined

        constructor(tamanio: string) {
            this.tamanio = tamanio
        }

        setMasa(masa: string): this {
            this.masa = masa
            return this
        }

        setSalsa(salsa: string): this {
            this.salsa = salsa
            return this
        }

        setQueso(queso: string): this {
            this.queso = queso
            return this
        }

        setTopping(topping: string[]): this {
            if (topping.length === 0 || topping === null) throw new Error("Se necesita al menos un topping");
            this.toppings = topping
            return this
        }

        build(): Pizza {
            return new Pizza(this);
        }

    }
}

