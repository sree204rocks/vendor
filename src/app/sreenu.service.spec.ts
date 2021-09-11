import { TestBed } from '@angular/core/testing';

import { SreenuService } from './sreenu.service';

describe('SreenuService', () => {
  let service: SreenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SreenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
