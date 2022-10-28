import { TestBed } from '@angular/core/testing';

import { SharedWebAPIService } from './shared-web-api.service';

describe('SharedWebAPIService', () => {
  let service: SharedWebAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedWebAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
