import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfiletabsComponent } from './my-profiletabs.component';

describe('MyProfiletabsComponent', () => {
  let component: MyProfiletabsComponent;
  let fixture: ComponentFixture<MyProfiletabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfiletabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfiletabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
