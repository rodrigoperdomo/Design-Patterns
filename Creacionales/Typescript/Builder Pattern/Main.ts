import { Pizza } from "./Pizza";

let muzarella = new Pizza.Builder("mediana")
    .setMasa("fina")
    .setSalsa("tomate")
    .setQueso("muzarella")
    .setTopping(["aceitunas", "oregano"])
    .build();

console.log(muzarella);