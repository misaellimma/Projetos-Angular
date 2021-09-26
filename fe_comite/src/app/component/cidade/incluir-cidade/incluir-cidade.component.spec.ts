import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirCidadeComponent } from './incluir-cidade.component';

describe('IncluirCidadeComponent', () => {
  let component: IncluirCidadeComponent;
  let fixture: ComponentFixture<IncluirCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirCidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
