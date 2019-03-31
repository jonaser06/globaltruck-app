import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../api/service-api.service';
import { Router } from '@angular/router';

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
  constructor( public serviceapiservice : ServiceApiService, public router: Router) { 
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

  login(){
    this.serviceapiservice.login(this.userData).subscribe(
      result=>{
        this.responseData = result;
        if(this.responseData.status=='true'){
          /* console.log('login con exito'); */
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          location.reload();
          this.router.navigate(['/home']);
        }
      }
    );
  }

}
