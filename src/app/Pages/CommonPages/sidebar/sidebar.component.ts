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
  mini = true;
  active: any;
  announcement: any
  AttendanceEnable: any
  companyid: any;
  roledid: any
  ngOnInit(): void {
    (document.getElementById("main") as HTMLInputElement).style.marginLeft = "250px";
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

  toggleSidebar() {
    debugger
    if (this.mini) {
      console.log("opening sidebar");
      (document.getElementById("main") as HTMLInputElement).style.marginLeft = "250px";
      (document.getElementById("mySidebar") as HTMLInputElement).style.width = "250px";
      this.mini = false;
    } else {
      console.log("closing sidebar");
      (document.getElementById("mySidebar") as HTMLInputElement).style.width = "85px";
      // (document.getElementById("mini") as HTMLInputElement).style.width= "85px";
      (document.getElementById("mySidebar") as HTMLInputElement).style.backgroundColor = 'none';
      // (document.getElementById("main") as HTMLInputElement).style.marginLeft = "85px";
      this.mini = true;
      this.active = 0;

    }
  }
  public Home() {
    this.active = 1;
    if (this.login == '6') {
      this.router.navigate(['/Employee/Employeedashboard']);
      localStorage.setItem('Pagename', 'Home')
    }
    else if (this.login == '2') {
      this.router.navigate(['/Manager/ManagerDashboard']);
      localStorage.setItem('Pagename', 'Home')
    }
    else if (this.login == '1') {
      this.router.navigate(['/Admin/Admindashbaord']);
      localStorage.setItem('Pagename', 'Home')

    }
    else {
      this.router.navigate(['/HR/HRDashboard']);
      localStorage.setItem('Pagename', 'Home')

    }



  }
  settings() {
    debugger
    this.active = 2;
    localStorage.setItem('Pagename', 'Announcements')

    this.router.navigate(['/Admin/AnnouncementDashboard']);

  }

  LwopValidation() {
    debugger
    this.active = 108;
    localStorage.setItem('Pagename', 'Announcements')

    this.router.navigate(['/Admin/AnnouncementDashboard']);

  }


  BonusValidation() {
    debugger
    this.active = 988;
    localStorage.setItem('Pagename', 'Announcements')
  }

  AllowanceValidation() {
    debugger
    this.active = 999;
    localStorage.setItem('Pagename', 'Announcements')
  }

  


  public PayRoll(){
    debugger
    this.active='PayRoll'
    localStorage.setItem('PayRoll', 'PayRoll')

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
      this.router.navigate(['/Employee/AttendenceDetails']);

    }

  }
  public Leaves() {
    debugger
    this.active = 7;
    if (this.login == '6') {
      this.router.navigate(['/Employee/LeaveListDashboard']);
      localStorage.setItem('Pagename', 'Leaves')


    }
    else if (this.login == '9') {
      this.router.navigate(['/HR/Hrleavereuest']);
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
  public Timesheet() {
    debugger
    this.active = 'timesheet';
    if (this.login == '6') {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Employee/TimeSheet']);
    }
    else if (this.login == '9') {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Employee/TimeSheet']);
    }
    else if (this.login == '8') {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Employee/TimeSheet']);
    }
    else {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Manager/MyTeamTimesheet']);

    }

  }
  locator: any
  public LocatorRequest() {
    debugger
    this.active = 15;
    if (this.login == '6') {
      localStorage.setItem('Pagename', 'Locator Request')
      this.router.navigate(['/Employee/LocatorDashboard']);

    }
    else if (this.login == '9') {
      localStorage.setItem('Pagename', 'Locator Request')
      this.router.navigate(['/Employee/LocatorDashboard']);

    }
    else if (this.login == '8') {
      localStorage.setItem('Pagename', 'Locator Request')
      this.router.navigate(['/Employee/LocatorDashboard']);

    }
    else {
      localStorage.setItem('Pagename', 'Locator Request')
      this.router.navigate(['/Manager/ManagerLocatorDetails']);

    }
  }
  public LoanRequest() {
    debugger
    this.active = 17;
    localStorage.setItem('Pagename', 'Loans Request')
    this.router.navigate(['/Employee/Employeeloandash']);

  }


  public Request(){
    this.active=14
  }

  public Reports(){
    this.active=11
  }

  public Doccuments(){
    this.active=12
  }

  public Help(){
    this.active=13
    localStorage.setItem('Pagename', 'Help')
    this.router.navigate(['/Admin/Help']);
  }

  public EmployeeResignation() {
    this.active = 'Resignation';
    localStorage.setItem('Pagename', 'Employee Resignation')
    this.router.navigate(['/Employee/EmployeeResignation']);

  }

  public ExceptionBulkLogs() {
    this.active = 'ExceptionBulkLogs';
    localStorage.setItem('Pagename', 'Exception Bulk Logs')
    this.router.navigate(['/HR/StaffBulkUploadExceptions']);

  }

  public RunAllowanceValidation() {
    this.active = 'RunAllowanceValidation';
    localStorage.setItem('Pagename', 'Exception Bulk Logs')
    this.router.navigate(['/PayrollProcessor/ValidatedAllowanceDetails']);

  }

  


  public TimesheetReports() {
    this.active = 26;
    localStorage.setItem('Pagename', 'Timesheet Report')
    this.router.navigate(['/Employee/TimesheetReports']);


  }

  public Leavereport() {
    this.active = 25
    localStorage.setItem('Pagename', 'Leave Report')
    this.router.navigate(['/Employee/LeaveReports']);
  }


  public AttendanceCorrectionReport() {
    this.active = 'AttendanceCorrectionReport';

    if (this.login == 6) {
      localStorage.setItem('Pagename', 'Attendance Correction Report')
      this.router.navigate(['/Employee/AttendanceCorrectionReport']);
    } else if (this.login == 9) {
      localStorage.setItem('Pagename', 'Attendance Correction Report')
      this.router.navigate(['/Employee/AttendanceCorrectionReport']);
    }
    else {
      localStorage.setItem('Pagename', 'Attendance Correction Report')
      this.router.navigate(['/Manager/TeamAttendanceCorrectionReports']);
    }

  }

  public EmployeeOvertimeReport() {
    this.active = 101
    localStorage.setItem('Pagename', 'EmployeeOvertimeReport')
    this.router.navigate(['/Employee/EmployeeOvertimeReport']);
  }


  public EmployeeAttendanceReport() {
    this.active = 100
    localStorage.setItem('Pagename', 'EmployeeAttendanceReport')
    this.router.navigate(['/Employee/EmployeeAttendanceReport']);
  }


  public Attendancereport() {
    this.active = 24;

    if (this.login == 6) {
      localStorage.setItem('Pagename', 'Attendance Report')
      this.router.navigate(['/Employee/AttendanceReports']);
    } else {
      localStorage.setItem('Pagename', 'Attendance Report')
      this.router.navigate(['/Manager/TeamAttendanceReports']);
    }

  }

  public MyOverTimeDetails() {
    debugger
    if (this.roleid == 2) {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Manager/MyTeamOverTimeDetails']);
    }
    else if (this.login == '9') {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Manager/MyTeamOverTimeDetails']);
    }
    else if (this.login == '11') {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Manager/MyTeamOverTimeDetails']);
    }
    else {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Employee/MyOverTimeDetails']);
    }


  }

  public MyTeamWeeklyShift() {
    debugger
    this.active = 'myTeamWeeklyShift';
    if (this.login == 2) {
      localStorage.setItem('Pagename', 'Shift Details');
      this.router.navigate(['/Employee/MyTeamWeeklyShift']);
    } else {
      localStorage.setItem('Pagename', 'Shift Details');
      this.router.navigate(['/Employee/WeeklyShift']);

    }


  }

  public AttendanceCorrection() {
    debugger
    this.active = 'attendancecorrection';
    this.router.navigate(['/Employee/AttendanceCorrection']);
    localStorage.setItem('Pagename', 'Attendance Correction')
  }

  public getAttendacmenu() {
    this.active = 8;

  }

  public UploadStaffLeaves(){
    this.active='UploadStaffLeaves'
    localStorage.setItem("clickname", "Upload Staff Leaves")
    this.router.navigate(['/PayrollProcessor/StaffLeavesUpload'])
  }

  public UploadSystemGeneratedLWOP(){
    this.active='UploadSystemGeneratedLWOP'
    localStorage.setItem("clickname", "Upload Staff Leaves")
    this.router.navigate(['/PayrollProcessor/UploadGeneratedLwop'])
  }

  public UploadAllowance(){
    this.active='uploadallowance'
    localStorage.setItem("clickname", "uploadallowance")
    this.router.navigate(['/PayrollProcessor/UploadAllowance'])
  }

  public UploadPayperiodAllowance(){
    this.active='UploadPayperiodAllowance'
    localStorage.setItem("clickname", "Upload Pay Period Allowance")
    this.router.navigate(['/PayrollProcessor/UploadPayPeriodAllowance'])
  }


  public UploadBonusValues(){
    this.active='UploadBonusValues'
    localStorage.setItem("clickname", "Upload Staff Leaves")
    this.router.navigate(['/PayrollProcessor/UploadBonusValues'])
  }



  public FMAValidation(){
    this.active='fma'
    localStorage.setItem("clickname", "Upload Pay Period Allowance")
 
  }


  public UploadFMAAllowance(){
    this.active='UploadFMAAllowance'
       localStorage.setItem("clickname", "Component  Master")
       this.router.navigate(['/PayrollProcessor/FMAValidation'])

  }

  public UploadBasicPayValues(){
    this.active='UploadBasicPayValues'
       localStorage.setItem("clickname", "Component  Master")
       this.router.navigate(['/PayrollProcessor/UploadBasicPayValues'])

  }
  

  public RunFMAValidation(){
    this.active='RunFMAValidation'
       localStorage.setItem("clickname", "Component  Master")
       this.router.navigate(['/PayrollProcessor/ValidatedFMADetails'])

  }
  
  public BasicPayValidation(){
    this.active=767
       localStorage.setItem("clickname", "Component  Master")

  }
  
  
  
  

  public ComponentMaster(){
    this.active='ComponentMaster'
       localStorage.setItem("clickname", "Component  Master")
       this.router.navigate(['/PayrollProcessor/ComponentMaster'])

  }

  public ComponentMapping(){
    debugger
    this.active = 'PayrollLoanReport1';
    localStorage.setItem('Pagename', 'Component Mapping');
    this.router.navigate(['/PayrollProcessor/ComponentMappingDashboard']);

  }
  public Componentbulkupload(){
    debugger
    this.active = 'bulk';
    localStorage.setItem('clickname', 'Component bulk upload')
    this.router.navigate(['/PayrollProcessor/PayrollComponentBulkUpload']);

  }  public AttendanceUnits(){
    debugger
    this.active = 9999;
    localStorage.setItem('Pagename', 'Over Time');
    this.router.navigate(['/PayrollProcessor/MyTeamOverTimeDetails']);
  }
  public InitialPayroll(){
    this.active='InitialPayrollDetails'
    localStorage.setItem("clickname", "Priliminary Report")
    this.router.navigate(['/PayrollProcessor/ExecutedInitialPayrollRuns'])
  }
  
  public InitialPayrollDetails(){
  this.active='InitialPayrollDetails'
  localStorage.setItem("clickname", "InitialPayroll")
    this.router.navigate(['/PayrollProcessor/InitialPayrollDash'])
  }

  public Staff123() {
    debugger
    this.active = 312;
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/Employee/StaffDashboard']);
  }

  public PayperiodSetting() {
    debugger
    this.active = 3;
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/PayrollProcessor/PayperiodSettingsDash']);
  }

  public AttendanceUpload() {
    debugger
    this.active = 3;
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/PayrollProcessor/MyTeamAttendence']);
  }

  public RunLwopValidation() {
    debugger
    this.active = 889;
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/PayrollProcessor/LwopValidationDetails']);
  }

  
  

  public ValidatedBonusDetails() {
    debugger
    this.active = 2345;
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/PayrollProcessor/BonusValidationDetails']);
  }

  public ValidatedBasicPayValues() {
    debugger
    this.active = 2345;
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/PayrollProcessor/ValidatedBasicPayValues']);
  }

  
}