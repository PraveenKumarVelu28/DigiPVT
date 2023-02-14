import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadColaValuesComponent } from './upload-cola-values.component';

describe('UploadColaValuesComponent', () => {
  let component: UploadColaValuesComponent;
  let fixture: ComponentFixture<UploadColaValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadColaValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadColaValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
