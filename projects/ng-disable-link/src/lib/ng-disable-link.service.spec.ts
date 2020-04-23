import { TestBed } from '@angular/core/testing';

import { NgDisableLinkService } from './ng-disable-link.service';

describe('NgDisableLinkService', () => {
  let service: NgDisableLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDisableLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
