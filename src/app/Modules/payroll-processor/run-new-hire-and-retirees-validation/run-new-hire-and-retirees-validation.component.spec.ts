import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunNewHireAndRetireesValidationComponent } from './run-new-hire-and-retirees-validation.component';

describe('RunNewHireAndRetireesValidationComponent', () => {
  let component: RunNewHireAndRetireesValidationComponent;
  let fixture: ComponentFixture<RunNewHireAndRetireesValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunNewHireAndRetireesValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunNewHireAndRetireesValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
