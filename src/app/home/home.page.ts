import { Component, ApplicationRef } from '@angular/core';
import { ServiceApiService } from '../api/service-api.service';
import { Observable } from 'rxjs';
import { Productos } from '../models/productos.interface';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { PushService } from '../api/push.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  results: Observable<Productos>;
  term : string ='';
  estadoBusqueda : boolean = false;
  mostrar: boolean = true;
  data: any;
  data2: any;

  mensajes: OSNotificationPayload [] = [];
  constructor ( public serviceApiService : ServiceApiService, public pushService : PushService, private applicationRef : ApplicationRef){  
    this.traerProductos();
    this.sesionActivate();
    this.pushService.pushListener.subscribe( noti => {
      this.mensajes.unshift(noti);
      this.applicationRef.tick();
    });
     
  }
  
  async ionViewWillEnter(){
    console.log("will enter - cargar mensajes");
    this.mensajes = await this.pushService.getMensajes();
  }

  traerProductos(){
    this.serviceApiService.productosHome().subscribe(post=>{
        this.data = post;
    });

    //funciona tambien asi
    /* this.serviceApiService.productosHome().then((result) => {
      this.data = result;
      console.log(this.data);
    }, (err) => { 
      //
    }); */
  }

  sesionActivate(){
    this.serviceApiService.getToken();
  }

  resultadoBusqueda( event ): void {
    if(this.term !=''){
      this.estadoBusqueda = true;
      this.mostrar = false;
      this.results = this.serviceApiService.buscarProductos(this.term);
    }else{
      this.estadoBusqueda = false;
      this.mostrar = true;
    }

    /* this.serviceApiService.buscarProductos(this.search).subscribe(
      post=>{
        this.search = post;
        console.log(this.search);
    }); */

  }

}
