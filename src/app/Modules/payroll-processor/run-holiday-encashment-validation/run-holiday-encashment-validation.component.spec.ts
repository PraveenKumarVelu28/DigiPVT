import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunHolidayEncashmentValidationComponent } from './run-holiday-encashment-validation.component';

describe('RunHolidayEncashmentValidationComponent', () => {
  let component: RunHolidayEncashmentValidationComponent;
  let fixture: ComponentFixture<RunHolidayEncashmentValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunHolidayEncashmentValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunHolidayEncashmentValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
