import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import { urls, baseUrl } from '../service/url.service';
import { Kategori } from '../model/kategori';
import { AuthHttp } from 'angular2-jwt';
@Injectable()
export class KategoriService {

  constructor(private http: AuthHttp) { }

  getAll(): Observable<Kategori[]>{
    return this.http.get(baseUrl+urls.kategori)
      .map(res=>res.json())
  }
  // create and update
  save(d): Observable<any>{
    if(d.type == 'new'){
      return this.http.post(baseUrl+urls.kategori, d)
        .map(res=>res.json())
    }else{
      return this.http.put(baseUrl+urls.kategori+d.id_kategori, d)
        .map(res=>res.json())
    }
  }
  // delete
  delete(d){
    return this.http.delete(baseUrl+urls.kategori+d.id_kategori)
      .map(res=>res.json())
  }

}
