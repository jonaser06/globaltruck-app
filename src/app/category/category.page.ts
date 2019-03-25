import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../api/service-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  
  categorias : any;

  constructor(private serviceApirService : ServiceApiService) { }

  ngOnInit() {
    this.mostrarCategorias();
  }

  mostrarCategorias(){
    this.serviceApirService.getCategorias().subscribe(result=>{
      this.categorias = result;
      console.log(this.categorias);
    });
  }
}
