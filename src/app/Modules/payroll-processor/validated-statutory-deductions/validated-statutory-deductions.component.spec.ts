import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedStatutoryDeductionsComponent } from './validated-statutory-deductions.component';

describe('ValidatedStatutoryDeductionsComponent', () => {
  let component: ValidatedStatutoryDeductionsComponent;
  let fixture: ComponentFixture<ValidatedStatutoryDeductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedStatutoryDeductionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedStatutoryDeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
