import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusValidationComponent } from './bonus-validation.component';

describe('BonusValidationComponent', () => {
  let component: BonusValidationComponent;
  let fixture: ComponentFixture<BonusValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
