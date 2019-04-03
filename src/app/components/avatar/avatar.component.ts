import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/api/service-api.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  data: any;
  constructor(private serviceApiService : ServiceApiService) {
    this.getdata();
   }

  getdata(){
    this.serviceApiService.getToken().then((result)=>{
      this.data = result['data'];
    },(err)=>{
      console.log('error');
    });
  }

  ngOnInit() {
  }

}
