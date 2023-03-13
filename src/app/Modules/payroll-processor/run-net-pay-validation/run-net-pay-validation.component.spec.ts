import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunNetPayValidationComponent } from './run-net-pay-validation.component';

describe('RunNetPayValidationComponent', () => {
  let component: RunNetPayValidationComponent;
  let fixture: ComponentFixture<RunNetPayValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunNetPayValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunNetPayValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
