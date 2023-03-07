import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAttendanceCorrectionComponent } from './team-attendance-correction.component';

describe('TeamAttendanceCorrectionComponent', () => {
  let component: TeamAttendanceCorrectionComponent;
  let fixture: ComponentFixture<TeamAttendanceCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamAttendanceCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAttendanceCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
