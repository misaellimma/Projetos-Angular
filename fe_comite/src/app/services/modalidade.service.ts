import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modalidade } from '../entities/modalidadde';

@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {

  constructor(private http: HttpClient) { }

  listar():Observable<any>{
    return this.http.get<Modalidade>("http://localhost:8080/modalidade/listar")
  }
}
