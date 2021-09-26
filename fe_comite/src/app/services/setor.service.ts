import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  urlSetorList = 'http://localhost:8080/setor/listar';

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<any[]>(this.urlSetorList);
  }
}
