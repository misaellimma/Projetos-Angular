import { Component, OnInit } from '@angular/core';
import { Modalidade } from '../../../entities/modalidadde';
import { ModalidadeService } from '../../../services/modalidade.service';

@Component({
  selector: 'app-listar-modalidade',
  templateUrl: './listar-modalidade.component.html',
  styleUrls: ['./listar-modalidade.component.css']
})
export class ListarModalidadeComponent implements OnInit {
  modalidades: Modalidade[] = []
  constructor(private serviceModalidade: ModalidadeService) { }

  ngOnInit(): void {
    this.serviceModalidade.listar().subscribe(
      data => {this.modalidades = data},
      error => console.log("Erro ao listar cidade: ", error)
    )
  }
}
