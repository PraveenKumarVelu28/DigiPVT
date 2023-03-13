import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedAllowanceDetailsForMWCComponent } from './validated-allowance-details-for-mwc.component';

describe('ValidatedAllowanceDetailsForMWCComponent', () => {
  let component: ValidatedAllowanceDetailsForMWCComponent;
  let fixture: ComponentFixture<ValidatedAllowanceDetailsForMWCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedAllowanceDetailsForMWCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedAllowanceDetailsForMWCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
