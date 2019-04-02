import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceApiService } from '../api/service-api.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  responseData : any;
  detalle : any;
  userData = {"username": "","password": ""};
  data : any;

  @Output() clicklogin = new EventEmitter();

  constructor( public serviceapiservice : ServiceApiService, public router: Router, private navCtrl: NavController) { 
    this.sesionActivate();
  }

  ngOnInit() {
    
  }

  sesionActivate(){
    this.data = JSON.parse(localStorage.getItem('userData'));
    if(!this.data){
      console.log('iniciar sesion');
    }else{
      if(this.data.status=='true'){
        /* variable q se usara en el front */
        this.detalle = this.data.data;
        console.log('Recuperando sesion');
        this.router.navigate(['/home']);
      }
    }
  }

  async login(){
    const valido = await this.serviceapiservice.login(this.userData);
    if(valido){
      /* this.navCtrl.navigateRoot('/home', {animated:true}); */
      const emitir = this.serviceapiservice.getToken();
      this.clicklogin.emit(123456);
    }
  }

}
