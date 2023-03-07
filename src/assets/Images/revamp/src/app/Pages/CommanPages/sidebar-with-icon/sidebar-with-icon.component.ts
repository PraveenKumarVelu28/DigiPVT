import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar-with-icon',
  templateUrl: './sidebar-with-icon.component.html',
  styleUrls: ['./sidebar-with-icon.component.css']
})
export class SidebarWithIconComponent implements OnInit {

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
  mini = true;
  active: any;
  announcement: any;
  @Output() data11 = new EventEmitter();
  @Input() item: any;
  ngOnInit(): void {
    debugger;
    this.getvalues(false);
    this.data11.emit('Home')
    console.log('mamata', this.item)
    this.login = sessionStorage.getItem('roledid');
    this.temp1 = sessionStorage.getItem('temp');
    this.active = 0;
    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role');
    this.roleid = this.login;
    let asas = (document.getElementById("main") as HTMLInputElement).style.width;
    console.log('mamata', asas)
    // (document.getElementById("main") as HTMLInputElement).style.marginLeft = "250px";

  }

  public Home() {
    this.active = 1;
    if (this.login == '6') {
      this.router.navigate(['/Employee/Employeedashboard']);
      localStorage.setItem('Pagename', 'Home')
      this.data11.emit('Home')
    }
    else if (this.login == '2') {
      this.router.navigate(['/Manager/ManagerDashboard']);
      localStorage.setItem('Pagename', 'Home')
      this.data11.emit('Home')
    }
    else if (this.login == '1') {
      this.router.navigate(['/Admin/Admindashbaord']);
      localStorage.setItem('Pagename', 'Home')
      this.data11.emit('Home')

    }
    else {
      this.router.navigate(['/HR/HRDashboard']);
      localStorage.setItem('Pagename', 'Home')
      this.data11.emit('Home')

    }



  }
  Announcement() {
    debugger;
    this.active = 2;
    localStorage.setItem('Pagename', 'Announcements');
    this.router.navigate(['/Admin/AnnouncementDashboard']);
    this.data11.emit('Announcements')
    // this.router.navigate(['/Admin/AnnouncementDashboard']);

  }
  public AttendenceDetails() {
    debugger
    this.active = 9;
    if (this.login == '2') {
      localStorage.setItem('Pagename', 'Attendance Details')
      this.router.navigate(['/Manager/MyTeamAttendence']);
      this.data11.emit('Attendance Details')


    }
    else {
      localStorage.setItem('Pagename', 'Attendance Details')
      this.router.navigate(['/Employee/AttendenceDetails']);
      this.data11.emit('Attendance Details')

    }

  }
  public Leaves() {
    debugger
    this.active = 7;
    if (this.login == '6') {
      this.router.navigate(['/Employee/LeaveListDashboard']);
      localStorage.setItem('Pagename', 'Leaves')
      this.data11.emit('Leaves')


    }
    else if (this.login == '9') {
      this.router.navigate(['/HR/Hrleavereuest']);
      localStorage.setItem('Pagename', 'Leaves')
      this.data11.emit('Leaves')

    }
    else if (this.login == '2') {
      this.router.navigate(['/Manager/MyTeamLeaveDetails']);
      localStorage.setItem('Pagename', 'Leaves')
      this.data11.emit('Leaves')

    }
    else {
      this.router.navigate(['/Employee/LeaveListDashboard']);
      localStorage.setItem('Pagename', 'Leaves')
      this.data11.emit('Leaves')

    }



  }
  public Timesheet() {
    debugger
    this.active = 'timesheet';
    if (this.login == '6') {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Employee/TimeSheet']);
      this.data11.emit('Timesheet Request')
    }
    else if (this.login == '9') {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Employee/TimeSheet']);
      this.data11.emit('Timesheet Request')
    }
    else if (this.login == '8') {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Employee/TimeSheet']);
      this.data11.emit('Timesheet Request')
    }
    else {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Manager/MyTeamTimesheet']);
      this.data11.emit('Timesheet Request')

    }

  }
  locator: any
  public LocatorRequest() {
    debugger
    this.active = 15;
    if (this.login == '6') {
      localStorage.setItem('Pagename', 'Locator Request')
      this.router.navigate(['/Employee/LocatorDashboard']);
      this.data11.emit('Locator Request')

    }
    else if (this.login == '9') {
      localStorage.setItem('Pagename', 'Locator Request')
      this.router.navigate(['/Employee/LocatorDashboard']);
      this.data11.emit('Locator Request')

    }
    else if (this.login == '8') {
      localStorage.setItem('Pagename', 'Locator Request')
      this.router.navigate(['/Employee/LocatorDashboard']);
      this.data11.emit('Locator Request')

    }
    else {
      localStorage.setItem('Pagename', 'Locator Request')
      this.router.navigate(['/Manager/ManagerLocatorDetails']);
      this.data11.emit('Locator Request')

    }
  }
  public LoanRequest() {
    debugger
    this.active = 17;
    localStorage.setItem('Pagename', 'Loans Request')
    this.router.navigate(['/Employee/Employeeloandash']);
    this.data11.emit('Loans Request')

  }


