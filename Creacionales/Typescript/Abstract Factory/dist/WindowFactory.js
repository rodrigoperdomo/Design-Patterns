"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowFactory = void 0;
const WindowButton_1 = require("./WindowButton");
const Windowventana_1 = require("./Windowventana");
class WindowFactory {
    createBoton() {
        return new WindowButton_1.WindowButton();
    }
    createWindow() {
        return new Windowventana_1.WindowVentana();
    }
}
exports.WindowFactory = WindowFactory;
//# sourceMappingURL=WindowFactory.js.map