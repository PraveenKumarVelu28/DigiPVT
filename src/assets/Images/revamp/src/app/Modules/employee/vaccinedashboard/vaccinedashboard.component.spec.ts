import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VaccinedashboardComponent } from './vaccinedashboard.component';

describe('VaccinedashboardComponent', () => {
  let component: VaccinedashboardComponent;
  let fixture: ComponentFixture<VaccinedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaccinedashboardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});