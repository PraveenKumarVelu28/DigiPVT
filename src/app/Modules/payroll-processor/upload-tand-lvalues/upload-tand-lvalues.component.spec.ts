import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTandLValuesComponent } from './upload-tand-lvalues.component';

describe('UploadTandLValuesComponent', () => {
  let component: UploadTandLValuesComponent;
  let fixture: ComponentFixture<UploadTandLValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadTandLValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTandLValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
