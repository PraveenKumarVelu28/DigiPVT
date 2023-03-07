import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-attendanceconfigdash',
  templateUrl: './attendanceconfigdash.component.html',
  styleUrls: ['./attendanceconfigdash.component.css']
})
export class AttendanceconfigdashComponent implements OnInit {


  constructor(public DigiofficeService: DigiofficecorehrService) { }
  showPopup: number = 0;
  messageId: number = 0;  
  ngOnInit(): void {
    this.GetAttendanceConfiguration();
  }
  Search: any;
  AttendConfiglist: any
  public GetAttendanceConfiguration() {
    debugger
    this.DigiofficeService.GetAttendanceConfiguration().subscribe(data => {
      debugger
      this.AttendConfiglist = data
    })
  }

  public DeleteAttendanceConfiguration(ID: any) {
    debugger
    this.DigiofficeService.DeleteAttendanceConfiguration(ID).subscribe(data => {
      debugger
     /*  Swal.fire('Deleted Successfully...!') */
      location.reload();
      this.showPopup=1;
      this.messageId=11;
    })
  }

}
