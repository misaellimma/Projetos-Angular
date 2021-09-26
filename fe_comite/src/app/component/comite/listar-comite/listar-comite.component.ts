import { Comite } from '../../../entities/comite';
import { ComiteService } from '../../../services/comite.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-listar-comite',
  templateUrl: './listar-comite.component.html',
  styleUrls: ['./listar-comite.component.css']
})
export class ListarComiteComponent implements OnInit {

  comites: Comite[] = [];

  constructor( private servicoComite: ComiteService) { }

  ngOnInit(): void {

    this.servicoComite.listar().subscribe(
      data => { this.comites = data},
      error => console.log("Erro ao listar atleta", error)
    )
  }

}
