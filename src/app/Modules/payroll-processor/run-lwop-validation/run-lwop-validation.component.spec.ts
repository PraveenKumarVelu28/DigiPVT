import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunLwopValidationComponent } from './run-lwop-validation.component';

describe('RunLwopValidationComponent', () => {
  let component: RunLwopValidationComponent;
  let fixture: ComponentFixture<RunLwopValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunLwopValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunLwopValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
