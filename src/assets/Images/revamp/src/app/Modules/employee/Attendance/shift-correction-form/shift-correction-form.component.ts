import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-shift-correction-form',
  templateUrl: './shift-correction-form.component.html',
  styleUrls: ['./shift-correction-form.component.css']
})
export class ShiftCorrectionFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router, private activatedroute: ActivatedRoute) { }
  Supervisor: any;
  Staff: any;
  Date: any;
  Comments: any;
  StartTime: any;
  EndTime: any;
  maxdate: any;
  currentUrl: any;
  loader: any;
  public attachmentsurl: any = [];
  public attendancelist: any = [];
  public attachments21: any = [];
  public attachments: any = [];
  todaydate: any;
  SDate: any;
  ID: any;
  staffID: any;
  ShiftName: any;
  leavelist12: any;
  ShiftID: any;
  leavelist: any;
  Restdays: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    // this.loader = true;
    this.ShiftName = "";
    this.staffID = localStorage.getItem('staffid');
    this.maxdate = new Date().toISOString().split("T")[0];
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    this.ActivatedRouteCall();
    this.GetShiftMaster();
  }
  attendancecorrectionlist: any;
  public ActivatedRouteCall() {
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.loader = false;
      }
      else {
        this.DigiofficeService.GetPendingAttendanceCorrectionByStaffID(this.staffID, "01-01-2020", "01-01-2025")
          .subscribe({
            next: data => {
              debugger
              this.attendancecorrectionlist = data.filter(x => x.id == this.ID);
              console.log("===", this.attendancecorrectionlist)
              this.SDate = this.attendancecorrectionlist[0].sDate;
              this.StartTime = this.attendancecorrectionlist[0].startTime;
              this.EndTime = this.attendancecorrectionlist[0].endTime;
              this.Comments = this.attendancecorrectionlist[0].comments;
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Shift Correction');
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
    )
  }

  public GetShiftMaster() {
    debugger
    this.DigiofficeService.GetShiftMaster()
      .subscribe({
        next: data => {
          debugger
          this.leavelist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Shift Master');
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

  public ChangeShiftMaster() {
    debugger
    this.DigiofficeService.GetShiftMaster()
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          this.leavelist12 = data.filter(x => x.description == this.ShiftName)
          this.StartTime = this.leavelist12[0].starttime,
            this.EndTime = this.leavelist12[0].endtime,
            this.ShiftID = this.leavelist12[0].id
        }, error: (err) => {
          // Swal.fire('Issue in Getting Shift Master');
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

  public save() {
    debugger
    this.showPopup = 0;
    this.loader = true;
    if (this.SDate == undefined || this.SDate == null || this.SDate == '' || this.StartTime == undefined ||
      this.StartTime == null || this.StartTime == '' || this.EndTime == undefined || this.EndTime == null ||
      this.EndTime == '' || this.Comments == undefined || this.Comments == null || this.Comments == '') {
      /*       Swal.fire("Please fill Mandatory Fields"); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 7;
    } else {
      var eb = {
        'StaffID': localStorage.getItem('staffid'),
        'SDate': this.SDate,
        'AttendanceDate': this.SDate,
        'StartTime1': this.StartTime,
        'EndTime1': this.EndTime,
        'Attachment': this.attachmentsurl[0],
        'Comment': this.Comments
      }
      this.DigiofficeService.InsertAttendanceCorrection(eb)
        .subscribe({
          next: data => {
            debugger
            if (data == 0) {
              /*  Swal.fire('Already Shift there for the Day'); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 33;
            }
            else {
              /* Swal.fire("Saved Successfully"); */
              location.href = "#/Employee/AttendanceCorrection";
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 8;
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting Attendance Correction');
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

  public InsertNotification() {
    debugger
    this.showPopup = 0;
    this.loader = true;
    var entity = {
      'Date': new Date(),
      'Event': 'Shift Correction',
      'FromUser': 'Admin',
      'ToUser': 'Admin',
      'Message': 'Your Shift Has been Submited to Manager for Approval',
      'Photo': 'Null',
      'Building': 'Dynamics 1',
      'UserID': localStorage.getItem('staffid'),
      'NotificationTypeID': 15,
      'VendorID': 0
    }
    this.DigiofficeService.InsertNotification(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
          }
          /*   Swal.fire("Saved Successfully"); */
          location.href = "#/Employee/ShiftCorrection";
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 8;
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Notification');
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

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  onSelect21(event: any) {
    debugger
    this.loader = true;
    console.log(event);
    this.attachments21.push(...event.addedFiles);
    this.DigiofficeService.ProjectAttachments(this.attachments21)
      .subscribe({
        next: data => {
          debugger
          if (data != undefined) {
            this.attachmentsurl.push(data);
            this.loader = false;
          }
        }, error: (err) => {
          // Swal.fire('Issue in Inserting Project Attachments');
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

  public Cancel() {
    debugger
    this.router.navigate(['/Employee/ShiftCorrection']);
    this.loader = false;
  }

  public UpdateAttendanceCorrection() {
    debugger;
    this.showPopup = 0;
    if (this.SDate == undefined || this.SDate == null || this.SDate == '' || this.StartTime == undefined ||
      this.StartTime == null || this.StartTime == '' || this.EndTime == undefined || this.EndTime == null ||
      this.EndTime == '' || this.Comments == undefined || this.Comments == null || this.Comments == '') {
      /* Swal.fire('Please Fill All Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    } else {
      var entity = {
        'ID': this.ID,
        'StaffID': localStorage.getItem('staffid'),
        'SDate': this.SDate,
        'AttendanceDate': this.SDate,
        'StartTime1': this.StartTime,
        'EndTime1': this.EndTime,
        'Attachment': this.attachmentsurl[0],
        'Comment': this.Comments
      }
      this.DigiofficeService.UpdateAttendanceCorrection(entity).subscribe(data => {
        /*     Swal.fire("Updated Successfully"); */
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 10;
        location.href = "#/Employee/ShiftCorrection";
      })
    }
  }

}