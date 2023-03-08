import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedClothingAllowancesComponent } from './validated-clothing-allowances.component';

describe('ValidatedClothingAllowancesComponent', () => {
  let component: ValidatedClothingAllowancesComponent;
  let fixture: ComponentFixture<ValidatedClothingAllowancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedClothingAllowancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedClothingAllowancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
