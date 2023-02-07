import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusValidationDetailsComponent } from './bonus-validation-details.component';

describe('BonusValidationDetailsComponent', () => {
  let component: BonusValidationDetailsComponent;
  let fixture: ComponentFixture<BonusValidationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusValidationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusValidationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
