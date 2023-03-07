import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CityMasterFormComponent } from './city-master-form.component';

describe('CityMasterFormComponent', () => {
  let component: CityMasterFormComponent;
  let fixture: ComponentFixture<CityMasterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityMasterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});