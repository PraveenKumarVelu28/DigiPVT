import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LwopValidationDetailsComponent } from './lwop-validation-details.component';

describe('LwopValidationDetailsComponent', () => {
  let component: LwopValidationDetailsComponent;
  let fixture: ComponentFixture<LwopValidationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LwopValidationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LwopValidationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
