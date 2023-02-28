import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMasterListComponent } from './upload-master-list.component';

describe('UploadMasterListComponent', () => {
  let component: UploadMasterListComponent;
  let fixture: ComponentFixture<UploadMasterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadMasterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
