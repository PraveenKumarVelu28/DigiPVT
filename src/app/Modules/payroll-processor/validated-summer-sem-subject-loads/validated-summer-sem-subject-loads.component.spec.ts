import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedSummerSemSubjectLoadsComponent } from './validated-summer-sem-subject-loads.component';

describe('ValidatedSummerSemSubjectLoadsComponent', () => {
  let component: ValidatedSummerSemSubjectLoadsComponent;
  let fixture: ComponentFixture<ValidatedSummerSemSubjectLoadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedSummerSemSubjectLoadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedSummerSemSubjectLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
