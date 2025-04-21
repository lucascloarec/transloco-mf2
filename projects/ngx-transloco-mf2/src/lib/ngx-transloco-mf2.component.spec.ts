import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTranslocoMf2Component } from './ngx-transloco-mf2.component';

describe('NgxTranslocoMf2Component', () => {
  let component: NgxTranslocoMf2Component;
  let fixture: ComponentFixture<NgxTranslocoMf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTranslocoMf2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTranslocoMf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
