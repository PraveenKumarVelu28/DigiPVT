import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedTicketsComponent } from './rejected-tickets.component';

describe('RejectedTicketsComponent', () => {
  let component: RejectedTicketsComponent;
  let fixture: ComponentFixture<RejectedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
