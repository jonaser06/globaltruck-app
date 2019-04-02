import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Productos } from '../models/productos.interface';
import { Storage } from '@ionic/storage';

const apiUrl = "https://globaltruck.cl/api/";
//const apiUrl = "http://localhost/globaltruck/api/";
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  private url: string='';
  token : string = null;
  constructor( private http: HttpClient, private storage : Storage) { }

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
    return new Promise(resolve =>{
      this.http.post(apiUrl+'login', JSON.stringify(credentials), {headers: headers})
      .subscribe(resp =>{
        if(resp['status']=='true'){
          this.guardarToken(resp).then(()=> resolve (true));
        }else{
          console.log('falle');
          resolve(false);
        }
      });
    });
  }
  async guardarToken(token){
    this.token = token;
    await this.storage.set('token',token);
  }

  async getToken(){
    const token = await this.storage.get('token');
    if(token){
      this.token = token;
      /* console.log(this.token['data']); */
    }
  }
}
