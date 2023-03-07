import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunFMAValidationComponent } from './run-fmavalidation.component';

describe('RunFMAValidationComponent', () => {
  let component: RunFMAValidationComponent;
  let fixture: ComponentFixture<RunFMAValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunFMAValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunFMAValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
