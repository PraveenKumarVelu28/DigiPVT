import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTeamLoansComponent } from './my-team-loans.component';

describe('MyTeamLoansComponent', () => {
  let component: MyTeamLoansComponent;
  let fixture: ComponentFixture<MyTeamLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTeamLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
