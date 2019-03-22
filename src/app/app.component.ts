import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  data : any;
  detalle : any;
  public appAcount = [
    {
      title: 'Cuenta',
      url: '/account',
      icon: 'contact'
    },
    {
      title: 'Historial',
      url: '/history',
      icon: 'time'
    },
    {
      title: 'Cerrar Sesión',
      url: '/logout',
      icon: 'exit'
    }
  ];

  public appGlobal = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Categorías',
      url: '/category',
      icon: 'albums'
    },
    {
      title: 'Servicios',
      url: '/services',
      icon: 'cog'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    
  }

  ngOnInit() {
    this.sesionActivate();
  }

  sesionActivate(){
    this.data = JSON.parse(localStorage.getItem('userData'));
    if(!this.data){
      console.log('iniciar sesion');
      this.detalle = {"name":"Iniciar Sesion"};
    }else{
      if(this.data.status=='true'){
        /* variable q se usara en el front */
        this.detalle = this.data.data;
        
      }
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
