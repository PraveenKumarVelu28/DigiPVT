import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunPayrollSummaryValidationComponent } from './run-payroll-summary-validation.component';

describe('RunPayrollSummaryValidationComponent', () => {
  let component: RunPayrollSummaryValidationComponent;
  let fixture: ComponentFixture<RunPayrollSummaryValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunPayrollSummaryValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunPayrollSummaryValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
