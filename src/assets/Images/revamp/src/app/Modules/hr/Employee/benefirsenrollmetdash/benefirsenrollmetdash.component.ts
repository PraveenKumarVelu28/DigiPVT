import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-benefirsenrollmetdash',
  templateUrl: './benefirsenrollmetdash.component.html',
  styleUrls: ['./benefirsenrollmetdash.component.css']
})

export class BenefirsenrollmetdashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService) { }
  roleid: any
  loader: any
  term: any;
  staffid: any;
  leavelist: any
  currentUrl: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.roleid = localStorage.getItem('roledid')
    this.staffid = localStorage.getItem('staffid')
    this.GetMyDetails();
  }

  public GetMyDetails() {
    debugger
    this.loader = true
    this.DigiofficeService.GetEmployeeBenfitsDetails()
      .subscribe({
        next: data => {
          debugger
          if (localStorage.getItem('roledid') == '9') {
            this.leavelist = data;
          } else {
            this.leavelist = data.filter(x => x.staffID == this.staffid);
          }
          this.loader = false
        }, error: (err) => {
          // Swal.fire('Issue in Getting Employee Benefits Details');
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

  public accept(id: any) {
    debugger
    this.loader = true;
    this.showPopup = 0;
    var entity = {
      StaffID: id.staffID,
      StatusID: 1
    }
    this.DigiofficeService.UpdateEmployeeBenfitsApproval(entity)
      .subscribe({
        next: data => {
          debugger
          /*  Swal.fire('Request Approved Successfully'); */
          this.loader = false
          this.showPopup = 1;
          this.messageId = 66;
          this.ngOnInit();
        }, error: (err) => {
          // Swal.fire('Issue in Updating Employee Benfits Approval');
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

  public reject(id: any) {
    debugger
    this.showPopup = 0;
    this.loader = true
    var entity = {
      StaffID: id.staffID,
      StatusID: 2
    }
    this.DigiofficeService.UpdateEmployeeBenfitsApproval(entity)
      .subscribe({
        next: data => {
          /*    Swal.fire('Request Rejected Successfully'); */
          this.loader = false
          this.showPopup = 1;
          this.messageId = 66;
          this.ngOnInit();
        }, error: (err) => {
          // Swal.fire('Issue in Updating Employee Benfits Approval');
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

  public DeleteEmployeeBenfitsDetails(ID: any) {
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
        this.DigiofficeService.DeleteEmployeeBenfitsDetails(ID)
          .subscribe({
            next: data => {
              debugger
              /*   Swal.fire('Deleted Successfully') */
              this.loader = false
              this.showPopup = 1;
              this.messageId = 11
              this.ngOnInit();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Employee Benfits Details');
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