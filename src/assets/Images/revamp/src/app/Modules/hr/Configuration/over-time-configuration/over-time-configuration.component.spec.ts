import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverTimeConfigurationComponent } from './over-time-configuration.component';

describe('OverTimeConfigurationComponent', () => {
  let component: OverTimeConfigurationComponent;
  let fixture: ComponentFixture<OverTimeConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverTimeConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverTimeConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});