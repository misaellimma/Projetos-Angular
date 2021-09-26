import { Comite } from '../entities/comite'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComiteService {

  constructor( private _http: HttpClient) { }

  listar(): Observable<any>{
    return this._http.get<Comite[]>("http://localhost:8080/comite/listar/");
  }
}
