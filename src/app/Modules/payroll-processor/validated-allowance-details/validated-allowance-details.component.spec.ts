import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedAllowanceDetailsComponent } from './validated-allowance-details.component';

describe('ValidatedAllowanceDetailsComponent', () => {
  let component: ValidatedAllowanceDetailsComponent;
  let fixture: ComponentFixture<ValidatedAllowanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedAllowanceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedAllowanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
