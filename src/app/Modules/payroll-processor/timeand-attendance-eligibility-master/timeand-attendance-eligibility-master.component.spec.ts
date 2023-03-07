import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeandAttendanceEligibilityMasterComponent } from './timeand-attendance-eligibility-master.component';

describe('TimeandAttendanceEligibilityMasterComponent', () => {
  let component: TimeandAttendanceEligibilityMasterComponent;
  let fixture: ComponentFixture<TimeandAttendanceEligibilityMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeandAttendanceEligibilityMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeandAttendanceEligibilityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
