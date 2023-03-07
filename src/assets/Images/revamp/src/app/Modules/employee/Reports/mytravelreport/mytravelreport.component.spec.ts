import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MytravelreportComponent } from './mytravelreport.component';

describe('MytravelreportComponent', () => {
  let component: MytravelreportComponent;
  let fixture: ComponentFixture<MytravelreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytravelreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytravelreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});