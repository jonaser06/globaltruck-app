import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../api/service-api.service';
import { ActivatedRoute } from '@angular/router';
import { DatalocalService } from '../api/datalocal.service';
import { Productos } from '../models/productos.interface';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  content: any;
  config: any;
  producto: Productos;
  constructor(public serviceApiService: ServiceApiService, public activatedRoute: ActivatedRoute, public dataLocalService: DatalocalService) { }
  
  ngOnInit() {
    this.Viewdetails();
    this.traeconfig();
  }

  traeconfig(){
    this.serviceApiService.getConfig().subscribe(res=>{
      this.config = res[0];
    });
  }
 
  addfavorito(){

    let ide = this.activatedRoute.snapshot.paramMap.get('id');
    this.serviceApiService.productodetalle(ide).subscribe(post=>{
      this.content = post;
    });
    
    this.producto = {
      id: this.content.id,
      Producto: this.content.nombre,
      precio: this.content.precio,
      sinDescuento: this.content.precioDescuento,
      Descripcion: this.content.Descripcion,
      codigo: this.content.codigo,
      stock: this.content.idstock,
      rutaImagen: this.content.rutaImagen,
      UrlAmigable: this.content.UrlAmigable,
      urlsubcategoria: this.content.idsubcategorias,
      urlCategoria: this.content.idsubcategorias
    }


    this.dataLocalService.saveFavoritoService(this.producto);

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
