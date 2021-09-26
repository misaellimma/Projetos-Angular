import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAtletaComponent } from './component/atleta/listar-atleta/listar-atleta.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ListarProvinciaComponent } from './component/provincia/listar-provincia/listar-provincia.component';
import { ListarComiteComponent } from './component/comite/listar-comite/listar-comite.component';
import { ListarCidadeComponent } from './component/cidade/listar-cidade/listar-cidade.component';
import { ListarEventoComponent } from './component/evento/listar-evento/listar-evento.component';
import { ListarSetorComponent } from './component/setor/listar-setor/listar-setor.component';
import { ListarModalidadeComponent } from './component/modalidade/listar-modalidade/listar-modalidade.component';
import { ListarConfederacaoComponent } from './component/confederacao/listar-confederacao/listar-confederacao.component';
import { FormsModule } from '@angular/forms';
import { IncluirAtletaComponent } from './component/atleta/incluir-atleta/incluir-atleta.component';
import { IncluirCidadeComponent } from './component/cidade/incluir-cidade/incluir-cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAtletaComponent,
    ListarProvinciaComponent,
    ListarComiteComponent,
    ListarSetorComponent,
    ListarEventoComponent,
    ListarSetorComponent,
    ListarEventoComponent,
    ListarCidadeComponent,
    ListarModalidadeComponent,
    ListarConfederacaoComponent,
    IncluirAtletaComponent,
    IncluirCidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
