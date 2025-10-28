"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
class Pizza {
    constructor(builder) {
        this.tamanio = builder.tamanio;
        this.masa = builder.masa;
        this.salsa = builder.salsa;
        this.queso = builder.queso;
        this.toppings = builder.toppings;
    }
}
exports.Pizza = Pizza;
Pizza.Builder = class {
    constructor(tamanio) {
        this.tamanio = tamanio;
    }
    setMasa(masa) {
        this.masa = masa;
        return this;
    }
    setSalsa(salsa) {
        this.salsa = salsa;
        return this;
    }
    setQueso(queso) {
        this.queso = queso;
        return this;
    }
    setTopping(topping) {
        if (topping.length === 0 || topping === null)
            throw new Error("Se necesita al menos un topping");
        this.toppings = topping;
        return this;
    }
    build() {
        return new Pizza(this);
    }
};
//# sourceMappingURL=Pizza.js.map