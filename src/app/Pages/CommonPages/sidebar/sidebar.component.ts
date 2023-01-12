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
  AttendanceEnable:any
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

  active: any
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
    else if (this.login == '1'||this.login == '41'||this.UserName=="Admin") {
      if(this.companyid == 1002){
        this.router.navigate(['/Admin/Admindashbaord']);
      localStorage.setItem('Pagename', 'Home')
      }
      else{
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

  Leave: any;
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
  public AbsenceTrends() {
    this.active = 'AbsenceTrends';
    this.router.navigate(['/Admin/AbsenceTrends']);
    localStorage.setItem('Pagename', 'Absence Trends')
  }

  public Succesive() {
    this.active = 'Succesive';
    this.router.navigate(['/Admin/SuccesorDashboard']);
    localStorage.setItem('Pagename', 'Succesive')
  }



  regularize: any
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

  ExitFormalit: any
  loan: any
  grievanc: any
  Helpdesk: any
  public ExitFormality() {
    debugger
    localStorage.setItem('Pagename', 'Exit Formality')
    this.router.navigate(['/Manager/Exitformalityformdash']);
  }
  public LoanRequest() {
    debugger
    this.active = 17;
    localStorage.setItem('Pagename', 'Loans Request')
    this.router.navigate(['/Employee/Appliedloans']);

  }

  public LoanClearence() {
    debugger
    this.active = 177;
    localStorage.setItem('Pagename', 'Loans Request')
    this.router.navigate(['/HR/LoanClearenceDashboard']);

  }

  public LoanDeduction() {

    debugger
    this.active = 178;
    localStorage.setItem('Pagename', 'Loan Deduction')
    this.router.navigate(['/HR/LoanDeductionDashboard']);



  }


  public Adhocpayments() {

    debugger
    this.active = 179;
    localStorage.setItem('Pagename', 'Adhoc Payments')
    this.router.navigate(['/HR/AdhocPaymentsDashboard']);


  }




  public grievance() {
    debugger
    this.active = 18
    localStorage.setItem('Pagename', 'Grievance Request')
    this.router.navigate(['/Employee/Grievancedash']);

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

  public OnBoardingStaff() {
    debugger
    this.active = 122;
  }


  public Requests23() {
    debugger
    this.active = 890;
  }

  public Configuration() {
    debugger
    this.active = 'Configuration';
  }
  public comapnylook() {
    debugger
    this.active = 'Lookandfeel1';
    localStorage.setItem('Pagename', 'Look and Feel');
    this.router.navigate(['/HR/Lookandfeeldash']);
  }
  public JobHistory() {
    debugger
    this.active = 'JobHistory';
    localStorage.setItem('Pagename', 'Job History');
    this.router.navigate(['/Admin/Employeejobhistory']);
  }


  public LoanReport() {
    debugger
    this.active = 'PayrollLoanReport';
    localStorage.setItem('Pagename', 'Loan Report');
    this.router.navigate(['/Employee/LoanReport']);
  }

  public BlackList() {
    debugger
    this.active = 'BlackList';
    localStorage.setItem('Pagename', 'BlackList Report');
    this.router.navigate(['/Employee/BlacklistReport']);
  }

  public Confirmation() {
    debugger
    this.active = 'Confirmation';
    localStorage.setItem('Pagename', 'Confirmation');
    this.router.navigate(['/HR/Confirmation']);
  }


  public PromotionHistory() {
    debugger
    this.active = 'PromotionHistory';
    localStorage.setItem('Pagename', 'Promotion History');
    this.router.navigate(['/Admin/PromotionHistory']);
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


  public RetirementList() {
    debugger
    this.active = 'RetirementList';
    localStorage.setItem('Pagename', 'Retirement List');
    this.router.navigate(['/HR/RetirementList']);
  }

  public WorkAnniversary() {
    debugger
    this.active = 'WorkAnniversary';
    localStorage.setItem('Pagename', 'Work Anniversary');
    this.router.navigate(['/Admin/WorkAnnivarsary']);
  }



  public LeaveConfiguration() {
    debugger
    this.active = 'LeaveConfiguration';
    localStorage.setItem('Pagename', 'Leave Configuration');
    this.router.navigate(['/HR/LeaveConfigurationdash']);
  }
  public CheckListMaster() {
    debugger
    this.active = 'CheckListMaster';
    localStorage.setItem('Pagename', 'CheckList Master');
    this.router.navigate(['/HR/CheckListMasterDash']);
  }

  public HRApprovalConfig() {
    debugger
    this.active = 'HRApprovalConfig';
    localStorage.setItem('Pagename', 'CheckList Master');
    this.router.navigate(['/HR/HrApprovalConfigDash']);
  }

  public ExitFormalityCheckList() {
    debugger
    this.active = 'exit';
    localStorage.setItem('Pagename', 'CheckList Master');
    this.router.navigate(['/HR/ExitFormalityChecklistDash']);
  }

  public CheckListConfiguration() {
    debugger
    this.active = 'CheckListConfiguration';
    localStorage.setItem('Pagename', 'CheckList Configuration');
    this.router.navigate(['/HR/CheckListConfiguration']);
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
  public Transferemployee() {
    debugger
    this.active = 'Transferemployee';
    localStorage.setItem('Pagename', 'EmployeeTransfer');
    this.router.navigate(['/HR/EmployeeTransfer']);
  }


  public Deminimisrolemappingdash() {
    debugger
    this.active = 'Deminimisrolemappingdash';
    localStorage.setItem('Pagename', 'De-Minimis to Role')
    this.router.navigate(['/Admin/Deminimisrolemappingdash']);

  }
  public Rolebenefitsmappingdash() {
    debugger
    this.active = 'rolebenefitsmappingdash';
    localStorage.setItem('Pagename', 'Benefits to Position')
    this.router.navigate(['/HR/Rolebenefitsmappingdash']);

  }


  company: any
  public Company() {
    debugger
    this.active = 'com';
    this.router.navigate(['/Admin/Companydashboard']);
  }

  attendancereport: any
  leavereport: any
  timesheetreport: any
  expensereport: any
  locatorreport: any
  travelreport: any
  probationreport: any
  employeereport: any

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

  public NotPunchedInAttendancereport() {
    this.active = 'NotPunchedIN';
    localStorage.setItem('Pagename', 'Attendance Report')
    this.router.navigate(['/Manager/NotPunchedInReport']);

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

  public Onboardingreport() {
    this.active = 29
    localStorage.setItem('Pagename', 'Onboarding Report')
    this.router.navigate(['/HR/OnboardingReport']);
  }


  public Separationreport() {
    this.active = 27
    localStorage.setItem('Pagename', 'Separation Report')
    this.router.navigate(['/HR/SeparationReport']);
  }
  // public LoanReport() {
  //   this.active = 25
  //   localStorage.setItem('Pagename', 'Leave Report')
  //   this.router.navigate(['/HR/LoanMasterDash']);
  // }





  public TimesheetReports() {
    this.active = 26;
    localStorage.setItem('Pagename', 'Timesheet Report')
    this.router.navigate(['/Employee/TimesheetReports']);
  }

  public restday() {
    this.active = 'restday';
    localStorage.setItem('Pagename', 'RestDays')
    this.router.navigate(['/HR/Restdaysdash']);
  }

  public Reports() {
    this.active = 23;
  }




  public Expensesreports() {
    this.active = 27
    localStorage.setItem('Pagename', 'Expenses Report')
    this.router.navigate(['/Admin/Expensesreports']);


  }


  public LocaterReports() {
    this.active = 28
    localStorage.setItem('Pagename', 'Locator Report')
    this.router.navigate(['/Employee/LocaterReports']);
  }


  public Travelreport() {
    this.active = 29;
    localStorage.setItem('Pagename', 'Travel Report')
    this.router.navigate(['/Employee/Mytravelreport']);


  }


  public Probationevaluation() {
    this.active = 30;
    localStorage.setItem('Pagename', 'Probation Evaluation')
    this.router.navigate(['/HR/Probationevaluation']);
  }

  public EmployeeTransition() {
    this.active = 45;
    localStorage.setItem('Pagename', 'Employee Transition')
    this.router.navigate(['/HR/Employeetransitiondash']);
  }
  // public JobHistory() {
  //   this.active = 46;
  //   localStorage.setItem('Pagename', 'Employee Job History')
  //   this.router.navigate(['/Employeejobhistory']);
  // }

  public EmployeeBenifits() {
    this.active = 47;
    localStorage.setItem('Pagename', 'Employee Benefits')
    this.router.navigate(['/HR/Employeebenfitsmasterdash']);
  }
  // public BenifitsMapping() {
  //   this.active = 48;
  //   localStorage.setItem('Pagename', 'Benefits Mapping')
  //   this.router.navigate(['/HR/Employeebenefitsdash']);
  // }

  public GrievanceMaster() {
    debugger
    this.active = 49;
    localStorage.setItem('Pagename', 'Grievance Master')
    this.router.navigate(['/HR/GrievanceMasterDash']);
  }

  public GroupMaster() {
    debugger
    this.active = 51;
    localStorage.setItem('Pagename', 'Group Master')
    this.router.navigate(['/HR/GroupMaster']);
  }
  public SubSectionMaster() {
    debugger
    this.active = 53;
    localStorage.setItem('Pagename', 'Sub-Section Master')
    this.router.navigate(['/HR/SubSectionMaster']);
  }


  public SectionMaster() {
    debugger
    this.active = 54;
    localStorage.setItem('Pagename', 'SectionMaster')
    this.router.navigate(['/HR/SectionMaster']);
  }

  public LanguageMaster() {
    debugger
    this.active = 541;
    localStorage.setItem('Pagename', 'LanguageMaster')
    this.router.navigate(['/HR/LanguageMasterDashBoard']);
  }


  public Masters() {
    this.active = 32;

  }

  public Employeereport() {
    this.active = 31;
    localStorage.setItem('Pagename', 'Employee report')
    this.router.navigate(['/Employee/Employeereport']);

  }

  exit: any
  public Exitformalityformdash() {
    localStorage.setItem('Pagename', 'Employee report')
    this.router.navigate(['/Manager/Exitformalityformdash']);

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


  policy: any
  Holiday: any
  public Staff() {
    debugger
    localStorage.setItem('Pagename', 'Staff')
    this.router.navigate(['/HR/EmployeeProfileModify']);
    this.policy = true

  }

  leavetype: any
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
  WorkstationType() {
    debugger
    localStorage.setItem('Pagename', 'Workstation Type')
    this.router.navigate(['/Admin/WorkStationTypeDash']);
    this.active = 35;
  }
  TransportationType() {
    debugger
    localStorage.setItem('Pagename', 'Transportation Type')
    this.router.navigate(['/HR/TransportationTypeDash']);
    this.active = 36;
  }

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
  
  Designation(){
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

  vaccine: any
  public Vaccination() {
    debugger
    this.active = 6;
    localStorage.setItem('Pagename', 'Vaccination')
    this.router.navigate(['/Admin/Vaccinedashboard']);

  }

  announcement: any
  public Announcement() {
    this.active = 5;
    localStorage.setItem('Pagename', 'Announcements')
    this.router.navigate(['/Admin/AnnouncementsDashboard']);

  }
  EmployeePromotion: any
  public EmployeePromotion1() {
    this.active = 'EmployeePromotion1';
    localStorage.setItem('Pagename', 'EmployeePromotion')
    this.router.navigate(['/Employee/EmployeePromotion']);

  }

  public Holidays() {
    this.active = 4;
    localStorage.setItem('Pagename', 'Holidays')
    this.router.navigate(['/Admin/Holidaysdashboard']);

  }




  public Onboarding() {
    this.active = 'SETUP';
    localStorage.setItem('Pagename', 'Employee Onboarding')

  }
  public Award() {
    this.active = 'SERVICE';
    localStorage.setItem('Pagename', 'Employee Award')

  }


  public Manpower() {
    this.active = 'Manpower';
    localStorage.setItem('Pagename', 'Manpower Planning and Budgeting')
    this.router.navigate(['/Admin/ManpowerPlanningandBudgetingdash']);

  }
  // public CostAlocation() {
  //   this.active = 'CostAlocation';
  //   localStorage.setItem('Pagename', 'Cost Allocation')
  //   this.router.navigate(['/Admin/Costallocationdash']);

  // }

  public EmployeeBonus() {
    this.active = 'EmployeeBonus';
    localStorage.setItem('Pagename', 'Employee Bonus')
    this.router.navigate(['/Admin/EmployeeBonus']);

  }

  public SalaryBenchmarking() {
    this.active = 'SalaryBenchmarking';
    localStorage.setItem('Pagename', 'Salary Benchmarking')
    this.router.navigate(['/Admin/SalaryBenchmarking']);

  }
  staff: any
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


  public Expense() {
    debugger
    if (this.login == '6') {
      localStorage.setItem('Pagename', 'Expense Request')
      this.router.navigate(['/Admin/ExpenseDashboard']);

    }
    else if (this.login == '8') {
      localStorage.setItem('Pagename', 'Finance Expense')
      this.router.navigate(['/Admin/financeexpensedash']);

    }
    else {
      localStorage.setItem('Pagename', 'Manager Expense')
      this.router.navigate(['/Admin/ManagerExpensesList']);
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


  travel: any;
  public TravelRequest() {
    debugger
    this.active = 16;
    if (this.login == '6') {
      localStorage.setItem('Pagename', 'Travel Request')
      this.router.navigate(['/Admin/Travelrequestdash']);


    }
    else if (this.login == '9') {
      localStorage.setItem('Pagename', 'Travel Request')
      this.router.navigate(['/Admin/Travelrequestdash']);

    }
    else if (this.login == '8') {
      localStorage.setItem('Pagename', 'Travel Request')
      this.router.navigate(['/Admin/Travelrequestdash']);

    }
    else {
      localStorage.setItem('Pagename', 'Travel Request')
      this.router.navigate(['/Admin/TeamTravelRequest']);

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



  workplace: any
  public WorkplaceRequest() {
    debugger
    this.active = 14;
    if (this.login == '6') {
      localStorage.setItem('Pagename', 'Workplace Request')
      this.router.navigate(['/Admin/Workplacerequestdash']);


    }
    else if (this.login == '9') {
      localStorage.setItem('Pagename', 'Workplace Request')
      this.router.navigate(['/Admin/Workplacerequestdash']);

    }
    else if (this.login == '8') {
      localStorage.setItem('Pagename', 'Workplace Request')
      this.router.navigate(['/Admin/Workplacerequestdash']);

    }
    else {
      localStorage.setItem('Pagename', 'Workplace Request')
      this.router.navigate(['/Admin/TeamWorkplaceRequest']);

    }

  }


  public logout() {
    debugger
    localStorage.setItem('roledid', "0");
    this.router.navigate(['/Login']).then(() => {
      location.reload();
    });;;

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

  chat: any
  public Chat() {
    debugger
    this.active = 22;
    localStorage.setItem('Pagename', 'Chat ')
    this.router.navigate(['/Employee/ViewGroup']);

  }

  overtime: any

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

  public  AttendanceCorrection(){

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
  Attendanc: any

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
  expense: any;
  public ExpenseRequest() {
    debugger
    this.active = 13;
    if (this.login == '2') {
      localStorage.setItem('Pagename', 'Allowance Request')
      this.router.navigate(['/Admin/ManagerExpensesList']);


    }
    else {
      localStorage.setItem('Pagename', 'Allowance Request')
      this.router.navigate(['/Admin/ExpenseDashboard']);

    }

  }
  
  exitformality: any;
  public Exitformality() {
    debugger
    this.active = 21;
    if (this.login == '2' || this.login == '9') {
      localStorage.setItem('Pagename', 'Exit Formality')
      this.router.navigate(['/Manager/ExitFormalityDash']);
    }
    else {
      localStorage.setItem('Pagename', 'Exit Formality')
      this.router.navigate(['/Manager/ExitFormalityDash']);

    }

  }

  public EmployeeChangeRequest() {
    debugger
    this.active = 'EmployeeChangeRequest';
    localStorage.setItem('Pagename', 'Employee Change Request')
    // if (this.login == '6' || this.login == '2') {
    //   localStorage.setItem('Pagename', 'Employee Change Request')
    //   this.router.navigate(['/HR/EmployeeChangeRequestDashboard']);
    // }
    if (this.login !='9') {
      localStorage.setItem('Pagename', 'Employee Change Request')
      this.router.navigate(['/HR/EmployeeChangeRequestDashboard']);
    }
    else if (this.login == '9'){
      localStorage.setItem('Pagename', 'Employee Change Request')
      this.router.navigate(['/HR/TeamEmployeChangeRequestDetails']);
    }
  }

  public CheckList() {
    debugger
    this.active = 'Checklist';
    localStorage.setItem('Pagename', 'CheckList')
    this.router.navigate(['/Admin/Onboardingchecklistmaster']);
  }
  public NewJoinees() {
    debugger
    this.active = 'NewJoinees';
    localStorage.setItem('Pagename', 'New Joinees')
    this.router.navigate(['/Admin/Newjoineesforhr']);
  }
  public Orientaiondocumnets() {
    debugger
    this.active = 'Orientaiondocumnets';
    localStorage.setItem('Pagename', 'ORIENTATION DOCS')
    this.router.navigate(['/Admin/Orientaiondocumnets']);
  }


  public PayrollReport() {
    debugger
    this.active = 'PayrollReport';
    localStorage.setItem('Pagename', 'Payroll')
    this.router.navigate(['/HR/GenerateCsvfiles']);
  }

  public Onboardingstatus() {
    debugger
    this.active = 'Onboardingstatus';
    localStorage.setItem('Pagename', 'Onboarding Status')
    this.router.navigate(['/Admin/Onboardingstatus']);
  }

  public OrientationSession() {
    debugger
    this.active = 'OrientationSession';
    localStorage.setItem('Pagename', 'Orientation Session')
    this.router.navigate(['/Admin/OrientationSessionPlanDash']);
  }
  public Orientation() {
    debugger
    this.active = 'Orientation';
    localStorage.setItem('Pagename', 'ORIENTATION')
    this.router.navigate(['/Admin/OrientationPlanDash']);
  }

  public AssetTypeDashboard() {
    debugger
    this.active = 'AssetType';
    localStorage.setItem('Pagename', 'ASSET TYPE')
    this.router.navigate(['/Admin/AssetTypeDashboard']);
  }

  public AssignedAssets() {
    debugger
    this.active = 'Assigned';
    localStorage.setItem('Pagename', 'Assigned Assets')
    this.router.navigate(['/Admin/AssignedAssets']);
  }
  public Assets() {
    debugger
    this.active = 'Assets';
    localStorage.setItem('Pagename', 'Assets')

  }



  public HeadCount() {
    debugger
    this.active = 'HeadCount';
    localStorage.setItem('Pagename', 'HEAD COUNT')
    this.router.navigate(['/Admin/HeadCountDashboard']);
  }




  // public Benefirsenrollmetdash() {
  //   debugger
  //   this.active = 'Benefirsenrollmetdash';
  //   localStorage.setItem('Pagename', 'Benefits Enrollment')
  //   this.router.navigate(['/HR/Benefirsenrollmetdash']);
  // }
  public Mytask() {
    debugger
    this.active = 'MyTask';
    localStorage.setItem('Pagename', 'My Task')

  }

  public leaveConversion() {
    debugger
    this.active = 'leaveConversion';


  }
  public leaveelection() {
    debugger
    this.active = 'leaveelection';
    localStorage.setItem('clickname', 'Leave Election')
    this.router.navigate(['/HR/LeaveElection']);
  }
  public UpdateLeaveConfiguration() {
    debugger
    this.active = 'UpdateLeaveConfiguration';
    localStorage.setItem('clickname', 'Update Leave Balance')
    this.router.navigate(['/HR/UpdateLeaveConfiguration']);
  }


  public Retirementconfiguration() {
    debugger
    this.active = 'RetirementConfig';
    localStorage.setItem('Pagename', 'Retirement Config')
    this.router.navigate(['/HR/RetirementConfiguration']);
  }

  public Loanconfiguration() {
    debugger
    this.active = 'Loanconfiguration';
    localStorage.setItem('Pagename', 'Loan Config')
    this.router.navigate(['/HR/LoanConfigurationDash']);
  }


  public LoanType() {
    debugger
    this.active = 'LoanType';
    localStorage.setItem('Pagename', 'Loan Master')
    this.router.navigate(['/HR/LoanMasterDash']);
  }


  public SalaryDeductions() {
    debugger
    this.active = 'ATDRequest';
    localStorage.setItem('Pagename', 'SALARY DEDUCTIONS')
    this.router.navigate(['/HR/ATDRequestsDash']);
  }



  public ServiceAward() {
    debugger
    this.active = 'ServiceAward';
    localStorage.setItem('Pagename', 'Service Awards')
    this.router.navigate(['/Admin/ServiceAwardDashboard']);
  }


  public ServiceAwardList() {
    debugger
    this.active = 'ServiceAwardList';
    localStorage.setItem('Pagename', 'Service Awards')
    this.router.navigate(['/Admin/ServiceAwardList']);
  }


  public EmployeeResignation() {
    this.active = 'Resignation';
    localStorage.setItem('Pagename', 'Employee Resignation')
    this.router.navigate(['/Employee/EmployeeResignation']);

  }
  public Employee() {
    this.active = 'Employee';
    localStorage.setItem('Pagename', 'Employee')


  }



  public attritionanalysis() {
    this.active = 'attritionanalytics';
    localStorage.setItem('Pagename', 'Employee Resignation')
    this.router.navigate(['/Admin/AttritionAnalytics']);

  }

  public MyTask() {

  }

  public EmployeeTask() {
    this.active = 'EmployeeTask';
    localStorage.setItem('Pagename', 'Employee Task')
    this.router.navigate(['/Admin/EmployeeTask']);
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




  public completetask() {
    this.active = 'completetask';
    localStorage.setItem('Pagename', 'Employee Task')
    this.router.navigate(['/Admin/Completedtask'])
  }

  help() {
    this.active = 'help'
    localStorage.setItem("clickname", "HELP")
  }

  SupportTickets() {
    this.active = 'SupportTickets'
    localStorage.setItem("clickname", "support tickets")
  }


  floor() {
    this.active = 'floor'
    localStorage.setItem("Pagename", "Floor Master")
    this.router.navigate(['/Admin/Floordash'])
  }

  building() {
    this.active = 'building'
    localStorage.setItem("Pagename", "Building Master")
  }

  room() {
    this.active = 'room'
    localStorage.setItem("Pagename", "Room Master");
    this.router.navigate(['/Admin/WorkStationTypeDash'])

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

  promotion() {
    debugger
    localStorage.setItem('Pagename', 'Employee Promotion')
    this.router.navigate(['/HR/EmployeePromotionDash']);
    this.active = 444;
  }
  EmployeePreLoan() {
    this.active = 'EmployeePreLoanPaymentDashboard'
    localStorage.setItem("clickname", "Employee PreLoan Payment")
    this.router.navigate(['/Employee/EmployeePreLoanPaymentDashboard'])
  }

  MyTeamPreLoanPayments() {
    this.active = 'MyTeamPreLoanPayments'
    localStorage.setItem("clickname", "My Team PreLoan Payments")
    this.router.navigate(['/HR/MyTeamPreLoanPayments'])
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

  OnboardingInitiation() {
    this.active = 'OnboardingInitiation'
    localStorage.setItem("clickname", "Onboarding Initiation")
    this.router.navigate(['/HR/OnboardingInitiationDash'])
  }
}