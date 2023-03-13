import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunOvertimeReportValidationComponent } from './run-overtime-report-validation.component';

describe('RunOvertimeReportValidationComponent', () => {
  let component: RunOvertimeReportValidationComponent;
  let fixture: ComponentFixture<RunOvertimeReportValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunOvertimeReportValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunOvertimeReportValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
