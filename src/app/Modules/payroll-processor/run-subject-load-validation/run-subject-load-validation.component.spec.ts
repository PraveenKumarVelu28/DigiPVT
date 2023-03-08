import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunSubjectLoadValidationComponent } from './run-subject-load-validation.component';

describe('RunSubjectLoadValidationComponent', () => {
  let component: RunSubjectLoadValidationComponent;
  let fixture: ComponentFixture<RunSubjectLoadValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunSubjectLoadValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunSubjectLoadValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
