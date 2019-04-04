import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../api/service-api.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  session : boolean = false;
  data : string = '';
  constructor(private serviceApiService: ServiceApiService) {
    this.sesionActivate();
   }

  ngOnInit() {
    this.sesionActivate();
  }

  sesionActivate(){
    this.serviceApiService.getToken();
  }
}
