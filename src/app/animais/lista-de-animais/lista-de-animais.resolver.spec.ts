import { TestBed } from '@angular/core/testing';

import { ListaDeAnimaisResolver } from './lista-de-animais.resolver';

describe('ListaDeAnimaisResolver', () => {
  let resolver: ListaDeAnimaisResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaDeAnimaisResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
