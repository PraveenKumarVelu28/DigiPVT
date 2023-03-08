import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedSubjectLoadDetailsComponent } from './validated-subject-load-details.component';

describe('ValidatedSubjectLoadDetailsComponent', () => {
  let component: ValidatedSubjectLoadDetailsComponent;
  let fixture: ComponentFixture<ValidatedSubjectLoadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedSubjectLoadDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedSubjectLoadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
