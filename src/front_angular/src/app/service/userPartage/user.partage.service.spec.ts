import { TestBed } from '@angular/core/testing';

import { UserPartageService } from './user.partage.service';

describe('UserPartageService', () => {
  let service: UserPartageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPartageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
