import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunBasicPayValidationComponent } from './run-basic-pay-validation.component';

describe('RunBasicPayValidationComponent', () => {
  let component: RunBasicPayValidationComponent;
  let fixture: ComponentFixture<RunBasicPayValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunBasicPayValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunBasicPayValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
