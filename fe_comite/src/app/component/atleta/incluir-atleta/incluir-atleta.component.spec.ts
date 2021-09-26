import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirAtletaComponent } from './incluir-atleta.component';

describe('IncluirAtletaComponent', () => {
  let component: IncluirAtletaComponent;
  let fixture: ComponentFixture<IncluirAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirAtletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
