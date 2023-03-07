import { TestBed } from '@angular/core/testing';

import { DigiPVTService } from './digi-pvt.service';

describe('DigiPVTService', () => {
  let service: DigiPVTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigiPVTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
