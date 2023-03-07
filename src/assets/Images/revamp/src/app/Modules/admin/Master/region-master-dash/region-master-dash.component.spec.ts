import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionMasterDashComponent } from './region-master-dash.component';

describe('RegionMasterDashComponent', () => {
  let component: RegionMasterDashComponent;
  let fixture: ComponentFixture<RegionMasterDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionMasterDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionMasterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
