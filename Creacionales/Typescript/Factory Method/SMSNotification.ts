import { Notification } from "./Notification";

export class SMSNotification implements Notification{

    createNotification(): void {
        console.log("Enviando norificación desde sms...");
    }
    
}