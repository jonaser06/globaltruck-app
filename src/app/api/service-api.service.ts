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
  }
  getCategorias() {
    let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
    return this.http.post(apiUrl+'categorias',{},{headers});
  }

  getProductforCategory(id : number, i : number) {
    return this.http.get(apiUrl+'productosAll/'+id+'/'+i);
  }
  
  productodetalle(id: string){
    return this.http.get(apiUrl+'productourl/'+id);
  }

  buscarProductos(term: string){
    this.url = apiUrl+'buscar/'+term;
    console.log(this.url);
    return this.http.get<Productos>(this.url).pipe(
      map(results=>results)
      );
  }

  getConfig(){
    return this.http.get(apiUrl+'configsite/');
  }
  login(credentials) {
    let headers = new HttpHeaders();
    return this.http.post(apiUrl+'login', JSON.stringify(credentials), {headers: headers});
  }
}
