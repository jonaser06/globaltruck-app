import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../api/service-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  content: any;
  config: any;
 
  constructor(public serviceApiService: ServiceApiService, public activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.Viewdetails();
    this.traeconfig();
  }

  traeconfig(){
    this.serviceApiService.getConfig().subscribe(res=>{
      this.config = res[0];
    });
  }
  
  Viewdetails(){

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.serviceApiService.productodetalle(id).subscribe(post=>{
        
        this.content = post;
    });
    
    //funciona tambien asi
    /* this.serviceApiService.productodetalle(id).then((result) => {
      this.content = result;
      console.log(this.content);
    }, (err) => { 
      //
    }); */
  }

}
