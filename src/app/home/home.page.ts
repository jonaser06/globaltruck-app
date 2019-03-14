import { Component } from '@angular/core';
import { ServiceApiService } from '../api/service-api.service';
import { Observable } from 'rxjs';
import { Productos } from '../models/productos.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  results: Observable<Productos>; 
  term : string ='';

  data: any;
  constructor ( public serviceApiService : ServiceApiService){  
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

  resultadoBusqueda(): void {
    this.serviceApiService.buscarProductos(this.term).subscribe(
      resp=>{
        console.log(resp);
    });

    /* this.serviceApiService.buscarProductos(this.search).subscribe(
      post=>{
        this.search = post;
        console.log(this.search);
    }); */

  }

}
