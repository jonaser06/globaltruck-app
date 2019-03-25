import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceApiService } from '../api/service-api.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  content: any;
  categoria: any;
  categorias: any;
  constructor(private activatedRoute : ActivatedRoute, private serviceApiService : ServiceApiService) { }

  ngOnInit() {
    this.Viewdetails();
  }

  Viewdetails(){
    let val = this.activatedRoute.snapshot.paramMap.get('id');
    let id = this.getIdCategory(val);
    this.serviceApiService.getProductforCategory(id, 1).subscribe(post=>{
        this.content = post;
        console.log(this.content)
    });
    this.categoriaActual(id);
  }

  categoriaActual(id){
    this.serviceApiService.getCategorias().subscribe(result=>{
      this.categorias = result;
      for(let i of this.categorias){
        if(i.idcategorias == id){
          this.categoria = i;
        }
      }
    });
  }

  getIdCategory(val: string){
    let id;
    switch (val) {
      case 'volvo':
        id='1';
        break;
      case 'scania-mercedes':
        id='2';
        break;
      case 'repuestos':
        id='3';
        break;
      case 'repuestos-usados':
        id='4';
        break;
      case 'franquicia':
        id='5';
        break;
      default:
        break;
    }

    return id;
  }

}
