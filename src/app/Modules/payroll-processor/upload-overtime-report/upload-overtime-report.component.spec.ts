import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOvertimeReportComponent } from './upload-overtime-report.component';

describe('UploadOvertimeReportComponent', () => {
  let component: UploadOvertimeReportComponent;
  let fixture: ComponentFixture<UploadOvertimeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadOvertimeReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadOvertimeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
