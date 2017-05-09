import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import { urls, baseUrl } from '../service/url.service';
import { Rak } from '../model/rak';
import { AuthHttp } from 'angular2-jwt';
@Injectable()
export class RakService {

  constructor(private http: AuthHttp) { }

  getAll(): Observable<Rak[]>{
    return this.http.get(baseUrl+urls.rak)
      .map(res=>res.json())
  }
  // create and update
  save(d): Observable<any>{
    if(d.type == 'new'){
      return this.http.post(baseUrl+urls.rak, d)
        .map(res=>res.json())
    }else{
      return this.http.put(baseUrl+urls.rak+d.id_rak, d)
        .map(res=>res.json())
    }
  }
  // delete
  delete(d){
    return this.http.delete(baseUrl+urls.rak+d.id_rak)
      .map(res=>res.json())
  }
}
