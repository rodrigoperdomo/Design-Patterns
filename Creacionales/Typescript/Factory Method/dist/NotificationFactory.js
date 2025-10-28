"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFactory = void 0;
const EmailNotification_1 = require("./EmailNotification");
const PushNotification_1 = require("./PushNotification");
const SMSNotification_1 = require("./SMSNotification");
class NotificationFactory {
    static crearNotificacion(tipo) {
        if (tipo === null || tipo === " ")
            throw new Error("El tipo es necesario");
        switch (tipo) {
            case "SMS":
                return new SMSNotification_1.SMSNotification();
            case "Email":
                return new EmailNotification_1.EmailNotification();
            case "Push":
                return new PushNotification_1.PushNotification();
            default:
                console.log("Tipo no disponible o incorrecto");
        }
    }
}
exports.NotificationFactory = NotificationFactory;
//# sourceMappingURL=NotificationFactory.js.map