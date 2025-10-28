"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationFactory_1 = require("./NotificationFactory");
var TypeNotification;
(function (TypeNotification) {
    TypeNotification["SMS"] = "SMS";
    TypeNotification["EMAIL"] = "Email";
    TypeNotification["PUSH"] = "Push";
})(TypeNotification || (TypeNotification = {}));
const emailNotification = NotificationFactory_1.NotificationFactory.crearNotificacion(TypeNotification.EMAIL);
emailNotification?.createNotification();
const smsNotification = NotificationFactory_1.NotificationFactory.crearNotificacion(TypeNotification.SMS);
smsNotification?.createNotification();
const pushNotification = NotificationFactory_1.NotificationFactory.crearNotificacion(TypeNotification.PUSH);
pushNotification?.createNotification();
//# sourceMappingURL=Main.js.map