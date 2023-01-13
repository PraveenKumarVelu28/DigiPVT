import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMappingDashboardComponent } from './component-mapping-dashboard.component';

describe('ComponentMappingDashboardComponent', () => {
  let component: ComponentMappingDashboardComponent;
  let fixture: ComponentFixture<ComponentMappingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMappingDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMappingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
