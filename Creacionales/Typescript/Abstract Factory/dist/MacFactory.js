"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacFactory = void 0;
const MacBoton_1 = require("./MacBoton");
const MacWindow_1 = require("./MacWindow");
class MacFactory {
    createBoton() {
        return new MacBoton_1.MacBoton();
    }
    createWindow() {
        return new MacWindow_1.MacWindow();
    }
}
exports.MacFactory = MacFactory;
//# sourceMappingURL=MacFactory.js.map