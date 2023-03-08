import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPhilHealthSummaryReportComponent } from './upload-phil-health-summary-report.component';

describe('UploadPhilHealthSummaryReportComponent', () => {
  let component: UploadPhilHealthSummaryReportComponent;
  let fixture: ComponentFixture<UploadPhilHealthSummaryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPhilHealthSummaryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPhilHealthSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
