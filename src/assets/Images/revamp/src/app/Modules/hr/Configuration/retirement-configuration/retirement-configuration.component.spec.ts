import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetirementConfigurationComponent } from './retirement-configuration.component';

describe('RetirementConfigurationComponent', () => {
  let component: RetirementConfigurationComponent;
  let fixture: ComponentFixture<RetirementConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});