import { TestBed } from '@angular/core/testing';

import { DisplayComplaintsService } from './display-complaints.service';

describe('DisplayComplaintsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayComplaintsService = TestBed.get(DisplayComplaintsService);
    expect(service).toBeTruthy();
  });
});
