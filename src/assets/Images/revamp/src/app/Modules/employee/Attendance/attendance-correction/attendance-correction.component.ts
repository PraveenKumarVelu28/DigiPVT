import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { AttendanceCorrectionFormComponent } from '../attendance-correction-form/attendance-correction-form.component';

@Component({
  selector: 'app-attendance-correction',
  templateUrl: './attendance-correction.component.html',
  styleUrls: ['./attendance-correction.component.css']
})
export class AttendanceCorrectionComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router,private matDialog: MatDialog) { }
  viewMode = 'tab1';
  term: any;
  roleid: any;
  correctionlist: any = [];
  correctionlist1: any = [];
  correctionlist2: any = [];
  correctionlist3: any = [];
  currentUrl: any;
  date: any;
  startdate: any;
  enddate: any;
  p: any = 1;
  count1: any = 10;
  loader: any;
  staffID: any;
  login: any;
  StaffAttendanceCorrection: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    debugger
    this.currentUrl = window.location.href;
    this.login = sessionStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.GetAttendanceCorrection();
    this.loader = true;
    this.roleid = localStorage.getItem('roledid');
    var date = new Date();
    var month = date.getMonth() + 1;
  }

  public GetAttendanceCorrection() {
    debugger
    this.DigiofficeService.GetApprovedAttendanceCorrectionByStaffID(this.staffID, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.correctionlist2 = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Approved Attendance Correction By Staff ID');
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
    this.DigiofficeService.GetPendingAttendanceCorrectionByStaffID(this.staffID, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.correctionlist1 = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Pending Attendance Correction By Staff ID');
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
    this.DigiofficeService.GetRejectedAttendanceCorrectionByStaffID(this.staffID, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.correctionlist3 = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Rejected Attendance Correction By StaffID');
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



  public AddCorrection() {
  /*   debugger //UIcomm
    this.router.navigate(['/Employee/AttendanceCorrectionForm']);
    this.loader = false; */
    let ID = undefined
    this.matDialog.open(AttendanceCorrectionFormComponent, {
      data: ID,
      height:'auto',
      width:'75%'
    }).afterClosed()
      .subscribe((result: any) => {
        console.log('Result' + result);
        
      });
  }

  edit(ID : any){
    this.matDialog.open(AttendanceCorrectionFormComponent, {
      data: ID,
      height:'auto',
      width:'75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);
        
      });
  }
  public getdate() {
    debugger
    this.showPopup = 0;
    if (this.startdate == undefined) {
      /*       Swal.fire('Please Select Start Date'); */
      this.enddate = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 28;
    }
    else if (this.enddate == "") {
      this.ngOnInit();
    }
    else if (this.enddate < this.startdate) {
      /*   Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29;
    }
    else {
      this.DigiofficeService.GetApprovedAttendanceCorrectionByStaffID(this.staffID, this.startdate, this.enddate)
        .subscribe({
          next: data => {
            debugger
            this.correctionlist2 = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Approved Attendance Correction By StaffID');
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
      this.DigiofficeService.GetPendingAttendanceCorrectionByStaffID(this.staffID, this.startdate, this.enddate)
        .subscribe({
          next: data => {
            debugger
            this.correctionlist1 = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Pending Attendance Correction By StaffID');
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
      this.DigiofficeService.GetRejectedAttendanceCorrectionByStaffID(this.staffID, this.startdate, this.enddate)
        .subscribe({
          next: data => {
            debugger
            this.correctionlist3 = data
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Rejected Attendance Correction By StaffID');
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

  public DeleteAttendanceCorrection(ID: any) {
    this.showPopup = 0;
    debugger
    Swal.fire({
      title: 'Delete Record',
      text: 'Are you sure you want to delete it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Cancel it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteAttendanceCorrection(ID)
          .subscribe({
            next: data => {
              debugger
              /*   Swal.fire('Cancelled Successfully') */
              this.ngOnInit();
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 30
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Attendance Correction');
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
    })
  }

}