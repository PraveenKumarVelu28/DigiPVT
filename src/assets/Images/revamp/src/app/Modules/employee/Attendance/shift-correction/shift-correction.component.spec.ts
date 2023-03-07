import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftCorrectionComponent } from './shift-correction.component';

describe('ShiftCorrectionComponent', () => {
  let component: ShiftCorrectionComponent;
  let fixture: ComponentFixture<ShiftCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
