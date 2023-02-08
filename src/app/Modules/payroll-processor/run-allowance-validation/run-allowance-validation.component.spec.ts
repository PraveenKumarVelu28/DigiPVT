import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunAllowanceValidationComponent } from './run-allowance-validation.component';

describe('RunAllowanceValidationComponent', () => {
  let component: RunAllowanceValidationComponent;
  let fixture: ComponentFixture<RunAllowanceValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunAllowanceValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunAllowanceValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
