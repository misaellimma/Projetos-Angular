import { Comite } from '../entities/comite'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = "http://localhost:8080/comite/"

@Injectable({
  providedIn: 'root'
})
export class ComiteService {

  constructor( private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<Comite[]>(`${url}/listar`);
  }

  get(id:number): Observable<any>{
    return this.http.get(`${url}/listar/${id}`);
  }

  create(data:any): Observable<any>{
    return this.http.post(`${url}/incluir`,data);
  }

  update(id:any,data:any): Observable<any>{
    return this.http.put(`${url}/alterar/${id}`, data);
  }
}