  public Request() {
    this.active = 14
  }

  public Reports() {
    this.active = 11
  }

  public Doccuments() {
    this.active = 12
  }

  public Help() {
    this.active = 13
    localStorage.setItem('Pagename', 'Help')
    this.router.navigate(['/Admin/Help']);
    this.data11.emit('Help')
  }

  public EmployeeResignation() {
    this.active = 'Resignation';
    localStorage.setItem('Pagename', 'Employee Resignation')
    this.router.navigate(['/Employee/EmployeeResignation']);
    this.data11.emit('Employee Resignation')

  }

  public ExceptionBulkLogs() {
    this.active = 'ExceptionBulkLogs';
    localStorage.setItem('Pagename', 'Exception Bulk Logs')
    this.router.navigate(['/HR/StaffBulkUploadExceptions']);
    this.data11.emit('Exception Bulk Logs')

  }

  public TimesheetReports() {
    this.active = 26;
    localStorage.setItem('Pagename', 'Timesheet Report')
    this.router.navigate(['/Employee/TimesheetReports']);
    this.data11.emit('Timesheet Report')


  }

  public Leavereport() {
    this.active = 25
    localStorage.setItem('Pagename', 'Leave Report')
    this.router.navigate(['/Employee/LeaveReports']);
    this.data11.emit('Leave Report')
  }


  public AttendanceCorrectionReport() {
    this.active = 'AttendanceCorrectionReport';

    if (this.login == 6) {
      localStorage.setItem('Pagename', 'Attendance Correction Report')
      this.router.navigate(['/Employee/AttendanceCorrectionReport']);
      this.data11.emit('Attendance Correction Report')
    } else if (this.login == 9) {
      localStorage.setItem('Pagename', 'Attendance Correction Report')
      this.router.navigate(['/Employee/AttendanceCorrectionReport']);
      this.data11.emit('Attendance Correction Report')
    }
    else {
      localStorage.setItem('Pagename', 'Attendance Correction Report')
      this.router.navigate(['/Manager/TeamAttendanceCorrectionReports']);
      this.data11.emit('Attendance Correction Report')
    }

  }

  public EmployeeOvertimeReport() {
    this.active = 101
    localStorage.setItem('Pagename', 'EmployeeOvertimeReport')
    this.router.navigate(['/Employee/EmployeeOvertimeReport']);
    this.data11.emit('EmployeeOvertimeReport')
  }


  public EmployeeAttendanceReport() {
    this.active = 100
    localStorage.setItem('Pagename', 'EmployeeAttendanceReport')
    this.router.navigate(['/Employee/EmployeeAttendanceReport']);
    this.data11.emit('EmployeeAttendanceReport')
  }


  public Attendancereport() {
    this.active = 24;

    if (this.login == 6) {
      localStorage.setItem('Pagename', 'Attendance Report')
      this.router.navigate(['/Employee/AttendanceReports']);
      this.data11.emit('Attendance Report')
    } else {
      localStorage.setItem('Pagename', 'Attendance Report')
      this.router.navigate(['/Manager/TeamAttendanceReports']);
      this.data11.emit('Attendance Report')
    }

  }

