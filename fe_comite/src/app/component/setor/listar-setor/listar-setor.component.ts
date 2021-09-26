import { Component, OnInit } from '@angular/core';
import { SetorService } from '../../../services/setor.service';

@Component({
  selector: 'app-listar-setor',
  templateUrl: './listar-setor.component.html',
  styleUrls: ['./listar-setor.component.css']
})
export class ListarSetorComponent implements OnInit {

  setores: Array<any> = [];

  constructor(private setorService: SetorService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar()
  {
    this.setorService.listar().subscribe(resp => this.setores = resp);
  }

}
