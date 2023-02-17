import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPayrollSummaryReportComponent } from './upload-payroll-summary-report.component';

describe('UploadPayrollSummaryReportComponent', () => {
  let component: UploadPayrollSummaryReportComponent;
  let fixture: ComponentFixture<UploadPayrollSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPayrollSummaryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPayrollSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
