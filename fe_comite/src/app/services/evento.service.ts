import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../entities/evento';

const apiUrl = "http://localhost:8080/evento"
@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor( private httpClient : HttpClient) { }

  listar():Observable<any>{
    return this.httpClient.get<Evento[]>(`${apiUrl}/listar`)
  }
}
