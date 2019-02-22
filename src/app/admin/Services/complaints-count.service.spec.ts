import { TestBed } from '@angular/core/testing';

import { ComplaintsCountService } from './complaints-count.service';

describe('ComplaintsCountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComplaintsCountService = TestBed.get(ComplaintsCountService);
    expect(service).toBeTruthy();
  });
});
