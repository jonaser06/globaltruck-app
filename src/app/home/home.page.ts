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
  estadoBusqueda : boolean = false;
  mostrar: boolean = true;

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
    if(this.term !=''){
      this.estadoBusqueda = true;
      this.mostrar = false;
      this.results = this.serviceApiService.buscarProductos(this.term);
    }else{
      this.estadoBusqueda = false;
      this.mostrar = true;
    }

    /* this.serviceApiService.buscarProductos(this.search).subscribe(
      post=>{
        this.search = post;
        console.log(this.search);
    }); */

  }

}
