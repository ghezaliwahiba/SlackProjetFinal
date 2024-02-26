import { TestBed } from '@angular/core/testing';

import { ChannelPartageService } from './channel-partage.service';

describe('ChannelPartageService', () => {
  let service: ChannelPartageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelPartageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
