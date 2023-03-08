import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunTaxValidationComponent } from './run-tax-validation.component';

describe('RunTaxValidationComponent', () => {
  let component: RunTaxValidationComponent;
  let fixture: ComponentFixture<RunTaxValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunTaxValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunTaxValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
