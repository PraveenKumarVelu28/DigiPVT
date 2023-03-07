import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationTypeFormComponent } from './transportation-type-form.component';

describe('TransportationTypeFormComponent', () => {
  let component: TransportationTypeFormComponent;
  let fixture: ComponentFixture<TransportationTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportationTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
