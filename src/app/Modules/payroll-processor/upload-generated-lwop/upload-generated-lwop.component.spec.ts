import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGeneratedLwopComponent } from './upload-generated-lwop.component';

describe('UploadGeneratedLwopComponent', () => {
  let component: UploadGeneratedLwopComponent;
  let fixture: ComponentFixture<UploadGeneratedLwopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGeneratedLwopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGeneratedLwopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
