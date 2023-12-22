import { TestBed } from '@angular/core/testing';

import { GsbLoginService } from './gsb-login.service';

describe('GsbLoginService', () => {
  let service: GsbLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GsbLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
