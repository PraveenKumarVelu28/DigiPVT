import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunClothingAllowanceComponent } from './run-clothing-allowance.component';

describe('RunClothingAllowanceComponent', () => {
  let component: RunClothingAllowanceComponent;
  let fixture: ComponentFixture<RunClothingAllowanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunClothingAllowanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunClothingAllowanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
