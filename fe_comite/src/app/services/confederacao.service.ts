import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Confederacao } from '../entities/confederacao';

@Injectable({
  providedIn: 'root'
})
export class ConfederacaoService {
  
  constructor( private _http: HttpClient ) { }

  listar(): Observable<any>{
    return this._http.get<Confederacao[]>("http://localhost:8080/confederacao/listar/");
  }
}
