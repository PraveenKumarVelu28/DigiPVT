import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationTypeDashComponent } from './transportation-type-dash.component';

describe('TransportationTypeDashComponent', () => {
  let component: TransportationTypeDashComponent;
  let fixture: ComponentFixture<TransportationTypeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportationTypeDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationTypeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
