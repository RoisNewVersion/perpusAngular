import { TestBed, inject } from '@angular/core/testing';

import { KategoriService } from './kategori.service';

describe('KategoriService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KategoriService]
    });
  });

  it('should ...', inject([KategoriService], (service: KategoriService) => {
    expect(service).toBeTruthy();
  }));
});
