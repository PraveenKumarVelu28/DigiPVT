import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedPayrollSummaryReportForUNCComponent } from './validated-payroll-summary-report-for-unc.component';

describe('ValidatedPayrollSummaryReportForUNCComponent', () => {
  let component: ValidatedPayrollSummaryReportForUNCComponent;
  let fixture: ComponentFixture<ValidatedPayrollSummaryReportForUNCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedPayrollSummaryReportForUNCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedPayrollSummaryReportForUNCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
