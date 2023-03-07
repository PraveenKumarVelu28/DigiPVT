import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedRetroBasicPayAdjustmentsComponent } from './validated-retro-basic-pay-adjustments.component';

describe('ValidatedRetroBasicPayAdjustmentsComponent', () => {
  let component: ValidatedRetroBasicPayAdjustmentsComponent;
  let fixture: ComponentFixture<ValidatedRetroBasicPayAdjustmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedRetroBasicPayAdjustmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedRetroBasicPayAdjustmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
