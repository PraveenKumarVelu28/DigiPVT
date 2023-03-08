import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunTandLValidationComponent } from './run-tand-lvalidation.component';

describe('RunTandLValidationComponent', () => {
  let component: RunTandLValidationComponent;
  let fixture: ComponentFixture<RunTandLValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunTandLValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunTandLValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
