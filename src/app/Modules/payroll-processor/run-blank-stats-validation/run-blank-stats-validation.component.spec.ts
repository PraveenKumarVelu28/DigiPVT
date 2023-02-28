import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunBlankStatsValidationComponent } from './run-blank-stats-validation.component';

describe('RunBlankStatsValidationComponent', () => {
  let component: RunBlankStatsValidationComponent;
  let fixture: ComponentFixture<RunBlankStatsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunBlankStatsValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunBlankStatsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
