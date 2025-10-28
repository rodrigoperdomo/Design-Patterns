import { Notification } from "./Notification";

export class PushNotification implements Notification {

    createNotification(): void {
        console.log("Enviando notificación desde push...")
    }

}