import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  session : any;
  session2 : any;
  data : any;
  detalle : any;
  constructor() { }

  ngOnInit() {
    this.sesionActivate();
  }

  sesionActivate(){
    this.data = JSON.parse(localStorage.getItem('userData'));
    if(!this.data){
      console.log('iniciar sesion');
      this.session = true;
    }else{
      if(this.data.status=='true'){
        /* variable q se usara en el front */
        this.detalle = this.data.data;
        this.session2 = true;
      }
    }
  }
}
