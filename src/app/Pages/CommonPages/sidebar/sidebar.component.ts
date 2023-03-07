import { Component, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    debugger;
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


  public UploadHolidays() {
    this.active = '12321'
    localStorage.setItem("clickname", "Holidays")
    this.router.navigate(['/PayrollProcessor/Holidays'])

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
    localStorage.setItem("clickname", "Holidays")
    this.router.navigate(['/PayrollProcessor/UploadGeneratedEncashments'])
  }

  public ValidatedHolidayEncashment() {
    this.active = '12321'
    localStorage.setItem("clickname", "Holidays")
    //this.router.navigate(['/PayrollProcessor/ValidatedHolidayEnCashments'])

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Validated Holiday Encashment');
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
          this.router.navigate(['/PayrollProcessor/ValidatedHolidayEnCashments'])
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }


  public ValidatedPayrollSummary() {
    this.active = '12321'
    localStorage.setItem("clickname", "Holidays")
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
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == 2345 && this.companyid!=10013 && this.companyid!='1008'  && this.companyid!='1007') {
          this.router.navigate(['/PayrollProcessor/ValidatedPayrollSummaryReport'])
        }
        else   if (login.value == 2345 && (this.companyid==10013 || this.companyid==1008 || this.companyid==1007)) {
          this.router.navigate(['/PayrollProcessor/ValidatedPayrollSummaryReportForUNC'])
        }
        else {
          Swal.showValidationMessage(`Please enter correct pin`)
        }
      }
    })

  }

  public ValidatedMaster(){
    debugger
    this.active = 'ValidatedMaster';
    localStorage.setItem('Pagename', 'Announcements')
    this.router.navigate(['/PayrollAdmin/ValidationMasterDashboard']);
  }



  public Holidays() {
    debugger
    this.active = 'holi';
    localStorage.setItem('Pagename', 'Holidays')
  }

  LwopValidation() {
    debugger
    this.active = 108;
    localStorage.setItem('Pagename', 'Announcements')
    this.router.navigate(['/Admin/AnnouncementDashboard']);
  }

  NHANDRValidation() {
    debugger
    this.active = 108;
    localStorage.setItem('Pagename', 'Announcements')
    this.router.navigate(['/PayrollProcessor/ValidatedNewHiresDetails']);
  }


  

  BonusValidation() {
    debugger
    this.active = 988;
    localStorage.setItem('Pagename', 'Announcements')
  }


  PayrollSummaryValidation() {
    debugger
    this.active = 976;
    localStorage.setItem('Pagename', 'Announcements')
  }

  PhilHealthValidation() {
    debugger
    this.active = 'PhilHealthValidation';
    localStorage.setItem('Pagename', 'Announcements')
  }

  AllowanceValidation() {
    debugger
    this.active = 999;
    localStorage.setItem('Pagename', 'Announcements')
  }

  OvertimeValidation() {
    debugger
    this.active = 'ot';
    localStorage.setItem('Pagename', 'Announcements')
  }

  public uploadRetrovalues() {
    debugger

    localStorage.setItem('Pagename', 'Over Time');
    this.router.navigate(['/PayrollProcessor/UploadRetroValuesOT']);

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

  public UploadStaffLeaves() {
    this.active = 'UploadStaffLeaves'

    this.router.navigate(['/PayrollProcessor/StaffLeavesUpload'])

  }




  public UploadSystemGeneratedLWOP() {

    this.router.navigate(['/PayrollProcessor/UploadGeneratedLwop'])


  }

  public UploadAllowance() {
    
          this.router.navigate(['/PayrollProcessor/UploadAllowance'])
      

  }

  public UploadPayperiodAllowance() {
          this.router.navigate(['/PayrollProcessor/UploadPayPeriodAllowance'])
       

  }


  public UploadBonusValues() {
    this.active = 'UploadBonusValues'
    localStorage.setItem("clickname", "Upload Staff Leaves")
    this.router.navigate(['/PayrollProcessor/UploadBonusValues'])
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
    localStorage.setItem("clickname", "Upload Pay Period Allowance")

  }


  public LoanProceeds() {
    this.active = 8989
    localStorage.setItem("clickname", "Upload Pay Period Allowance")

  }


  public UploadFMAAllowance() {

   

   
          this.router.navigate(['/PayrollProcessor/FMAValidation'])
      

  }

  public ValidatedRunTaxValidation() {

    this.active = 'RunTaxValidation'
    localStorage.setItem("clickname", "Component  Master")

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x=>x.menuName=='Upload FMA Allowance');
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

        if (login.value == 4567) {
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
    this.active = 'RunTaxValidation'
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
    this.active = 767
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
    this.active = 889;
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

  public ValidatedSubjectLoadsValidation() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/ValidatedSubjectLoadDetails']);


  }

  public ValidatedNewHandR() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/ValidatedNewHiresDetails']);


  }

  
  public UploadMasterFile() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/UploadMasterList']);


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
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/UploadAttendanceDaysCount']);


  }



  

  public ValidatedSummerSemSubjectLoadsValidation() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/ValidatedSummerSemSubjectLoads']);


  }

  
  public ValidatedBankstats() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/ValidatedBlanKStats']);


  }


  
  
  public ValidatedHeadCount() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/ValidatedHeadCountDetails']);


  }

    
  public UploadHeadCount() {
    debugger
    this.active = 2345;
    this.router.navigate(['/PayrollProcessor/UploadHeadCountValues']);


  }



  public BlankStatsValidation() {
    debugger
    this.active = 432;
   


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
   
    this.active = 2345;
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
   
    this.active = 2345;
    localStorage.setItem('Pagename', 'Staff')

    this.DigiPVTService.GetValidationPassword().subscribe(data => {
      debugger
      this.validation = data.filter(x => x.menuName == 'Validated Basic Pay Details');
      console.log("validation", this.validation);
    });


    Swal.fire({
      title: 'Access T and L  Validation',
      html: `<input type="text" id="login" class="swal2-input"  placeholder="Enter 4 Digit Pin">
    `,
      confirmButtonText: 'Submit',
      focusConfirm: false,
      preConfirm: () => {
        debugger
        const login: any = document.getElementById('login') as HTMLElement

        if (login.value == 2345) {
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
  

    this.active = 2345;
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
  }


  public UploadPayrollSummaryReport() {
    this.active = 'UploadBasicPayValues'

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
    this.active = 'UploadBasicPayValues'

 
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