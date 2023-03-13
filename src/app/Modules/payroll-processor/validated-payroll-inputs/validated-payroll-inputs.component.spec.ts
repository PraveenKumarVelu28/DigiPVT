import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedPayrollInputsComponent } from './validated-payroll-inputs.component';

describe('ValidatedPayrollInputsComponent', () => {
  let component: ValidatedPayrollInputsComponent;
  let fixture: ComponentFixture<ValidatedPayrollInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedPayrollInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedPayrollInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
