import { TestBed } from '@angular/core/testing';

import { MyComplaintsService } from './my-complaints.service';

describe('MyComplaintsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyComplaintsService = TestBed.get(MyComplaintsService);
    expect(service).toBeTruthy();
  });
});
