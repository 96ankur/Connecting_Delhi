import { TestBed } from '@angular/core/testing';

import { StatusChangeService } from './status-change.service';

describe('StatusChangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusChangeService = TestBed.get(StatusChangeService);
    expect(service).toBeTruthy();
  });
});
