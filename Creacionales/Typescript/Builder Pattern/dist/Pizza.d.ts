export declare class Pizza {
    private tamanio;
    private masa;
    private salsa;
    private queso;
    private toppings;
    private constructor();
    static Builder: {
        new (tamanio: string): {
            tamanio: string;
            masa: string | undefined;
            salsa: string | undefined;
            queso: string | undefined;
            toppings: string[] | undefined;
            setMasa(masa: string): /*elided*/ any;
            setSalsa(salsa: string): /*elided*/ any;
            setQueso(queso: string): /*elided*/ any;
            setTopping(topping: string[]): /*elided*/ any;
            build(): Pizza;
        };
    };
}
//# sourceMappingURL=Pizza.d.ts.map