import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkStationTypeFormComponent } from './work-station-type-form.component';

describe('WorkStationTypeFormComponent', () => {
  let component: WorkStationTypeFormComponent;
  let fixture: ComponentFixture<WorkStationTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkStationTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkStationTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});