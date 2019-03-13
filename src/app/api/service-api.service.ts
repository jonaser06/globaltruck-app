import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

const apiUrl = "https://globaltruck.cl/api/";
//const apiUrl = "http://localhost/globaltruck/api/";
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
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

  buscarProductos(term: any){

    /* const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Accept', 'application/json');
    headers.append('producto', term);
    const options = new RequestOptions({ headers: headers });

    return this.http.post(apiUrl+'busqueda', {}, options)
    .map(res => res.json()
      .catch(error => Observable
        .throw(error))
        .subscribe(
          data => console.log('success'),
          error => console.log(error)
        ));
    
    } */

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/x-www-form-urlencoded');    
    httpHeaders.set('producto', 'volvo');
    let options = {headers:httpHeaders};

    return this.http.post(apiUrl+'busqueda', {}, options );

  }
}
