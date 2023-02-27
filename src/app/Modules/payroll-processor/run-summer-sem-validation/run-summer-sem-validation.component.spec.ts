import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunSummerSemValidationComponent } from './run-summer-sem-validation.component';

describe('RunSummerSemValidationComponent', () => {
  let component: RunSummerSemValidationComponent;
  let fixture: ComponentFixture<RunSummerSemValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunSummerSemValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunSummerSemValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
