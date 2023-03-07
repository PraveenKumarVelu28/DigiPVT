import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectfoldersComponentComponent } from './projectfolders-component.component';

describe('ProjectfoldersComponentComponent', () => {
  let component: ProjectfoldersComponentComponent;
  let fixture: ComponentFixture<ProjectfoldersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectfoldersComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectfoldersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});