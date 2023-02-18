import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunColAValidationComponent } from './run-col-avalidation.component';

describe('RunColAValidationComponent', () => {
  let component: RunColAValidationComponent;
  let fixture: ComponentFixture<RunColAValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunColAValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunColAValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
