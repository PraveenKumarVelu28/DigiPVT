import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildingMasterComponent } from './building-master.component';

describe('BuildingMasterComponent', () => {
  let component: BuildingMasterComponent;
  let fixture: ComponentFixture<BuildingMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});