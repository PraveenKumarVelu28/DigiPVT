import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunHeadCountValidationComponent } from './run-head-count-validation.component';

describe('RunHeadCountValidationComponent', () => {
  let component: RunHeadCountValidationComponent;
  let fixture: ComponentFixture<RunHeadCountValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunHeadCountValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunHeadCountValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
