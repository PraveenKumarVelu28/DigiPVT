import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPayrollSummaryReprtValuesComponent } from './upload-payroll-summary-reprt-values.component';

describe('UploadPayrollSummaryReprtValuesComponent', () => {
  let component: UploadPayrollSummaryReprtValuesComponent;
  let fixture: ComponentFixture<UploadPayrollSummaryReprtValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPayrollSummaryReprtValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPayrollSummaryReprtValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
