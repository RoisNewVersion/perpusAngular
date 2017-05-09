import { TestBed, inject } from '@angular/core/testing';

import { RakService } from './rak.service';

describe('RakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RakService]
    });
  });

  it('should ...', inject([RakService], (service: RakService) => {
    expect(service).toBeTruthy();
  }));
});
