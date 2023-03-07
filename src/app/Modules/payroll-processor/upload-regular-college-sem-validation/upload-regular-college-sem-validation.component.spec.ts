import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRegularCollegeSemValidationComponent } from './upload-regular-college-sem-validation.component';

describe('UploadRegularCollegeSemValidationComponent', () => {
  let component: UploadRegularCollegeSemValidationComponent;
  let fixture: ComponentFixture<UploadRegularCollegeSemValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadRegularCollegeSemValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRegularCollegeSemValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
