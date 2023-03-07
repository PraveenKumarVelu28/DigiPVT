import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMasterFormComponent } from './validation-master-form.component';

describe('ValidationMasterFormComponent', () => {
  let component: ValidationMasterFormComponent;
  let fixture: ComponentFixture<ValidationMasterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationMasterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