  public MyOverTimeDetails() {
    debugger
    if (this.roleid == 2) {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Manager/MyTeamOverTimeDetails']);
      this.data11.emit('OverTime Details')
    }
    else if (this.login == '9') {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Manager/MyTeamOverTimeDetails']);
      this.data11.emit('OverTime Details')
    }
    else if (this.login == '11') {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Manager/MyTeamOverTimeDetails']);
      this.data11.emit('OverTime Details')
    }
    else {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Employee/MyOverTimeDetails']);
      this.data11.emit('OverTime Details')
    }


  }

  public MyTeamWeeklyShift() {
    debugger
    this.active = 'myTeamWeeklyShift';
    if (this.login == 2) {
      localStorage.setItem('Pagename', 'Shift Details');
      this.router.navigate(['/Employee/MyTeamWeeklyShift']);
      this.data11.emit('ShiftDetails')
    } else {
      localStorage.setItem('Pagename', 'Shift Details');
      this.router.navigate(['/Employee/WeeklyShift']);
      this.data11.emit('ShiftDetails')

    }


  }

  public AttendanceCorrection() {
    debugger
    this.active = 'attendancecorrection';
    this.router.navigate(['/Employee/AttendanceCorrection']);
    localStorage.setItem('Pagename', 'Attendance Correction')
    this.data11.emit('Attendance Correction')
  }

  public getAttendacmenu() {
    this.active = 8;

  }

  public Masters() {
    this.active = 32;

  }

  leavetype: any
  Leavetype() {
    debugger
    localStorage.setItem('Pagename', 'Leave Type')
    this.router.navigate(['/HR/LeaveTypeDashboard']);
    this.active = 33;
    this.data11.emit('Leave Type')
  }

  public LoanType() {
    debugger
    this.active = 'LoanType';
    localStorage.setItem('Pagename', 'Loan Master')
    this.router.navigate(['/HR/LoanMasterDash']);
    this.data11.emit('Loan Master')
  }

  TransportationType() {
    debugger
    localStorage.setItem('Pagename', 'Transportation Type')
    this.router.navigate(['/HR/TransportationTypeDash']);
    this.active = 36;
    this.data11.emit('Transportation Type')
  }

  ShiftMaster() {
    debugger
    localStorage.setItem('Pagename', 'Shift Master')
    this.router.navigate(['/Admin/ShiftMasterDash']);
    this.active = 37;
    this.data11.emit('Shift Master')
  }

  CountryMaster() {
    debugger
    localStorage.setItem('Pagename', 'Country Master')
    this.router.navigate(['/Admin/CountryMasterDash']);
    this.active = 39;
    this.data11.emit('Country Master')
  }

  RegionMaster() {
    debugger
    localStorage.setItem('Pagename', 'Region Master')
    this.router.navigate(['/Admin/RegionMasterDash']);
    this.active = 'RegionMaster';
    this.data11.emit('Region Master')
  }

  Province() {
    debugger
    localStorage.setItem('Pagename', 'Province Master')
    this.router.navigate(['/Admin/StateMasterDash']);
    this.active = 40;
    this.data11.emit('Province Master')
  }
  City() {
    debugger
    localStorage.setItem('Pagename', 'City Master')
    this.router.navigate(['/Admin/CityMasterDash']);
    this.active = 41;
    this.data11.emit('City Master')
  }

  Barangaymaster() {
    debugger
    localStorage.setItem('Pagename', 'Barangay Master')
    this.router.navigate(['/Admin/Barangaymaster']);
    this.active = 'Barangaymaster';
    this.data11.emit('Barangay Master')
  }

  Department() {
    debugger
    localStorage.setItem('Pagename', 'Department Master')
    this.router.navigate(['/Admin/Departmentmasterdash']);
    this.active = 42;
    this.data11.emit('Department Master')
  }

