import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedTaxValuesComponent } from './validated-tax-values.component';

describe('ValidatedTaxValuesComponent', () => {
  let component: ValidatedTaxValuesComponent;
  let fixture: ComponentFixture<ValidatedTaxValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedTaxValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedTaxValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
