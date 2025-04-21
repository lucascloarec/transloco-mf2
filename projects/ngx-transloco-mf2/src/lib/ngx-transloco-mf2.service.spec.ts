import { TestBed } from '@angular/core/testing';

import { NgxTranslocoMf2Service } from './ngx-transloco-mf2.service';

describe('NgxTranslocoMf2Service', () => {
  let service: NgxTranslocoMf2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTranslocoMf2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
