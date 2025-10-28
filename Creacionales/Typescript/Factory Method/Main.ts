import { NotificationFactory } from "./NotificationFactory"

enum TypeNotification{
    SMS="SMS",
    EMAIL="Email",
    PUSH="Push"
}

const emailNotification = NotificationFactory.crearNotificacion(TypeNotification.EMAIL)
emailNotification?.createNotification()
const smsNotification = NotificationFactory.crearNotificacion(TypeNotification.SMS)
smsNotification?.createNotification()
const pushNotification = NotificationFactory.crearNotificacion(TypeNotification.PUSH)
pushNotification?.createNotification()
