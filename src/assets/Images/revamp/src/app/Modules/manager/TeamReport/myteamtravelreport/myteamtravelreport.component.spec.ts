import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyteamtravelreportComponent } from './myteamtravelreport.component';

describe('MyteamtravelreportComponent', () => {
  let component: MyteamtravelreportComponent;
  let fixture: ComponentFixture<MyteamtravelreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyteamtravelreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyteamtravelreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});