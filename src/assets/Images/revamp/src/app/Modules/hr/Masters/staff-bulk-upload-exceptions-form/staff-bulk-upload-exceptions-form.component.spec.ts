import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBulkUploadExceptionsFormComponent } from './staff-bulk-upload-exceptions-form.component';

describe('StaffBulkUploadExceptionsFormComponent', () => {
  let component: StaffBulkUploadExceptionsFormComponent;
  let fixture: ComponentFixture<StaffBulkUploadExceptionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffBulkUploadExceptionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBulkUploadExceptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
