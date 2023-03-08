import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationpasswordFormComponent } from './validationpassword-form.component';

describe('ValidationpasswordFormComponent', () => {
  let component: ValidationpasswordFormComponent;
  let fixture: ComponentFixture<ValidationpasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationpasswordFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationpasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
