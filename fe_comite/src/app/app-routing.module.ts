import { ListarAtletaComponent } from './component/atleta/listar-atleta/listar-atleta.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComiteComponent } from './component/comite/listar-comite/listar-comite.component';
import { ListarProvinciaComponent } from './component/provincia/listar-provincia/listar-provincia.component';
import { ListarCidadeComponent } from './component/cidade/listar-cidade/listar-cidade.component';
import { ListarSetorComponent } from './component/setor/listar-setor/listar-setor.component';
import { ListarEventoComponent } from './component/evento/listar-evento/listar-evento.component';
import { ListarModalidadeComponent } from './component/modalidade/listar-modalidade/listar-modalidade.component';
import { ListarConfederacaoComponent } from './component/confederacao/listar-confederacao/listar-confederacao.component';
import { IncluirAtletaComponent } from './component/atleta/incluir-atleta/incluir-atleta.component';
import { IncluirCidadeComponent } from './component/cidade/incluir-cidade/incluir-cidade.component';
import { IncluirComiteComponent } from './component/comite/incluir-comite/incluir-comite.component';


const routes: Routes = [
  {path: 'atleta/listar', component: ListarAtletaComponent},
  {path: 'comite/listar', component: ListarComiteComponent},
  {path: 'provincia/listar', component: ListarProvinciaComponent},
  {path: 'cidade/listar', component: ListarCidadeComponent},
  {path: 'setor/listar', component: ListarSetorComponent },
  {path: 'evento/listar', component: ListarEventoComponent},
  {path: 'modalidade/listar', component: ListarModalidadeComponent},
  {path: 'confederacao/listar', component: ListarConfederacaoComponent},
  {path: 'atleta/incluir', component: IncluirAtletaComponent},
  {path: 'cidade/incluir', component: IncluirCidadeComponent},
  {path: 'comite/incluir', component: IncluirComiteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
