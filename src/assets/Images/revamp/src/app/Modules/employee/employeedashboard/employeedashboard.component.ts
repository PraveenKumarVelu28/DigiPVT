import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import { DigiofficecorehrService } from '../../../Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})

export class EmployeedashboardComponent implements OnInit {

  constructor(public router: Router, private datePipe: DatePipe, public DigiofficeService: DigiofficecorehrService, private http: HttpClient) { }
  username: any;
  email: any;
  month: any;
  day: any;
  stafflistapproved: any;
  stafflist: any;
  stafflistnewrequest: any;
  approvedloancount: any;
  newrquestloancount: any;
  stafflistrejected: any;
  rejectedloancount: any;
  newexpensecount: any;
  approvedexpensecount: any;
  timedetails: any;
  cancelledexpensecount: any;
  pendingotcount: any;
  approvedotcount: any;
  roleid: any;
  province: any;
  todaydate: any;
  showback: any;
  loader: any;
  showfront: any;
  myDate: any;
  CancelledCount: any;
  staffID: any;
  Rejectedotcount: any;
  profilepercentage: any
  myleaves: any;
  currentUrl: any;
  ipAddress: any;
  pendingteamexpensecount: any;
  Rejectedteamexpnesecount: any;
  approvedteamexpnescount: any;
  pendingreg: any;
  approevedreg: any;
  term: any;
  staffleaves1: any;
  pendingcount: any;
  Rejectedcount: any;
  approvedcount: any;
  pendingcount1: any;
  Rejectedcount1: any;
  approvedcount1: any;
  projectlist: any
  Anniversery: any
  Birthday: any;
  NewJoinee: any;
  name: any;
  middle_Name: any;
  mobile: any;
  emailID: any;
  Anniverserylist1: any;
  Anniverserylist2: any;
  count: any;
  attendancelist: any;
  staffleaves: any;
  annnounecemnetlist: any;
  search: any;
  FirstDoseDate: any;
  EmployeeVaccinationDetail: any;
  certificate_url: any;
  SecondDoseDate: any;
  BoosterName: any;
  BoosterDoseDate: any;
  topholidayname: any;
  topholidaydate: any
  holidaylist: any;
  holidaylist1: any;
  tpholidayattachment: any;
  UserID: any;
  SigninDate: any;
  SigninLocation: any;
  StatusID: any;
  punchintime: any;
  punchouttime: any;
  punchinId: any;
  ipaddress: any;
  punchoutid: any;
  Anniverserylist: any;
  medicalurl: any;
  public number: number = 1000;
  public attachments21: any = [];
  public attachments: any = [];
  public attachmentsurl: any = [];
  showPopup: number = 0;
  messageId: number = 0;
  profiletab: any;
  contact: any;
  dependent: any;
  emplhist: any;
  edu: any;
  nomi: any;
  bankID: any;
  presentcount: any;
  profilepercentage1: any;
  ngOnInit(): void {
    this.profiletab = 1
    this.contact = 2
    this.dependent = 0
    this.emplhist = 0
    this.edu = 0
    this.nomi = 0
    this.bankID = 0
    this.currentUrl = window.location.href;
    this.loader = true;
    this.staffID = localStorage.getItem('staffid');

    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    this.province = localStorage.getItem('Province')
    var dateObj = new Date();
    this.month = dateObj.getUTCMonth() + 1; //months from 1-12
    this.day = dateObj.getUTCDate();
    this.myDate = new Date();
    this.showfront = true;
    this.Anniversery = true;
    this.Birthday = false;
    this.NewJoinee = false;
    this.roleid = localStorage.getItem('roledid');
    this.username = localStorage.getItem('UserName');
    this.email = localStorage.getItem('email');
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    // this.GetAttendanceByEmployeeID();
    // // this.GetCancelledStaffLeaves();
    // this.GetAttendanceByEmployeeID1();
    //this.GetEmployeeLoans();
    //this.GetExpensesListwebInit();
    //this.GetStaffOverTimeDetails();
    this.CheckpunchInReset();
    this.getDetails();
    this.GetHolidays();
    this.GetAnnouncements();
    this.GetStaffLeaveCountForDashboard1();
    this.GetMyDetailsByStaffID();
    this.getipaddress();


    this.changeAnniversary();
    this.getstaffleaves1();

    // this.GetExpensesListweb();
    // this.GetExpensesListweb1();

  }


