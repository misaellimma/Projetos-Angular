import { Atleta } from '../entities/atleta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlListar = "http://localhost:8080/atleta/listar";
const urlIncluir = "http://localhost:8080/atleta/incluir";


@Injectable({
  providedIn: 'root'
})
export class AtletaService {

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Atleta[]>{
    return this.http.get<Atleta[]>(urlListar);
  }

  get(id:number): Observable<Atleta>{
    return this.http.get(`${urlListar}/${id}`);
  }

  create(data:any): Observable<any>{
    return this.http.post(urlIncluir,data);
  }
}
