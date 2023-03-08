import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMappingFormComponent } from './component-mapping-form.component';

describe('ComponentMappingFormComponent', () => {
  let component: ComponentMappingFormComponent;
  let fixture: ComponentFixture<ComponentMappingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMappingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMappingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
