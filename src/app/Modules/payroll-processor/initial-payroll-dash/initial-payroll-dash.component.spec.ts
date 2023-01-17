import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPayrollDashComponent } from './initial-payroll-dash.component';

describe('InitialPayrollDashComponent', () => {
  let component: InitialPayrollDashComponent;
  let fixture: ComponentFixture<InitialPayrollDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialPayrollDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPayrollDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
