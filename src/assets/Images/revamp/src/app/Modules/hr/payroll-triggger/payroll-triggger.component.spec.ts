import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollTrigggerComponent } from './payroll-triggger.component';

describe('PayrollTrigggerComponent', () => {
  let component: PayrollTrigggerComponent;
  let fixture: ComponentFixture<PayrollTrigggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollTrigggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollTrigggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
