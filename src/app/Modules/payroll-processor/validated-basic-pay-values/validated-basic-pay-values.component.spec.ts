import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedBasicPayValuesComponent } from './validated-basic-pay-values.component';

describe('ValidatedBasicPayValuesComponent', () => {
  let component: ValidatedBasicPayValuesComponent;
  let fixture: ComponentFixture<ValidatedBasicPayValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedBasicPayValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedBasicPayValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
