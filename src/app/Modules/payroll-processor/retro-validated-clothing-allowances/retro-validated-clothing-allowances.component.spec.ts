import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroValidatedClothingAllowancesComponent } from './retro-validated-clothing-allowances.component';

describe('RetroValidatedClothingAllowancesComponent', () => {
  let component: RetroValidatedClothingAllowancesComponent;
  let fixture: ComponentFixture<RetroValidatedClothingAllowancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetroValidatedClothingAllowancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroValidatedClothingAllowancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
