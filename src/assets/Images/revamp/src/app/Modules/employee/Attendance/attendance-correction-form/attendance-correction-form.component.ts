import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'console';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-attendance-correction-form',
  templateUrl: './attendance-correction-form.component.html',
  styleUrls: ['./attendance-correction-form.component.css']
})
export class AttendanceCorrectionFormComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router, public dialogRef: MatDialogRef<AttendanceCorrectionFormComponent>, @Inject(MAT_DIALOG_DATA) public ID: any, private activatedroute: ActivatedRoute) { }
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
  // ID: any;
  staffID: any;
  showSpinners: any;
  showPopup: number = 0;
  messageId: number = 0;
  jdate: any;
  ngOnInit(): void {
    this.submitbtn = 0;
    this.showSpinners = false;
    this.currentUrl = window.location.href;
    // this.loader = true;
    this.staffID = localStorage.getItem('staffid');
    this.UserName = localStorage.getItem('UserName');
    this.jdate = localStorage.getItem('jdate');
    this.maxdate = new Date().toISOString().split("T")[0];
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    this.ActivatedRouteCall();
    this.GetMyDetailsByStaffID();
  }
  attendancecorrectionlist: any;
  public ActivatedRouteCall() {
    this.activatedroute.params.subscribe(params => {
      debugger;
      // this.ID = params['id'];
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
              // Swal.fire('Issue in Getting Attendance Correction');
              this.loader = false;
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
  submitbtn: any;
  public changedate() {
    this.showPopup = 0;
    debugger
    if (this.EndTime <= this.StartTime) {
      /*    Swal.fire('Start Time Must Be Less Than End time') */
      this.submitbtn = 1;
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 31
    }
    else {
      this.submitbtn = 0;
    }

  }

  public save() {
    debugger
    this.showPopup = 0;
    if (this.supervisor == null || this.supervisor == undefined) {
      /*  Swal.fire('You cannot apply ACR because manager has not been mapped for you,Please contact HR to map manager for you,Then Add ACR');
  */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 105;
    }
    else if (new Date(this.jdate) > new Date(this.SDate)) {
      console.log('jdate', new Date(this.jdate));
      console.log('SDate', new Date(this.SDate))
      this.loader = false;
      Swal.fire('Sorry, ACR Date is prior the New Hire Date');
    }
    else {

      this.loader = true;
      if (this.SDate == undefined || this.SDate == null || this.SDate == '' || this.StartTime == undefined ||
        this.StartTime == null || this.StartTime == '' || this.EndTime == undefined || this.EndTime == null ||
        this.EndTime == '' || this.Comments == undefined || this.Comments == null || this.Comments == '') {
        /*         Swal.fire("Please fill Mandatory Fields"); */
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 7;
      }
      else {
        var eb = {
          'StaffID': localStorage.getItem('staffid'),
          'SDate': this.SDate,
          'AttendanceDate': this.SDate,
          'StartTime1': this.StartTime.getHours() + ':' + this.StartTime.getMinutes(),
          'EndTime1': this.EndTime.getHours() + ':' + this.EndTime.getMinutes(),
          'Attachment': this.attachmentsurl[0],
          'Comment': this.Comments
        }
        this.DigiofficeService.InsertAttendanceCorrection(eb)
          .subscribe({
            next: data => {
              debugger
              if (data == 0) {
                Swal.fire("Submitted Successfully to the manager " + this.managername + " Please check ACR Report for periodic analysis");
                location.href = "#/Employee/AttendanceCorrection";
                this.sendemail();
                this.InsertNotification();
                this.loader = false;
              }
              else {
                Swal.fire("Submitted Successfully to the manager " + this.managername + " Please check ACR Report for periodic analysis");
                this.sendemail();
                this.InsertNotification();
                location.href = "#/Employee/AttendanceCorrection";
                this.loader = false;
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

  }

  public InsertNotification() {
    this.showPopup = 0;
    debugger
    this.loader = true;
    var entity = {
      'Date': new Date(),
      'Event': 'Attendance Correction',
      'FromUser': 'Admin',
      'ToUser': 'Admin',
      'Message': 'Your Attendance Has been Submited to Manager for Approval',
      'Photo': 'Null',
      'Building': 'Dynamics 1',
      'UserID': localStorage.getItem('staffid'),
      'NotificationTypeID': 15,
      'VendorID': 2
    }
    this.DigiofficeService.InsertNotification(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
          }
          /* Swal.fire("Saved Successfully"); */
          location.href = "#/Employee/AttendanceCorrection";
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

  // public Cancel() {
  //   debugger
  //   this.router.navigate(['/Employee/AttendanceCorrection']);
  //   this.loader = false;
  // }

  public UpdateAttendanceCorrection() {
    this.showPopup = 0;
    debugger;
    if (this.SDate == undefined || this.SDate == null || this.SDate == '' || this.StartTime == undefined ||
      this.StartTime == null || this.StartTime == '' || this.EndTime == undefined || this.EndTime == null ||
      this.EndTime == '' || this.Comments == undefined || this.Comments == null || this.Comments == '') {
      /*  Swal.fire('Please Fill All Fields'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 13;
    } else {
      var entity = {
        'ID': this.ID,
        'StaffID': localStorage.getItem('staffid'),
        'SDate': this.SDate,
        'AttendanceDate': this.SDate,
        'StartTime1': this.StartTime.getHours() + ':' + this.StartTime.getMinutes(),
        'EndTime1': this.EndTime.getHours() + ':' + this.EndTime.getMinutes(),
        'Attachment': this.attachmentsurl[0],
        'Comment': this.Comments
      }
      this.DigiofficeService.UpdateAttendanceCorrection(entity).subscribe(data => {
        /*  Swal.fire("Updated Successfully"); */
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 10;
        location.href = "#/Employee/AttendanceCorrection";
      })
    }
  }

  ManagerEmailList: any;
  supervisor: any;
  managername: any;
  public GetMyDetailsByStaffID() {
    this.DigiofficeService.GetMyDetailsByStaffID(localStorage.getItem('staffid'))
      .subscribe({
        next: data => {
          debugger
          this.ManagerEmailList = data;
          this.supervisor = this.ManagerEmailList[0].supervisor
          this.managername = this.ManagerEmailList[0].manager
          this.manageremailid = this.ManagerEmailList[0].manageremailid;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Details');
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


  manageremailid: any;
  Attactments: any = [];
  UserName: any;
  public sendemail() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': this.manageremailid,
      'emailsubject': 'Attendance Request',
      'Message': 'Your Attendance Request Sent Successfully !!',
      'emailbody': 'Hi  <br> Your Employee ' + this.UserName + ' has Applied Attendance Correction Request in Digi-Office., <br> Please Login in DigiOffice to Approve. <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
      'attachmenturl': this.Attactments,
      'cclist': this.manageremailid,
      'bcclist': this.manageremailid,
    }
    this.DigiofficeService.sendemailattachementsforemail(entity1)
      .subscribe({
        next: data => {
          debugger
          this.Attactments = [];
          //Swal.fire('Password sent to your email.');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Sending Email to Manager as Email ID is Invalid');

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
    // this.router.navigate(['/Employee/LeaveListDashboard']);   
    this.ngOnInit(); this.dialogRef.close(false);
  }


}