import { TestBed } from '@angular/core/testing';

import { ReloadService } from './reload.service';

describe('ReloaService', () => {
  let service: ReloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
