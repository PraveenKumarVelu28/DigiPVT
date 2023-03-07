import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RaisegrievancComponent } from './raisegrievanc.component';

describe('RaisegrievancComponent', () => {
  let component: RaisegrievancComponent;
  let fixture: ComponentFixture<RaisegrievancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaisegrievancComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisegrievancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});