  currenttime: any;
  resettime: any;
  public CheckpunchInReset() {
    debugger
    this.DigiofficeService.GetCurrentPhTime(this.staffID, this.todaydate, this.todaydate)
      .subscribe({
        next: data => {
          debugger
          let temp: any = data;
          this.currenttime = temp[0].currenttime;
          this.resettime = temp[0].resettime;
          console.log('this.currenttime', this.currenttime);
          console.log('this.resettime', this.resettime);
          if (this.resettime == '05:00:00') {
            if (this.currenttime >= '00:00:00' && this.currenttime <= '05:00:00') {
              this.GetAttendanceByEmployeeIDforpunchin1daybefore();
              this.GetAttendanceByEmployeeIDforpunchin1daybefore1();
            } else {
              this.GetAttendanceByEmployeeID();
              this.GetAttendanceByEmployeeID1();
            }
          }
          else if (this.resettime == '17:00:00') {
            if (this.currenttime >= '00:00:00' && this.currenttime <= '17:00:00') {
              this.GetAttendanceByEmployeeIDforpunchin1daybefore();
              this.GetAttendanceByEmployeeIDforpunchin1daybefore1();

            } else {
              this.GetAttendanceByEmployeeID();
              this.GetAttendanceByEmployeeID1();
            }
          }
          else if (this.resettime == '11:30:00') {
            if (this.currenttime >= '00:00:00' && this.currenttime <= '11:30:00') {
              this.GetAttendanceByEmployeeIDforpunchin1daybefore();
              this.GetAttendanceByEmployeeIDforpunchin1daybefore1();
            } else {
              this.GetAttendanceByEmployeeID();
              this.GetAttendanceByEmployeeID1();
            }
          }




        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance By Employee ID');
        }
      })
  }


