import { TestBed } from '@angular/core/testing';

import { DemoLibService } from './demo-lib.service';

describe('DemoLibService', () => {
  let service: DemoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
