import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedOvertimeReportDetailsComponent } from './validated-overtime-report-details.component';

describe('ValidatedOvertimeReportDetailsComponent', () => {
  let component: ValidatedOvertimeReportDetailsComponent;
  let fixture: ComponentFixture<ValidatedOvertimeReportDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedOvertimeReportDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedOvertimeReportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
