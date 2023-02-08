import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAllowanceComponent } from './upload-allowance.component';

describe('UploadAllowanceComponent', () => {
  let component: UploadAllowanceComponent;
  let fixture: ComponentFixture<UploadAllowanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAllowanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAllowanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
