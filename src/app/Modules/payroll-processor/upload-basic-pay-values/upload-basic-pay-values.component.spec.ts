import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBasicPayValuesComponent } from './upload-basic-pay-values.component';

describe('UploadBasicPayValuesComponent', () => {
  let component: UploadBasicPayValuesComponent;
  let fixture: ComponentFixture<UploadBasicPayValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadBasicPayValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBasicPayValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
