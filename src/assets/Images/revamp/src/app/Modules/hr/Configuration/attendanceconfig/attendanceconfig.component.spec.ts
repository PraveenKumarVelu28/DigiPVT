import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceconfigComponent } from './attendanceconfig.component';

describe('AttendanceconfigComponent', () => {
  let component: AttendanceconfigComponent;
  let fixture: ComponentFixture<AttendanceconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
