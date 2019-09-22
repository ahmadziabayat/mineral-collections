import { TestBed } from '@angular/core/testing';

import { GetMineralService } from './get-mineral.service';

describe('GetMineralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetMineralService = TestBed.get(GetMineralService);
    expect(service).toBeTruthy();
  });
});
