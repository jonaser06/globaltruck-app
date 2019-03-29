import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes : OSNotificationPayload [] = [
    /* {
      title : 'Titulo de la push',
      body : 'Este el el body de la push',
      date : new Date()
    } */
  ];

  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(private oneSignal: OneSignal, private storage: Storage) { 
    this.cargarMensajes();
  }

  async getMensajes(){
    await this.cargarMensajes();
    return [...this.mensajes];
  }

  configInit(){
    this.oneSignal.startInit('ece9b11d-d45d-4fa4-819f-413949e79b36', '857912063421');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification );

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // do something when notification is received
    this.notificacionRecibida(noti)
    console.log("Notificacion recibida",noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe( async (noti) => {
      // do something when a notification is opened
      console.log("Notificacion abierta",noti);
      await this.notificacionRecibida(noti.notification);
    });

    this.oneSignal.endInit();
  }

  async notificacionRecibida( noti: OSNotification ){

    await this.cargarMensajes();
    const payload = noti.payload;
    const existePush  = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);

    if( existePush ){
      return;
    }

    this.mensajes.unshift( payload );
    this.pushListener.emit( payload );

    await this.guardarMensajes();

  }

  guardarMensajes(){
    this.storage.set("mensajes", this.mensajes);
  }

  async cargarMensajes(){
    
    this.mensajes = await this.storage.get("mensajes") || [];
    return this.mensajes;
  }
}
