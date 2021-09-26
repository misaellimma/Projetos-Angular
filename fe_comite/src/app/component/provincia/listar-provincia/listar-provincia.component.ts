import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from '../../../services/provincia.service';
import { Provincia } from '../../../entities/provincia';

@Component({
  selector: 'app-listar-provincia',
  templateUrl: './listar-provincia.component.html',
  styleUrls: ['./listar-provincia.component.css']
})
export class ListarProvinciaComponent implements OnInit {

  provincias: Provincia[] = [];

  constructor( private servicoProvincia: ProvinciaService ) { }

  ngOnInit(): void {

    this.servicoProvincia.listar().subscribe(
      data=> {this.provincias = data},
      error => console.log("Erro ao listar atleta", error)
    )
  }

}
