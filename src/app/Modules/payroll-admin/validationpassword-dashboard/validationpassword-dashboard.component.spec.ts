import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationpasswordDashboardComponent } from './validationpassword-dashboard.component';

describe('ValidationpasswordDashboardComponent', () => {
  let component: ValidationpasswordDashboardComponent;
  let fixture: ComponentFixture<ValidationpasswordDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationpasswordDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationpasswordDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
