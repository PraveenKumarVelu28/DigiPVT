import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLoanReportComponent } from './upload-loan-report.component';

describe('UploadLoanReportComponent', () => {
  let component: UploadLoanReportComponent;
  let fixture: ComponentFixture<UploadLoanReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLoanReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLoanReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
