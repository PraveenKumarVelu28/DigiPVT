import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolebenefitsmappingComponent } from './rolebenefitsmapping.component';

describe('RolebenefitsmappingComponent', () => {
  let component: RolebenefitsmappingComponent;
  let fixture: ComponentFixture<RolebenefitsmappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolebenefitsmappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolebenefitsmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
