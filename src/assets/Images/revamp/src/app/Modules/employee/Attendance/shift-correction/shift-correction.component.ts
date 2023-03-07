import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-shift-correction',
  templateUrl: './shift-correction.component.html',
  styleUrls: ['./shift-correction.component.css']
})
export class ShiftCorrectionComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
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
  StaffAttendanceCorrection: any;
  showPopup: number = 0;
  messageId: number = 0;

  ngOnInit(): void {
    debugger
    this.currentUrl = window.location.href;
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
          // Swal.fire('Issue in Getting Approved Shift Correction By Staff ID');
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
          // Swal.fire('Issue in Getting Pending Shift Correction By Staff ID');
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
          // Swal.fire('Issue in Getting Rejected Shift Correction By StaffID');
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
    debugger
    this.router.navigate(['/Employee/ShiftCorrectionForm']);
    this.loader = false;
  }

  public getdate() {
    debugger
    if (this.enddate == "") {
      this.ngOnInit();
    } else {
      this.DigiofficeService.GetApprovedAttendanceCorrectionByStaffID(this.staffID, this.startdate, this.enddate)
        .subscribe({
          next: data => {
            debugger
            this.correctionlist2 = data;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Approved Shift Correction By StaffID');
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
            // Swal.fire('Issue in Getting Pending Shift Correction By StaffID');
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
            // Swal.fire('Issue in Getting Rejected Shift Correction By StaffID');
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
    debugger
    this.showPopup = 0;
    Swal.fire({
      title: 'Delete Record',
      text: 'Are you sure you want to delete it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteAttendanceCorrection(ID)
          .subscribe({
            next: data => {
              debugger
              /*  Swal.fire('Deleted Successfully') */
              this.showPopup = 1;
              this.messageId = 11
              location.reload();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Shift Correction');
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