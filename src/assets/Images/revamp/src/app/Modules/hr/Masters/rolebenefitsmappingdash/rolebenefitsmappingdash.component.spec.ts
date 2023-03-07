import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolebenefitsmappingdashComponent } from './rolebenefitsmappingdash.component';

describe('RolebenefitsmappingdashComponent', () => {
  let component: RolebenefitsmappingdashComponent;
  let fixture: ComponentFixture<RolebenefitsmappingdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolebenefitsmappingdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolebenefitsmappingdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
