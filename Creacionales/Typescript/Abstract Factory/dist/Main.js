"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MacFactory_1 = require("./MacFactory");
const WindowFactory_1 = require("./WindowFactory");
const getFactory = (os) => {
    switch (os) {
        case "Mac":
            return new MacFactory_1.MacFactory();
        case "Windows":
            return new WindowFactory_1.WindowFactory();
        default:
            throw new Error("Sistema operativo no soportado");
    }
};
const factory = getFactory("Windows");
factory.createBoton().render();
factory.createWindow().render();
//# sourceMappingURL=Main.js.map