import { Component, OnInit } from '@angular/core';
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

  

  constructor( public serviceapiservice : ServiceApiService, public router: Router, private navCtrl: NavController) { 
  }

  ngOnInit() {
    
  }


  async login(){
    const valido = await this.serviceapiservice.login(this.userData);
    if(valido){
      this.navCtrl.navigateRoot('/home', {animated:true});
      /* this.clicklogin.emit(emitir); */
    }
  }

}
