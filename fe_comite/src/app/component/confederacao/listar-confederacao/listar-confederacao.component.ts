import { Component, OnInit } from '@angular/core';
import { ConfederacaoService } from '../../../services/confederacao.service';
import { Confederacao } from '../../../entities/confederacao';

@Component({
  selector: 'app-listar-confederacao',
  templateUrl: './listar-confederacao.component.html',
  styleUrls: ['./listar-confederacao.component.css']
})
export class ListarConfederacaoComponent implements OnInit {

  confederacoes: Confederacao[] = [];

  constructor( private servicoConfederacao: ConfederacaoService ) { }

  ngOnInit(): void {

    this.servicoConfederacao.listar().subscribe(
      data => { this.confederacoes = data},
      error => console.log("Erro ao listar confederacao", error)
    )
  }
}
