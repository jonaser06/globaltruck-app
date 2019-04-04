import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PushService } from './api/push.service';
import { Storage } from '@ionic/storage';
import { ServiceApiService } from './api/service-api.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  token : any;
  session : boolean = true;
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
    private pushService: PushService,
    private storage: Storage,
    private apiService: ServiceApiService
  ) {
    this.initializeApp();
    this.token = this.apiService.getToken().pipe(
      tap(t => {
        console.log(t); // Aqui esta el token. Lo mismo podras hacer en cualquier componente.
        if(t){
          this.session = false;
        }
        // se aun no hay token, recibiran null, controlalo.
      })
    );
    // lo de arriba es solo para loguear. El equivalente seria:
    // this.token = this.apiService.getToken();
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
