import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../entities/evento';
import { EventoService } from '../../../services/evento.service';

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit {
  eventos: Evento[] = []
  constructor(private serviceEvento : EventoService) {}


  ngOnInit(): void {
    this.serviceEvento.listar().subscribe(
      response=> this.eventos = response
    )
  }

}
