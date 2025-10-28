import { GuiFactory } from "./GuiFactory";
import { WindowButton } from "./WindowButton";
import { WindowVentana } from "./Windowventana";

export class WindowFactory implements GuiFactory {
    createBoton() {
        return new WindowButton();
    }
    createWindow() {
        return new WindowVentana();
    }
}