import { Injectable } from '@angular/core';
import { Productos } from '../models/productos.interface';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {
  productos : Productos[] = [];
  constructor(public toastController: ToastController, public storage: Storage) {
    this.loadFavoritosService();
   }

    async presentToast(message : string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  saveFavoritoService(producto : Productos){

    const existe = this.productos.find(produ => produ.Producto === producto.Producto);
    if(!existe){
      this.productos.unshift(producto);
      this.storage.set('Favoritos', this.productos);
      this.presentToast("Agregado a favoritos");
    }else{
      this.presentToast("Ya existe en favoritos");
    }
  }
  deleteFavoritos(id){
    this.productos = this.productos.filter( producto => producto.id !== id);
    this.storage.set('Favoritos', this.productos);
  }

  async loadFavoritosService(){
    const favoritos = await this.storage.get('Favoritos');
    if(favoritos){
      this.productos = favoritos;
    };
  }
}
