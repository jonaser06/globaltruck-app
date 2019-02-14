import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const apiUrl = "https://globaltruck.cl/api/productos";
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  constructor( private http: HttpClient) { }
  productosHome() {
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
      this.http.post(apiUrl,{},{headers}).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
}
