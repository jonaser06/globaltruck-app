import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

const apiUrl = "https://globaltruck.cl/api/";
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  constructor( private http: HttpClient) { }

  productosHome() {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      this.http.post(apiUrl+'productos',{},{headers}).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  productodetalle(id: string){
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl+'productourl/'+id).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  buscarProductos(term: string){
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders();
      
      //let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('producto', term);
      
      this.http.post(apiUrl+'busqueda', {}, {headers: headers}).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
