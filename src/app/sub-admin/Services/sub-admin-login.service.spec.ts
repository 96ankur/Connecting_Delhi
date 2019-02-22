import { TestBed } from '@angular/core/testing';

import { SubAdminLoginService } from './sub-admin-login.service';

describe('SubAdminLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubAdminLoginService = TestBed.get(SubAdminLoginService);
    expect(service).toBeTruthy();
  });
});
