import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../../../services/cidade.service';
import { Cidade } from '../../../entities/cidade';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {
  cidades: Cidade[] = []

  constructor(private servicoCidade: CidadeService) { }

  ngOnInit(): void {
    this.servicoCidade.getAll().subscribe(
      data => {this.cidades = data},
      error => console.log("Erro ao listar cidade: ", error)
    )
  }

}
