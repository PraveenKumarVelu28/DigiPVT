import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNetPayValuesComponent } from './upload-net-pay-values.component';

describe('UploadNetPayValuesComponent', () => {
  let component: UploadNetPayValuesComponent;
  let fixture: ComponentFixture<UploadNetPayValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadNetPayValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadNetPayValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
