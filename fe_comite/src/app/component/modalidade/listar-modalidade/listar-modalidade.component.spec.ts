import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarModalidadeComponent } from './listar-modalidade.component';

describe('ListarModalidadeComponent', () => {
  let component: ListarModalidadeComponent;
  let fixture: ComponentFixture<ListarModalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarModalidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
