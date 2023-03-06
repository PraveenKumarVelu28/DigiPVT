import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadHeadCountValuesComponent } from './upload-head-count-values.component';

describe('UploadHeadCountValuesComponent', () => {
  let component: UploadHeadCountValuesComponent;
  let fixture: ComponentFixture<UploadHeadCountValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadHeadCountValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadHeadCountValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
