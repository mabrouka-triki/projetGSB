import { TestBed } from '@angular/core/testing';

import { GsbFraisServiceService } from './gsb-frais-service.service';

describe('GsbFraisServiceService', () => {
  let service: GsbFraisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsbFraisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
