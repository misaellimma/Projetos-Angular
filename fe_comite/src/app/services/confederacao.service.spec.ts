import { TestBed } from '@angular/core/testing';

import { ConfederacaoService } from './confederacao.service';

describe('ConfederacaoService', () => {
  let service: ConfederacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfederacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