  ot_master() {
    debugger
    localStorage.setItem('Pagename', 'OT Master')
    this.router.navigate(['/Admin/Otratesdash']);
    this.active = 38;
    this.data11.emit('OT Master')
  }

  Deniminis() {
    debugger
    localStorage.setItem('Pagename', 'De-Minimis Master')
    this.router.navigate(['/Admin/Deniminisdash']);
    this.active = 43;
    this.data11.emit('De-Minimis Master')
  }
  rolemaster() {
    this.active = 'role'
    localStorage.setItem("Pagename", "Role Master");
    this.router.navigate(['/Admin/RoleMasterDash'])
    this.data11.emit('Role Master')

  }
  level() {
    this.active = 'level'
    localStorage.setItem("Pagename", "Job Level Type");
    this.router.navigate(['/HR/LevelTypeDash'])
    this.data11.emit('Job Level Type')

  }
  public GrievanceMaster() {
    debugger
    this.active = 49;
    localStorage.setItem('Pagename', 'Grievance Master')
    this.router.navigate(['/HR/Grivelnecemasterdash']);
    this.data11.emit('Grievance Master')
  }

  public Configuration() {
    debugger
    this.active = 'Configuration';
  }

  public LeaveConfiguration() {
    debugger
    this.active = 'LeaveConfiguration';
    localStorage.setItem('Pagename', 'Leave Configuration');
    this.router.navigate(['/HR/LeaveConfigurationdash']);
    this.data11.emit('Leave Configuration')
  }
  public Loanconfiguration() {
    debugger
    this.active = 'Loanconfiguration';
    localStorage.setItem('Pagename', 'Loan Config')
    this.router.navigate(['/HR/LoanConfigurationDash']);
    this.data11.emit('Loan Config')
  }
  missingstaf: any;
  public missingstaff() {
    debugger
    this.active = this.missingstaf;
    this.router.navigate(['/HR/StaffBulkUploadExceptions']);
  }
  public Loadattedance() {
    debugger
    this.active = 'Loadattedance';
    localStorage.setItem('Pagename', 'Upload Attendance');
    this.router.navigate(['/HR/Loadattedance']);
    this.data11.emit('Upload Attendance')
  }

  public UploadStaffLeaves() {
    debugger
    this.active = 'uploadleaves';
    this.router.navigate(['/HR/LeaveUpload']);
    localStorage.setItem('Pagename', 'Upload Leaves')
    this.data11.emit('Upload Leaves')
  }
  public Staff123() {
    debugger

    this.active = 3;
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/HR/Staffdashboard']);
    this.data11.emit('Staff')

  }

  public LicenceDetails() {
    debugger
    this.active = 90;
    localStorage.setItem('Pagename', 'LicenceDetails')
    this.router.navigate(['/HR/LicenceDetails']);
    this.data11.emit('LicenceDetails')

  }

  public InactivestaffDetails() {
    debugger
    this.active = 80;
    localStorage.setItem('Pagename', 'InactivestaffDetails')
    this.router.navigate(['/HR/InactivestaffDetails']);
    this.data11.emit('InactivestaffDetails')

  }
  public Requests23() {
    debugger
    this.active = 890;
    this.router.navigate(['/HR/GenerateCsvfiles']);
  }

  public PreiminaryReport() {
    debugger
    this.active = 'PreiminaryReport';
    localStorage.setItem('Pagename', 'PreiminaryReport')
    this.router.navigate(['/HR/GeneratePreliminaryReport']);
    this.data11.emit('PreiminaryReport')
  }

  public PayrollReport() {
    debugger
    this.active = 'PayrollReport';
    localStorage.setItem('Pagename', 'Payroll')
    this.router.navigate(['/HR/GenerateCsvfiles']);
    this.data11.emit('Payroll')
  }
  public Holidays() {
    this.active = 4;
    localStorage.setItem('Pagename', 'Holidays')
    this.router.navigate(['/Admin/HolidayDashboard']);
    this.data11.emit('Holidays')

  }

  public getvalues(val: any) {
    debugger
    this.mini = val;
  }









}
function output() {
  throw new Error('Function not implemented.');
}

