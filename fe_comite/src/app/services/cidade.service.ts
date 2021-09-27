import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cidade } from '../entities/cidade';

const urlListar = "http://localhost:8080/cidade/listar"
const urlIncluir = "http://localhost:8080/cidade/incluir"
const urlAlterar = "http://localhost:8080/cidade/alterar"

@Injectable({
  providedIn: 'root'
})
export class CidadeService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Cidade[]>{
    return this.http.get<Cidade[]>(urlListar)
  }

  get(id:number): Observable<any>{
    return this.http.get(`${urlListar}/${id}`);
  }

  create(data:any): Observable<any>{
    return this.http.post(urlIncluir,data);
  }

  update(id:any,data:any): Observable<any>{
    return this.http.put(`${urlAlterar}/${id}`, data);
  }
}
