import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {



  constructor(public DigiPVTService: DigiPVTService, public router: Router) { }
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
  validation: any
  @Output() data11 = new EventEmitter();
  @Input() item: any;
  ngOnInit(): void {
    debugger;
    this.mini=false;
  //  (document.getElementById("main") as HTMLInputElement).style.marginLeft = "250px";
    this.login = sessionStorage.getItem('roledid');
    this.temp1 = sessionStorage.getItem('temp');
    this.companyid = sessionStorage.getItem('companyid');
    this.AttendanceEnable = sessionStorage.getItem('AttendanceEnable');
    //this.active = 0;

    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role')
    this.roleid = sessionStorage.getItem('roledid')
    this.roledid = sessionStorage.getItem('roledid')


    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data;

      console.log("validation", this.validation);
    });
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
  settings() {
    debugger
    this.active = 2;
    localStorage.setItem('Pagename', 'Announcements')
    this.router.navigate(['/Admin/AnnouncementDashboard']);
    this.data11.emit('Announcements')
  }


  public UploadHolidays() {
    this.active = '12321'
    localStorage.setItem("Pagename", "Holidays")
    this.router.navigate(['/PayrollProcessor/Holidays'])
    this.data11.emit('Holidays')

    // Swal.fire({
    //   title: 'Access Basic Pay Validation',
    //   html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    // `,
    //   confirmButtonText: 'Submit',
    //   focusConfirm: false,
    //   preConfirm: () => {
    //     debugger
    //     const login: any = document.getElementById('login') as HTMLElement

    //     if (login.value == 4567) {
    //       this.router.navigate(['/PayrollProcessor/Holidays'])
    //     }
    //     else {
    //       Swal.showValidationMessage(`Please enter correct pin`)
    //     }
    //   }
    // }) 

  }

  public UploadHolidaysEncashments() {
    this.active = '12321'
    localStorage.setItem("pagename", "UploadHolidaysEncashments")
    this.router.navigate(['/PayrollProcessor/UploadGeneratedEncashments'])
    this.data11.emit('UploadHolidaysEncashments')
  }

  public ValidatedHolidayEncashment() {
    this.active = '12321'
    localStorage.setItem("pagename", "ValidatedHolidayEncashment")
    //this.router.navigate(['/PayrollProcessor/ValidatedHolidayEnCashments'])
    this.data11.emit('ValidatedHolidayEncashment')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated Holiday Encashment');
      console.log("validation", this.validation);
      this.data11.emit('ValidatedHolidayEncashment')
    });

    Swal.fire({
      title: 'Access Basic Pay Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          
          this.router.navigate(['/PayrollProcessor/ValidatedHolidayEnCashments'])
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }


  public ValidatedPayrollSummary() {

  debugger

    this.active = 'ValidatedPayrollSummary'
    localStorage.setItem("pagename", "ValidatedPayrollSummary")
    this.data11.emit('ValidatedPayrollSummary')
    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated Payroll Summary');
      console.log("validation", this.validation);
    });
    //this.router.navigate(['/PayrollProcessor/ValidatedHolidayEnCashments'])
    Swal.fire({
      title: 'Access Payroll Summary Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit', 
     showLoaderOnConfirm: true,
      allowEnterKey:true,
     
      //keydownListenerCapture:true,
      
      
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password && this.companyid!=10013 && this.companyid!='1008'  && this.companyid!='1007') {
          this.router.navigate(['/PayrollProcessor/ValidatedPayrollSummaryReport'])
        }
        else   if (login.value == this.validation[0].password && (this.companyid==10013 || this.companyid==1008 || this.companyid==1007)) {
          this.router.navigate(['/PayrollProcessor/ValidatedPayrollSummaryReportForUNC'])
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }

 


  public NHANDRValidation() {
    this.active = 'NHANDRValidation'
    localStorage.setItem("clickname", "Holidays")
    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated NH and R');
      console.log("validation", this.validation);
    });
    //this.router.navigate(['/PayrollProcessor/ValidatedHolidayEnCashments'])
    Swal.fire({
      title: 'Access NH and R Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password && this.companyid!=10013 && this.companyid!='1008'  && this.companyid!='1007') {
          this.router.navigate(['/PayrollProcessor/ValidatedNewHiresDetails'])
        }
        else   if (login.value == this.validation[0].password && (this.companyid==10013 || this.companyid==1008 || this.companyid==1007)) {
          this.router.navigate(['/PayrollProcessor/ValidatedNewHiresDetails'])
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }


  // NHANDRValidation() {
  //   debugger
  //   this.active = 'NHANDRValidation';
  //   localStorage.setItem('Pagename', 'Announcements')
  //   this.router.navigate(['/PayrollProcessor/ValidatedNewHiresDetails']);
  // }


  public ValidatedMaster(){
    debugger
    this.active = 'ValidatedMaster';
    localStorage.setItem('Pagename', 'ValidatedMaster')
    this.router.navigate(['/PayrollAdmin/ValidationMasterDashboard']);
this.data11.emit('ValidatedMaster')
  }



  public Holidays() {
    debugger
    this.active = 'holi';
    localStorage.setItem('Pagename', 'Holidays')
    this.data11.emit('Holidays')
  }

  LwopValidation() {
    debugger
    this.active = 108;
    
 document.getElementById('SummaryValidation1')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('TaxValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BasicPayValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BonusValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('ComponentMapping')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LoanProceedValidation')?.setAttribute("class", "sub-collapse collapse hide");

    localStorage.setItem('Pagename', 'LwopValidation')
    this.router.navigate(['/Admin/AnnouncementDashboard']);
    this.data11.emit('LwopValidation')
  }



  

  BonusValidation() {
    debugger
    this.active = 988;
    
 document.getElementById('SummaryValidation1')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('TaxValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BasicPayValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LwopValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('ComponentMapping')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LoanProceedValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BlankStats')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('NHANDRValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('HeadCount')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('OvertimeValidation')?.setAttribute("class", "sub-collapse collapse hide");
    localStorage.setItem('Pagename', 'BonusValidation')
    this.data11.emit('BonusValidation')
  }


  PayrollSummaryValidation() {
    debugger
    this.active = 'PayrollSummaryValidation';
    document.getElementById('TaxValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BasicPayValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LwopValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BonusValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('ComponentMapping')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LoanProceedValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BlankStats')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('NHANDRValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('HeadCount')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('OvertimeValidation')?.setAttribute("class", "sub-collapse collapse hide");
    // document.getElementById('staff')?.setAttribute("class", "sub-collapse collapse hide");
    localStorage.setItem('Pagename', 'PayrollSummaryValidation')
    this.data11.emit('PayrollSummaryValidation')
  }

  PhilHealthValidation() {
    debugger
    this.active = 'PhilHealthValidation';
    localStorage.setItem('Pagename', 'PhilHealthValidation')
    this.data11.emit('PhilHealthValidation')
  }

  AllowanceValidation() {
    debugger
    this.active = 999;
    localStorage.setItem('Pagename', 'AllowanceValidation')
    this.data11.emit('AllowanceValidation')
  }

  OvertimeValidation() {
    debugger
    this.active = 'ot';
    localStorage.setItem('Pagename', 'OvertimeValidation')
    this.data11.emit('OvertimeValidation')
  }

  public uploadRetrovalues() {
    debugger

    localStorage.setItem('Pagename', 'uploadRetrovalues');
    this.router.navigate(['/PayrollProcessor/UploadRetroValuesOT']);
    this.data11.emit('uploadRetrovalues')

    // Swal.fire({
    //   title: 'Access Basic Pay Validation',
    //   html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    // `,
    //   confirmButtonText: 'Submit',
    //   focusConfirm: false,
    //   preConfirm: () => {
    //     debugger
    //     const login: any = document.getElementById('login') as HTMLElement

    //     if (login.value == 4567) {
    //       this.router.navigate(['/PayrollProcessor/UploadRetroValuesOT']);
    //     }
    //     else {
    //       Swal.showValidationMessage(`Please enter correct pin`)
    //     }
    //   }
    // }) 

  }


  public PayRoll() {
    debugger
    this.active = 'PayRoll'
    localStorage.setItem('PayRoll', 'PayRoll')
    this.data11.emit('PayRoll')

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
      this.data11.emit('TimeSheet')
    }
  
    else if (this.login == '9') {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Employee/TimeSheet']);
      this.data11.emit('TimeSheet')
    }
    else if (this.login == '8') {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Employee/TimeSheet']);
      this.data11.emit('TimeSheet')
    }
    else {
      localStorage.setItem('Pagename', 'Timesheet Request')
      this.router.navigate(['/Manager/MyTeamTimesheet']);
      this.data11.emit('TimeSheet')

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
    localStorage.setItem('Pagename', 'Request')
    this.data11.emit('Request')
  }

  public Reports() {
    this.active = 11
    localStorage.setItem('Pagename', 'Reports')
    this.data11.emit('Reports')
  }

  public Doccuments() {
    this.active = 12
    localStorage.setItem('Pagename', 'Doccuments')
    this.data11.emit('Doccuments')
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

  public RunAllowanceValidation() {
    this.active = 'RunAllowanceValidation';
    localStorage.setItem('Pagename', 'Exception Bulk Logs')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated Allowance Details');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Allowance Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/ValidatedAllowanceDetails']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })


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
      this.data11.emit('OverTime Report')
    }
    else if (this.login == '9') {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Manager/MyTeamOverTimeDetails']);
      this.data11.emit('OverTime Report')
    }
    else if (this.login == '11') {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Manager/MyTeamOverTimeDetails']);
      this.data11.emit('OverTime Report')
    }
    else {
      this.active = 10;
      localStorage.setItem('Pagename', 'OverTime Details')
      this.router.navigate(['/Employee/MyOverTimeDetails']);
      this.data11.emit('OverTime Report')
    }


  }

  public MyTeamWeeklyShift() {
    debugger
    this.active = 'myTeamWeeklyShift';
    if (this.login == 2) {
      localStorage.setItem('Pagename', 'Shift Details');
      this.router.navigate(['/Employee/MyTeamWeeklyShift']);
      this.data11.emit('Shift Details')
    } else {
      localStorage.setItem('Pagename', 'Shift Details');
      this.router.navigate(['/Employee/WeeklyShift']);
      this.data11.emit('Shift Details')

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
    localStorage.setItem('Pagename', 'Get Attendacmenu')
    this.data11.emit('Get Attendacmenu')

  }

  public UploadStaffLeaves() {
    this.active = 'UploadStaffLeaves'

    this.router.navigate(['/PayrollProcessor/StaffLeavesUpload'])
    localStorage.setItem('Pagename', 'UploadStaffLeaves')
    this.data11.emit('UploadStaffLeaves')

  }




  public UploadSystemGeneratedLWOP() {
    this.active='UploadSystemGeneratedLWOP'

    this.router.navigate(['/PayrollProcessor/UploadGeneratedLwop'])
    localStorage.setItem('Pagename', 'UploadSystemGeneratedLWOP')
    this.data11.emit('UploadSystemGeneratedLWOP')


  }

  public UploadAllowance() {
    this.router.navigate(['/PayrollProcessor/UploadAllowance'])
  }

  public UploadPayperiodAllowance() {
          this.router.navigate(['/PayrollProcessor/UploadPayPeriodAllowance'])
       

  }


  public UploadBonusValues() {
    this.active = 'UploadBonusValues'
    localStorage.setItem("clickname", "UploadBonusValues")
    this.router.navigate(['/PayrollProcessor/UploadBonusValues'])
    this.data11.emit('UploadBonusValues')
    // Swal.fire({
    //   title: 'Access Basic Pay Validation',
    //   html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    // `,
    //   confirmButtonText: 'Submit',
    //   focusConfirm: false,
    //   preConfirm: () => {
    //     debugger
    //     const login: any = document.getElementById('login') as HTMLElement

    //     if (login.value == 4567) {
    //       this.router.navigate(['/PayrollProcessor/UploadBonusValues'])
    //     }
    //     else {
    //       Swal.showValidationMessage(`Please enter correct pin`)
    //     }
    //   }
    // }) 

  }



  public FMAValidation() {
    this.active = 'fma'
    localStorage.setItem("pagename", "FMAValidation")
    this.data11.emit('FMAValidation')

  }


  public LoanProceeds() {
    this.active = 8989
    document.getElementById('SummaryValidation1')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('TaxValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BasicPayValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LwopValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BonusValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('ComponentMapping')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BlankStats')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('NHANDRValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('HeadCount')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('OvertimeValidation')?.setAttribute("class", "sub-collapse collapse hide");

    
    localStorage.setItem("pagename", "LoanProceeds")
    this.data11.emit('LoanProceeds')

  }


  public UploadFMAAllowance() {
  this.router.navigate(['/PayrollProcessor/FMAValidation'])
  }

  public ValidatedRunTaxValidation() {
    this.active = 'ValidatedRunTaxValidation'
    localStorage.setItem("pagename", "Validated Run TaxValidation")
    this.data11.emit('Validated Run TaxValidation')
    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated Run TaxValidation');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Tax Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
      `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/ValidatedTaxValues'])
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })


  }


  public UploadBasicPayValues() {
    debugger
    this.active = 'UploadBasicPayValues'
    localStorage.setItem("clickname", "Component  Master")
    this.router.navigate(['/PayrollProcessor/UploadBasicPayValues'])


    // this.DigiPVTService.GetValidationPassword().subscribe(data => {
    // debugger
    // this.validation = data.filter(x=>x.menuName=='Upload Basic Pay Values');
    // console.log("validation", this.validation);});


    //  Swal.fire({
    //   title: 'Access Basic Pay Validation',
    //   html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    // `,
    //   confirmButtonText: 'Submit',
    //   focusConfirm: false,
    //   preConfirm: () => {
    //     debugger
    //     const login: any = document.getElementById('login') as HTMLElement

    //     if (login.value == this.validation[0].password) {
    //       this.router.navigate(['/PayrollProcessor/UploadBasicPayValues'])
    //     }
    //     else {
    //       Swal.showValidationMessage(`Please enter correct pin`)
    //     }
    //   }
    // }) 
  }

  public UploadCOLAValues() {
    this.active = 'UploadBasicPayValues'
    this.router.navigate(['/PayrollProcessor/UploadColaValues'])
  }

  public TaxValidation() {
    this.active = 'TaxValidation'
    document.getElementById('SummaryValidation1')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BasicPayValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LwopValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BonusValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('ComponentMapping')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LoanProceedValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BlankStats')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('NHANDRValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('HeadCount')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('OvertimeValidation')?.setAttribute("class", "sub-collapse collapse hide");



  }

  
  public TandLValidation() {
    this.active = 'TandLValidation'
  }

  
  public UploadSubjectLoadValidation() {
    this.active = 'UploadBasicPayValues'
    this.router.navigate(['/PayrollProcessor/UploadRegularCollegeSemValidation'])
  }

  
    
  public UploadsummerSubjectLoadValidation() {
    this.active = 'UploadBasicPayValues'
    this.router.navigate(['/PayrollProcessor/UploadSummerCollegeSemValidation'])
  }

    
  public UploadPayrollYTD() {
    this.active = 'UploadPayrollYTD'
    this.router.navigate(['/PayrollProcessor/PayrollYTDUpload'])
  }







  public ValidatedLoanProceedsDetails() {
    this.active = 'ValidatedLoanProceedsDetails'
    localStorage.setItem("clickname", "Component  Master")

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated Loan Proceeds');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Loan Proceeds Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
      `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/ValidatedLoanProceeds'])
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })


  }

  public RunFMAValidation() {
    this.active = 'RunFMAValidation'
    localStorage.setItem("clickname", "Component  Master")

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated FMA Allowances');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access FMA Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
      `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/ValidatedFMADetails'])
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })


  }
  ShowBasicPayValidation: any
  public BasicPayValidation() {
    this.active = 'BasicPayValidation'
    document.getElementById('SummaryValidation1')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('TaxValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LwopValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BonusValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('ComponentMapping')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LoanProceedValidation')?.setAttribute("class", "sub-collapse collapse hide");
    localStorage.setItem("clickname", "Component  Master")
  }


  public CLothingValidation() {
    this.active = 7675
    localStorage.setItem("clickname", "Component  Master")
  }

  public COLAValidation() {
    this.active = 768
    localStorage.setItem("clickname", "Component  Master")

  }

  
  public RegularSubjectLoadsValidation() {
    this.active = 7690
    localStorage.setItem("clickname", "Component  Master")

  }




  public ComponentMaster() {
    this.active = 'ComponentMaster'
    localStorage.setItem("clickname", "Component  Master")
    this.router.navigate(['/PayrollProcessor/ComponentMaster'])

  }

  public UploadClothingallowances() {
    this.active = 'ComponentMaster'
    localStorage.setItem("clickname", "Component  Master")
    this.router.navigate(['/PayrollProcessor/UploadClothingAllowances'])

  }

  public ComponentMapping() {
    debugger
    this.active = 'PayrollLoanReport1';
    document.getElementById('TaxValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BasicPayValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LwopValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BonusValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LoanProceedValidation')?.setAttribute("class", "sub-collapse collapse hide");
    localStorage.setItem('Pagename', 'Component Mapping');
    this.router.navigate(['/PayrollProcessor/ComponentMappingDashboard']);

  }
  public Componentbulkupload() {
    debugger
    this.active = 'bulk';
    localStorage.setItem('clickname', 'Component bulk upload')
    this.router.navigate(['/PayrollProcessor/PayrollComponentBulkUpload']);

  } public AttendanceUnits() {
    debugger
    // this.active = 9999;
    localStorage.setItem('Pagename', 'Over Time');
    this.router.navigate(['/PayrollProcessor/MyTeamOverTimeDetails']);

    // Swal.fire({
    //   title: 'Access Basic Pay Validation',
    //   html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    // `,
    //   confirmButtonText: 'Submit',
    //   focusConfirm: false,
    //   preConfirm: () => {
    //     debugger
    //     const login: any = document.getElementById('login') as HTMLElement

    //     if (login.value == 4567) {
    //       this.router.navigate(['/PayrollProcessor/MyTeamOverTimeDetails']);
    //     }
    //     else {
    //       Swal.showValidationMessage(`Please enter correct pin`)
    //     }
    //   }
    // }) 

  }
  public InitialPayroll() {
    this.active = 'InitialPayrollDetails'
    localStorage.setItem("clickname", "Priliminary Report")
    this.router.navigate(['/PayrollProcessor/ExecutedInitialPayrollRuns'])
  }

  public InitialPayrollDetails() {
    this.active = 'InitialPayrollDetails'
    localStorage.setItem("clickname", "InitialPayroll")
    this.router.navigate(['/PayrollProcessor/InitialPayrollDash'])
  }

  public Staff123() {
    debugger
    this.active = 312;
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/Employee/StaffDashboard']);
  }

  public Master() {
    debugger
    this.active = 'Master';
    
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
    this.active = 'RunLwopValidation';
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='LWOP Validated Details');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Lwop Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/LwopValidationDetails']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })
  }



  // public ValidatedRetroBasicPayValues() {
  //   debugger
  //   this.DigiPVTService.GetValidationPassword().subscribe(data => {
  //     debugger
  //     this.validation = data.filter(x=>x.menuName=='Validated Retro Basic Pay');
  //     console.log("validation", this.validation);
  //   });
    
  //   this.active = 2345;
  //   localStorage.setItem('Pagename', 'Staff')
  //   Swal.fire({
  //     title: 'Access Retro Pay Validation',
  //     html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
  //   `,
  //     confirmButtonText: 'Submit',
  //     focusConfirm: false,
  //     preConfirm: () => {
  //       debugger
  //       const login: any = document.getElementById('login') as HTMLElement
 
  //       if (login.value == this.validation[0].password) {
  //         this.router.navigate(['/PayrollProcessor/ValidatedRetroBasicPayAdjustments']);
  //       }
  //       else {
  //         Swal.showValidationMessage(`Please enter correct pin`)
  //       }
  //     }
  //   }) 

  // }

  

  public ValidatedBonusDetails() {
    debugger
    this.active = 2345;
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated Bonus Details');
      console.log("validation", this.validation);
    });

    Swal.fire({
      title: 'Access Bonus Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement
 
        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/BonusValidationDetails']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })


  }

  public ValidatedBankstats() {
    debugger
    this.active = 2345;
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated Blank stats');
      console.log("validation", this.validation);
    });

    Swal.fire({
      title: 'Access Blank Stats Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement
 
        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/ValidatedBlanKStats']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })


  }

 


  public ValidatedSubjectLoadsValidation() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/ValidatedSubjectLoadDetails']);


  }

  public ValidatedNewHandR() {
    debugger
    this.active = 'ValidatedNewHandR';
    this.router.navigate(['/PayrollProcessor/ValidatedNewHiresDetails']);


  }

  
  public UploadMasterFile() {
    debugger
    this.active = 'UploadMasterFile';
    this.router.navigate(['/PayrollProcessor/UploadMasterList']);


  }


  public UploadLOA() {
    debugger
    this.active = 'UploadLOA';
    this.router.navigate(['/PayrollProcessor/UploadLOAandSuspendedStaff']);


  }

  
  
  public UploadEmployeeBatch() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/EmployeeBatchMaster']);


  }


    
  public TimeandAttendanceEligibilityMaster() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/TimeandAttendanceEligibilityMaster']);


  }
  
    
  public UploadAttendanceCounts() {
    debugger
    this.active = 'UploadAttendanceCounts';
    this.router.navigate(['/PayrollProcessor/UploadAttendanceDaysCount']);


  }



  

  public ValidatedSummerSemSubjectLoadsValidation() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/ValidatedSummerSemSubjectLoads']);


  }

  


  
  
  // public ValidatedHeadCount() {
  //   debugger
  //   this.active = 'ValidatedHeadCount';
  //   this.router.navigate(['/PayrollProcessor/ValidatedHeadCountDetails']);


  // }

  public ValidatedHeadCount() {
    this.active = 'ValidatedHeadCount'
    localStorage.setItem("clickname", "Holidays")
    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated Head Count');
      console.log("validation", this.validation);
    });
    //this.router.navigate(['/PayrollProcessor/ValidatedHolidayEnCashments'])
    Swal.fire({
      title: 'Access Head Count Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password ) {
          this.router.navigate(['/PayrollProcessor/ValidatedHeadCountDetails']);
        }
       
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }

    
  public UploadHeadCount() {
    debugger
    this.active = 'UploadHeadCount';
    this.router.navigate(['/PayrollProcessor/UploadHeadCountValues']);


  }



  public BlankStatsValidation() {
    debugger
    this.active = 'BlankStatsValidation';
   


  }

  
  public HeadCountValidation() {
    debugger
    this.active = 472;
   


  }


  public ValidatedColaAllowances() {
    debugger
    this.active = 2345;
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated COLA Details');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access COLA Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/ValidatedColaValues']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }



  public ValidatedClothingAllowance() {
    debugger
    this.active = 2345;
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated Clothing Details');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Clothing Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/ValidatedClothingAllowances']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }



  public RetroValidatedClothingAllowance() {
    debugger
    this.active = 2345;
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Retro Validated Clothing');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Clothing Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/RetroValidatedClothingAllowances']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }


  public ValidatedBasicPayValues() {
    debugger
   
    this.active = 'ValidatedBasicPayValues';
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x => x.menuName == 'Validated Basic Pay Details');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Basic Pay Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/ValidatedBasicPayValues']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }

  public ValidatedPhilHealthDetails() {
    debugger
   
    this.active = 2345;
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x => x.menuName == 'Validated Basic Pay Details');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Philhealth  Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == 2345) {
          this.router.navigate(['/PayrollProcessor/ValidatedPhilhealthDetails']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }


  public StatutoryDeductions() {
    debugger
   
    this.active = 2345;
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x => x.menuName == 'Validated Basic Pay Details');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Statutory  Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == 2345) {
          this.router.navigate(['/PayrollProcessor/ValidatedStatutoryDeductions']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }


  public ValidatedTandLDetails() {
    debugger
   
    this.active = 'ValidatedTandLDetails';
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x => x.menuName == 'Validated Overtime Details');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Overtime Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/ValidatedTandLDetails']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }



  public GetValidationPassword() {
    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data;
      console.log("validation", this.validation);
    });
  }


  public ValidatedRetroBasicPayValues() {
    debugger
  

    this.active = 'ValidatedRetroBasicPayValues';
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x => x.menuName == 'Validated Retro Basic Pay');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access Retro Pay Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == this.validation[0].password) {
          this.router.navigate(['/PayrollProcessor/ValidatedRetroBasicPayAdjustments']);
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }

  ValidationPassword() {
    this.active = 'ValidationPassword'
    localStorage.setItem('Pagename', 'Validation Password')
    this.router.navigate(['/PayrollAdmin/ValidationpasswordDashboard']);

  }

  
  

  public ComponentMap() {
    this.active = 'ComponentMap'
    
 document.getElementById('SummaryValidation1')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('TaxValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BasicPayValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LwopValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('BonusValidation')?.setAttribute("class", "sub-collapse collapse hide");
    document.getElementById('LoanProceedValidation')?.setAttribute("class", "sub-collapse collapse hide");
  }


  public UploadPayrollSummaryReport() {
    this.active = 'UploadPayrollSummaryReport'

    if(this.companyid==10013 ){
      this.router.navigate(['/PayrollProcessor/UploadPayrollSummaryReprtValues'])

    }
    else{
      this.router.navigate(['/PayrollProcessor/UploadPayrollSummaryReport'])

    }
  }

  public UploadedTandLDetails() {
    this.active = 'UploadedTandLDetails'
    this.router.navigate(['/PayrollProcessor/UploadTandLValues'])
  }



   public UploadPayrollInputs() {
    this.active = 'UploadPayrollInputs'

 
      this.router.navigate(['/PayrollProcessor/UploadPayrollInputs'])

    
  }

  public UploadedLoanReport() {
    this.active = 'UploadBasicPayValues'

 
      this.router.navigate(['/PayrollProcessor/UploadLoanReport'])

    
  }


  
  

  public UploadPhilHealthSummaryReport() {
    this.active = 'UploadBasicPayValues'
    this.router.navigate(['/PayrollProcessor/UploadPhilHealthSummaryReport'])
  }
  
  public getvalues(val: any) {
    debugger
    this.mini = val;
  }

 

}