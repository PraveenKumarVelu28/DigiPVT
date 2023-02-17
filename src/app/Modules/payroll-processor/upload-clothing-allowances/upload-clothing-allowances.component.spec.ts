import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadClothingAllowancesComponent } from './upload-clothing-allowances.component';

describe('UploadClothingAllowancesComponent', () => {
  let component: UploadClothingAllowancesComponent;
  let fixture: ComponentFixture<UploadClothingAllowancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadClothingAllowancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadClothingAllowancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
