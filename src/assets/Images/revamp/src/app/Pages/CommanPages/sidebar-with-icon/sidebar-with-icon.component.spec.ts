import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWithIconComponent } from './sidebar-with-icon.component';

describe('SidebarWithIconComponent', () => {
  let component: SidebarWithIconComponent;
  let fixture: ComponentFixture<SidebarWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarWithIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
