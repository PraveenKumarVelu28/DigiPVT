import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollProcessorComponent } from './payroll-processor.component';

describe('PayrollProcessorComponent', () => {
  let component: PayrollProcessorComponent;
  let fixture: ComponentFixture<PayrollProcessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollProcessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
