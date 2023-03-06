import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAttendanceDaysCountComponent } from './upload-attendance-days-count.component';

describe('UploadAttendanceDaysCountComponent', () => {
  let component: UploadAttendanceDaysCountComponent;
  let fixture: ComponentFixture<UploadAttendanceDaysCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAttendanceDaysCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAttendanceDaysCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
