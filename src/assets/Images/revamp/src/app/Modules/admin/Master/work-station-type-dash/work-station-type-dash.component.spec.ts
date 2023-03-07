import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkStationTypeDashComponent } from './work-station-type-dash.component';

describe('WorkStationTypeDashComponent', () => {
  let component: WorkStationTypeDashComponent;
  let fixture: ComponentFixture<WorkStationTypeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStationTypeDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStationTypeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});