import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveListDashboardComponent } from './leave-list-dashboard.component';

describe('LeaveListDashboardComponent', () => {
  let component: LeaveListDashboardComponent;
  let fixture: ComponentFixture<LeaveListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveListDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});