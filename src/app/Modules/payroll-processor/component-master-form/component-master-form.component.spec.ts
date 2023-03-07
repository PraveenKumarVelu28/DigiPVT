import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMasterFormComponent } from './component-master-form.component';

describe('ComponentMasterFormComponent', () => {
  let component: ComponentMasterFormComponent;
  let fixture: ComponentFixture<ComponentMasterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMasterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
