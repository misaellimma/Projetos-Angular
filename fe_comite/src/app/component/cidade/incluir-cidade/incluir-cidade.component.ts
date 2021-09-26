import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CidadeService } from '../../../services/cidade.service';
import { Cidade } from '../../../entities/cidade';
//import Validation from './utils/Validation';

@Component({
  selector: 'app-incluir-cidade',
  templateUrl: './incluir-cidade.component.html',
  styleUrls: ['./incluir-cidade.component.css']
})
export class IncluirCidadeComponent implements OnInit {

    form: FormGroup;
    submitted = false
    resposta = ""
    cidade: Cidade = {
      nome: '', 
      id_provincia: ''
    }
  constructor(private formBuilder: FormBuilder, private cidadeService: CidadeService) { 
    this.form = this.formBuilder.group(
      {
        nome: ['', [
          Validators.required,
          Validators.minLength(3),
        ]],
        id_provincia:['', [
          Validators.required,
          Validators.minLength(1)
        ]]
      }
    )
  }

  ngOnInit(): void {
  }

  get f():{[key: string]:AbstractControl}{
    return this.form.controls
  }

  onSubmit(): void {
    this.submitted = true
    if(this.form.invalid){
      return
    }
    this.cidade = this.form.value
    console.log(JSON.stringify(this.form.value, null, 2))
    this.saveCidade()
  }

  onReset():void {
    this.submitted = false
    this.form.reset();
  }

  saveCidade(): void {
    this.cidadeService.create(this.cidade)
      .subscribe(
        response => {
          this.resposta =response
          console.log(response)
        },
        error => {
          console.log(error)
        })
  }
}
