import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atleta } from 'src/app/entities/atleta';
import { Modalidade } from 'src/app/entities/modalidadde';
import { ModalidadeService } from '../../../services/modalidade.service';
import { AtletaService } from 'src/app/services/atleta.service';


@Component({
  selector: 'app-incluir-atleta',
  templateUrl: './incluir-atleta.component.html',
  styleUrls: ['./incluir-atleta.component.css']
})
export class IncluirAtletaComponent implements OnInit {

  form: FormGroup
  resposta = ""
  submitted = false;

  modalidades: Modalidade[] = []

  atleta: Atleta = {
    nome: '',
    id_modalidade: ''
  }

  constructor(private atletaService: AtletaService,private formBuilder: FormBuilder, private serviceModalidade: ModalidadeService) { 
    this.form = this.formBuilder.group(
      {
        nome: ['', [
          Validators.required,
          Validators.minLength(3),
        ]],
        id_modalidade:['', [
          Validators.required,
          Validators.minLength(1)
        ]]
      }
    )
  }

  ngOnInit(): void {
    this.serviceModalidade.listar().subscribe(
      data => {this.modalidades = data},
      error => console.log("Erro ao listar modalidade: ", error)
    )
  }

  get f():{[key: string]:AbstractControl}{
    return this.form.controls
  }

  onSubmit(): void {
    this.submitted = true
    if(this.form.invalid){
      return
    }
    this.atleta = this.form.value
    console.log(JSON.stringify(this.form.value, null, 2))
    this.saveAtleta()
  }

  onReset():void {
    this.submitted = false
    this.form.reset();
  }

  saveAtleta(): void {
    this.atletaService.create(this.atleta)
      .subscribe(
        response => {
          this.resposta = response
          console.log(this.resposta)
          this.submitted = true;
        },
        error => {
          console.log(error)
        })
  }
}
