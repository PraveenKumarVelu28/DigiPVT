import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedLoanProceedsComponent } from './validated-loan-proceeds.component';

describe('ValidatedLoanProceedsComponent', () => {
  let component: ValidatedLoanProceedsComponent;
  let fixture: ComponentFixture<ValidatedLoanProceedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedLoanProceedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedLoanProceedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
