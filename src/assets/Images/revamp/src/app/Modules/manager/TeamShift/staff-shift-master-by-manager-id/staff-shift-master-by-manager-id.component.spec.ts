import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffShiftMasterByManagerIDComponent } from './staff-shift-master-by-manager-id.component';

describe('StaffShiftMasterByManagerIDComponent', () => {
  let component: StaffShiftMasterByManagerIDComponent;
  let fixture: ComponentFixture<StaffShiftMasterByManagerIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffShiftMasterByManagerIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffShiftMasterByManagerIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
