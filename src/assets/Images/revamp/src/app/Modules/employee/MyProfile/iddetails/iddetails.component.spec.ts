import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDDetailsComponent } from './iddetails.component';

describe('IDDetailsComponent', () => {
  let component: IDDetailsComponent;
  let fixture: ComponentFixture<IDDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IDDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IDDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
