import { Notification } from "./Notification";

export class EmailNotification implements Notification {

    createNotification(): void {
        console.log("Enviando notificación desde mail");
    }

}