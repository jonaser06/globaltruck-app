import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { PushService } from './api/push.service';
import { Storage } from '@ionic/storage';

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

  token : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private pushService: PushService,
    private storage: Storage
  ) {
    this.initializeApp();
    
  }

  ngOnInit() {
    
  }

  async sesionActivate(){
    const token = await this.storage.get('token');
    if(token){
      this.token = token;
      this.session = true;
      this.session2 = null;
    }else{
      this.session = true;
      this.session2 = true;
    }
  }
  login(){
    this.router.navigate(['/login']);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushService.configInit();
      this.sesionActivate();
    });
  }
}
