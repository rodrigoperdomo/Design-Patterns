import { EmailNotification } from "./EmailNotification";
import { PushNotification } from "./PushNotification";
import { SMSNotification } from "./SMSNotification"

export class NotificationFactory {
    static crearNotificacion(tipo: string) {
        if (tipo === null || tipo === " ") throw new Error("El tipo es necesario")
        switch (tipo) {
            case "SMS":
                return new SMSNotification();
            case "Email":
                return new EmailNotification();
            case "Push":
                return new PushNotification();
            default:
                console.log("Tipo no disponible o incorrecto")
        }
    }
}