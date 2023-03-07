import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { EmployeeResignformComponent } from '../employee-resignform/employee-resignform.component';
@Component({
  selector: 'app-employee-resignation',
  templateUrl: './employee-resignation.component.html',
  styleUrls: ['./employee-resignation.component.css']
})

export class EmployeeResignationComponent implements OnInit {

  constructor(private DigiofficeService: DigiofficecorehrService,
    private matDialog: MatDialog) { }
  Employeelist: any;
  mangerid: any;
  Show: any;
  staffid: any;
  roleid: any;
  search: any;
  count: any;
  monthid: any;
  dummemplist: any;
  currentUrl: any;
  id: any;
  image: any;
  loader: any;
  login: any;
  roledid: any
  attachment: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.login = sessionStorage.getItem('roledid');
    this.mangerid = localStorage.getItem('ManagerID');
    this.staffid = localStorage.getItem('staffid');
    this.roleid = localStorage.getItem('roledid');
    this.GetEmployeeResignation();
  }

  add() {
    /*   location.href = "#/Employee/EmployeeResignform";
      this.loader = false; */

    this.matDialog.open(EmployeeResignformComponent, {

      height: 'auto',
      width: '75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);

      });
  }

  public GetEmployeeResignation() {
    debugger
    this.DigiofficeService.GetStaffExitFormality()
      .subscribe({
        next: data => {
          debugger
          this.Employeelist = data.filter(x => x.employeeID == this.staffid);
          this.dummemplist = data;
          this.count = this.Employeelist.length;
          this.loader = false;
          // if (this.roleid == 2) {
          //   this.Employeelist = data.filter(x => x.supervisor == this.staffid || x.employeeID == this.staffid);
          //   console.log("this.Employeelist======",this.Employeelist)
          //   this.dummemplist = data;
          //   this.count = this.Employeelist.length;
          //   this.loader=false;
          // }
          // else {
          //   this.Employeelist = data.filter(x => x.employeeID == this.staffid);
          //   console.log("this.Employeelist",this.Employeelist)
          //   this.dummemplist = data;
          //   this.count = this.Employeelist.length;
          //   this.loader=false;
          // }
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Exit Formality');
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

  public getmedicalurl(attachment: any) {
    debugger
    this.attachment = attachment;
  }

  submit(id: any) {
    this.showPopup = 0;
    this.DigiofficeService.AcceptEmployeeResignation(id, 1)
      .subscribe({
        next: data => {
          debugger
          /*  Swal.fire("Saved Successfully"); */
          this.GetEmployeeResignation();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 8;
        }, error: (err) => {
          // Swal.fire('Issue in Accepting Employee Resignation');
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

  accept(id: any) {
    this.showPopup = 0;
    this.DigiofficeService.AcceptEmployeeResignation(id, 2)
      .subscribe({
        next: data => {
          debugger
          /*   Swal.fire("Accepted Successfully"); */
          this.GetEmployeeResignation();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 41;
        }, error: (err) => {
          // Swal.fire('Issue in Accepting Employee Resignation');
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

  reject(id: any) {
    this.showPopup = 0;
    this.DigiofficeService.AcceptEmployeeResignation(id, 3)
      .subscribe({
        next: data => {
          debugger
          /*   Swal.fire("Reject Successfully"); */
          this.GetEmployeeResignation();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 42;
        }, error: (err) => {
          // Swal.fire('Issue in Accepting Employee Resignation');
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

  HRAccept(id: any) {
    this.showPopup = 0;

    this.DigiofficeService.AcceptEmployeeResignation(id, 4)
      .subscribe({
        next: data => {
          debugger
          /*   Swal.fire("HR Accepted"); */
          this.GetEmployeeResignation();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 43;
        }, error: (err) => {
          // Swal.fire('Issue in Accepting Employee Resignation');
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

  HRReject(id: any) {
    this.showPopup = 0;
    this.DigiofficeService.AcceptEmployeeResignation(id, 5)
      .subscribe({
        next: data => {
          debugger
          /* Swal.fire("HR Rejected"); */
          this.GetEmployeeResignation();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 44;
        }, error: (err) => {
          // Swal.fire('Issue in Accepting Employee Resignation');
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

  getchangemonth(event: any) {
    this.monthid = event.target.value;
    if (this.monthid != 0) {
      this.DigiofficeService.GetStaffExitFormality()
        .subscribe({
          next: data => {
            debugger
            if (this.roleid == 2) {
              this.Employeelist = data.filter(x => (x.supervisor == this.staffid || x.employeeID == this.staffid) && x.lastdateWorkigDateMonth == this.monthid);
              this.dummemplist = data;
              this.count = this.Employeelist.length;
              this.loader = false;
            }
            else {
              this.Employeelist = data.filter(x => x.employeeID == this.staffid && x.lastdateWorkigDateMonth == this.monthid);
              this.dummemplist = data;
              this.count = this.Employeelist.length;
              this.loader = false;
            }
          }, error: (err) => {
            // Swal.fire('Issue in Getting Staff Exit Formality');
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
      this.loader = false;
    }
    else {
      this.GetEmployeeResignation();
      this.loader = false;
    }
  }

  experience(experienceletter: any) {
    debugger
    window.open(experienceletter, "_blank")
  }

  releaving(releavingletter: any) {
    window.open(releavingletter, "_blank")
  }

  getid(details: any) {
    this.id = details.id.
      this.image = details.attachment
  }
  public CancelResignRequest(ID: any) {
    this.showPopup = 0;
    debugger
    Swal.fire({
      title: 'Cancel Record',
      text: 'Are you sure you want to cancel it?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Cancel it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteStaffExitFormality(ID)
          .subscribe({
            next: data => {
              debugger
              /*   Swal.fire('Cancelled Successfully') */
              this.loader = false
              this.showPopup = 1;
              this.messageId = 30
              location.reload();
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Attendance Correction');
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

  multipleattachmentlist: any;
  images(id: any) {
    debugger
    this.DigiofficeService.GetStaffExitFormalityAttachment().subscribe(
      data => {
        debugger
        this.multipleattachmentlist = data.filter(x => x.staffExitFormalityID == id);
        this.loader = false;
      }
    )

  }

  openAttchments(photo: any) {
    window.open(photo, '_blank');
  }

}