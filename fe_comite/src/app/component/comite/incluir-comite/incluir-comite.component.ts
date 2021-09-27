import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comite } from 'src/app/entities/comite';
import { ComiteService } from '../../../services/comite.service';


@Component({
  selector: 'app-incluir-comite',
  templateUrl: './incluir-comite.component.html',
  styleUrls: ['./incluir-comite.component.css']
})
export class IncluirComiteComponent implements OnInit {

  form: FormGroup
  submitted = false
  comite:Comite = {
    nome: ''
  }

  constructor(private formBuilder: FormBuilder, private comiteService: ComiteService) { 
    this.form = this.formBuilder.group(
      {
        nome: ['', [
          Validators.required,
          Validators.minLength(3),
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
    this.comite = this.form.value
    console.log(JSON.stringify(this.form.value, null, 2))
    this.saveComite()
  }

  saveComite(): void {
    this.comiteService.create(this.comite)
      .subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error)
        })
  }
}
