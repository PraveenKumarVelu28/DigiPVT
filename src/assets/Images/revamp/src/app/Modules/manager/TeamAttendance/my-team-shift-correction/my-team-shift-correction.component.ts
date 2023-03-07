import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
@Component({
  selector: 'app-my-team-shift-correction',
  templateUrl: './my-team-shift-correction.component.html',
  styleUrls: ['./my-team-shift-correction.component.css']
})
export class MyTeamShiftCorrectionComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  viewMode = 'tab1';
  roleid: any;
  timesheets: any = [];
  staffID: any;
  IntID: boolean = false;
  public ID: any = [];
  ClassList: any;
  date: any;
  Notes: any;
  term: any;
  edate: any;
  GenderList: any;
  ScheduleDate: any;
  ScheduleTime: any;
  NoImagesAvail: any;
  correctionlist1: any;
  temp: any
  correctionlist3: any;
  correctionlist2: any;
  currentUrl: any;
  selecallbtn: any;
  expencesName: any;
  Decription: any;
  id: any;
  p: any = 1;
  count1: any = 10;
  StartDate: any;
  EndDate: any;
  StartTime: any;
  EndTime: any;
  alldates: any;
  ipaddress: any;
  UserID: any;
  correctionlist: any;
  loader: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    debugger
    this.loader = true;
    this.currentUrl = window.location.href;
    this.IntID = false;
    this.roleid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.GetTeamAttendanceCorrection();
  }

  public cancel() {
    location.reload();
    this.loader = false;
  }



  public GetTeamAttendanceCorrection() {
    debugger
    this.DigiofficeService.GetPendingAttendanceCorrectionBySupervisor(this.staffID, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.correctionlist1 = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Pending Attendance Correction By Supervisor');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
    this.DigiofficeService.GetApprovedAttendanceCorrectionBySupervisor(this.staffID, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.correctionlist2 = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Approved Attendance Correction By Supervisor');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
    this.DigiofficeService.GetRejectedAttendanceCorrectionBySupervisor(this.staffID, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.correctionlist3 = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Rejected Attendance Correction By Supervisor');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }


  id1: any;
  public ApproveTimeSheet(item: any) {
    debugger;
    this.loader = false;
    this.Save(item);






  }

  public getid(id: any) {
    this.id = id;
    this.loader = false;
  }


  public getdate() {
    debugger
    if (this.edate == "") {
      this.ngOnInit();
    } else {
      this.DigiofficeService.GetApprovedAttendanceCorrectionBySupervisor(this.staffID, this.date, this.edate)
        .subscribe({
          next: data => {
            debugger
            this.correctionlist2 = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Approved Attendance Correction By StaffID');
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
      this.DigiofficeService.GetPendingAttendanceCorrectionBySupervisor(this.staffID, this.date, this.edate)
        .subscribe({
          next: data => {
            debugger
            this.correctionlist1 = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Pending Attendance Correction By StaffID');
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
      this.DigiofficeService.GetRejectedAttendanceCorrectionBySupervisor(this.staffID, this.date, this.edate)
        .subscribe({
          next: data => {
            debugger
            this.correctionlist3 = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Rejected Attendance Correction By StaffID');
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
    }
  }

  public RejectAttedanceCoorection() {
    debugger;
    this.showPopup = 0
    var entity = {
      ID: this.id,
      Comments: this.Notes
    }
    this.DigiofficeService.RejectAttedanceCoorection(entity)
      .subscribe({
        next: data => {
          debugger
          /* Swal.fire("Rejected Successfully"); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 75;
          location.reload();
          this.loader = false;

        }, error: (err) => {
          // Swal.fire('Issue in Rejecting Attedance Correction');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }


  public Save(item: any) {
    debugger
    this.showPopup = 0;
    var entity = {
      'ID': item.id,
      'ShiftDate': item.staffID,
      'ShiftName': this.formatDate(item.sDate) + "," + item.startTime,
      'StartTime': this.formatDate(item.attendanceDate) + "," + item.endTime,
      'EndTime': this.ipaddress,
      'EndDate': this.ipaddress,
      'Approve': 'Manager Approved'
    }
    this.DigiofficeService.UploadbulkAttendanceWeb(entity)
      .subscribe(data => {
        if (data == -1) {
          /*  Swal.fire('Leave is applied on this date so can not complete Correction Request.'); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 81;
        }
        else {
          /* Swal.fire('Attendance Correction Updated Successfully'); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10;
          this.ngOnInit();
        }
      })
  }



  public formatDate(date: any) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }


}