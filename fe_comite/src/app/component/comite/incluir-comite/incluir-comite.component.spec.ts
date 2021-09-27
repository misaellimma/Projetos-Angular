import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirComiteComponent } from './incluir-comite.component';

describe('IncluirComiteComponent', () => {
  let component: IncluirComiteComponent;
  let fixture: ComponentFixture<IncluirComiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirComiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirComiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
