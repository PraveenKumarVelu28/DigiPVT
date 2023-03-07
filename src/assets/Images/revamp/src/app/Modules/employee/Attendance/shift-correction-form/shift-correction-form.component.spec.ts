import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftCorrectionFormComponent } from './shift-correction-form.component';

describe('ShiftCorrectionFormComponent', () => {
  let component: ShiftCorrectionFormComponent;
  let fixture: ComponentFixture<ShiftCorrectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftCorrectionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftCorrectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
