import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildingMasterDashComponent } from './building-master-dash.component';

describe('BuildingMasterDashComponent', () => {
  let component: BuildingMasterDashComponent;
  let fixture: ComponentFixture<BuildingMasterDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingMasterDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingMasterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});