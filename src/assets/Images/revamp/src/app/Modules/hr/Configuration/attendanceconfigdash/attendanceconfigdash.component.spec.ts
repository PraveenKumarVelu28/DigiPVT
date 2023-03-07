import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceconfigdashComponent } from './attendanceconfigdash.component';

describe('AttendanceconfigdashComponent', () => {
  let component: AttendanceconfigdashComponent;
  let fixture: ComponentFixture<AttendanceconfigdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceconfigdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceconfigdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
