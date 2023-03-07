import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveUploadFormComponent } from './leave-upload-form.component';

describe('LeaveUploadFormComponent', () => {
  let component: LeaveUploadFormComponent;
  let fixture: ComponentFixture<LeaveUploadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveUploadFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
