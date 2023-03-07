import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMasterDashboardComponent } from './validation-master-dashboard.component';

describe('ValidationMasterDashboardComponent', () => {
  let component: ValidationMasterDashboardComponent;
  let fixture: ComponentFixture<ValidationMasterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationMasterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMasterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
