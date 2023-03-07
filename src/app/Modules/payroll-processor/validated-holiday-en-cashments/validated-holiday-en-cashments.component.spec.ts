import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedHolidayEnCashmentsComponent } from './validated-holiday-en-cashments.component';

describe('ValidatedHolidayEnCashmentsComponent', () => {
  let component: ValidatedHolidayEnCashmentsComponent;
  let fixture: ComponentFixture<ValidatedHolidayEnCashmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatedHolidayEnCashmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedHolidayEnCashmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
