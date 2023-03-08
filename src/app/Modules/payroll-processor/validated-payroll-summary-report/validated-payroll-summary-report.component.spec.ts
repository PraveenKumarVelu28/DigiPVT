import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedPayrollSummaryReportComponent } from './validated-payroll-summary-report.component';

describe('ValidatedPayrollSummaryReportComponent', () => {
  let component: ValidatedPayrollSummaryReportComponent;
  let fixture: ComponentFixture<ValidatedPayrollSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedPayrollSummaryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedPayrollSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
