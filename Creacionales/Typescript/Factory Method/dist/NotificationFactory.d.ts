import { EmailNotification } from "./EmailNotification";
import { PushNotification } from "./PushNotification";
import { SMSNotification } from "./SMSNotification";
export declare class NotificationFactory {
    static crearNotificacion(tipo: string): EmailNotification | PushNotification | SMSNotification | undefined;
}
//# sourceMappingURL=NotificationFactory.d.ts.map