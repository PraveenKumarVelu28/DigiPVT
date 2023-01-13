import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(public router: Router) { }

  login: any;
  UserName: any;
  company_name: any;
  role: any;
  temp: any;
  show: any;
  temp1: any
  home: any;
  roleid: any;
  companyid: any;
  roledid: any
  AttendanceEnable: any
  ExitFormalit: any
  loan: any
  grievanc: any
  Helpdesk: any
  regularize: any
  attendancereport: any
  leavereport: any
  timesheetreport: any
  expensereport: any
  locatorreport: any
  travelreport: any
  probationreport: any
  employeereport: any
  leavetype: any
  policy: any
  Holiday: any
  company: any
  Leave: any;
  active: any;
  staff: any
  overtime: any
  Attendanc: any
  chat: any

  ngOnInit(): void {
    this.login = sessionStorage.getItem('roledid');
    this.temp1 = sessionStorage.getItem('temp');
    this.companyid = sessionStorage.getItem('companyid');
    this.AttendanceEnable = sessionStorage.getItem('AttendanceEnable');
    this.active = 0;

    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role')
    this.roleid = sessionStorage.getItem('roledid')
    this.roledid = sessionStorage.getItem('roledid')
  }

  public highlight(evt: any) {
    debugger
    var i, tablinks;
    //  localStorage.setItem("clickname",name)
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
  }

  public Home() {
    debugger
    this.active = 1;

    // (<HTMLImageElement>document.getElementById('Home')).src = 'assets/64/Home1.png'
    if (this.login == '6') {
      if (this.companyid == 1001) {
        this.router.navigate(['/Employee/ALIAVIDAEmployeedashboard']);
        localStorage.setItem('Pagename', 'Home')
      }
      else if (this.companyid == 1005) {
        this.router.navigate(['Employee/AVIDAEmployeeDashboard']);

      }
      else {
        this.router.navigate(['Employee/Employeedashboard']);
      }
    }

    else if (this.login == '2') {
      if (this.companyid == 1001) {
        this.router.navigate(['Manager/ALIAVIDAManagerdashboard']);
        // this.router.navigate(['/Employee/ALIAVIDAEmployeedashboard']);
        localStorage.setItem('Pagename', 'Home')
      }
      else if (this.companyid == 1005) {
        this.router.navigate(['Manager/AVIDAManagerDashboard']);

      }
      else {
        this.router.navigate(['Manager/ALIAVIDAManagerdashboard']);
        // this.router.navigate(['Employee/Employeedashboard']);
      }

    }
    else if (this.login == '1' || this.login == '41' || this.UserName == "Admin") {
      if (this.companyid == 1002) {
        this.router.navigate(['/Admin/Admindashbaord']);
        localStorage.setItem('Pagename', 'Home')
      }
      else {
        this.router.navigate(['/Admin/Admindashbaord']);
        localStorage.setItem('Pagename', 'Home')
      }
    }

    else if (this.login == '9') {
      if (this.companyid == 1001) {
        this.router.navigate(['/HR/ALIAVIDAHRDashboard']);
        // this.router.navigate(['HR/ALIAVIDAHRDashboard']);
        localStorage.setItem('Pagename', 'Home')
      }
      else if (this.companyid == 1005) {
        this.router.navigate(['/HR/AVIDAHRDashboard']);
        localStorage.setItem('Pagename', 'Home')
      }
      else {
        this.router.navigate(['/HR/ALIAVIDAHRDashboard']);
        localStorage.setItem('Pagename', 'Home')
      }

    }

    // else {
    //   this.router.navigate(['/Admin/Admindashbaord']);
    //   localStorage.setItem('Pagename', 'Home')
    // }
    else {
      this.router.navigate(['Employee/Employeedashboard']);
    }
  }

  public Leaves() {
    debugger
    this.active = 7;
    if (sessionStorage.getItem('companyid') == '1007') {
      if (this.login == '6') {
        this.router.navigate(['/Employee/LeaveListDashboard']);
        localStorage.setItem('Pagename', 'Leaves')
      }
      else if (this.login == '9') {
        this.router.navigate(['/Employee/LeaveListDashboard']);
        localStorage.setItem('Pagename', 'Leaves')

      }
      else if (this.login == '9') {
        this.router.navigate(['/Employee/LeaveListDashboard']);
        localStorage.setItem('Pagename', 'Leaves')

      }
      else if (this.login == '2') {
        this.router.navigate(['/Manager/ApproverMyTeamLeaveDetails']);
        localStorage.setItem('Pagename', 'Leaves')

      }
      else {
        this.router.navigate(['/Manager/ApproverMyTeamLeaveDetails']);
        localStorage.setItem('Pagename', 'Leaves')

      }
    } else {
      if (this.login == '6') {
        this.router.navigate(['/Employee/LeaveListDashboard']);
        localStorage.setItem('Pagename', 'Leaves')
      }
      else if (this.login == '9') {
        this.router.navigate(['/Employee/LeaveListDashboard']);
        localStorage.setItem('Pagename', 'Leaves')

      }
      else if (this.login == '9') {
        this.router.navigate(['/Employee/LeaveListDashboard']);
        localStorage.setItem('Pagename', 'Leaves')

      }
      else if (this.login == '2') {
        this.router.navigate(['/Manager/MyTeamLeaveDetails']);
        localStorage.setItem('Pagename', 'Leaves')

      }
      else {
        this.router.navigate(['/Employee/LeaveListDashboard']);
        localStorage.setItem('Pagename', 'Leaves')

      }
    }





  }

  public getSettings() {
    this.active = 867;
  }

  public getAttendacmenu() {
    this.active = 8;
  }

  public Orgchart() {
    this.active = 'Orgchart';
    localStorage.setItem('Pagename', 'Org Chart');
    this.router.navigate(['/Employee/Orgchart']).then(() => {
      location.reload();
    });
  }

  public Attendance() {
    debugger
    this.active = 11;
    if (this.login == '2') {
      this.router.navigate(['/Manager/MyTeamAttendenceRegularisation']);
      localStorage.setItem('Pagename', 'Regularization')
    }

    else {
      this.router.navigate(['/HR/AttendanceView']);
      localStorage.setItem('Pagename', 'Regularisation')
    }
  }
  public Helpdeskdash() {
    debugger
    this.active = 19;
    localStorage.setItem('Pagename', 'Helpdesk Request')
    this.router.navigate(['/Admin/Helpdeskdash']);

  }

  public MyTeamWeeklyShift() {
    debugger
    this.active = 'myTeamWeeklyShift';
    if (this.login == 2) {
      localStorage.setItem('Pagename', 'Shift Details');
      this.router.navigate(['/Manager/MyTeamWeeklyShift']);
    }
    else {
      localStorage.setItem('Pagename', 'Shift Details');
      this.router.navigate(['/HR/WeeklyShift']);
    }
  }


  public otconfiguration() {
    debugger
    this.active = 'Overtimeconfig';
    localStorage.setItem('Pagename', 'OT Config');
    this.router.navigate(['/HR/OverTimeConfiguration']);

  }

  public Requests() {
    debugger
    this.active = 12;
  }

  public Requests23() {
    debugger
    this.active = 890;
  }

  public Configuration() {
    debugger
    this.active = 'Configuration';
  }


  public Staffleavedetailsforhr() {
    debugger
    this.active = 'Staffleavedetailsforhr';
    localStorage.setItem('Pagename', 'Promotion History');
    this.router.navigate(['/Admin/Staffleavedetailsforhr']);
  }


  public Overtimereportforhr() {
    debugger
    this.active = 9999;
    localStorage.setItem('Pagename', 'Promotion History');
    this.router.navigate(['/Admin/Overtimereportforhr']);
  }

  public LeavebalanceReport() {
    debugger
    this.active = 'LeavebalanceReport';
    localStorage.setItem('Pagename', 'Promotion History');
    this.router.navigate(['/Admin/TeamLeaveBalanceReport']);
  }


  public LeaveConfiguration() {
    debugger
    this.active = 'LeaveConfiguration';
    localStorage.setItem('Pagename', 'Leave Configuration');
    this.router.navigate(['/HR/LeaveConfigurationdash']);
  }

  public Attendanceconfig() {
    debugger
    this.active = 'Attendanceconfig';
    localStorage.setItem('Pagename', 'Attendance Configuration');
    this.router.navigate(['/HR/Attendanceconfigdash']);
  }
  public Loadattedance() {
    debugger
    this.active = 'Loadattedance';
    localStorage.setItem('Pagename', 'Upload Attendance');
    this.router.navigate(['/HR/Loadattedance']);
  }

  public Company() {
    debugger
    this.active = 'com';
    this.router.navigate(['/Admin/Companydashboard']);
  }

  public Attendancereport() {
    this.active = 24;
    localStorage.setItem('Pagename', 'Attendance Report')
    this.router.navigate(['/Employee/AttendanceReports']);
  }

  public staffreport() {
    this.active = 'staff';
    localStorage.setItem('Pagename', 'Attendance Report')
    this.router.navigate(['/HR/AllStaffReport']);
  }

  public Leavereport() {
    this.active = 25
    localStorage.setItem('Pagename', 'Leave Report')
    this.router.navigate(['/Employee/LeaveReports']);
  }

  public OverTimereport() {
    this.active = 'OverTimereport'
    localStorage.setItem('Pagename', 'Over Time Report')
    this.router.navigate(['/Employee/OverTimeReports']);
  }

  public restday() {
    this.active = 'restday';
    localStorage.setItem('Pagename', 'RestDays')
    this.router.navigate(['/HR/Restdaysdash']);
  }

  public Reports() {
    this.active = 23;
  }

  public Masters() {
    this.active = 32;

  }

  public swal() {
    this.active = 44;
    Swal.fire({
      title: 'Access Salary',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == 1111) {
          location.href = '#/HR/Staffsalarydash';
          localStorage.setItem('Pagename', 'Staff Salary')

        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })
  }

  public Staff() {
    debugger
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/HR/EmployeeProfileModify']);
    this.policy = true
  }

  Leavetype() {
    debugger
    localStorage.setItem('Pagename', 'Leave Type')
    this.router.navigate(['/HR/LeaveTypeDashboard']);
    this.active = 33;
  }
  // ExpenseType() {
  //   debugger
  //   localStorage.setItem('Pagename', 'Expense Type')
  //   this.router.navigate(['/Admin/Expensetypedashboard']);
  //   this.active = 34;
  // }
  ShiftMaster() {
    debugger
    localStorage.setItem('Pagename', 'Shift Master')
    this.router.navigate(['/HR/ShiftMasterDash']);
    this.active = 37;
  }

  ot_master() {
    debugger
    localStorage.setItem('Pagename', 'OT Master')
    this.router.navigate(['/HR/OTRateDash']);
    this.active = 38;
  }

  Subsidary() {
    debugger
    localStorage.setItem('Pagename', 'OT Master')
    this.router.navigate(['/HR/SubsidaryMasterDash']);
    this.active = 'Subsidary';
  }

  CountryMaster() {
    debugger
    localStorage.setItem('Pagename', 'Country Master')
    this.router.navigate(['/HR/CountryMasterDash']);
    this.active = 39;
  }
  Province() {
    debugger
    localStorage.setItem('Pagename', 'Province Master')
    this.router.navigate(['/HR/StateMasterDash']);
    this.active = 40;
  }
  City() {
    debugger
    localStorage.setItem('Pagename', 'City Master')
    this.router.navigate(['/HR/CityMasterDash']);
    this.active = 41;
  }
  Barangaymaster() {
    debugger
    localStorage.setItem('Pagename', 'Barangay Master')
    this.router.navigate(['/HR/BarangayMasterDash']);
    this.active = 'Barangaymaster';
  }

  Department() {
    debugger
    localStorage.setItem('Pagename', 'Department Master')
    this.router.navigate(['/HR/DepartmentMasterDash']);
    this.active = 42;
  }

  Designation() {
    debugger
    localStorage.setItem('Pagename', 'Designation Master')
    this.router.navigate(['/HR/DesignationMaster']);
    this.active = 43;
  }

  Deniminis() {
    debugger
    localStorage.setItem('Pagename', 'De-Minimis Master')
    this.router.navigate(['/Admin/Deniminisdash']);
    this.active = 43;
  }

  public Staff123() {
    debugger
    this.active = 3;
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/Employee/StaffDashboard']);
  }

  public Policies() {
    debugger
    this.active = 'policy';
    localStorage.setItem('Pagename', 'Policies')
    this.router.navigate(['/Employee/Company-policy']);

  }

  public logout() {
    debugger
    localStorage.setItem('roledid', "0");
    this.router.navigate(['/Login']).then(() => {
      location.reload();
    });
  }
  public myprofile() {
    debugger
    localStorage.setItem('Pagename', 'Profile ')
    this.router.navigate(['/EmployeeProfileView']);
  }

  public openCity(evt: any) {
    var i, tablinks;

    tablinks = document.getElementsByClassName("nonactive");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    evt.currentTarget.className += " active";
  }

  public accountsetting() {
    debugger
    localStorage.setItem('Pagename', 'My Account ')
    this.router.navigate(['/MyAccountSetting']);
  }


  public Chat() {
    debugger
    this.active = 22;
    localStorage.setItem('Pagename', 'Chat ')
    this.router.navigate(['/Employee/ViewGroup']);
  }


  public MyOverTimeDetails() {
    debugger
    if (sessionStorage.getItem('companyid') == '1007') {
      this.router.navigate(['/Manager/myteamotdetailsforapprover']);
      localStorage.setItem('Pagename', 'OT Details')
    } else {
      if (this.roleid == 2) {
        this.active = 10;
        localStorage.setItem('Pagename', 'OverTime Details')
        this.router.navigate(['/Manager/MyTeamOverTimeDetails']);
      }
      else {
        this.active = 10;
        localStorage.setItem('Pagename', 'OverTime Details')
        this.router.navigate(['/HR/MyOverTimeDetails']);
      }
    }
  }

  public AttendanceCorrection() {
    this.active = 101;
    localStorage.setItem('Pagename', 'Attendance Correction')
    this.router.navigate(['/Employee/AttendanceCorrection']);
  }

  public WeeklyShift() {
    debugger
    if (this.login == '2') {
      localStorage.setItem('Pagename', 'Weeklyshift ')
      this.router.navigate(['/Employee/MyTeamWeeklyShift']);
    }
    else {
      localStorage.setItem('Pagename', 'Weeklyshift ')
      this.router.navigate(['/Employee/WeeklyShift']);
    }
  }


  public AttendenceDetails() {
    debugger
    this.active = 9;
    if (this.login == '2') {
      localStorage.setItem('Pagename', 'Attendance Details')
      this.router.navigate(['/Manager/MyTeamAttendence']);

    }
    else {
      localStorage.setItem('Pagename', 'Attendance Details')
      this.router.navigate(['/HR/AttendanceDetails']);

    }

  }
  public PayrollReport() {
    debugger
    this.active = 'PayrollReport';
    localStorage.setItem('Pagename', 'Payroll')
    this.router.navigate(['/HR/GenerateCsvfiles']);
  }


  public Loanconfiguration() {
    debugger
    this.active = 'Loanconfiguration';
    localStorage.setItem('Pagename', 'Loan Config')
    this.router.navigate(['/HR/LoanConfigurationDash']);
  }


  public Contradictiondash() {
    this.active = 'Contradictiondash';
    localStorage.setItem('Pagename', 'Contradiction')
    this.router.navigate(['/HR/Contradictiondash']);
  }

  public GenerateCsvfiles() {
    this.active = 'Contradictiondash';
    localStorage.setItem('Pagename', 'Generate Salary')
    this.router.navigate(['/Admin/GenerateCsvfiles']);
  }


  help() {
    this.active = 'help'
    localStorage.setItem("clickname", "HELP")
  }

  SupportTickets() {
    this.active = 'SupportTickets'
    localStorage.setItem("clickname", "support tickets")
  }


  rolemaster() {
    this.active = 'role'
    localStorage.setItem("Pagename", "Role Master");
    this.router.navigate(['/HR/PositionMasterDash'])
  }

  level() {
    this.active = 'level'
    localStorage.setItem("Pagename", "Job Level Type");
    this.router.navigate(['/HR/LevelTypeDash'])

  }

  DivisionMaster() {
    this.active = 'DivisionMasterDashboard'
    localStorage.setItem("clickname", "Division Master")
    this.router.navigate(['/HR/DivisionMasterDashboard'])
  }


  BrandMasterDash() {
    this.active = 'BrandMasterDash'
    localStorage.setItem("clickname", "BrandMaster")
    this.router.navigate(['/HR/BrandMasterDashboard'])
  }

  WorkLoactionMaster() {
    this.active = 'wm'
    localStorage.setItem("clickname", "Work Location Master")
    this.router.navigate(['/HR/WorkLocationMasterDash'])
  }

  settings(){
    this.active='Settings'
       localStorage.setItem("clickname", "Settings")     
  }

  ComponentMaster(){
    this.active='ComponentMaster'
       localStorage.setItem("clickname", "Component  Master")
       this.router.navigate(['/PayrollProcessor/ComponentMaster'])
  }

  public ComponentMapping() {
    debugger
    this.active = 'PayrollLoanReport1';
    localStorage.setItem('Pagename', 'Component Mapping');
    this.router.navigate(['/PayrollProcessor/ComponentMappingDashboard']);
  }
  
  public Componentbulkupload() {
    debugger
    this.active = 'bulk';
    localStorage.setItem('clickname', 'Component bulk upload')
    this.router.navigate(['/PayrollProcessor/PayrollComponentBulkUpload']);
  }

  public AttendanceUnits() {
    debugger
    this.active = 9999;
    localStorage.setItem('Pagename', 'Over Time');
    this.router.navigate(['/PayrollProcessor/MyTeamOverTimeDetails']);
  }
}