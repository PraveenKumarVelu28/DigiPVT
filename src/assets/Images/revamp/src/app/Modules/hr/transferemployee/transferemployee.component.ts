import { Component, OnInit } from '@angular/core';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transferemployee',
  templateUrl: './transferemployee.component.html',
  styleUrls: ['./transferemployee.component.css']
})
export class TransferemployeeComponent implements OnInit {
  Weight: any;
  MajorIllness: any;
  IS_Night_Blind: any;
  Is_Color_Blind: any;
  DOB: any;
  Paygroup: any;
  PagiBig_ID: any;
  PagiBigAccountNo: any;
  PagibigRemarks: any;
  PagibigMembership: any;
  EMPLOYEE_TIN: any;
  PHILHEALTH_NO: any;
  SSSNO: any;
  level: any;
  ParentCompany: any;
  AssignedCompany: any;
  ShiftType: any;
  Restdays: any;
  Is_Solo_Parent: undefined;
  OrginalBms: any;
  PreviousEffectivityBMSDate: any;
  PreviousBMS: any;
  CurrentEffectivityBMSDate: any;
  CurrentBMS: any;
  COLA: any;
  IncentiveLeave: any;
  HMOInsurance: any;
  MeritInsurance: any;
  DailerLicense: any;
  Incrementals: any;
  TaxStatus: any;
  GCashNumber: any;
  TalentSegment: any;
  CostCentre: any;
  TranspoAllowance: any;
  CommAllowance: any;
  RiceAllowance: any;
  MealAllowance: any;
  MedicineAllowance: any;
  MaintenanceDepreciationAllowance: any;
  EffectivityofAllowance: any;
  Vacation_LeaveBalance: any;
  Vacation_LeaveEntitlement: any;
  Sick_LeaveBalance: any;
  Sick_LeaveEntitlement: any;
  Service_Incentive_LeaveEntitlement: any;
  Service_Incentive_LeaveBalance: any;
  Leave_with_PayBalance: any;
  Leave_with_PayEntitlement: any;
  Leave_without_PaySLEntitlement: any;
  Leave_without_PaySLBalance: any;
  Leave_without_PayVLEntitlement: any;
  Leave_without_PayVLBalance: any;
  Solo_Parent_LeaveEntitlement: any;
  Solo_Parent_LeaveBalance: any;
  MaternitityLeaveEntitlement: any;
  MaternitityLeaveBalance: any;
  PaternitityLeaveEntitlement: any;
  PaternitityLeaveBalance: any;
  fullname: any;
  payrolldate: any;
  datecovered: any;
  department: any;
  role: any;
  tin: any;
  PhilHealth: any;
  SSS: any;
  hdmf: any;
  deminimisamount: any;
  BaseSalary: any;
  lopamount: any;
  sssamount: any;
  philHealthContribution: any;
  pagBig: any;
  tax: any;
  netMonthSalary: any;
  deductions: any;
  startdate: any;
  GrossSalary: any;
  enddate: any;
  semimonthly: any;
  basicday: any;
  basichour: any;
  loanpayout: any;
  nontax: any;
  deniminimis_amount: any;
  Benefits: any;
  OT: any;
  noofhours: any;
  type: any;
  sumsalry: any;
  rounoff: any;
  yearGrossSal: any;
  yearlydeminims: any;
  yearSSSRate: any;
  yeartax: any;
  yearPhilihealth: any;
  yearPagibigRate: any;
  semiadjustment: any;
  monthlysalaryperperiod: any;
  noofdaysinperiod: any;
  OtHours: any;
  NightOtAmount: any;
  NightOtHours: any;
  regularothours: any;
  regularotamount: any;
  Compensation: any;
  semideductions: any;
  yeargrosspaysalary: any;
  LoanType: any;
  showPopup: number = 0;
  messageId: number = 0;
  month: any;
  email: any;
  undertimeamount: any;
  salarydispute: any;
  lateamount: any;
  undertimehours: any;
  SSSCalamityLoanPayout: any;
  SSSCalamityLoanAdjustment: any;
  SSSSalaryLoanPayout: any;
  HDMFCalamityLoanPayout: any;
  HDMFCalamityLoanAdjustment: any;
  HDMFSalaryLoanPayout: any;
  HDMFSalaryLoanAdjustment: any;
  AyalaCoopLoanPayout: any;
  AyalaCoopLoanAdjustment: any;
  AyalaCoopContributionLoanPayout: any;
  AyalaCoopContributionLoanAdjustment: any;


