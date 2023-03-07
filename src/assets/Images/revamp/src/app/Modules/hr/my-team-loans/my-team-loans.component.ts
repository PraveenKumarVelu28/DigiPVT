import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as JSZip from 'jszip';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-my-team-loans',
  templateUrl: './my-team-loans.component.html',
  styleUrls: ['./my-team-loans.component.css']
})
export class MyTeamLoansComponent implements OnInit {


  viewMode = 'tab1';
  currentUrl: any;
  showPopup: number = 0;
  messageId: number = 0;
  constructor(public DigiofficeService: DigiofficecorehrService, public router: Router) { }
  stafflistrejected: any;
  stafflist: any;
  edate: any;
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
  Department: any;
  Departmentlist: any;
  RoleTypeList: any;
  showreject: any;
  startdate: any;
  enddate: any;
  Interest: any;
  EMIAmount: any;
  loader: any;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.loader = true;
    this.showreject = 0;
    this.RoleType = 0;
    this.Department = "";
    debugger
    this.roledid = localStorage.getItem('roledid');
    this.GetEmployeeLoans();
    this.GetDepartment();
    this.GetRoleType();
    this.GetMyDetailsByStaffID();
  }

  EmployeeEmailID: any;
  manageremailid: any
  Staffleaveenitilment: any;
  ManagerName: any;
  public GetMyDetailsByStaffID() {
    this.DigiofficeService.GetMyDetailsByStaffID(localStorage.getItem('staffid'))
      .subscribe({
        next: data => {
          debugger
          this.Staffleaveenitilment = data;
          console.log(" this.Staffleaveenitilment ", this.Staffleaveenitilment)
          this.ManagerName = this.Staffleaveenitilment[0].name;
          this.manageremailid = this.Staffleaveenitilment[0].manageremailid;
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

  public GetEmployeeLoans() {
    if (this.roledid == 9) {
      debugger
      this.DigiofficeService.GetEmployeeLoans()
        .subscribe({
          next: data => {
            debugger
            this.loader = false;
            this.stafflist = data;
            this.EmployeeEmailID = this.stafflist[0].empEmailID;
            console.log("this.stafflist", this.stafflist)
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
    else {
      debugger
      this.DigiofficeService.GetEmployeeLoans()
        .subscribe({
          next: data => {
            debugger
            debugger
            this.loader = false;
            this.stafflist = data.filter(x => x.staffID == localStorage.getItem('staffid'));
            this.count = this.stafflist.length;
            this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status != 'HR Approved')
            this.count = this.stafflistnewrequest.length;
            this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status == 'HR Approved')
            this.count = this.stafflistapproved.length;
            this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'Rejected')
            this.count = this.stafflistrejected.length;
          }, error: (err) => {
            // Swal.fire('Issue in  Getting Employee Loans');
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

  public GetDepartment() {
    this.DigiofficeService.GetDepartment()
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          this.Departmentlist = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Departments');
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

  public GetRoleType() {
    this.DigiofficeService.GetRoleType()
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          this.RoleTypeList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Positions');
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

  public getedate() {
    if (this.edate == "") {
      this.ngOnInit();
    } else {
      if (this.roledid == 9) {
        debugger
        this.DigiofficeService.GetEmployeeLoans()
          .subscribe({
            next: data => {
              debugger
              this.loader = false;
              this.stafflist = data;
              this.stafflistnewrequest = this.stafflist.filter((x: { status: string, filterdate: any }) => x.status == 'HR Pending' && (x.filterdate >= this.date && x.filterdate <= this.edate))
              this.count = this.stafflistnewrequest.length;
              this.stafflistapproved = this.stafflist.filter((x: { status: string, filterdate: any }) => x.status == 'HR Approved' && (x.filterdate >= this.date && x.filterdate <= this.edate))
              this.count = this.stafflistapproved.length;
              this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'HR Rejected')
              this.count = this.stafflistrejected.length;
              this.stafflistCopy = this.stafflist
            }, error: (err) => {
              // Swal.fire('Issue in Filter by Date');
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
      else {
        debugger
        this.DigiofficeService.GetEmployeeLoans()
          .subscribe({
            next: data => {
              debugger
              this.loader = false;
              this.stafflist = data.filter(x => x.staffID == localStorage.getItem('staffid'));
              this.count = this.stafflist.length;
              this.stafflistnewrequest = this.stafflist.filter((x: { status: string, filterdate: any }) => x.status != 'HR Approved' && (x.filterdate >= this.date && x.filterdate <= this.edate))
              this.count = this.stafflistnewrequest.length;
              this.stafflistapproved = this.stafflist.filter((x: { status: string, filterdate: any }) => x.status == 'HR Approved' && (x.filterdate >= this.date && x.filterdate <= this.edate))
              this.count = this.stafflistapproved.length;
              this.stafflistrejected = this.stafflist.filter((x: { status: string, filterdate: any }) => x.status == 'Rejected' && (x.filterdate >= this.date && x.filterdate <= this.edate));
              this.count = this.stafflistrejected.length;
            }, error: (err) => {
              // Swal.fire('Issue in Filter Date');
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

  public getRoleType(event: any) {
    debugger
    this.RoleType = event.target.value;
    if (this.RoleType == 0) {
      if (this.roledid == 9) {
        debugger
        this.DigiofficeService.GetEmployeeLoans()
          .subscribe({
            next: data => {
              debugger
              this.loader = false;
              this.stafflist = data;
              this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status != 'HR Approved')
              this.count = this.stafflistnewrequest.length;
              this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status == 'HR Approved')
              this.count = this.stafflistapproved.length;
              this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'Rejected')
              this.count = this.stafflistrejected.length;
              this.stafflistCopy = this.stafflist
            }, error: (err) => {
              // Swal.fire('Issue in Getting Position ID');
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
      else {
        debugger
        this.DigiofficeService.GetEmployeeLoans()
          .subscribe({
            next: data => {
              debugger
              debugger
              this.loader = false;
              this.stafflist = data.filter(x => x.staffID == localStorage.getItem('staffid'));
              this.count = this.stafflist.length;
              this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status != 'HR Approved')
              this.count = this.stafflistnewrequest.length;
              this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status == 'HR Approved')
              this.count = this.stafflistapproved.length;
              this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'Rejected')
              this.count = this.stafflistrejected.length;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Position ID');
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
    else {
      if (this.roledid == 9) {
        debugger
        this.DigiofficeService.GetEmployeeLoans()
          .subscribe({
            next: data => {
              debugger
              debugger
              this.loader = false;
              this.stafflist = data;
              this.stafflistnewrequest = this.stafflist.filter((x: { status: string; type: any }) => x.status != 'HR Approved' && x.type == this.RoleType)
              this.count = this.stafflistnewrequest.length;
              this.stafflistapproved = this.stafflist.filter((x: { status: string; type: any }) => x.status == 'HR Approved' && x.type == this.RoleType)
              this.count = this.stafflistapproved.length;
              this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'Rejected')
              this.count = this.stafflistrejected.length;
              this.stafflistCopy = this.stafflist
            }, error: (err) => {
              // Swal.fire('Issue in Getting Position ID');
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
      else {
        debugger
        this.DigiofficeService.GetEmployeeLoans()
          .subscribe({
            next: data => {
              debugger
              debugger
              this.loader = false;
              this.stafflist = data.filter(x => x.staffID == localStorage.getItem('staffid'));
              this.count = this.stafflist.length;
              this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status != 'HR Approved')
              this.count = this.stafflistnewrequest.length;
              this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status == 'HR Approved')
              this.count = this.stafflistapproved.length;
              this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'Rejected')
              this.count = this.stafflistrejected.length;
            }, error: (err) => {
              // Swal.fire('Issue in Getting Position ID');
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

  public FilterRoleType() {
    debugger
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          this.stafflist = data.filter(x => x.roleType == this.RoleType);
          this.count = this.stafflist.length;
        }, error: (err) => {
          // Swal.fire('Issue in Filter By Position');
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
      if (this.roledid == 9) {
        debugger
        this.DigiofficeService.GetEmployeeLoans()
          .subscribe({
            next: data => {
              debugger
              debugger
              this.loader = false;
              this.stafflist = data;
              this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status != 'HR Approved')
              this.count = this.stafflistnewrequest.length;
              this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status == 'HR Approved')
              this.count = this.stafflistapproved.length;
              this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'Rejected')
              this.count = this.stafflistrejected.length;
              this.stafflistCopy = this.stafflist
            }, error: (err) => {
              // Swal.fire('Issue in Filter by Department');
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
      else {
        debugger
        this.DigiofficeService.GetEmployeeLoans()
          .subscribe({
            next: data => {
              debugger
              debugger
              this.loader = false;
              this.stafflist = data.filter(x => x.staffID == localStorage.getItem('staffid'));
              this.count = this.stafflist.length;
              this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status != 'HR Approved')
              this.count = this.stafflistnewrequest.length;
              this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status == 'HR Approved')
              this.count = this.stafflistapproved.length;
              this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'Rejected')
              this.count = this.stafflistrejected.length;
            }, error: (err) => {
              // Swal.fire('Issue in Filter by Department');
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
    else {
      if (this.roledid == 9) {
        debugger
        this.DigiofficeService.GetEmployeeLoans()
          .subscribe({
            next: data => {
              debugger
              debugger
              this.loader = false;
              this.stafflist = data;
              this.stafflistnewrequest = this.stafflist.filter((x: { status: string; department: any }) => x.status != 'HR Approved' && x.department == this.Department)
              this.count = this.stafflistnewrequest.length;
              this.stafflistapproved = this.stafflist.filter((x: { status: string; department: any }) => x.status == 'HR Approved' && x.department == this.Department)
              this.count = this.stafflistapproved.length;
              this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'Rejected')
              this.count = this.stafflistrejected.length;
              this.stafflistCopy = this.stafflist
            }, error: (err) => {
              // Swal.fire('Issue in Filter by Department');
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
      else {
        debugger
        this.DigiofficeService.GetEmployeeLoans()
          .subscribe({
            next: data => {
              debugger
              debugger
              this.loader = false;
              this.stafflist = data.filter(x => x.staffID == localStorage.getItem('staffid'));
              this.count = this.stafflist.length;
              this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status == 'HR Pending')
              this.count = this.stafflistnewrequest.length;
              this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status == 'HR Approved')
              this.count = this.stafflistapproved.length;
              this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'Rejected')
              this.count = this.stafflistrejected.length;
            }, error: (err) => {
              // Swal.fire('Issue in Filter by Department');
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



  public Filterstaff() {
    debugger
    let searchCopy = this.term.toLowerCase();
    this.stafflistnewrequest = this.stafflistCopy.filter((x: { name: string }) =>
      x.name.toLowerCase().includes(searchCopy));
    this.stafflistapproved = this.stafflistCopy.filter((x: { name: string }) =>
      x.name.toLowerCase().includes(searchCopy));
    this.stafflistrejected = this.stafflistCopy.filter((x: { name: string }) =>
      x.name.toLowerCase().includes(searchCopy));
  }


  date: any;
  public getdate(event: any) {
    debugger
    this.date = event.target.value;
    this.DigiofficeService.GetEmployeeLoans()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data.filter(x => x.filterdate == this.date);
        }, error: (err) => {
          // Swal.fire('Issue in Filter by Date');
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

  public CancelLeave(list: any) {
    debugger
    this.showPopup = 0;
    this.DigiofficeService.DeleteEmployeeLoans(list.id).subscribe(data => {
      debugger
      /*      Swal.fire('Cancelled Successfully'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 30
      this.ngOnInit();

    })

  }
  id: any;
  SanctionAmount: any;
  period: any;
  public Approve(item: any) {
    debugger
    this.id = item.id;
    this.showreject = 2;

  }
  public Reject(item: any) {
    debugger
    this.id = item.id;
    this.showreject = 1;
  }
  HRComments: any;
  public ApproveEmployeeloan() {
    this.showPopup = 0;
    var entity = {
      ID: this.id,
      SanctionAmount: this.SanctionAmount,
      period: this.period,
      HRComments: this.HRComments,
      Status: 'HR Approved',
      StartDate: this.startdate,
      EndDate: this.enddate,
      Height: this.Interest,
      Weight: this.EMIAmount

    }
    this.DigiofficeService.UpdateEmployeeLoansByHR(entity)
      .subscribe({
        next: data => {
          debugger
          /*  Swal.fire("Approved Successfully"); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 73
          this.sendemail();
          this.ngOnInit();
          this.SanctionAmount = 0,
            this.period = 0,
            this.HRComments = 0,
            this.startdate = 0,
            this.enddate = 0
        }, error: (err) => {
          // Swal.fire('Issue in Approving Employee Loans By HR');
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

  email: any;
  Attactments: any = [];
  UserName: any;
  public sendemail() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': this.EmployeeEmailID,
      'emailsubject': 'Loan Approval Mail',
      'Message': 'Your Loan Request Approve Successfully !!',
      'emailbody': 'Hi  <br> Your Manager ' + this.ManagerName + ' has Approved Loan in Digi-Office.  <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
      'attachmenturl': this.Attactments,
      'cclist': this.EmployeeEmailID,
      'bcclist': this.EmployeeEmailID,
    }
    this.DigiofficeService.sendemailattachementsforemail(entity1)
      .subscribe({
        next: data => {
          debugger
          this.Attactments = [];
          //Swal.fire('Password sent to your email.');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Sending Attachments For Email');

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


  public RejectEmployeeloan() {
    this.showPopup = 0;
    var entity = {
      ID: this.id,
      SanctionAmount: 0,
      period: 0,
      HRComments: this.HRComments,
      Status: 'HR Rejected',
      StartDate: '2022-07-01',
      EndDate: '2022-07-01'
    }
    this.DigiofficeService.UpdateEmployeeLoansByHR(entity)
      .subscribe({
        next: data => {
          debugger
          this.sendemail1();
          /*  Swal.fire('Rejected Successfully') */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 74
          this.ngOnInit();
          this.SanctionAmount = 0,
            this.period = 0,
            this.HRComments = 0,
            this.startdate = 0,
            this.enddate = 0
        }, error: (err) => {
          // Swal.fire('Issue in Rejecting Employee loans By HR');
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
    this.HRComments = " "
  }
  public sendemail1() {

    var entity1 = {
      'FromUser': 'Admin',
      'emailto': this.EmployeeEmailID,
      'emailsubject': 'Loan Rejection Mail',
      'Message': 'Your Loan Request Reject Successfully !!',
      'emailbody': 'Hi  <br> Your Manager ' + this.ManagerName + ' has Rejected your Loan in Digi-Office.  <br><br>' + '<br>  <br> Thanks <br> Team Digi-Office',
      'attachmenturl': this.Attactments,
      'cclist': this.EmployeeEmailID,
      'bcclist': this.EmployeeEmailID,
    }
    this.DigiofficeService.sendemailattachementsforemail(entity1)
      .subscribe({
        next: data => {
          debugger
          this.Attactments = [];
          //Swal.fire('Password sent to your email.');
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Sending Attachments For Email');

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

}


