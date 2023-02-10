import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadRetroValuesOTComponent } from './upload-retro-values-ot.component';

describe('UploadRetroValuesOTComponent', () => {
  let component: UploadRetroValuesOTComponent;
  let fixture: ComponentFixture<UploadRetroValuesOTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadRetroValuesOTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadRetroValuesOTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