  constructor(private DigipayrollServiceService: DigiofficecorehrService, private ActivatedRoute: ActivatedRoute, private datepipe: DatePipe) { }
  ID: any;
  leavelist: any;
  Short: any;
  Description: any;
  RoleTypeList: any;
  EmployeeId: any;
  EmployeeName: any;
  FirstDoseDate: any;
  VaccinationName: any;
  SecondDoseDate: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  Department: any;
  Departmentlist: any;
  dropdownList1: any = [];

  selectedItems1: any = [];
  selectedItems2: any = [];
  dropdownSettings1: any = {};
  result: any;
  AutoApproval: any;
  ManualApply: any;
  dropdownList2: any;
  ngOnInit(): void {
    this.loader = true;
    this.DigipayrollServiceService.GetMyDetails().subscribe(data => {
      debugger
      this.dropdownList2 = data;
      this.loader = false;
    })

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,

    };
    this.dropdownList1 = [
      { id: 1, name: 'Monday' },
      { id: 2, name: 'Tuesday' },
      { id: 3, name: 'Wednesday' },
      { id: 4, name: 'Thursday' },
      { id: 5, name: 'Friday' },
      { id: 6, name: 'Saturday' },
      { id: 7, name: 'Sunday' }
    ];
    this.dropdownSettings1 = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,

    };

  }



  SigninDate: any;
  SignoutDate: any;
  UserID: any

  Managerid: any;
  employeelist1: any;
  onItemSelect1(item: any) {
    debugger
    console.log(item);
    this.Managerid = item.id;
  }
  loader: any;
  starttime: any;
  endtime: any;
  holidaylist: any;
  public Save() {
    debugger

    this.SaveStaff();



  }
  LoanDetails: any;
  onItemSelect(item: any) {
    debugger
    console.log(item);
    this.EmployeeId = item.id;
    this.UserID = item.id

    this.DigipayrollServiceService.GetMyDetailsByStaffID(this.EmployeeId).subscribe(data => {
      debugger
      let temp: any = data;
      this.EmployeeName = temp[0].name;
      this.Mobile = temp[0].phoneNo;
      this.Personal_Email = temp[0].emailID;
      this.RoleType = temp[0].type;
      this.Address = temp[0].address;
      this.JoiningDate = temp[0].joiningDate;
      this.Salary = 30000;
      this.RoleType = temp[0].type;
      this.Address = temp[0].address;
      this.WorkTimings = temp[0].workTimings;
      this.ContactNumber = temp[0].phoneNo;
      this.EmployeeID = temp[0].employeID;
      this.Title = temp[0].title1;
      this.Middle_Name = temp[0].middle_Name;
      this.Last_Name = temp[0].last_Name;
      this.PlaceO_f_Birth = temp[0].placeO_f_Birth;
      this.Country_Of_Birth = temp[0].placeO_f_Birth;
      this.Age = temp[0].age;
      this.Gender = temp[0].gender;
      this.Status = temp[0].status;
      this.Date_Of_Marriage = temp[0].date_Of_Marriage;

      this.Vacation_LeaveBalance = temp[0].vacation_LeaveBalance;
      this.Vacation_LeaveEntitlement = temp[0].vacation_LeaveEntitlement;

      this.Sick_LeaveBalance = temp[0].sick_LeaveBalance;
      this.Sick_LeaveEntitlement = temp[0].sick_LeaveEntitlement;

      this.Service_Incentive_LeaveEntitlement = temp[0].service_Incentive_LeaveEntitlement;
      this.Service_Incentive_LeaveBalance = temp[0].service_Incentive_LeaveBalance;

      this.Leave_with_PayBalance = temp[0].leave_with_PayBalance;
      this.Leave_with_PayEntitlement = temp[0].leave_with_PayEntitlement;

      this.Leave_without_PaySLEntitlement = temp[0].leave_without_PaySLEntitlement;
      this.Leave_without_PaySLBalance = temp[0].leave_without_PaySLBalance;

      this.Leave_without_PayVLEntitlement = temp[0].leave_without_PayVLEntitlement;
      this.Leave_without_PayVLBalance = temp[0].leave_without_PayVLBalance;

      this.Solo_Parent_LeaveEntitlement = temp[0].solo_Parent_LeaveEntitlement;
      this.Solo_Parent_LeaveBalance = temp[0].solo_Parent_LeaveBalance;

      this.MaternitityLeaveEntitlement = temp[0].maternitityLeaveEntitlement;
      this.MaternitityLeaveBalance = temp[0].maternitityLeaveBalance;


      this.PaternitityLeaveEntitlement = temp[0].paternitityLeaveEntitlement;
      this.PaternitityLeaveBalance = temp[0].paternitityLeaveBalance;




    })


    this.DigipayrollServiceService.GetEmployeeSalaryByStaffID(this.EmployeeId).subscribe(data1 => {
      debugger
      this.employeelist1 = data1;
      this.monthlysalaryperperiod = this.employeelist1[0].monthlysalaryperperiod

      this.payrolldate = this.employeelist1[0].enddate,
        this.email = this.employeelist1[0].emailID,


        this.noofdaysinperiod = this.employeelist1[0].noofdaysinperiod,
        this.startdate = this.employeelist1[0].startdate;
      this.enddate = this.employeelist1[0].enddate,
        this.netMonthSalary = this.employeelist1[0].netMonthSalary,
        this.SSSCalamityLoanPayout = this.employeelist1[0].sssCalamityLoanPayout,
        this.SSSCalamityLoanAdjustment = this.employeelist1[0].sssCalamityLoanAdjustment,
        this.SSSSalaryLoanPayout = this.employeelist1[0].sssSalaryLoanPayout,
        this.HDMFCalamityLoanPayout = this.employeelist1[0].hdmfCalamityLoanPayout,
        this.HDMFCalamityLoanAdjustment = this.employeelist1[0].hdmfCalamityLoanAdjustment,
        this.HDMFSalaryLoanPayout = this.employeelist1[0].hdmfSalaryLoanPayout,
        this.HDMFSalaryLoanAdjustment = this.employeelist1[0].hdmfSalaryLoanAdjustment,
        this.AyalaCoopLoanPayout = this.employeelist1[0].AyalaCoopLoanPayout,
        this.AyalaCoopLoanAdjustment = this.employeelist1[0].AyalaCoopLoanAdjustment,
        this.AyalaCoopContributionLoanPayout = this.employeelist1[0].AyalaCoopContributionLoanPayout
      this.AyalaCoopContributionLoanAdjustment = this.employeelist1[0].AyalaCoopContributionLoanAdjustment



    })



    this.DigipayrollServiceService.GetEmployeeLoans().subscribe(data => {
      debugger
      this.LoanDetails = data.filter(x => x.staffID == this.EmployeeId);
    })


  }
  Address: any;
  RoleType: any;
  Gender: any;
  Date_Of_Marriage: any;
  Status: any
  Age: any;
  ContactNumber: any;
  Personal_Email: any;
  Mobile: any;
  Salary: any;
  Country_Of_Birth: any;
  Title: any;
  PlaceO_f_Birth: any;
  JoiningDate: any;
  WorkTimings: any;
  Middle_Name: any
  Religion: any;
  Ethnicity: any;
  Nationality: any;
  Is_Disabled: any;
  Blood_Group: any;
  Height: any;

  EmployeeID: any;
  Citizen_Ship: any;
  Last_Name: any;
  public attachments2url: any = []
  public Attachment: any = [];
  public SaveStaff() {
    this.showPopup = 0;
    debugger
    var eb = {
      'BuildingID': 56,
      'Name': this.EmployeeName,
      'PhoneNo': this.Mobile,
      'EmailID': ((this.Personal_Email).replaceAll(' ', '')),
      'TypeID': this.RoleType,
      // 'Type': Number(this.RoleType),
      'Address': this.Address,
      'Attachment': null,
      'JoiningDate': this.Date_Of_Marriage == " " ? "1990-01-01 00:00:00.000" : this.Date_Of_Marriage,
      'Salary': this.Salary,
      'LeavesPerMonth': 11,
      'WorkTimings': this.WorkTimings,
      'ContactNumber': this.ContactNumber,
      'Supervisor': this.Managerid,

      'EmployeeID': this.EmployeeID,
      'ResignationDate': this.JoiningDate,
      'ChaildTotal': 10,
      'MedicalLeaveEntitlement': 10,
      'MaternitityLeaveEntitlement': 105,
      'PaternitityLeaveEntitlement': 7,
      'CompassionateLeaveEntitlement': 10,
      'Leavesfrompreviousyear': 10,
      'ExtendedChildcareLeaveEntitlement': 10,
      'MarriageLeaveEntitlement': 10,
      'Title': this.Title,
      'Middle_Name': this.Middle_Name,
      'Last_Name': this.Last_Name,
      'PlaceO_f_Birth': this.PlaceO_f_Birth,
      'Country_Of_Birth': this.Country_Of_Birth,
      'Age': this.Age,
      'Gender': this.Gender,
      'Status': this.Status,
      // 'Date_Of_Marriage' : (String(this.Date_Of_Marriage ) == "" ? "Null" + "," : "'" + String(this.Date_Of_Marriage) + "',"),

      'Date_Of_Marriage': this.Date_Of_Marriage == " " ? "1990-01-01 00:00:00.000" : this.Date_Of_Marriage,
      // 'Date_Of_Marriage': this.Date_Of_Marriage,
      'Religion': this.Religion == undefined ? null : this.Religion,
      'Citizen_Ship': this.Citizen_Ship == undefined ? null : this.Citizen_Ship,
      'Ethnicity': this.Ethnicity == undefined ? null : this.Ethnicity,
      'Nationality': this.Nationality,
      'Is_Disabled': this.Is_Disabled,
      'Blood_Group': this.Blood_Group,
      'Height': this.Height,
      'Weight': this.Weight,
      'MajorIllness': this.MajorIllness,
      'IS_Night_Blind': this.IS_Night_Blind,
      'Is_Color_Blind': this.Is_Color_Blind,
      'DOB': this.Date_Of_Marriage == " " ? "1990-01-01 00:00:00.000" : this.Date_Of_Marriage,
      'Signature': null,
      'Paygroup': this.Paygroup,
      'PagiBig_ID': this.PagiBig_ID,
      'PagiBigAccountNo': this.PagiBigAccountNo,
      'PagibigMembership': this.PagibigMembership,
      'PagibigRemarks': this.PagibigRemarks,
      'EMPLOYEE_TIN': this.EMPLOYEE_TIN,
      'PHILHEALTH_NO': this.PHILHEALTH_NO,
      'SSSNO': this.SSSNO,
      'department': this.Department,
      'Level': this.level,
      'ParentCompany': this.ParentCompany,
      'AssignedCompany': this.AssignedCompany,
      'ShiftID': this.ShiftType,
      'Restdays': this.Restdays,
      'Is_Solo_Parent': this.Is_Solo_Parent == undefined ? 0 : this.Is_Solo_Parent,
      'OrginalBms': this.OrginalBms,
      'PreviousEffectivityBMSDate': this.Date_Of_Marriage == " " ? "1990-01-01 00:00:00.000" : this.Date_Of_Marriage,
      'PreviousBMS': this.PreviousBMS,
      'CurrentEffectivityBMSDate': this.Date_Of_Marriage == " " ? "1990-01-01 00:00:00.000" : this.Date_Of_Marriage,
      'CurrentBMS': this.CurrentBMS,
      'COLA': this.COLA,
      'IncentiveLeave': this.IncentiveLeave,
      'HMOInsurance': this.HMOInsurance,
      'MeritInsurance': this.MeritInsurance,
      'DailerLicense': this.DailerLicense,
      'Incrementals': this.Incrementals,
      'TaxStatus': this.TaxStatus,
      'GCashNumber': this.GCashNumber,
      'TalentSegment': this.TalentSegment,
      'CostCentre': this.CostCentre,
      'TranspoAllowance': this.TranspoAllowance,
      'CommAllowance': this.CommAllowance,
      'MealAllowance': this.MealAllowance,
      'RiceAllowance': this.RiceAllowance,
      'MedicineAllowance': this.MedicineAllowance,
      'MaintenanceDepreciationAllowance': this.MaintenanceDepreciationAllowance,
      'EffectivityofAllowance': this.EffectivityofAllowance,


    }
    this.DigipayrollServiceService.InsertMyDetailsBycompany(eb, this.url).subscribe(
      data => {
        debugger
        if (data == 0) {
          /* Swal.fire('User Already Exists'); */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 79;
          //  this.UpdateLeaveBalance(this.NewStaffID);
        }
        else {
          this.NewStaffID = data;
          this.UpdateLeaveBalance(this.NewStaffID);
          this.InsertEmployeeSalary(this.NewStaffID);
          this.InsertEmployeeLoans(this.NewStaffID);
        }
      },

    )


  }

  public UpdateLeaveBalance(StaffID: any) {
    debugger;
    this.showPopup = 0;
    var entity = {
      'StaffID': StaffID,
      'Vacation_LeaveBalance': this.Vacation_LeaveBalance,
      'Vacation_LeaveEntitlement': this.Vacation_LeaveEntitlement,
      'Sick_LeaveBalance': this.Sick_LeaveBalance,
      'Sick_LeaveEntitlement': this.Sick_LeaveEntitlement,
      'Service_Incentive_LeaveEntitlement': this.Service_Incentive_LeaveEntitlement,
      'Service_Incentive_LeaveBalance': this.Service_Incentive_LeaveBalance,
      'Leave_with_PayBalance': this.Leave_with_PayBalance,
      'Leave_with_PayEntitlement': this.Leave_with_PayEntitlement,
      'Leave_without_PaySLEntitlement': this.Leave_without_PaySLEntitlement,
      'Leave_without_PaySLBalance': this.Leave_without_PaySLBalance,
      'Leave_without_PayVLEntitlement': this.Leave_without_PayVLEntitlement,
      'Leave_without_PayVLBalance': this.Leave_without_PayVLBalance,
      'Solo_Parent_LeaveEntitlement': this.Solo_Parent_LeaveEntitlement,
      'Solo_Parent_LeaveBalance': this.Solo_Parent_LeaveBalance,
      'MaternitityLeaveEntitlement': this.MaternitityLeaveEntitlement,
      'MaternitityLeaveBalance': this.MaternitityLeaveBalance,
      'PaternitityLeaveEntitlement': this.PaternitityLeaveEntitlement,
      'PaternitityLeaveBalance': this.PaternitityLeaveBalance,
    }

    this.DigipayrollServiceService.UpdateLeaveBalanceDetails(entity, this.url).subscribe(
      data => {
        debugger
        if (data == 0) {
          /*   Swal.fire('User Already Exists') */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 79;
        }
        else {
          /* Swal.fire('Saved Successfully') */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 8;
        }
      },

    )


  }

  public InsertEmployeeSalary(StaffID: any) {
    debugger
    this.showPopup = 0;
    var entity = {
      'monthlysalaryperperiod': this.monthlysalaryperperiod,

      'payrolldate': this.payrolldate,
      'email': this.email,


      'noofdaysinperiod': this.noofdaysinperiod,
      'startdate': this.startdate,
      'enddate': this.enddate,
      'netMonthSalary': this.netMonthSalary,
      'SSSCalamityLoanPayout': this.SSSCalamityLoanPayout,
      'SSSCalamityLoanAdjustment': this.SSSCalamityLoanAdjustment,
      'SSSSalaryLoanPayout': this.SSSSalaryLoanPayout,
      'HDMFCalamityLoanPayout': this.HDMFCalamityLoanPayout,
      'HDMFCalamityLoanAdjustment': this.HDMFCalamityLoanAdjustment,
      'HDMFSalaryLoanPayout': this.HDMFSalaryLoanPayout,
      'HDMFSalaryLoanAdjustment': this.HDMFSalaryLoanAdjustment,
      'AyalaCoopLoanPayout': this.AyalaCoopLoanPayout,
      'AyalaCoopLoanAdjustment': this.AyalaCoopLoanAdjustment,
      'AyalaCoopContributionLoanPayout': this.AyalaCoopContributionLoanPayout,
      'AyalaCoopContributionLoanAdjustment': this.AyalaCoopContributionLoanAdjustment
    }

    this.DigipayrollServiceService.InsertEmployeeSalary(entity, this.url).subscribe(
      data => {
        debugger
        if (data == 0) {
          /*   Swal.fire('User Already Exists') */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 79;
        }
        else {
          /* Swal.fire('Saved Successfully') */
          this.loader = false;
          this.showPopup = 1;
          this.messageId = 8;
        }
      },

    )


  }

  public InsertEmployeeLoans(StaffID: any) {
    debugger;
    this.showPopup = 0;
    for (let i = 0; i < this.LoanDetails.length; i++) {
      var entity = {
        'StaffID': StaffID,
        'LoanType': this.LoanDetails[i].loanType,
        'LoanAmount': this.LoanDetails[i].loanAmount,
        'SanctionAmount': this.LoanDetails[i].sanctionAmount,
        'paidamount': this.LoanDetails[i].paidamount,
        'Comments': this.LoanDetails[i].Comments,
        'period': this.LoanDetails[i].period,
        'status': this.LoanDetails[i].status,
        'Hidden': this.LoanDetails[i].idden,
        'ModifiedDate': this.LoanDetails[i].modifiedDate,
        'TenureCount': this.LoanDetails[i].tenureCount,
        'LoanCount': this.LoanDetails[i].loanCount

      }
      this.DigipayrollServiceService.InsertEmployeeLoansByStaffID(entity, this.url).subscribe(
        data => {
          debugger
          if (data == 0) {
            /*   Swal.fire('User Already Exists') */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 79;
          }
          else {
            /* Swal.fire('Saved Successfully') */
            this.loader = false;
            this.showPopup = 1;
            this.messageId = 8;
          }
        },

      )
    }





  }




  NewStaffID: any;
  dropdownList3: any;
  companyid: any;
  url: any;
  public getCompanyDetails(event: any) {
    debugger
    this.showPopup = 0;
    this.companyid = event.target.value;
    this.loader = true;

    this.DigipayrollServiceService.GetCompanyID(this.companyid).subscribe((data: any) => {
      debugger
      let temp: any = data;
      this.url = temp.officeapiurl;
      if (temp.length == 0) {
        this.loader = false;
        this.showPopup = 1;
        this.messageId = 80;
      }
      else {

        this.DigipayrollServiceService.GetMyDetailsBycompany(temp.officeapiurl).subscribe(data => {
          debugger
          this.dropdownList3 = data;
          this.loader = false;
        })
      }
    });

  }
}
