import { TestBed } from '@angular/core/testing';

import { FirearmService } from './firearm.service';

describe('FirearmService', () => {
  let service: FirearmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirearmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
