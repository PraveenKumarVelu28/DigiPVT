import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffShiftMasterComponent } from './staff-shift-master.component';

describe('StaffShiftMasterComponent', () => {
  let component: StaffShiftMasterComponent;
  let fixture: ComponentFixture<StaffShiftMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffShiftMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffShiftMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});