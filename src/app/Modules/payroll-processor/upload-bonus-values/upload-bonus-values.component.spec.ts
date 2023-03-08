import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBonusValuesComponent } from './upload-bonus-values.component';

describe('UploadBonusValuesComponent', () => {
  let component: UploadBonusValuesComponent;
  let fixture: ComponentFixture<UploadBonusValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadBonusValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBonusValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
