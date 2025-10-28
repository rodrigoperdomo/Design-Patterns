"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("./Pizza");
let muzarella = new Pizza_1.Pizza.Builder("mediana")
    .setMasa("fina")
    .setSalsa("tomate")
    .setQueso("muzarella")
    .setTopping(["aceitunas", "oregano"])
    .build();
console.log(muzarella);
//# sourceMappingURL=Main.js.map