import { Component, OnInit } from '@angular/core';
import { DatalocalService } from '../api/datalocal.service';
import { Productos } from '../models/productos.interface';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  producto : Productos;
  constructor(public storage : Storage, public dataLocalService : DatalocalService) {
   }

  ngOnInit() {
  }

  borrarfavorito(id){
    this.storage.get('Favoritos').then((result)=>{
      let ide = result.find(busca => busca.id === id);
      
      this.dataLocalService.deleteFavoritos(ide.id);
    });
  }
}
