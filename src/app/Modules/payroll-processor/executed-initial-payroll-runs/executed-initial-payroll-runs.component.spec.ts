import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutedInitialPayrollRunsComponent } from './executed-initial-payroll-runs.component';

describe('ExecutedInitialPayrollRunsComponent', () => {
  let component: ExecutedInitialPayrollRunsComponent;
  let fixture: ComponentFixture<ExecutedInitialPayrollRunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutedInitialPayrollRunsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutedInitialPayrollRunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
