import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConfederacaoComponent } from './listar-confederacao.component';

describe('ListarConfederacaoComponent', () => {
  let component: ListarConfederacaoComponent;
  let fixture: ComponentFixture<ListarConfederacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConfederacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConfederacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
