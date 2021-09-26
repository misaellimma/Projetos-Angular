import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Provincia } from '../entities/provincia';



@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private _http: HttpClient) { }

  listar(): Observable<any>{
    return this._http.get<Provincia[]>("http://localhost:8080/provincia/listar/");
}

}