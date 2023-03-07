import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailsWizardComponent } from './staff-details-wizard.component';

describe('StaffDetailsWizardComponent', () => {
  let component: StaffDetailsWizardComponent;
  let fixture: ComponentFixture<StaffDetailsWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffDetailsWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDetailsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
