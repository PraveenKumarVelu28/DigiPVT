import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-attendanceconfig',
  templateUrl: './attendanceconfig.component.html',
  styleUrls: ['./attendanceconfig.component.css']
})
export class AttendanceconfigComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, private activatedroute: ActivatedRoute, private datepipe: DatePipe) { }
  ID: any;
  leavelist: any;
  Short: any;
  Description: any;

  startingTime: any;
  endTime: any;
  earlyCheckInTime: any;
  gracePeriod: any;
  underTime: any;
  regularization: any;
  result: any;
  id: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.GetLeaveType();
    this.GetAttendanceConfiguration();
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.Holiday = '',
          this.HolidayDescription = ''
      }
      else {

        this.DigiofficeService.GetAttendanceConfiguration().subscribe(
          data => {
            debugger
            this.leavelist = data.filter(x => x.id == this.ID);
            this.shiftid = this.leavelist[0].shiftid;
            this.startingTime = this.leavelist[0].startingTime;
            this.endTime = this.leavelist[0].endTime;
            this.earlyCheckInTime = this.leavelist[0].earlyCheckInTime
            this.gracePeriod = this.leavelist[0].gracePeriod
            this.underTime = this.leavelist[0].underTime,
              this.regularization = this.leavelist[0].regularization1
            //  this.HolidayDate = this.datepipe.transform(this.leavelist[0].holidayDate, 'yyyy-MM-dd');

          },
        );
      }
    }
    )
  }

  OnSubmit() {
    debugger
    this.showPopup = 0;
    var json = {
      "shiftid": this.shiftid,
      "StartingTime": this.startingTime,
      "EndTime": this.endTime,
      "EarlyCheckInTime": this.earlyCheckInTime,
      "GracePeriod": this.gracePeriod,
      "UnderTime": this.underTime,
      "Regularization": this.regularization
    };
    this.DigiofficeService.InsertAttendanceConfiguration(json).subscribe(
      data => {
        debugger
        Swal.fire('Added Successfully');
        location.href = "#/Attendanceconfigdash";


      })
  }

  GetAttendanceConfiguration() {
    this.DigiofficeService.GetAttendanceConfiguration().subscribe(
      data => {
        debugger
        this.result = data;
        this.result = this.result.filter((x: { id: any; }) => x.id == Number(this.id));
        this.startingTime = this.result[0].StartingTime;
        this.endTime = this.result[0].EndTime;
        this.earlyCheckInTime = this.result[0].EarlyCheckInTime;
        this.gracePeriod = this.result[0].GracePeriod;
        this.underTime = this.result[0].UnderTime;
        this.regularization = this.result[0].Regularization;
      }
    )
  }



  public attachments21: any = [];

  public attachments: any = [];
  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    debugger
    this.showPopup = 1;
    this.messageId = 12;
    console.log(event);
    this.attachments21.push(...event.addedFiles);
    Swal.fire('Attachment Added Successfully');
    // this.attachments.push(abcd[0]);

  }

  public attachmentsurl: any = [];
  public Save() {
    debugger
    /* Swal.fire('Please fill All data') */

    this.showPopup = 1;
    this.messageId = 13;
    this.DigiofficeService.ProjectAttachments(this.attachments21).subscribe(res => {
      debugger
      this.attachmentsurl.push(res);
      this.attachments.length = 0;
      // this.InsertHolidays();
      debugger
    })
  }


  Holiday: any
  HolidayDescription: any;
  HolidayDate: any;
  shiftid: any;

  public UpdateHolidays() {
    debugger;
    this.showPopup = 0;
    var entity = {
      "ID": this.ID,
      "shiftid": this.shiftid,
      "StartingTime": this.startingTime,
      "EndTime": this.endTime,
      "EarlyCheckInTime": this.earlyCheckInTime,
      "GracePeriod": this.gracePeriod,
      "UnderTime": this.underTime,
      "Regularization": this.regularization
    }
    this.DigiofficeService.UpdateAttendanceConfiguration(entity).subscribe(data => {
      /*  Swal.fire("Updated Successfully"); */
      this.showPopup = 1;
      this.messageId = 10;
      location.href = "#/Attendanceconfigdash";
    })

  }
  LeaveTypeList: any;
  public GetLeaveType() {
    debugger
    this.DigiofficeService.GetLeaveType().subscribe(data => {
      debugger
      this.LeaveTypeList = data;
    })
  }

  public LeaveType: any

}
