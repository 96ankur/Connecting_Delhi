import { TestBed } from '@angular/core/testing';

import { RegisterCompService } from './register-comp.service';

describe('RegisterCompService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterCompService = TestBed.get(RegisterCompService);
    expect(service).toBeTruthy();
  });
});