  public GetAttendanceByEmployeeID1() {
    this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin(this.staffID, this.todaydate, this.todaydate)
      .subscribe({
        next: data => {
          debugger
          let temp: any = data;
          this.punchouttime = temp[0].signoutDate;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance By Employee ID');
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
  public GetAttendanceByEmployeeIDforpunchin1daybefore1() {
    this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin1daybefore(this.staffID, this.todaydate, this.todaydate)
      .subscribe({
        next: data => {
          debugger
          let temp: any = data;
          this.punchouttime = temp[0].signoutDate;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance By Employee ID');
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

  public GetAttendanceByEmployeeIDforpunchin1daybefore() {
    this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin1daybefore(this.staffID, this.todaydate, this.todaydate)
      .subscribe({
        next: data => {
          debugger
          let temp: any = data;
          this.punchintime = temp[0].signinDate;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance By Employee ID');
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
  public GetAttendanceByEmployeeID() {
    this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin(this.staffID, this.todaydate, this.todaydate)
      .subscribe({
        next: data => {
          debugger
          let temp: any = data;
          this.punchintime = temp[0].signinDate;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Attendance By Employee ID');
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



  public GetStaffLeaveCountForDashboard1() {
    this.DigiofficeService.GetStaffLeaveCountForDashboard(localStorage.getItem('staffid'), 1, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.myleaves = data;
          this.loader = false;
          let temp1 = this.myleaves
          this.pendingcount1 = temp1[0].pendingcount
          this.approvedcount1 = temp1[0].approvedcount
          this.Rejectedcount1 = temp1[0].rejectedcount
          this.CancelledCount1 = temp1[0].cancelcount


        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Leave Count For Dashboard');
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
    this.DigiofficeService.GetEmployeeLoans()
      .subscribe({
        next: data => {
          debugger
          this.stafflist = data;
          this.loader = false;
          if (this.roleid == 2) {
            this.stafflistnewrequest = this.stafflist.filter((x: { status: string, supervisor: string }) => x.status == 'Manager Pending,HR Pending,Payroll Pending,Finance Pending' && x.supervisor == localStorage.getItem('staffid'))
            this.newrquestloancount = this.stafflistnewrequest.length;
            this.stafflistapproved = this.stafflist.filter((x: { status: string, supervisor: string }) => x.status != 'Manager Pending,HR Pending,Payroll Pending,Finance Pending' && x.status != 'Manager Rejected,HR Pending,Payroll Pending,Finance Pending' && x.supervisor == localStorage.getItem('staffid'))
            this.approvedloancount = this.stafflistapproved.length;
            this.stafflistrejected = this.stafflist.filter((x: { status: string, supervisor: string }) => x.status == 'Manager Rejected,HR Pending,Payroll Pending,Finance Pending' && x.supervisor == localStorage.getItem('staffid'))
            this.rejectedloancount = this.stafflistrejected.length;
            this.loader = false;
          }
          else {
            this.stafflistnewrequest = this.stafflist.filter((x: { status: string }) => x.status == 'Manager Approved,HR Pending,Payroll Pending,Finance Pending')
            this.newrquestloancount = this.stafflistnewrequest.length;
            this.stafflistapproved = this.stafflist.filter((x: { status: string }) => x.status != 'Manager Approved,HR Pending,Payroll Pending,Finance Pending' && x.status != 'Manager Approved,HR Rejected,Payroll Pending,Finance Pending')
            this.approvedloancount = this.stafflistapproved.length;
            this.stafflistrejected = this.stafflist.filter((x: { status: string }) => x.status == 'Manager Approved,HR Rejected,Payroll Pending,Finance Pending')
            this.rejectedloancount = this.stafflistrejected.length;
            this.loader = false;
          }
        }, error: (err) => {
          // Swal.fire('Issue in Getting Employee Loan');
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

  public GetExpensesListwebInit() {
    this.DigiofficeService.GetExpensesListweb()
      .subscribe({
        next: data => {
          debugger
          this.projectlist = data.filter(x => x.supervisor == this.staffID)
          this.newexpensecount = this.projectlist.filter((x: { approvalStatus: string; }) => x.approvalStatus = 'Manager Pending Finance Pending').length;
          this.approvedexpensecount = this.projectlist.filter((x: { approvalStatus: string; }) => x.approvalStatus == 'Manager Approved Finance Approved' || x.approvalStatus == 'Manager Approved Finance Pending').length;
          this.cancelledexpensecount = this.projectlist.filter((x: { approvalStatus: string; }) => x.approvalStatus == 'Manager Rejected Finance Pending' || x.approvalStatus == 'Manager Approved Finance Rejected').length;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Expenses List Web');
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

  public GetStaffOverTimeDetails() {
    this.DigiofficeService.GetStaffOverTimeDetails()
      .subscribe({
        next: data => {
          debugger
          this.timedetails = data.filter(x => x.supervisor == this.staffID);
          this.pendingotcount = this.timedetails.filter((x: { status: string; }) => x.status == 'Manager Pending').length;
          this.approvedotcount = this.timedetails.filter((x: { status: string; }) => x.status == 'Manager Approved').length;
          this.Rejectedotcount = this.timedetails.filter((x: { status: string; }) => x.status == 'Manager Rejected').length;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Over Time Details');
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

  public GetMyDetailsByStaffID() {
    this.DigiofficeService.GetMyDetailsByStaffID(this.staffID)
      .subscribe({
        next: data => {
          debugger
          let temp: any = data;
          this.profilepercentage = temp[0].profilepercentage * 9;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details By Staff ID');
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


  CancelledCount1: any;
  public GetCancelledStaffLeaves() {
    this.DigiofficeService.GetCancelledStaffLeaves(localStorage.getItem('staffid'), 1, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.myleaves = data.filter(x => x.uuid == localStorage.getItem('staffid'));
          this.pendingcount1 = this.myleaves.filter((x: { status: string; }) => (x.status == 'Manager Pending')).length;
          this.Rejectedcount1 = this.myleaves.filter((x: { status: string; }) => x.status == 'Rejected').length;
          this.CancelledCount1 = this.myleaves.filter((x: { status: string; }) => x.status == 'Cancelled').length;
          this.approvedcount1 = this.myleaves.filter((x: { status: string; }) => x.status == 'Manager Approved').length;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Cancelled Staff Leaves');
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

  public GetExpensesListweb1() {
    this.DigiofficeService.GetExpensesListweb()
      .subscribe({
        next: data => {
          debugger
          let teamexpnes: any = data.filter(x => x.supervisor == localStorage.getItem('staffid'));
          this.pendingteamexpensecount = teamexpnes.filter((x: { status: string; }) => x.status == 'Manager Pending Finance Pending' || x.status == null).length;
          this.Rejectedteamexpnesecount = teamexpnes.filter((x: { status: string; }) => x.status == 'Rejected' || x.status == 'Manager Rejected' || x.status == 'Manager Approved Finance Rejected').length;
          this.approvedteamexpnescount = teamexpnes.filter((x: { status: string; }) => x.status == 'Manager Approved Finance Approved' || x.status == 'Manager Approved Finance Pending' || x.status == 'Manager Rejected' || x.status == 'Manager Approved Finance Rejected').length;
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Expenses List Web');
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


  public getipaddress() {
    debugger
    this.loader = true;
    this.DigiofficeService.getIPAddress()
      .subscribe({
        next: data => {
          debugger
          let temap: any = data
          this.ipaddress = temap.ip
          this.loader = false;
        }, error: (err) => {
          //Swal.fire('Issue in Getting IP Address');
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

  public getstaffleaves1() {
    debugger
    if (this.roleid == 2) {
      this.DigiofficeService.GetStaffLeaveCountForDashboard(localStorage.getItem('staffid'), 1, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            this.staffleaves1 = data.filter((x: { supervisor: string | null; status: string | null; }) => x.supervisor == localStorage.getItem('staffid') && x.status == 'Manager Pending HR Pending');
            let temp: any = data.filter((x: { supervisor: string }) => x.supervisor == localStorage.getItem('staffid'));
            this.pendingcount = temp.filter((x: { status: string; }) => x.status == 'Manager Pending HR Pending' || x.status == 'Manager Pending').length;
            this.Rejectedcount = temp.filter((x: { status: string; }) => x.status == 'Rejected' || x.status == 'Manager Rejected HR Pending').length;
            this.approvedcount = (data.filter((x: { supervisor: string, status: string; }) => x.supervisor == localStorage.getItem('staffid') && x.status == 'Manager Approved').length);;
            this.CancelledCount = temp.filter((x: { status: string; }) => x.status == 'Cancelled').length;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Cancelled Staff Leaves');
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
      this.DigiofficeService.GetStaffLeaveCountForDashboard(localStorage.getItem('staffid'), 1, "01-01-2020", "01-01-2025")
        .subscribe({
          next: data => {
            debugger
            this.staffleaves1 = data.filter((x: { supervisor: string | null; status: string | null; }) => x.status == 'Manager Approved HR Pending');
            let temp: any = data;
            this.pendingcount = temp.pendingcount;
            this.Rejectedcount = temp.rejectedcount;
            this.approvedcount = temp.approvedcount;
            this.CancelledCount = temp.cancelcount;
            this.loader = false;
          }, error: (err) => {
            // Swal.fire('Issue in Getting Cancelled Staff Leaves');
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

  public GetExpensesListweb() {
    debugger
    this.DigiofficeService.GetExpensesListweb()
      .subscribe({
        next: data => {
          debugger
          this.projectlist = data.filter(x => x.supervisor == this.staffID && (x.status == 'Manager Pending Finance Pending' || x.status == null));
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Expenses List Web');
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

  public holidays() {
    this.router.navigate(['/Admin/HolidayDashboard']);
    this.loader = false;
  }

  public changebirthday() {
    debugger;
    localStorage.setItem('birthday', String(this.day).concat('-', String(this.month)))
    this.Anniversery = false;
    this.Birthday = true;
    this.BirthdayView = false;
    this.NewJoinee = false;
    this.DigiofficeService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.Anniverserylist1 = data.filter(x => x.dobdate == String(this.day).concat('-', String(this.month)));
          this.loader = false;
          this.name = this.Anniverserylist1[0].name
          this.middle_Name = this.Anniverserylist1[0].middle_Name
          this.mobile = this.Anniverserylist1[0].mobile
          this.emailID = this.Anniverserylist1[0].emailID
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
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

  public changenewjoinee() {
    debugger;
    this.loader = true;
    this.Anniversery = false;
    this.Birthday = false;
    this.BirthdayView = false;
    this.NewJoinee = true;
    this.DigiofficeService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.Anniverserylist2 = data.filter(x => x.joiningDate == this.myDate + "T00:00:00");
          this.loader = false;
          this.name = this.Anniverserylist2[0].name
          this.middle_Name = this.Anniverserylist2[0].middle_Name
          this.mobile = this.Anniverserylist2[0].mobile
          this.emailID = this.Anniverserylist2[0].emailID
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
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


  public Profilecompletion() {
    this.router.navigate(['/HR/AddressDetailsWizard', this.staffID]);
    this.loader = false;
  }

  public flip(event: { currentTarget: any; }) {
    debugger
    var element = event.currentTarget;
    if (element.className === "card") {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  };

  public flip1(event: { currentTarget: any; }) {
    debugger
    var element = event.currentTarget;
    if (element.className === "card1") {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  };

  public leavedashbaord1() {
    debugger
    this.router.navigate(['/MyTeamLeaveDetails']);
    this.loader = false;
  }

  public leavedashbaord() {
    debugger
    this.router.navigate(['/LeaveListDashboard']);
    this.loader = false;
  }

  public Regularization() {
    debugger
    this.router.navigate(['/MyTeamAttendenceRegularisation']);
    this.loader = false;
  }

  public Regularization1() {
    debugger
    this.router.navigate(['/AttendanceView']);
    this.loader = false;
  }

  public goprofile() {
    debugger
    this.router.navigate(['/EmployeeProfileView']);
    this.loader = false;
  }


  public getstaffleaves() {
    debugger
    this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025")
      .subscribe({
        next: data => {
          debugger
          this.staffleaves = data.filter(x => x.id == this.staffID);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Staff Leaves');
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.messagesult
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }
  BirthdayView: any;
  public changeAnniversary() {
    debugger;
    this.loader = true;
    this.Anniversery = true;
    this.Birthday = false;
    this.BirthdayView = false;
    this.NewJoinee = false;
    this.DigiofficeService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.Anniverserylist = data.filter(x => x.anniversarydate == String(this.day).concat('-', String(this.month)));
          this.loader = false;
          this.name = this.Anniverserylist[0].name
          this.middle_Name = this.Anniverserylist[0].middle_Name
          this.mobile = this.Anniverserylist[0].mobile
          this.emailID = this.Anniverserylist[0].emailID
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
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

  newannnounecemnetlist: any
  public GetAnnouncements() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetAnnouncementsByBuildingID(56)
      .subscribe({
        next: data => {
          debugger
          this.loader = true;
          this.newannnounecemnetlist = data.filter(x => x.filterdate >= this.todaydate);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Announcements');
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
  Certificate_url_second: any;
  BoosterDoseCertificate: any;
  public getDetails() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetEmployeeVaccinationDetails()
      .subscribe({
        next: data => {
          debugger
          this.EmployeeVaccinationDetail = data.filter(x => x.employeeId == this.staffID);
          if (this.EmployeeVaccinationDetail.length != 0) {
            this.FirstDoseDate = this.EmployeeVaccinationDetail[0].firstDoseDate,
              this.certificate_url = this.EmployeeVaccinationDetail[0].certificate_url,
              this.Certificate_url_second = this.EmployeeVaccinationDetail[0].certificate_url_second,
              this.BoosterDoseCertificate = this.EmployeeVaccinationDetail[0].boosterDoseCertificate,
              this.SecondDoseDate = this.EmployeeVaccinationDetail[0].secondDoseDate,
              this.BoosterName = this.EmployeeVaccinationDetail[0].boosterName,
              this.BoosterDoseDate = this.EmployeeVaccinationDetail[0].boosterDoseDate
            this.loader = false;
          }
          else {
            this.loader = false;
            this.FirstDoseDate = null,
              this.certificate_url = 'https://asticom.digiofficeapp.com/Amazepayrollapi/Images/EmptyProfile/noimage.png',
              this.Certificate_url_second = 'https://asticom.digiofficeapp.com/Amazepayrollapi/Images/EmptyProfile/noimage.png',
              this.BoosterDoseCertificate = 'https://asticom.digiofficeapp.com/Amazepayrollapi/Images/EmptyProfile/noimage.png',
              this.SecondDoseDate = null,
              this.BoosterName = null,
              this.BoosterDoseDate = null
          }
        }, error: (err) => {
          // Swal.fire('Issue in Getting Employee Vaccination Details');
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
  dispyList: any = [];
  public GetHolidays() {
    debugger
    this.loader = true;
    this.DigiofficeService.GetHolidays()

      .subscribe({
        next: data => {
          debugger
          // this.holidaylist = data.filter(x => x.region == this.province || x.region == null);
          // this.holidaylist1 = data.filter(x => x.region == this.province || x.region == null);
          this.holidaylist = data;
          this.holidaylist1 = data;
          this.topholidayname = this.holidaylist[0].holiday;
          this.topholidaydate = this.holidaylist[0].holidayDate;
          this.tpholidayattachment = this.holidaylist[0].attachment;
          for (let i = 0; i <= this.holidaylist1.length; i++) {
            if (this.dispyList.length < 3) {
              this.dispyList.push(this.holidaylist1[i]);
            }
            else {

            }

          }
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Holidays');
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
  Date: any;
  public punchin() {
    debugger;
    this.DigiofficeService.GetStaffShiftDetailsByStaffID(localStorage.getItem('staffid'))
      .subscribe({
        next: data => {
          debugger
          let temp = data.filter(x => (x.filterenddate >= x.currentdate && x.filterdate <= x.currentdate) && x.approve == 1);
          if (temp.length == 0) {
            Swal.fire('Please add your shift details and get approval from your manager before punching in.')
            this.loader = false;
            // this.showPopup = 1;
            // this.messageId = 17;
          } else {
            this.showPopup = 0;
            if (this.punchintime != undefined) {
              /*       Swal.fire('Already Punched In for the day'); */
              this.loader = false;
              this.showPopup = 1;
              this.messageId = 35;
            }
            else {
              this.loader = false;
              var options = { hour12: false };
              var date = new Date();
              var entity = {
                UserID: localStorage.getItem('staffid'),
                SigninDate: date.toLocaleString('en-US', options),
                SigninLocation: 'Office',
                StatusID: 1,
                punchinip: this.ipaddress == undefined ? '101.120.111.222' : this.ipaddress,
                ApprovalStatus: 'Manager Pending HR Pending'
              }
              this.DigiofficeService.InsertAttendanceWeb(entity)
                .subscribe({
                  next: data => {
                    debugger
                    if (data == 0) {
                      /*   Swal.fire('Already Punched In for the day'); */
                      this.loader = false;
                      this.showPopup = 1;
                      this.messageId = 35;
                    }
                    else {
                      this.punchinId = data;
                      localStorage.setItem('PunchINid', this.punchinId);
                      /*  Swal.fire('Punched In Successfully'); */
                      this.loader = false;
                      this.showPopup = 1;
                      this.messageId = 36;
                      this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin(this.staffID, this.todaydate, this.todaydate).subscribe(data => {
                        debugger
                        let temp: any = data;
                        this.punchintime = temp[0].signinDate;
                        this.loader = false;
                      })
                    }
                  }, error: (err) => {
                    // Swal.fire('Issue in Inserting Attendance Web');
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

          this.loader = false;
        }, error: (err) => {

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

  public punchout() {
    debugger;
    this.showPopup = 0;
    this.loader = true;
    if (this.punchouttime != undefined) {
      /*   Swal.fire('Already Punched Out for the day'); */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 37;
    }
    else {
      var options = { hour12: false };
      var date = new Date();
      if (this.resettime == '05:00:00') {
        if (this.currenttime >= '00:00:00' && this.currenttime <= '05:00:00') {
          this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin1daybefore(this.staffID, this.todaydate, this.todaydate)
            .subscribe({
              next: data => {
                debugger
                this.loader = false;
                var todayDate = new Date().toISOString().slice(0, 10);
                let temp: any = data;

                this.punchoutid = temp[0].id;
                var entity = {
                  ID: this.punchoutid,
                  SignoutDate: date.toLocaleString('en-US', options),
                  SignoutLocation: 'Office',
                  StatusID: 2,
                  punchoutip: this.ipaddress == undefined ? '101.120.111.222' : this.ipaddress,
                }
                this.DigiofficeService.UpdateAttendanceWeb(entity)
                  .subscribe({
                    next: data => {
                      debugger
                      if (data != 0) {
                        /*   Swal.fire('Punched Out Successfully'); */
                        localStorage.removeItem('PunchINid');
                        this.loader = false;
                        this.showPopup = 1;
                        this.messageId = 38;
                        location.reload();
                        this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin1daybefore(this.staffID, this.todaydate, this.todaydate)
                          .subscribe({
                            next: data => {
                              debugger
                              let temp: any = data;
                              this.punchouttime = temp[0].signoutDate;
                              this.loader = false;
                              location.reload();
                            }, error: (err) => {
                              // Swal.fire('Issue in Getting Attendance By Employee ID');
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
                    }, error: (err) => {
                      // Swal.fire('Issue in Updating Attendance Web');
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
              }, error: (err) => {
                // Swal.fire('Issue in Getting Attendance');
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
          this.loader = false

        } else {
          this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin(this.staffID, this.todaydate, this.todaydate)
            .subscribe({
              next: data => {
                debugger
                this.loader = false;
                var todayDate = new Date().toISOString().slice(0, 10);
                let temp: any = data;

                this.punchoutid = temp[0].id;
                var entity = {
                  ID: this.punchoutid,
                  SignoutDate: date.toLocaleString('en-US', options),
                  SignoutLocation: 'Office',
                  StatusID: 2,
                  punchoutip: this.ipaddress == undefined ? '101.120.111.222' : this.ipaddress,
                }
                this.DigiofficeService.UpdateAttendanceWeb(entity)
                  .subscribe({
                    next: data => {
                      debugger
                      if (data != 0) {
                        /*   Swal.fire('Punched Out Successfully'); */
                        localStorage.removeItem('PunchINid');
                        this.loader = false;
                        this.showPopup = 1;
                        this.messageId = 38;
                        location.reload();
                        this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin(this.staffID, this.todaydate, this.todaydate)
                          .subscribe({
                            next: data => {
                              debugger
                              let temp: any = data;
                              this.punchouttime = temp[0].signoutDate;
                              this.loader = false;
                              location.reload();
                            }, error: (err) => {
                              // Swal.fire('Issue in Getting Attendance By Employee ID');
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
                    }, error: (err) => {
                      // Swal.fire('Issue in Updating Attendance Web');
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
              }, error: (err) => {
                // Swal.fire('Issue in Getting Attendance');
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
          this.loader = false
        }
      }
      else if (this.resettime == '17:00:00') {
        if (this.currenttime >= '00:00:00' && this.currenttime <= '17:00:00') {
          this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin1daybefore(this.staffID, this.todaydate, this.todaydate)
            .subscribe({
              next: data => {
                debugger
                this.loader = false;
                var todayDate = new Date().toISOString().slice(0, 10);
                let temp: any = data;

                this.punchoutid = temp[0].id;
                var entity = {
                  ID: this.punchoutid,
                  SignoutDate: date.toLocaleString('en-US', options),
                  SignoutLocation: 'Office',
                  StatusID: 2,
                  punchoutip: this.ipaddress == undefined ? '101.120.111.222' : this.ipaddress,
                }
                this.DigiofficeService.UpdateAttendanceWeb(entity)
                  .subscribe({
                    next: data => {
                      debugger
                      if (data != 0) {
                        /*   Swal.fire('Punched Out Successfully'); */
                        localStorage.removeItem('PunchINid');
                        this.loader = false;
                        this.showPopup = 1;
                        this.messageId = 38;
                        location.reload();
                        this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin1daybefore(this.staffID, this.todaydate, this.todaydate)
                          .subscribe({
                            next: data => {
                              debugger
                              let temp: any = data;
                              this.punchouttime = temp[0].signoutDate;
                              this.loader = false;
                              location.reload();
                            }, error: (err) => {
                              // Swal.fire('Issue in Getting Attendance By Employee ID');
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
                    }, error: (err) => {
                      // Swal.fire('Issue in Updating Attendance Web');
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
              }, error: (err) => {
                // Swal.fire('Issue in Getting Attendance');
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
          this.loader = false

        } else {
          this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin(this.staffID, this.todaydate, this.todaydate)
            .subscribe({
              next: data => {
                debugger
                this.loader = false;
                var todayDate = new Date().toISOString().slice(0, 10);
                let temp: any = data;

                this.punchoutid = temp[0].id;
                var entity = {
                  ID: this.punchoutid,
                  SignoutDate: date.toLocaleString('en-US', options),
                  SignoutLocation: 'Office',
                  StatusID: 2,
                  punchoutip: this.ipaddress == undefined ? '101.120.111.222' : this.ipaddress,
                }
                this.DigiofficeService.UpdateAttendanceWeb(entity)
                  .subscribe({
                    next: data => {
                      debugger
                      if (data != 0) {
                        /*   Swal.fire('Punched Out Successfully'); */
                        localStorage.removeItem('PunchINid');
                        this.loader = false;
                        this.showPopup = 1;
                        this.messageId = 38;
                        location.reload();
                        this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin(this.staffID, this.todaydate, this.todaydate)
                          .subscribe({
                            next: data => {
                              debugger
                              let temp: any = data;
                              this.punchouttime = temp[0].signoutDate;
                              this.loader = false;
                              location.reload();
                            }, error: (err) => {
                              // Swal.fire('Issue in Getting Attendance By Employee ID');
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
                    }, error: (err) => {
                      // Swal.fire('Issue in Updating Attendance Web');
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
              }, error: (err) => {
                // Swal.fire('Issue in Getting Attendance');
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
          this.loader = false
        }
      }
      else if (this.resettime == '11:30:00') {
        if (this.currenttime >= '00:00:00' && this.currenttime <= '11:30:00') {
          this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin1daybefore(this.staffID, this.todaydate, this.todaydate)
            .subscribe({
              next: data => {
                debugger
                this.loader = false;
                var todayDate = new Date().toISOString().slice(0, 10);
                let temp: any = data;

                this.punchoutid = temp[0].id;
                var entity = {
                  ID: this.punchoutid,
                  SignoutDate: date.toLocaleString('en-US', options),
                  SignoutLocation: 'Office',
                  StatusID: 2,
                  punchoutip: this.ipaddress == undefined ? '101.120.111.222' : this.ipaddress,
                }
                this.DigiofficeService.UpdateAttendanceWeb(entity)
                  .subscribe({
                    next: data => {
                      debugger
                      if (data != 0) {
                        /*   Swal.fire('Punched Out Successfully'); */
                        localStorage.removeItem('PunchINid');
                        this.loader = false;
                        this.showPopup = 1;
                        this.messageId = 38;
                        location.reload();
                        this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin1daybefore(this.staffID, this.todaydate, this.todaydate)
                          .subscribe({
                            next: data => {
                              debugger
                              let temp: any = data;
                              this.punchouttime = temp[0].signoutDate;
                              this.loader = false;
                              location.reload();
                            }, error: (err) => {
                              // Swal.fire('Issue in Getting Attendance By Employee ID');
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
                    }, error: (err) => {
                      // Swal.fire('Issue in Updating Attendance Web');
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
              }, error: (err) => {
                // Swal.fire('Issue in Getting Attendance');
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
          this.loader = false
        } else {
          this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin(this.staffID, this.todaydate, this.todaydate)
            .subscribe({
              next: data => {
                debugger
                this.loader = false;
                var todayDate = new Date().toISOString().slice(0, 10);
                let temp: any = data;

                this.punchoutid = temp[0].id;
                var entity = {
                  ID: this.punchoutid,
                  SignoutDate: date.toLocaleString('en-US', options),
                  SignoutLocation: 'Office',
                  StatusID: 2,
                  punchoutip: this.ipaddress == undefined ? '101.120.111.222' : this.ipaddress,
                }
                this.DigiofficeService.UpdateAttendanceWeb(entity)
                  .subscribe({
                    next: data => {
                      debugger
                      if (data != 0) {
                        /*   Swal.fire('Punched Out Successfully'); */
                        localStorage.removeItem('PunchINid');
                        this.loader = false;
                        this.showPopup = 1;
                        this.messageId = 38;
                        location.reload();
                        this.DigiofficeService.GetAttendanceByEmployeeIDforpunchin(this.staffID, this.todaydate, this.todaydate)
                          .subscribe({
                            next: data => {
                              debugger
                              let temp: any = data;
                              this.punchouttime = temp[0].signoutDate;
                              this.loader = false;
                              location.reload();
                            }, error: (err) => {
                              // Swal.fire('Issue in Getting Attendance By Employee ID');
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
                    }, error: (err) => {
                      // Swal.fire('Issue in Updating Attendance Web');
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
              }, error: (err) => {
                // Swal.fire('Issue in Getting Attendance');
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
          this.loader = false
        }
      }

    }
  }


  public getwishdate() {
    this.DigiofficeService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.loader = false;
          this.Anniverserylist = data.filter(x => x.date_Of_Marriage == this.myDate + "T00:00:00");

        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
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

  public getannouncementurl(medicalurl: any) {
    debugger
    this.medicalurl = medicalurl;
  }

  onSelect21(event: any) {
    debugger;
    this.showPopup = 0;
    console.log(event);
    if (event.addedFiles[0].size / 1048576 > 2) {
      /*    Swal.fire('Please Upload File Less than 2 MB.') */
      this.loader = false;
      this.showPopup = 1;
      this.messageId = 14;
    } else {
      this.attachments21 = [];
      this.attachments21.push(...event.addedFiles);
      for (let i = 0; i < this.attachments21.length; i++) {
        this.DigiofficeService.UploadmultipleProjectAttachments(this.attachments21[i])
          .subscribe({
            next: data => {
              debugger
              if (data != undefined) {
                this.attachmentsurl.push(data);
                this.loader = false;
              }
            }, error: (err) => {
              // Swal.fire('Issue in Inserting Project Attachments');
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
  }

  onRemove21(event: any) {
    debugger
    console.log(event);
    this.attachments21.splice(this.attachments.indexOf(event), 1);
  }

  public UpdateVaccinationDetails() {
    debugger;
    this.showPopup = 0;
    this.loader = true;
    var entity = {
      ID: this.staffID,
      Certificate_url: this.attachmentsurl[0],
      vtype: 1
    }
    this.DigiofficeService.UpdateVaccinationDetails(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
            /*  Swal.fire("Updated Successfully"); */
            location.reload();
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 10;
          }
        }, error: (err) => {
          // Swal.fire('Issue in Updating Vaccination Details');
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

  public UpdateVaccinationDetails1() {
    debugger;
    this.showPopup = 0;
    this.loader = true;
    var entity = {
      ID: this.staffID,
      Certificate_url: this.attachmentsurl[0],
      vtype: 2
    }
    this.DigiofficeService.UpdateVaccinationDetails(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
            /*    Swal.fire("Updated Successfully"); */
            location.reload();
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 10;
          }
        }, error: (err) => {
          // Swal.fire('Issue in Updating Vaccination Details');
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

  public UpdateVaccinationDetails2() {
    debugger;
    this.showPopup = 0;
    this.loader = true;
    var entity = {
      ID: this.staffID,
      Certificate_url: this.attachmentsurl[0],
      vtype: 3
    }
    this.DigiofficeService.UpdateVaccinationDetails(entity)
      .subscribe({
        next: data => {
          debugger
          if (data != 0) {
            /*  Swal.fire("Updated Successfully"); */
            location.reload();
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 10;
          }
        }, error: (err) => {
          // Swal.fire('Issue in Updating Vaccination Details');
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