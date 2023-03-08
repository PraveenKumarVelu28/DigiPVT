import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedPhilhealthDetailsComponent } from './validated-philhealth-details.component';

describe('ValidatedPhilhealthDetailsComponent', () => {
  let component: ValidatedPhilhealthDetailsComponent;
  let fixture: ComponentFixture<ValidatedPhilhealthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedPhilhealthDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedPhilhealthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
