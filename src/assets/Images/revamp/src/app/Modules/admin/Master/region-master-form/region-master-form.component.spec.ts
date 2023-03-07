import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionMasterFormComponent } from './region-master-form.component';

describe('RegionMasterFormComponent', () => {
  let component: RegionMasterFormComponent;
  let fixture: ComponentFixture<RegionMasterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionMasterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
