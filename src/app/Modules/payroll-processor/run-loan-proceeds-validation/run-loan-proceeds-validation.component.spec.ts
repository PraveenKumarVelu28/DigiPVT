import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunLoanProceedsValidationComponent } from './run-loan-proceeds-validation.component';

describe('RunLoanProceedsValidationComponent', () => {
  let component: RunLoanProceedsValidationComponent;
  let fixture: ComponentFixture<RunLoanProceedsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunLoanProceedsValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunLoanProceedsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
