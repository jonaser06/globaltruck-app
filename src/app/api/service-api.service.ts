import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Productos } from '../models/productos.interface';

//const apiUrl = "https://globaltruck.cl/api/";
const apiUrl = "http://localhost/globaltruck/api/";
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  private url: string='';
  constructor( private http: HttpClient) { }

  productosHome() {
    let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.http.post(apiUrl+'productos',{},{headers});

    //funcion tambien asi
    /* return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      this.http.post(apiUrl+'productos',{},{headers}).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    }); */
  }

  productodetalle(id: string){

    return this.http.get(apiUrl+'productourl/'+id);

    //funcionta tambien asi
   /*  return new Promise((resolve, reject) => {
      this.http.get(apiUrl+'productourl/'+id).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    }); */
  }

  buscarProductos(term: string){

    return this.http.get<Productos>(apiUrl+'buscar/'+term);

  }
}
