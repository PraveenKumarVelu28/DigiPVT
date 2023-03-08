import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGeneratedEncashmentsComponent } from './upload-generated-encashments.component';

describe('UploadGeneratedEncashmentsComponent', () => {
  let component: UploadGeneratedEncashmentsComponent;
  let fixture: ComponentFixture<UploadGeneratedEncashmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGeneratedEncashmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGeneratedEncashmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
