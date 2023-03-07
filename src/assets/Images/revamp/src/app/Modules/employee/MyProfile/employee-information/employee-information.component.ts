import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { DigiofficecorehrService } from 'src/app/Pages/Services/digiofficecorehr.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnInit {


  constructor(public DigiofficeService: DigiofficecorehrService, private ngWizardService: NgWizardService, public router: Router, private activatedroute: ActivatedRoute, public datepipe: DatePipe) { }
  Position: any;
  Signature: any;
  roledid: any;
  Title: any;
  PlaceO_f_Birth: any;
  Status: any;
  Name: any;
  Is_Solo_Parent: any;
  Country_Of_Birth: any;
  DOB: any;
  Middle_Name: any;
  Age: any;
  Personal_Email: any;
  EmployeeID: any;
  Last_Name: any;
  Mobile: any;
  CivilStatus: any;
  dropdownRoleList: any = [];
  loader: any;
  currentUrl: any
  JoiningDate: any;
  Provincelist: any;
  CountryID: any;
  myDate: any;
  ID: any;
  RoleType1: any;
  RoleType: any;
  Countrylist: any;
  Gender: any;
  Department: any;
  roledropdownSettings: any = {};
  deptdropdownSettings: any = {};
  dropdownDeptList: any = [];
  department1: any;
  supervisorlist: any;
  managerList: any;
  Supervisor: any;
  companyid: any
  staffID: any;
  dropdownSettings: any = {};
  Supervisor1: any;
  level: any;
  Paygroup: any
  PagiBig_ID: any;
  PagiBigMP2: any;
  EligibilityGroup: any;

  EMPLOYEE_TIN: any;
  PHILHEALTH_NO: any;
  SSSNO: any;
  OTEligibility: any;
  Frequency: any;
  RateCode: any;
  Religion: any;
  Ethnicity: any;
  Citizen_Ship: any = {};
  Nationality: any = {};
  Blood_Group: any = [];
  Height: any;
  Weight: any;
  Is_Color_Blind: any;
  MajorIllness: any;
  OrginalBms: any
  PreviousEffectivityBMSDate: any;
  PreviousBMS: any = {};
  CurrentEffectivityBMSDate: any;
  CurrentBMS: any;
  COLA: any
  GCashNumber: any;
  showPopup: number = 0;
  messageId: number = 0;
  Restdays: any;
  public restdaysarray: any = [];
  public restdaysarray1: any = [];
  Address: any;
  Attachment: any;
  LeavesPerMonth: any;
  WorkTimings: any;
  ContactNumber: any;
  Is_Disabled: any;

  IS_Night_Blind: any;
  public attachments2url: any = [];
  LoginType: any;
  ParentCompany: any;
  AssignedCompany: any;
  IncentiveLeave: any;
  HMOInsurance: any;
  MeritInsurance: any;
  CompRate: any;
  DailerLicense: any;
  Incrementals: any;
  TaxStatus: any;
  TalentSegment: any;
  CostCentre: any;
  TranspoAllowance: any;
  CommAllowance: any;
  MealAllowance: any;
  RiceAllowance: any;
  MedicineAllowance: any;
  MaintenanceDepreciationAllowance: any;
  EffectivityofAllowance: any;
  StaffID: any;
  leavelist:any;
  ShiftType:any;
  RoleType12:any;
  Department12:any;
  managerList1:any;

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.myDate = new Date().toISOString().split("T")[0];
    this.loader = true;
    this.companyid = sessionStorage.getItem('companyid');
    this.GetNewstaff();
    this.staffID = localStorage.getItem('staffid');
    this.currentUrl = window.location.href;
    this.Status = 'selected';
    this.CountryID = 0;
    this.Gender = 0;
    this.Department = '';
    this.Supervisor = '';
    this.Citizen_Ship = "";
    this.Religion = "";
    this.roledid = localStorage.getItem('roledid');
    this.Ethnicity = "";
    this.Title = 0;

    this.roledropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };

    this.deptdropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'department_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name1',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.ActivatedRouteCallPrefil();
    this.GetCountryType();
    this.GetDepartment();
    this.GetRoleType();
    this.GetNewstaff()
  }

  public ActivatedRouteCallPrefil() {
    this.loader = true;
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      this.StaffID = params['id'];
      if (this.ID == undefined) {
        this.Title = 0,
          this.Age = ' ',
          // this.Date_Of_Marriage = ' ',
          this.Is_Disabled = ' ',
          this.Height = 0,
          this.Weight = 0,
          this.IS_Night_Blind = 0,
          this.Is_Color_Blind = 0
       
      }
      else {
        this.DigiofficeService.GetAllStaffNew()
          .subscribe({
            next: data => {
              debugger
              this.supervisorlist = data.filter(x => x.type == 2);
              this.loader = false;
            }, error: (err) => {
              // Swal.fire('Issue in Getting All Staff New');
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
        this.DigiofficeService.GetAllStaffNew()
          .subscribe({
            next: data => {
              debugger
              this.loader = false;
              this.leavelist = data.filter(x => x.id == this.ID);
              this.Title = this.leavelist[0].title1,
                this.Name = this.leavelist[0].name,
                this.Middle_Name = this.leavelist[0].middle_Name,
                this.Last_Name = this.leavelist[0].last_Name,
                this.OTEligibility = this.leavelist[0].oteligibility
              this.PlaceO_f_Birth = this.leavelist[0].placeO_f_Birth,
                this.Country_Of_Birth = this.leavelist[0].country_Of_Birth;
              this.Age = this.leavelist[0].age;
              this.Gender = this.leavelist[0].gender;
              this.Status = this.leavelist[0].status;
              this.ShiftType = this.leavelist[0].shiftID;
              this.Restdays = this.leavelist[0].restdays;
              this.EligibilityGroup = this.leavelist[0].eligibilityGroup;
              this.CivilStatus = this.leavelist[0].civilStatus;
              this.Frequency = this.leavelist[0].frequency;
              this.CompRate = this.leavelist[0].compRate;
              this.RateCode = this.leavelist[0].rateCode;
              this.PagiBigMP2 = this.leavelist[0].pagiBigMP2;
              // if ((this.datepipe.transform(this.leavelist[0].date_Of_Marriage, 'yyyy-MM-dd')) == "1990-01-01") {
              //   this.Date_Of_Marriage = " "
              // }
              // else {
              //   this.Date_Of_Marriage = this.datepipe.transform(this.leavelist[0].date_Of_Marriage, 'yyyy-MM-dd')
              // }
              this.Personal_Email = this.leavelist[0].personal_Email;
              this.Mobile = this.leavelist[0].mobile;
              this.Religion = this.leavelist[0].religion,
                this.Citizen_Ship = this.leavelist[0].citizen_Ship;
              this.Ethnicity = this.leavelist[0].ethnicity,
                this.Is_Solo_Parent = this.leavelist[0].is_Solo_Parent,
                this.Nationality = this.leavelist[0].nationality,
                this.Is_Disabled = this.leavelist[0].is_Disabled,
                this.Blood_Group = this.leavelist[0].blood_Group,
                this.Height = this.leavelist[0].height,
                this.Weight = this.leavelist[0].weight,
                this.ParentCompany = this.leavelist[0].parentCompany,
                this.AssignedCompany = this.leavelist[0].assignedCompany,
                this.MajorIllness = this.leavelist[0].majorIllness,
                this.IS_Night_Blind = this.leavelist[0].iS_Night_Blind,
                this.Is_Color_Blind = this.leavelist[0].is_Color_Blind,
                this.DOB = this.datepipe.transform(this.leavelist[0].dob, 'yyyy-MM-dd'),
                this.JoiningDate = this.datepipe.transform(this.leavelist[0].joiningDate, 'yyyy-MM-dd'),
                this.DigiofficeService.GetRoleType()
                  .subscribe({
                    next: data => {
                      debugger
                      this.RoleType12 = data.filter(x => x.id == this.RoleType);
                      this.loader = false;
                      this.RoleType = this.RoleType12
                      this.RoleType1 = this.RoleType[0].id
                    }, error: (err) => {
                      // Swal.fire('Issue in Getting Role Type');
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
              this.RoleType = this.leavelist[0].type,
                // this.Supervisor = this.leavelist[0].supervisor;
                // this.DigiofficeService.GetMyDetails().subscribe(data => {
                //   debugger
                //   this.supervisorlist12 = data.filter(x => x.id == this.Supervisor1);
                //   this.loader = false;
                //   this.Supervisor = this.supervisorlist12
                // });
                // this.Supervisorname = this.leavelist[0].manager;
                this.Signature = this.leavelist[0].signature,
                this.Paygroup = this.leavelist[0].paygroup,
                this.PagiBig_ID = this.leavelist[0].pagiBig_ID,
                // this.PagiBigAccountNo = this.leavelist[0].pagiBigAccountNo,
                // this.PagibigRemarks = this.leavelist[0].pagibigRemarks,
                this.EMPLOYEE_TIN = this.leavelist[0].tin,
                this.PHILHEALTH_NO = this.leavelist[0].philhealtH_NO,
                this.SSSNO = this.leavelist[0].sssno,
                // this.PagibigMembership = this.leavelist[0].pagibigMembership,
                this.level = this.leavelist[0].loginType,
                this.LoginType = this.leavelist[0].logintype,
                this.EmployeeID = this.leavelist[0].employeID,
                this.OrginalBms = this.leavelist[0].orginalBms,
                this.PreviousEffectivityBMSDate = this.datepipe.transform(this.leavelist[0].previousEffectivityBMSDate, 'yyyy-MM-dd')
              this.PreviousBMS = this.leavelist[0].previousBMS,
                this.CurrentEffectivityBMSDate = this.datepipe.transform(this.leavelist[0].currentEffectivityBMSDate, 'yyyy-MM-dd')
              this.CurrentBMS = this.leavelist[0].currentBMS,
                this.COLA = this.leavelist[0].cola,
                this.IncentiveLeave = this.leavelist[0].incentiveLeave,
                this.HMOInsurance = this.leavelist[0].hmOInsurance,
                this.MeritInsurance = this.leavelist[0].meritInsurance,
                this.DailerLicense = this.leavelist[0].dailerLicense,
                this.Incrementals = this.leavelist[0].incrementals,
                this.TaxStatus = this.leavelist[0].taxStatus,
                this.GCashNumber = this.leavelist[0].gCashNumber,
                this.TalentSegment = this.leavelist[0].talentSegment,
                this.CostCentre = this.leavelist[0].costCentre,
                this.TranspoAllowance = this.leavelist[0].transpoAllowance,
                this.CommAllowance = this.leavelist[0].commAllowance,
                this.MealAllowance = this.leavelist[0].mealAllowance,
                this.RiceAllowance = this.leavelist[0].riceAllowance,
                this.MedicineAllowance = this.leavelist[0].medicineAllowance,
                this.MaintenanceDepreciationAllowance = this.leavelist[0].maintenanceDepreciationAllowance,
                this.EffectivityofAllowance = this.leavelist[0].effectivityofAllowance,
                this.DigiofficeService.GetDepartment()
                  .subscribe({
                    next: data => {
                      debugger
                      this.loader = false;
                      this.Department12 = data.filter(x => x.id == this.Department);
                      this.Department = this.Department12
                      this.department1 = this.Department[0].id

                      this.Department = this.leavelist[0].department,
                        this.DigiofficeService.GetAllStaffNew()
                          .subscribe({
                            next: data => {
                              debugger
                              this.loader = false;
                              this.managerList1 = data.filter(x => x.id == this.Supervisor);
                              this.Supervisor = this.managerList1
                              this.Supervisor1 = this.Supervisor[0].id
                            }, error: (err) => {
                              // Swal.fire('Issue in Getting All Staff New');
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
                      this.Supervisor = this.leavelist[0].supervisor

                    }
                  });
            }, error: (err) => {
              // Swal.fire('Issue in Getting Department');
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
      })
    }   
  



  public GetNewstaff() {
    this.DigiofficeService.GetAllStaffNew()
      .subscribe({
        next: data => {
          debugger
          this.managerList = data.filter(x => x.loginType == '2');
          // this.managerList = data.filter(x => x.type == 2);
        }, error: (err) => {
          // Swal.fire('Issue in Getting All Staff New');
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



  public GetRoleType() {
    this.DigiofficeService.GetRoleType()
      .subscribe({
        next: data => {
          debugger
          this.dropdownRoleList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Role Type');
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

  roleonItemSelect(item: any) {
    debugger
    console.log(item);
    this.RoleType = item.id;
    if (this.ID == undefined) {
      this.RoleType = item.id;
    }
    else {
      this.RoleType1 = item.id;
    }
  }

  public GetDepartment() {
    this.DigiofficeService.GetDepartment()
      .subscribe({
        next: data => {
          debugger
          this.dropdownDeptList = data;
        }, error: (err) => {
          // Swal.fire('Issue in Getting Department');
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

  deptonItemSelect(item: any) {
    debugger
    console.log(item);
    if (this.ID == undefined) {
      this.Department = item.id;
    }
    else {
      this.department1 = item.id;
    }

    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          this.supervisorlist = data.filter(x => x.logintype == 2 && x.department == this.Department);
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting My Details');
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

  public GetCountryType() {
    this.DigiofficeService.GetCountryType()
      .subscribe({
        next: data => {
          debugger
          this.Countrylist = data
          this.loader = false;
        }, error: (err) => {
          // Swal.fire('Issue in Getting CountryType ');
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

  public GetCountryID(event: any) {
    this.CountryID = event.target.value;
    this.DigiofficeService.GetStateType()
      .subscribe({
        next: data => {
          debugger
          this.Provincelist = data.filter(x => x.countryID == this.CountryID)
        }, error: (err) => {
          // Swal.fire('Issue in Getting State Type');
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

  public getroleid(event: any) {
    this.level = event.target.value;
  }

  onItemSelect(item: any) {
    debugger
    console.log(item);

    if (this.ID == undefined) {
      this.Supervisor = item.id;
    }
    else {
      this.Supervisor1 = item.id;
    }
  }


  public getdate() {

    var birthdate: any = new Date(this.DOB);

    var cur: any = new Date();
    var diff: any = cur - birthdate; // This is the difference in milliseconds
    this.Age = Math.floor(diff / 31557600000); // Divide by 1000*60*60*24*365.25
  }




  public Save() {
    this.showPopup = 0;
    debugger
    this.loader = true
    if (this.Name == " " || this.Mobile == " " || this.Personal_Email == " " || this.RoleType == " " ||
      this.JoiningDate == " " || this.Supervisor == " " || this.Title == " " || this.Last_Name == "" || this.Paygroup == " "
      || this.PagiBig_ID == " "
      || this.EMPLOYEE_TIN == " " || this.PHILHEALTH_NO == " " || this.SSSNO == " " || this.Department == " " ||
      this.PlaceO_f_Birth == " " || this.Country_Of_Birth == " " || this.Gender == " " || this.DOB == " "
      || this.PreviousEffectivityBMSDate == " " || this.CurrentEffectivityBMSDate == " " || this.COLA == undefined || this.OrginalBms == undefined || this.CurrentBMS == undefined) {
      /* Swal.fire('Please Fill All The Mandatory Fields') */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      this.Restdays = '';
      for (let i = 0; i < this.restdaysarray1.length; i++) {
        this.Restdays = this.Restdays + this.restdaysarray1[i].name + ','
      }
      var eb = {
        'BuildingID': 56,
        'Name': this.Name,
        'PhoneNo': this.Mobile,


        'EmailID': ((this.Personal_Email).replaceAll(' ', '')),
        'TypeID': this.RoleType,
        // 'Type': Number(this.RoleType),
        'Address': this.Address,
        'Attachment': this.Attachment == " " ? null : this.Attachment,
        'JoiningDate': this.JoiningDate,
        'Salary': this.CurrentBMS,
        'LeavesPerMonth': this.LeavesPerMonth,
        'WorkTimings': this.WorkTimings,
        'ContactNumber': this.ContactNumber,
        'Supervisor': this.Supervisor,

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

        // 'Date_Of_Marriage': this.Date_Of_Marriage == " " ? "1990-01-01 00:00:00.000" : this.Date_Of_Marriage,
        // 'Date_Of_Marriage': this.Date_Of_Marriage,
        'Religion': this.Religion == undefined ? null : this.Religion,
        'Citizen_Ship': this.Citizen_Ship == undefined ? null : this.Citizen_Ship,
        'Ethnicity': this.Ethnicity == undefined ? null : this.Ethnicity,
        'Nationality': this.Nationality,
        'Is_Disabled': this.Is_Disabled == " " ? 0 : this.Is_Disabled,
        'Blood_Group': this.Blood_Group,
        'Height': this.Height == " " ? 0 : this.Height,
        'Weight': this.Weight == " " ? 0 : this.Weight,
        'MajorIllness': this.MajorIllness,
        'IS_Night_Blind': this.IS_Night_Blind == " " ? 0 : this.IS_Night_Blind,
        'Is_Color_Blind': this.Is_Color_Blind == " " ? 0 : this.Is_Color_Blind,
        'DOB': this.DOB,
        'Signature': this.attachments2url[0],
        'Paygroup': this.Paygroup,
        'PagiBig_ID': this.PagiBig_ID,
        'EligibilityGroup': this.EligibilityGroup,
        'CivilStatus': this.CivilStatus,
        'PagiBigMP2': this.PagiBigMP2,
        // 'PagiBigAccountNo': this.PagiBigAccountNo,
        // 'PagibigMembership': this.PagibigMembership,
        // 'PagibigRemarks': this.PagibigRemarks,
        'EMPLOYEE_TIN': this.EMPLOYEE_TIN,
        'PHILHEALTH_NO': this.PHILHEALTH_NO,
        'SSSNO': this.SSSNO,
        'department': this.Department,
        'Level': this.level,
        'logintype': this.LoginType,
        'ParentCompany': this.ParentCompany,
        'AssignedCompany': this.AssignedCompany,
        'ShiftID': 0,
        'Restdays': this.Restdays,
        'Is_Solo_Parent': this.Is_Solo_Parent == undefined ? 0 : this.Is_Solo_Parent,
        'OrginalBms': this.OrginalBms,
        'PreviousEffectivityBMSDate': this.PreviousEffectivityBMSDate,
        'PreviousBMS': this.PreviousBMS,
        'CurrentEffectivityBMSDate': this.CurrentEffectivityBMSDate,
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
        'OTEligibility': this.OTEligibility,
        'Frequency': this.Frequency,
        'RateCode': this.RateCode,
        'CompRate': this.CompRate,
      }
      this.DigiofficeService.InsertMyDetails(eb)
        .subscribe({
          next: data => {
            debugger


            if (data == 0) {
              Swal.fire("EmailID or Mobile Number Already Exists. or your  License Count is over. ");
              var obj = {
                'PageName': "Staff Upload",
                'ErrorMessage': "EmailID or Mobile Number Already Exists or License Count is Over.",
                'Name': this.Name,
                'EmployeeID': this.EmployeeID,
                'EmployeeCount': 1,
                'UserID': this.EmployeeID,
                'LoginType': "HR",
                'API': "BULK Upload",
              }

              this.DigiofficeService.InsertStaffBulkUploadExceptions(obj)
                .subscribe({
                  next: data => {
                    debugger
                    //Swal.fire("Error in Uploading Data. Please see details under Bulk Upload Missing Staff Menu in Configuration");
                    location.href = "#/HR/StaffBulkUploadExceptions";
                    this.loader = false;
                  }, error: (err) => {
                    // Swal.fire('Issue in Inserting Exception');
                    // this.loader = false;
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
              this.StaffID = data;
              /*             Swal.fire('Saved Successfully') */
              this.loader = false
              this.showPopup = 1;
              this.messageId = 8;
            }
          }, error: (err) => {
            // Swal.fire('Issue in Inserting My Details');
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


  public Update() {
    debugger
    this.showPopup = 0;
    // this.loader = true
    if (this.Name == " " || this.Mobile == " " || this.Personal_Email == " " || this.RoleType == " " ||
      this.JoiningDate == " " || this.Supervisor == " " || this.Title == " " || this.Last_Name == "" || this.Paygroup == " "
      || this.PagiBig_ID == " "
      || this.EMPLOYEE_TIN == " " || this.PHILHEALTH_NO == " " || this.SSSNO == " " || this.Department == " " ||
      this.PlaceO_f_Birth == " " || this.Country_Of_Birth == " " || this.Gender == " " || this.DOB == " "
      || this.PreviousEffectivityBMSDate == " " || this.CurrentEffectivityBMSDate == " ") {
      /*  Swal.fire('Please Fill All The Mandatory Fields') */
      this.loader = false
      this.showPopup = 1;
      this.messageId = 13;
    }
    else {
      this.Restdays = '';
      for (let i = 0; i < this.restdaysarray1.length; i++) {
        this.Restdays = this.Restdays + this.restdaysarray1[i].name + ','
      }

      var eb = {
        'ID': this.ID,
        'BuildingID': 56,
        'Name': this.Name,
        'PhoneNo': this.Mobile,
        'EmailID': this.Personal_Email,
        'TypeID': this.RoleType1,
        'Address': this.Address,
        'Attachment': this.Attachment,
        'JoiningDate': this.JoiningDate,
        'Salary': this.CurrentBMS,
        'LeavesPerMonth': this.LeavesPerMonth,
        'WorkTimings': this.WorkTimings,
        'ContactNumber': this.ContactNumber,
        'Supervisor': this.Supervisor1,
        'EmployeeID': this.EmployeeID,
        'ResignationDate': this.JoiningDate,
        'ChaildTotal': 10,
        'MedicalLeaveEntitlement': 10,
        'MaternitityLeaveEntitlement': 10,
        'PaternitityLeaveEntitlement': 10,
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
        // 'Date_Of_Marriage': (this.Date_Of_Marriage == " " || this.Date_Of_Marriage == "") ? "1990-01-01 00:00:00.000" : this.Date_Of_Marriage,
        // 'Date_Of_Marriage': this.Date_Of_Marriage == " " ? this.JoiningDate : this.Date_Of_Marriage,
        // 'Date_Of_Marriage': this.Date_Of_Marriage,
        'Religion': this.Religion,
        'Citizen_Ship': this.Citizen_Ship,
        'Ethnicity': this.Ethnicity,
        'Nationality': this.Nationality,
        'Is_Disabled': this.Is_Disabled,
        'Blood_Group': this.Blood_Group,
        'Height': this.Height,
        'Weight': this.Weight,
        'MajorIllness': this.MajorIllness,
        'IS_Night_Blind': this.IS_Night_Blind,
        'Is_Color_Blind': this.Is_Color_Blind,
        'DOB': this.DOB,
        'Signature': this.attachments2url[0],
        'Paygroup': this.Paygroup,
        'PagiBig_ID': this.PagiBig_ID,
        'EligibilityGroup': this.EligibilityGroup,
        'CivilStatus': this.CivilStatus,
        'PagiBigMP2': this.PagiBigMP2,
        // 'PagiBigAccountNo': this.PagiBigAccountNo,
        // 'PagibigMembership': this.PagibigMembership,
        // 'PagibigRemarks': this.PagibigRemarks,
        'EMPLOYEE_TIN': this.EMPLOYEE_TIN,
        'PHILHEALTH_NO': this.PHILHEALTH_NO,
        'SSSNO': this.SSSNO,
        'department': this.department1,
        'Level': this.level,
        'logintype': this.LoginType,
        'ParentCompany': this.ParentCompany,
        'AssignedCompany': this.AssignedCompany,
        'ShiftID': 0,
        'Restdays': this.Restdays,
        'Is_Solo_Parent': this.Is_Solo_Parent == undefined ? 0 : this.Is_Solo_Parent,
        'OrginalBms': this.OrginalBms,
        'PreviousEffectivityBMSDate': this.PreviousEffectivityBMSDate,
        'PreviousBMS': this.PreviousBMS,
        'CurrentEffectivityBMSDate': this.CurrentEffectivityBMSDate,
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
        'kDoHkolB4nFb1Zmt': 'txm781yfPCbp27xi',
        'OTEligibility': this.OTEligibility,
        'Frequency': this.Frequency,
        'RateCode': this.RateCode,
        'CompRate': this.CompRate,
      }
      this.DigiofficeService.UpdateStaff(eb)
        .subscribe({
          next: data => {
            debugger
            /*  Swal.fire('Updated Successfully') */
            location.reload();
            this.loader = false
            this.showPopup = 1;
            this.messageId = 10;
          }, error: (err) => {
            // Swal.fire('Issue in Updating Staff');
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

  public nextPositionDetails(){
    location.href = "#/Employee/PositionDetails/"+this.StaffID;
  }
}
