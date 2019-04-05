import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PushService } from './api/push.service';
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
    private apiService: ServiceApiService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
    this.token = this.apiService.getToken().pipe(
      tap(t => {
        console.log(t);
        if(t){
          this.session = false;
        }
      })
    );

  }
  ngOnInit() {}

   login(){
    this.navCtrl.navigateRoot('/login', {animated:true});
   }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushService.configInit();
    });
  }
}
