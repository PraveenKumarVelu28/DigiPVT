import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSummerCollegeSemValidationComponent } from './upload-summer-college-sem-validation.component';

describe('UploadSummerCollegeSemValidationComponent', () => {
  let component: UploadSummerCollegeSemValidationComponent;
  let fixture: ComponentFixture<UploadSummerCollegeSemValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadSummerCollegeSemValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSummerCollegeSemValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
