import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLOAandSuspendedStaffComponent } from './upload-loaand-suspended-staff.component';

describe('UploadLOAandSuspendedStaffComponent', () => {
  let component: UploadLOAandSuspendedStaffComponent;
  let fixture: ComponentFixture<UploadLOAandSuspendedStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLOAandSuspendedStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadLOAandSuspendedStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
