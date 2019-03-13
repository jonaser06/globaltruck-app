import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServiceApiService } from '../api/service-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  id = 'foco-trasero-con-enchufe-r-n592';
  data: any;
  detalleproducto: any;
  search: any;
  constructor ( public serviceApiService : ServiceApiService, public loadingController: LoadingController){  
    this.traerProductos();
  }

  traerProductos(){
    this.serviceApiService.productosHome().subscribe(post=>{
        this.data = post;
    });

    //funciona tambien asi
    /* this.serviceApiService.productosHome().then((result) => {
      this.data = result;
      console.log(this.data);
    }, (err) => { 
      //
    }); */
  }

  resultadoBusqueda(){
    this.serviceApiService.buscarProductos(this.search).subscribe(
      post=>{
        this.search = post;
        console.log(this.search);
    });

  }

}
