import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedColaValuesComponent } from './validated-cola-values.component';

describe('ValidatedColaValuesComponent', () => {
  let component: ValidatedColaValuesComponent;
  let fixture: ComponentFixture<ValidatedColaValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedColaValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedColaValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
