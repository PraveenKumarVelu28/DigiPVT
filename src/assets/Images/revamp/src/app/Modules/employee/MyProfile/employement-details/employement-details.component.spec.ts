import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployementDetailsComponent } from './employement-details.component';

describe('EmployementDetailsComponent', () => {
  let component: EmployementDetailsComponent;
  let fixture: ComponentFixture<EmployementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
