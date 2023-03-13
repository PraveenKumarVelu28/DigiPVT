import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunPayrollInputValidationComponent } from './run-payroll-input-validation.component';

describe('RunPayrollInputValidationComponent', () => {
  let component: RunPayrollInputValidationComponent;
  let fixture: ComponentFixture<RunPayrollInputValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunPayrollInputValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunPayrollInputValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
