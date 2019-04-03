import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PushService } from './api/push.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  data : any;
  detalle : any;
  session : boolean = false;
  session2 : boolean = true;


  public appAcount = [
    {
      title: 'Cuenta',
      url: '/account',
      icon: 'contact'
    },
    {
      title: 'Favoritos',
      url: '/favoritos',
      icon: 'star'
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
    private statusBar: StatusBar,
    private pushService: PushService
  ) {
    this.initializeApp();
    
  }
  ngOnInit() {
    
   }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushService.configInit();
    });
  }
}
