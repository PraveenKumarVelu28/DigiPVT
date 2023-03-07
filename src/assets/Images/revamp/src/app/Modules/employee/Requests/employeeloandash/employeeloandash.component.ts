import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as JSZip from 'jszip';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ApplyloanComponent } from '../applyloan/applyloan.component';
@Component({
  selector: 'app-employeeloandash',
  templateUrl: './employeeloandash.component.html',
  styleUrls: ['./employeeloandash.component.css']
})

export class EmployeeloandashComponent implements OnInit {

  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router, private matDialog: MatDialog) { }
  viewMode = 'tab1';
  currentUrl: any;
  stafflist: any;
  roledid: any;
  term: any;
  stafflistCopy: any;
  p: any = 1;
  count1: any = 10;
  stafflist1: any;
  stafflistnewrequest: any;
  stafflistapproved: any;
  RoleType: any;
  count: any;
  edate: any;
  date: any;
  Department: any;
  Departmentlist: any;
  RoleTypeList: any;
  id: any;
  SanctionAmount: any;
  period: any;
  HRComments: any;
  loader: any;
  login: any;
  stafflistrejected: any;
  showPopup: number = 0;
  messageId: number = 0;
  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.RoleType = 0;
    this.Department = "";
    debugger
    this.login = sessionStorage.getItem('roledid');
    this.roledid = localStorage.getItem('roledid');
    this.GetEmployeeLoans();
    this.GetDepartment();
    this.GetRoleTypeInit();
  }

  public GetEmployeeLoans() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetEmployeeLoans()
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          this.stafflist = data.filter(x => x.staffID == localStorage.getItem('staffid'));
          this.count = this.stafflist.length;
          this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status != 'HR Approved' && x.status != 'HR Rejected')
          this.count = this.stafflistnewrequest.length;
          this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status == 'HR Approved')
          this.count = this.stafflistapproved.length;
          this.stafflistCopy = this.stafflist;
          this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'HR Rejected')
          this.count = this.stafflistrejected.length;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Employee Loans');
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

  public GetDepartment() {
    this.DigiofficeService.GetDepartment()
      .subscribe({
        next: data => {
          debugger
          this.Departmentlist = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Department');
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

  public GetRoleTypeInit() {
    this.DigiofficeService.GetRoleType()
      .subscribe({
        next: data => {
          debugger
          this.RoleTypeList = data;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Role Type');
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

  public getRoleType(event: any) {
    debugger
    this.RoleType = event.target.value;
    debugger
    this.DigiofficeService.GetEmployeeLoans()
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          this.stafflist = data;
          this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status != 'HR Approved' && x.status != 'HR Rejected')
          this.count = this.stafflistnewrequest.length;
          this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status == 'HR Approved')
          this.count = this.stafflistapproved.length;
          this.stafflistCopy = this.stafflist;
          this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'HR Rejected')
          this.count = this.stafflistrejected.length;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Employee Loans');
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

  public FilterRoleType() {
    debugger
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data.filter(x => x.roleType == this.RoleType);
          this.count = this.stafflist.length;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting my Details');
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

  public filterByDepartment() {
    debugger
    if (this.Department == "") {
      debugger
      this.DigiofficeService.GetEmployeeLoans()
        .subscribe({
          next: data => {
            debugger
            this.loader = false;
            this.stafflist = data;
            this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status != 'HR Approved' && x.status != 'HR Rejected')
            this.count = this.stafflistnewrequest.length;
            this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status == 'HR Approved')
            this.count = this.stafflistapproved.length;
            this.stafflistCopy = this.stafflist;
            this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'HR Rejected')
            this.count = this.stafflistrejected.length;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Employee Loans');
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
  }

  public Getedate() {
    this.showPopup = 0;
    if (this.date == undefined) {
      /*   Swal.fire('Please Select Start Date'); */
      this.edate = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 28;
    }

    else if (this.edate == "") {
      this.edate = "";
      this.date = "";
      this.ngOnInit();
    }

    else if (this.edate < this.date) {
      /*    Swal.fire('Enddate Must Be Greater Than Startdate') */
      this.edate = ""
      this.date = ""
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 29;
    }
    else {
      this.DigiofficeService.GetEmployeeLoans()
        .subscribe({
          next: data => {
            debugger
            this.loader = false;
            this.stafflist = data.filter(x => x.staffID == localStorage.getItem('staffid'));
            this.count = this.stafflist.length;
            this.stafflistnewrequest = this.stafflist.filter((x: { status: string, filterdate: any }) => x.status != 'HR Approved' && x.status != 'HR Rejected' && (x.filterdate >= this.date && x.filterdate <= this.edate))
            this.count = this.stafflistnewrequest.length;
            this.stafflistapproved = this.stafflist.filter((x: { status: string, filterdate: any }) => x.status == 'HR Approved' && (x.filterdate >= this.date && x.filterdate <= this.edate))
            this.count = this.stafflistapproved.length;
            this.stafflistCopy = this.stafflist;
            this.stafflistrejected = this.stafflist.filter((x: { status: string, filterdate: any }) => x.status == 'Rejected' && (x.filterdate >= this.date && x.filterdate <= this.edate))
            this.count = this.stafflistrejected.length;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Employee Loans');
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
    this.loader = false;
  }

  public Filterstaff() {
    debugger
    let searchCopy = this.term.toLowerCase();
    this.stafflistnewrequest = this.stafflistCopy.filter((x: { loanType: string; comments: string; loanAmount: string }) =>
      x.loanType.toLowerCase().includes(searchCopy) || x.comments.toLowerCase().includes(searchCopy) || x.loanAmount.toLowerCase().includes(searchCopy));

    this.stafflistapproved = this.stafflistCopy.filter((x: { loanType: string; comments: string; loanAmount: string }) =>
      x.loanType.toLowerCase().includes(searchCopy) || x.comments.toLowerCase().includes(searchCopy) || x.loanAmount.toLowerCase().includes(searchCopy));
    this.stafflistrejected = this.stafflistCopy.filter((x: { loanType: string; comments: string; loanAmount: string }) =>
      x.loanType.toLowerCase().includes(searchCopy) || x.comments.toLowerCase().includes(searchCopy) || x.loanAmount.toLowerCase().includes(searchCopy));
  }

  public getdate(event: any) {
    debugger
    this.date = event.target.value;
    this.DigiofficeService.GetEmployeeLoans()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data.filter(x => x.filterdate == this.date);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Employee Loans');
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

  public CancelLeave(id: any) {
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
        this.DigiofficeService.DeleteEmployeeLoans(id)
          .subscribe({
            next: data => {
              debugger
              /*  Swal.fire('Cancelled Successfully'); */
              this.ngOnInit();
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 30;
            }, error: (err) => {
              // Swal.fire('Issue in Deleting Employee Loans');
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

  public stop(item: any) {
    var entity = {
      ID: item,
      status: 1
    }
    this.DigiofficeService.UpdateEmployeeLoansByManager(entity)
      .subscribe({
        next: data => {
          debugger
          /*   Swal.fire("Updated Successfully"); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10;
        }, error: (err) => {
          // Swal.fire('Issue in Updating Employee Loans By Manager');
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

  public Approve(item: any) {
    debugger
    this.id = item.id;
  }

  public ApproveEmployeeloan() {
    var entity = {
      ID: this.id,
      SanctionAmount: this.SanctionAmount,
      period: this.period,
      HRComments: this.HRComments,
      status: 'HR Approved'
    }
    this.DigiofficeService.UpdateEmployeeLoansByHR(entity)
      .subscribe({
        next: data => {
          debugger
          /*  Swal.fire("Updated Successfully"); */
          location.reload();
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 10;
        }, error: (err) => {
          // Swal.fire('Issue in Updating Employee Loans By HR');
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

  multipleattachmentlist: any;
  image(id: any) {
    debugger
    this.DigiofficeService.GetEmployeeLoansAttachment().subscribe(
      data => {
        debugger
        this.multipleattachmentlist = data.filter(x => x.loanID == id);
        this.loader = false;
      }
    )

  }

  openAttchments(photo: any) {
    window.open(photo, '_blank');
  }

  showDialog() {

    this.matDialog.open(ApplyloanComponent, {

      height: 'auto',
      width: '75%'
    }).afterClosed()
      .subscribe(result => {
        console.log('Result' + result);

      });
  }
}