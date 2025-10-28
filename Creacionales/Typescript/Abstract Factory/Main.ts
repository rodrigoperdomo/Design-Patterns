import { MacFactory } from "./MacFactory";
import { WindowFactory } from "./WindowFactory";

const getFactory = (os: string) => {
    switch(os){
        case "Mac":
            return new MacFactory();
        case "Windows":
            return new WindowFactory();
        default:
            throw new Error("Sistema operativo no soportado");
    }   
}

const factory = getFactory("Windows");
factory.createBoton().render();
factory.createWindow().render();