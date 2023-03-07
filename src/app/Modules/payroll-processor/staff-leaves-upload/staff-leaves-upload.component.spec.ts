import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLeavesUploadComponent } from './staff-leaves-upload.component';

describe('StaffLeavesUploadComponent', () => {
  let component: StaffLeavesUploadComponent;
  let fixture: ComponentFixture<StaffLeavesUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLeavesUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLeavesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
