import { GuiFactory } from "./GuiFactory";
import { MacBoton } from "./MacBoton";
import { MacWindow } from "./MacWindow";

export class MacFactory implements GuiFactory {
    createBoton() {
        return new MacBoton();
    }
    createWindow() {
        return new MacWindow();
    }
}