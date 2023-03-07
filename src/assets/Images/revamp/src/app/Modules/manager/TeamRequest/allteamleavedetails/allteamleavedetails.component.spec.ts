import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllteamleavedetailsComponent } from './allteamleavedetails.component';

describe('AllteamleavedetailsComponent', () => {
  let component: AllteamleavedetailsComponent;
  let fixture: ComponentFixture<AllteamleavedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllteamleavedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllteamleavedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
