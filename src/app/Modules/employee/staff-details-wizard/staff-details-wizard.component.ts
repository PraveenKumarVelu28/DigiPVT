import { Component, OnInit } from '@angular/core';
import { DigiPVTService } from 'src/app/Pages/Services/digi-pvt.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe, NgStyle } from '@angular/common';
import { threadId } from 'worker_threads';
import { timeStamp } from 'console';

@Component({
  selector: 'app-staff-details-wizard',
  templateUrl: './staff-details-wizard.component.html',
  styleUrls: ['./staff-details-wizard.component.css']
})
export class StaffDetailsWizardComponent implements OnInit {

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden,
  };

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.circles,
    toolbarSettings: {},
  };
  SubSection: any;
  AlternateHRManager: any;
  WorkArrangement: any;
  EmpEndDate: any;
  positionlist: any;
  EmpStartDate: any;
  Section1: any;
  Section12: any;
  SubSection1: any;
  SubSection12: any;
  WorkingLocationID: any;
  photo: any;
  language: any;
  term: any;
  JobTitle: any;
  signatureurl: any;
  PWDDisabilityAttachmenturl: any;
  PWDDisabilityAttachment: string = '';
  IDAttachment: any;
  Attachmentedu: any;
  NominationAttachment: any;
  LanguageID: any;
  AttachmentEmployment: any;
  depPrifillAttachment: any;
  GcashHolderName: any;
  GcashAccountNumber: any;
  GcashMobileNumber: any;
  banklist: any;
  public attachments3: any = [];
  public attachments5: any = [];
  public attachments3url: any = [];
  public attachments5url: any = [];
  public attachments6: any = [];
  public attachments6url: any = [];
  public attachments7: any = [];
  public attachments7url: any = [];
  public attachments8: any = [];
  public attachments8url: any = [];
  public attachments9: any = [];
  public attachments9url: any = [];
  attachment: any;
  Dependentlist: any;
  SectionList: any;
  p: any = 1;
  count1: any = 10;
  IssueDate1: any;
  ExpiryDate1: any;
  maxdate: any;
  PositionLogin: any;
  // SpokenLanguage12:any;
  constructor(
    public DigiofficeService: DigiPVTService,
    private ngWizardService: NgWizardService,
    public router: Router,
    private activatedroute: ActivatedRoute,
    public datepipe: DatePipe,
    private sanitizer: DomSanitizer
  ) { }
  immediateLevelManager: any;
  BranchAddress: any;
  Restdays: any;
  Is_Solo_Parent: any;
  EmployeementType: any;
  HMOInsurance: any;
  MeritInsurance: any;
  SubSectionList: any;
  DailerLicense: any;
  Incrementals: any;
  Designation1: any;
  AddressType2: any;
  IncentiveLeave: any;
  TaxStatus: any;
  GCashNumber: any;
  TalentSegment: any;
  CostCentre: any;
  TranspoAllowance: any;
  CommAllowance: any;
  MealAllowance: any;
  RiceAllowance: any;
  MedicineAllowance: any;
  MaintenanceDepreciationAllowance: any;
  EffectivityofAllowance: any;
  dropdownList: any = [];
  dropdownSettings4: any = [];
  selectedItems: any = [];

  dropdownSettings: any = {};
  dropdownSettings1: any = {};
  dropdownSettings2: any = {};
  dropdownSettings3: any = {};
  prefillAttachment: any;
  dropdownSettingsresdays: any = {};
  Title: any;
  PlaceO_f_Birth: any;
  Status: any;
  CostCenter: any;
  GLCode: any;
  EmailAddress: any;
  Region: any;
  Name: any;
  employmentlist: any;
  Country_Of_Birth: any;
  Date_Of_Marriage: any;
  Middle_Name: any;
  Age: any;
  Course: any;
  BillingAddress: any;
  Personal_Email: any;
  PersonalEmailForContact: any;
  Last_Name: any;
  Gender: any;

  Mobile: any;

  RoleType: any;
  Supervisor: any;
  RoleTypeList: any;
  supervisorlist: any;
  Religion: any;
  Ethnicity: any;
  Citizen_Ship: any;
  Nationality: any;
  Is_Disabled: any;
  MajorIllness: any;
  Is_Color_Blind: any;
  IS_Night_Blind: any;
  Weight: any;
  Height: any;
  Blood_Group: any;
  DependentName: any;
  Relationship: any;
  loader: any;
  DateOfBirth: any;
  Address: any;
  levellist: any;
  Is_Dependent: any;
  Id_Number: any;
  Is_Child_Adopted: any;
  Race: any;
  CitizenShip: any;
  Gender1: any;
  Working_Status: any;
  Request_Type: any;
  ExtensionEndDate: any;
  ProbationEndDate: any;
  ProbationStartDate: any;
  NextLevelManager: any;
  HRManager: any;
  GroupHead: any;
  EmployementType: any;
  EmployementTypeold: any;
  WorksiteCity: any;
  WorksiteProvince: any;
  WorksiteLocation: any;
  CompanyIssuedMobile: any;
  SAPVendorNo: any;
  Dependent: any;
  Percentage: any;
  NomineeType: any;
  GuardianName: any;
  GuardianRelationship: any;
  ParentCompany: any;
  AssignedCompany: any;
  ComapanyName: any;
  StartDate: any;
  EndDate: any;
  Salary: any;
  CurrentEmployer: any;
  Shiflist: any;
  EducationType: any;
  Qualification: any;
  NameOfQualification: any;
  Branch: any;
  InstitutionName: any;
  Country: any;
  ScoreType: any;
  Grade: any;
  StartDateMonth: any;
  StartDateYear: any;
  EndDateMonth: any;
  EndDateYear: any;
  NameOfBank: any;
  AccountHolderName: any;
  BankAccountNumber: any;
  IDType: any;
  Number: any;
  NameOnDocument: any;
  IssueDate: any;
  ExpiryDate: any;
  IssuingAuthority: any;
  PlaceOfIssue: any;
  VisaType: any;
  VisaNumber: any;
  VisaIssueDate: any;
  VisaExpiryDate: any;
  EmployeeName: any;
  Grade1: any;
  Designation: any;
  PayRateType: any;
  PayStructure: any;
  EffectiveFromDate: any;
  Reason: any;
  EmployeeCode: any;
  OfficialEmail: any;
  Band: any;
  Grade2: any;
  JobRole: any;
  Manager: any;
  EmployeeType: any;
  EmployeeStatus: any;
  NoticePeriod: any;
  ProbationPeriod: any;
  ConfirmationDueDate: any;
  ConfirmationStatus: any;
  AddressType: any;
  Relationship1: any;
  FindPlace: any;
  AddressLine1: any;
  AddressLine2: any;
  AddressLine3: any;
  AddressLine4: any;
  District: any;
  Province: any;
  Country1: any;
  SubDistrictPostcode: any;
  SubDistrictPostcode2: any;
  Mobile1: any;
  LandLineFax: any;
  IsCorrespondance: any;
  RequestType: any;
  EmergencyContactName: any;
  EmergencyContactName1: any;
  EmergencyContactRelationship: any;
  EmergencyContactRelationship1: any;
  EmergencyContactMobileNumber: any;
  EmergencyContactMobileNumber1: any;
  EmergencyContactOfficeNumber: any;
  EmergencyContactLandLineNumber: any;
  EmergencyContactLandLineNumber1: any;
  EmergencyContact_EmailID: any;
  EmergencyContact_EmailID1: any;
  EmergencyContact_Address: any;
  EmergencyContact_Address1: any;
  SpokenLanguage: any;
  StaffID: any;
  ID: any;
  BuildingID: any;
  Provincelist: any;
  Barangaylist: any;
  CountryID: any;
  StateID: any;
  CityID: any;
  Citylist: any;
  Barangay: any;
  PhoneNo: any;
  EmailID: any;
  TypeID: any;
  Attachment: any;
  JoiningDate: any;
  ShiftType: any;
  LeavesPerMonth: any;
  WorkTimings: any;
  ContactNumber: any;
  EmployeeID: any;
  ChaildTotal: any;
  MedicalLeaveEntitlement: any;
  MaternitityLeaveEntitlement: any;
  PaternitityLeaveEntitlement: any;
  CompassionateLeaveEntitlement: any;
  Leavesfrompreviousyear: any;
  ExtendedChildcareLeaveEntitlement: any;
  MarriageLeaveEntitlement: any;
  Countrylist: any;
  Department: any;
  BranchName: any;
  EducationGrade: any;
  level: any;
  NickName: any;
  dattachment: any;
  SubsidaryList: any;
  Supervisorname: any;

  dropdownRoleList: any = [];

  roledropdownSettings: any = {};

  employeedropdownSettings: any = {};

  dropdownDeptList: any = [];
  deptselectedItems: any = [];
  deptdropdownSettings: any = {};

  dropdownBandList: any = [];

  banddropdownSettings: any = {};

  HRManagerlist: any;

  Designationlist: any = [];
  DesignationselectedItems: any = [];
  DesignationdropdownSettings: any = {};

  countrylist: any = [];

  countrydropdownSettings: any = {};

  countryofbirthdropdownSettings: any = {};

  languagedropdownSettings: any = {};

  citylist: any = [];

  citydropdownSettings: any = {};

  provincelist: any = [];

  provincedropdownSettings: any = {};

  worklocationlist: any = [];

  worklocationdropdownSettings: any = {};

  costcenterlist: any = [];
  costcenterdropdownSettings: any = {};

  grouplist: any = [];

  groupdropdownSettings: any = {};

  leveldropdownSettings: any = {};

  Divisionlist: any = [];

  DivisiondropdownSettings: any = {};
  SectiondropdownSettings: any = {};
  SubSectiondropdownSettings: any = {};
  login: any;
  group: any;
  leavelist: any;
  myDate: any;
  PleaseSpecify: any;
  Departmentlist: any;
  Bankslist: any;
  Religion1: any;
  supervisorlist12: any;
  restdaylist: any;
  MotherMaidenName: any;
  FatherMaidenName: any;
  PreviousBMS: any;
  CurrentBMS: any;
  COLA: any;
  PreviousEffectivityBMSDate: any;
  CurrentEffectivityBMSDate: any;
  OrginalBms: any;
  PagiBigAccountNo: any;
  PagiBig_ID: any;
  Paygroup: any;
  SSSNO: any;
  accountType: any;
  PHILHEALTH_NO: any;
  EMPLOYEE_TIN: any;
  PagibigRemarks: any;
  PagibigMembership: any;
  ConfirmationSatus: any;
  Entity: any;
  WorksiteCountry: any;
  Section: any;
  Division: any;
  Group: any;

  BeneficiaryDOB: any;
  branchAddress: any;
  barangaylist: any;
  DOB: any;
  NextSupervisor: any;
  public attachments2: any = [];
  public attachments4: any = [];
  public attachments4url: any = [];
  public attachments2url: any = [];
  Supervisor1: any;
  Provincelist1: any;
  NextLevelManager1: any;
  Designation12: any;
  Costcenter12: any;
  Group12: any;
  WorksiteCountry12: any;
  Country_Of_Birth12: any;
  WorksiteCity12: any;
  WorksiteProvince12: any;
  Division12: any;
  WorksiteLocation12: any;
  Band12: any;
  JobRole12: any;
  AccountType: any;
  NextLevelManager12: any;
  HRManager12: any;
  HRManager1: any;
  GroupHead1: any;
  GroupHead12: any;
  Department12: any;
  Department1: any;
  CostCenter1: any;
  WorksiteCountry1: any;
  Country_Of_Birth1: any;
  JobRole32: any;
  Division1: any;
  WorksiteCity1: any;
  WorksiteProvince1: any;
  WorksiteLocation1: any;
  Group1: any;
  Band1: any;
  JobRole33: any;
  idaphoto: any;
  AlternateHRManager1: any;
  AlternateHRManager12: any;
  managerList1: any;
  roleid: any;
  educationlist: any;
  currentUrl: any;
  MobilePersonal: any;
  LicenseOrCertification: any;
  CountryID2: any;
  StateID2: any;
  CityID2: any;
  BarangayType2: any;
  IDList: any;
  staffID: any;
  eattachment: any;
  Level1: any;
  level12: any;
  levellist234: any;
  levellist2345: any;
  showeduationoption: any;
  employeedownRoleList: any;
  companyid: any;
  AddressTypeTwo: any;
  attachments213: any = [];
  public attachments21: any = [];
  public Attactments = [];
  public attachments: any = [];
  // PWDDisabilityAttachment:any;
  EmploymentLevel: any;
  ngOnInit(): void {
    this.AddressType2 = 0;
    this.AddressType = 0;

    this.Country_Of_Birth = '0';
    this.Designation = 0;
    this.showeduationoption = 0
    this.maxdate = new Date().toISOString().split("T")[0];
    this.currentUrl = window.location.href;
    this.staffID = localStorage.getItem('staffid');
    this.PositionLogin = "0";
    this.NomineeType = 'Select One'
    this.EmployementTypeold = 'Select One'
    this.WorkArrangement = '0';

    this.accountType = '0';
    this.Course = '0';
    this.SpokenLanguage = "0";
    this.ConfirmationSatus = '0';
    this.EmployeementType = '0';
    this.Status = 'selected';
    this.ParentCompany = '';
    this.AssignedCompany = '';
    this.CountryID = 0;
    this.CountryID2 = 0;
    this.StateID = 0;
    this.StateID2 = 0;
    this.CityID = 0;
    this.CityID2 = "0";
    this.Barangay = 'Select Barangay';
    this.BarangayType2 = 'Select Barangay';
    this.showtable = 0;
    this.Relationship1 = 'Select One';
    this.Gender1 = '0';
    this.ShiftType = '';
    this.NameOfQualification = ""
    this.Department = '0';
    this.Race = 'Race';
    this.Citizen_Ship = '';
    this.CitizenShip = '';
    this.cb = '';
    this.Religion = '';
    this.Religion1 = '';
    this.Ethnicity = '';
    this.Working_Status = 'Select One';
    this.Title = 0;


    this.GuardianRelationship = 'Select One';
    this.EducationType = '';
    this.ScoreType = 'Select';
    this.NameOfBank = ' ';
    this.IDType = 'Select';
    this.VisaType = 'Select';
    this.Nationality = '';
    this.TalentSegment = '';
    this.Blood_Group = '';
    this.Band = '0';
    this.EmployeeStatus = '';
    this.Supervisor = "";
    this.Country_Of_Birth = 0;
    (this.Status = ''), (this.RoleType = 0);
    this.Paygroup = '';
    this.NoticePeriod = 0;
    this.EmployeementType = 0;
    this.level = "";
    this.Branch = "";
    this.Entity = '0';
    this.JobRole = '0';

    this.Group = '';
    this.Gender = '0';
    this.Division = "";
    this.Section = "";
    this.NextLevelManager = "";
    this.GroupHead = "";
    this.CostCenter = "";
    this.WorksiteCountry = '0';
    this.WorksiteProvince = '0';
    this.WorksiteCity = '0';
    this.WorksiteLocation = '0';
    this.EmploymentLevel = 'Select One';
    this.Country = '0';


    this.loader = true;
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'fullname',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.dropdownSettings1 = {
      singleSelection: true,
      idField: 'id',
      textField: 'fullname',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.dropdownSettings2 = {
      singleSelection: true,
      idField: 'id',
      textField: 'fullname',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.dropdownSettings3 = {
      singleSelection: true,
      idField: 'id',
      textField: 'fullname',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.dropdownSettings4 = {
      singleSelection: true,
      idField: 'id',
      textField: 'fullname',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.dropdownSettingsresdays = {
      singleSelection: false,
      idField: 'name',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.restdaylist = [
      {
        name: 'Monday',
      },
      {
        name: 'Tuesday',
      },
      {
        name: 'Wednesday',
      },
      {
        name: 'Thursday',
      },
      {
        name: 'Friday',
      },
      {
        name: 'Saturday',
      },
      {
        name: 'Sunday',
      },
    ];

    this.Is_Disabled = false;
    this.showtable = 0;
    this.myDate = new Date().toISOString().split('T')[0];
    this.roleid = localStorage.getItem('roledid');
    this.companyid = sessionStorage.getItem('companyid');
    (this.Status = 'selected'),
      // (this.Department = 0);
      // this.level = "";
      this.Blood_Group = '';

    this.roledropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };

    this.employeedropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };

    this.DivisiondropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'sort',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };


    this.SectiondropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'sort',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };

    this.SubSectiondropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'sort',
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

    this.costcenterdropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.groupdropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.leveldropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.banddropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.DesignationdropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };

    this.countrydropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.countryofbirthdropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };


    this.languagedropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'languageName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.citydropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.provincedropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };

    this.roledropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
    };



    this.worklocationdropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'short',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.GetLanguageMaster();
    this.GetSubsidaryMaster();
    this.GetShiftMaster();
    this.GetBanks();
    this.GetLevelType();
    this.GetCountryType();
    this.GetDepartment();
    this.GetRoleType();
    this.GetBrandMaster();
    this.GetCostCentersMaster();
    this.GetmyDetails();
    this.GetDesignationMaster();
    this.GetCountryType();
    this.getcity();
    this.getstate();
    this.GetGroupMaster();
    this.GetDivisionMaster();

    this.GetWorkingLocationMaster();
    this.getDependdentList();
    this.getbarangay2()
    this.GetSectionMaster();
    this.GetMajorMaster();
    this.GetSubSectionMaster();
    this.GetBankDetails();
    this.employeedownRoleList = [
      { id: 1, name: 'Consultant' },
      { id: 2, name: 'Project Hire' },
      { id: 3, name: 'Regular' },
    ];
    this.GetNomination1();
    this.GetEducationDetails();
    this.GetIDDetails();
    this.activatedroute.params.subscribe((params) => {
      debugger;
      this.ID = params['id'];
      this.StaffID = params['id'];
      if (this.ID == undefined) {
        (this.Title = 0),
          (this.Age = ' '),
          (this.Date_Of_Marriage = ' '),
          (this.Is_Disabled = false),
          // this.Blood_Group = ' ',
          (this.Height = 0),
          (this.Weight = 0),
          // this.MajorIllness = ' ',
          (this.IS_Night_Blind = 0),
          (this.Is_Color_Blind = 0),
          // this.EmployeeCode = " ",
          // this.OfficialEmail = " ",
          // this.Band = " ",
          (this.Grade = ' '),
          // this.JobRole = " ",
          (this.Manager = ' '),
          // this.EmployeeStatus = " ",
          // this.NoticePeriod = " ",
          // this.ProbationPeriod = " ",
          (this.ConfirmationDueDate = ' '),
          (this.ConfirmationStatus = ' '),
          (this.EmployeeName = ' '),

          (this.Relationship = ' '),
          (this.FindPlace = ' '),
          (this.District = ' '),
          (this.Province = ' '),
          // this.Country = 0,
          // this.SubDistrictPostcode = " ",
          (this.LandLineFax = ' '),
          (this.IsCorrespondance = ' '),
          (this.RequestType = ' '),
          // this.DependentName = " ",
          (this.Relationship = ' '),
          // this.level = " ",
          (this.DateOfBirth = ' '),
          // this.Address = " ",
          // this.Mobile = 0,
          (this.Is_Dependent = ' '),
          // this.Id_Number = " ",
          (this.Is_Child_Adopted = ' '),
          // this.Race = " ",
          // this.CitizenShip = " ",
          // this.NickName = ""
          // this.Religion = " ",
          // this.Working_Status = " ",
          (this.Request_Type = ' '),
          // this.Dependent = " ",
          // this.Percentage = " ",
          // this.NomineeType = " ",
          // this.GuardianName = " ",
          // this.GuardianRelationship = " ",
          (this.ComapanyName = ' '),
          (this.StartDate = ' '),
          (this.EndDate = ' '),
          (this.Salary = ' '),
          (this.CurrentEmployer = ' '),
          // this.EducationType = " ",
          // this.Qualification = " ",
          // this.NameOfQualification = " ",
          // this.Branch = " ",
          // this.InstitutionName = " ",
          // this.Country = 0,
          // this.ScoreType = " ",

          (this.StartDateMonth = ' '),
          (this.StartDateYear = ' '),
          (this.EndDateMonth = ' '),
          (this.EndDateYear = ' '),
          // this.NameOfBank = " ",
          // this.AccountHolderName = " ",
          // this.BankAccountNumber = " ",
          // this.IDType = " ",
          // this.Number = " ",
          // this.NameOnDocument = " ",
          (this.IssueDate = ' '),
          (this.ExpiryDate = ' '),
          // this.IssuingAuthority = " ",
          // this.PlaceOfIssue = " ",
          // this.VisaType = " ",
          // this.VisaNumber = " ",
          (this.VisaIssueDate = ' '),
          (this.VisaExpiryDate = ' '),
          (this.EmployeeName = ' '),
          (this.Designation = ' '),
          (this.PayRateType = ' '),
          (this.PayStructure = ' '),
          (this.EffectiveFromDate = ' '),
          (this.Reason = ' ');
      } else {
        // this.DigiofficeService.GetAllStaffNew().subscribe(data => {
        //   debugger
        //   this.supervisorlist = data.filter(x => x.type == 2);
        // });
        this.GetEducationDetails();
        this.loader = true;
        this.DigiofficeService.GetAllStaffNew().subscribe((data) => {
          debugger;
          this.GetLanguageMaster();
          this.leavelist = data.filter((x) => x.id == this.ID);
          this.Title = (this.leavelist[0].title1 == null || this.leavelist[0].title1 == 0 || this.leavelist[0].title1 == undefined) ? 'Mr' : this.leavelist[0].title1;
          (this.Name = this.leavelist[0].name);
          this.MobilePersonal = this.leavelist[0].phoneNo;
          (this.Middle_Name = this.leavelist[0].middle_Name);
          (this.Last_Name = this.leavelist[0].last_Name);
          (this.PlaceO_f_Birth = this.leavelist[0].placeO_f_Birth);
          // (this.Country_Of_Birth = this.leavelist[0].country_Of_Birth);
          this.Country_Of_Birth1 = this.leavelist[0].country_Of_Birth;

          this.DigiofficeService.GetCountryType().subscribe((data) => {
            debugger;
            this.Country_Of_Birth12 = data.filter(
              (x) => x.id == this.Country_Of_Birth1
            );
            this.loader = false;
            this.Country_Of_Birth1 = this.Country_Of_Birth12;
            this.Country_Of_Birth = this.Country_Of_Birth1[0].id;
            console.log(' this.Country_Of_Birth', this.Country_Of_Birth);
          });
          this.Age = this.leavelist[0].age;
          this.Gender = this.leavelist[0].gender;
          this.Status = this.leavelist[0].status;
          this.ShiftType = this.leavelist[0].shiftID;
          this.Restdays = this.leavelist[0].restdays;
          this.attachment = this.leavelist[0].attachment;
          if (
            this.datepipe.transform(
              this.leavelist[0].date_Of_Marriage,
              'yyyy-MM-dd'
            ) == '1990-01-01'
          ) {
            this.Date_Of_Marriage = ' ';
          } else {
            this.Date_Of_Marriage = this.datepipe.transform(
              this.leavelist[0].date_Of_Marriage,
              'yyyy-MM-dd'
            );
          }
          this.Personal_Email = this.leavelist[0].personal_Email;

          (this.Religion = this.leavelist[0].religion);
          (this.Citizen_Ship = this.leavelist[0].citizen_Ship);
          (this.Ethnicity = this.leavelist[0].ethnicity);
          (this.Is_Solo_Parent = this.leavelist[0].is_Solo_Parent),
            (this.Nationality = this.leavelist[0].nationality);
          (this.Is_Disabled = this.leavelist[0].is_Disabled);
          (this.Blood_Group = this.leavelist[0].blood_Group);
          (this.Height = this.leavelist[0].height);
          (this.Weight = this.leavelist[0].weight);
          (this.ParentCompany = this.leavelist[0].parentCompany);
          (this.AssignedCompany = this.leavelist[0].assignedCompany);
          (this.MajorIllness = this.leavelist[0].majorIllness);
          (this.IS_Night_Blind = this.leavelist[0].iS_Night_Blind),
            (this.Is_Color_Blind = this.leavelist[0].is_Color_Blind),
            (this.DOB = this.datepipe.transform(
              this.leavelist[0].dob,
              'yyyy-MM-dd'
            )),
            // this.JoiningDate = this.datepipe.transform(this.leavelist[0].joiningDate, 'yyyy-MM-dd'),
            // this.RoleType = this.leavelist[0].type,



            this.DigiofficeService.GetAllStaffNew().subscribe((data) => {
              debugger;
              this.supervisorlist12 = data.filter(
                (x) => x.id == this.Supervisor
              );
              this.loader = false;

            });
          this.Supervisorname = this.leavelist[0].manager;



          (this.Paygroup = this.leavelist[0].paygroup),
            (this.PagiBig_ID = this.leavelist[0].pagiBig_ID),
            (this.PagiBigAccountNo = this.leavelist[0].pagiBigAccountNo),
            (this.PagibigRemarks = this.leavelist[0].pagibigRemarks),
            (this.EMPLOYEE_TIN = this.leavelist[0].employeE_TIN),
            (this.PHILHEALTH_NO = this.leavelist[0].philhealtH_NO),
            (this.SSSNO = this.leavelist[0].sssno),
            (this.PagibigMembership = this.leavelist[0].pagibigMembership),
            // (this.level = this.leavelist[0].levelid);


            (this.OrginalBms = this.leavelist[0].orginalBms),
            (this.PreviousEffectivityBMSDate = this.datepipe.transform(
              this.leavelist[0].previousEffectivityBMSDate,
              'yyyy-MM-dd'
            ));
          //this.PreviousEffectivityBMSDate = this.leavelist[0].previousEffectivityBMSDate,
          (this.PreviousBMS = this.leavelist[0].previousBMS),
            (this.CurrentEffectivityBMSDate = this.datepipe.transform(
              this.leavelist[0].currentEffectivityBMSDate,
              'yyyy-MM-dd'
            ));

          //this.CurrentEffectivityBMSDate = this.leavelist[0].currentEffectivityBMSDate,
          (this.CurrentBMS = this.leavelist[0].currentBMS),
            (this.COLA = this.leavelist[0].cola),
            (this.IncentiveLeave = this.leavelist[0].incentiveLeave),
            (this.HMOInsurance = this.leavelist[0].hmOInsurance),
            (this.MeritInsurance = this.leavelist[0].meritInsurance),
            (this.DailerLicense = this.leavelist[0].dailerLicense),
            (this.Incrementals = this.leavelist[0].incrementals),
            (this.TaxStatus = this.leavelist[0].taxStatus),
            (this.GCashNumber = this.leavelist[0].gCashNumber),
            (this.TalentSegment = this.leavelist[0].talentSegment),
            (this.CostCentre = this.leavelist[0].costCentre),
            (this.TranspoAllowance = this.leavelist[0].transpoAllowance),
            (this.CommAllowance = this.leavelist[0].commAllowance),
            (this.MealAllowance = this.leavelist[0].mealAllowance),
            (this.RiceAllowance = this.leavelist[0].riceAllowance),
            (this.MedicineAllowance = this.leavelist[0].medicineAllowance),
            (this.MaintenanceDepreciationAllowance =
              this.leavelist[0].maintenanceDepreciationAllowance),
            (this.EffectivityofAllowance =
              this.leavelist[0].effectivityofAllowance),
            (this.MotherMaidenName = this.leavelist[0].motherMaidenName),
            (this.FatherMaidenName = this.leavelist[0].fatherMaidenName),
            (this.SpokenLanguage = this.leavelist[0].spokenLanguage),
            (this.EmployeeCode = this.leavelist[0].employeID),
            (this.photo = this.leavelist[0].signature),
            (this.signatureurl = this.leavelist[0].signatureurl);
          (this.PWDDisabilityAttachmenturl = this.leavelist[0].pwdDisabilityAttachmenturl);
          (this.PWDDisabilityAttachment = this.leavelist[0].pwdDisabilityAttachment);
          (this.NickName = this.leavelist[0].nickName),
            (this.PleaseSpecify = this.leavelist[0].pleaseSpecify),
            (this.PositionLogin = this.leavelist[0].login),
            this.loader = false;


        });
        //this.GetLevelType();
        this.DigiofficeService.GetPositionDetails().subscribe((data) => {
          debugger;
          console.log('went to postion');
          this.loader = true;
          this.positionlist = data.filter((x) => x.staffId == this.ID);
          (this.WorksiteProvince = this.positionlist[0].worksiteProvince),
            // this.DigiofficeService.GetStateType().subscribe((data) => {
            //   debugger;
            //   this.WorksiteProvince12 = data.filter(
            //     (x) => x.id == this.WorksiteProvince1
            //   );
            //   this.loader = false;
            //   this.WorksiteProvince1 = this.WorksiteProvince12;
            //   this.WorksiteProvince = this.WorksiteProvince1[0].id;
            //   console.log('this.WorksiteProvince', this.WorksiteProvince);
            // });
            this.level = this.positionlist[0].level;
          (this.Entity = this.positionlist[0].entity),
            this.GetGroupMaster();
          (this.Group = this.positionlist[0].group),
            // this.DigiofficeService.GetGroupMaster().subscribe((data) => {
            //   debugger;
            //   this.Group12 = data.filter((x) => x.id == this.Group);
            //   this.loader = false;
            //   this.Group1 = this.Group12;
            //   this.Group = this.Group1[0].id;
            // });
            this.GetDivisionMaster();
          (this.Department = this.positionlist[0].department),
            // this.DigiofficeService.GetDepartment().subscribe((data) => {
            //   debugger;
            //   this.Department12 = data.filter((x) => x.id == this.Department1);
            //   this.loader = false;
            //   this.Department1 = this.Department12;
            //   this.Department = this.Department1[0].id;
            // });
            (this.Division = this.positionlist[0].division),
            // this.DigiofficeService.GetDivisionMaster().subscribe((data) => {
            //   debugger;
            //   this.Division12 = data.filter((x) => x.id == this.Division);
            //   this.loader = false;
            //   this.Division1 = this.Division12;
            //   this.Division = this.Division1[0].id;
            // });
            this.GetDepartment();
          (this.Section = this.positionlist[0].section),


            (this.EmployeeCode = this.positionlist[0].employeeCode),
            (this.JoiningDate = this.datepipe.transform(
              this.positionlist[0].joiningDate,
              'yyyy-MM-dd'
            )),
            // (this.OfficialEmail = this.positionlist[0].officialEmail),
            (this.Band = this.positionlist[0].band);
          ;
          this.Section = this.positionlist[0].section;
          this.GetSectionMaster();

          // this.DigiofficeService.GetSectionMaster().subscribe((data) => {
          //   debugger;
          //   this.Section12 = data.filter((x) => x.id == this.Section);
          //   this.loader = false;
          //   this.Section1 = this.Section12;
          //   this.Section = this.Section1[0].id;
          // });

          (this.SubSection = this.positionlist[0].subSection),
            this.DigiofficeService.GetSubSectionMaster().subscribe((data) => {
              debugger;
              this.SubSection12 = data.filter((x) => x.sort == this.SubSection);
              this.loader = false;
              this.SubSection1 = this.SubSection12;
              this.SubSection = this.SubSection1[0].id;
            });





          this.DigiofficeService.GetBrandMaster().subscribe((data) => {
            debugger;
            this.Band12 = data.filter((x) => x.id == this.Band);
            this.loader = false;
            this.Band1 = this.Band12;
            this.Band = this.Band1[0].id;


          });


          this.WorkArrangement = this.positionlist[0].workArrangement
          // this.DigiofficeService.GetBrandMaster().subscribe((data) => {
          //   debugger;
          //   this.Band12 = data.filter((x) => x.id == this.Band);
          //   this.loader = false;
          //   this.Band1 = this.Band12;
          //   this.Band = this.Band1[0].id;
          // });


          this.GetDesignationMaster();





          this.level = this.positionlist[0].level;
          this.DigiofficeService.GetLevelType().subscribe((data) => {
            debugger;
            this.levellist2345 = data.filter(x => x.id == this.Level1);
            this.Level1 = this.levellist2345
            this.level = this.Level1[0].id


          });

          (this.Grade = this.positionlist[0].grade),
            (this.Manager = this.positionlist[0].manager),
            (this.EmployeementType = this.positionlist[0].employeeType),
            (this.EmployeeStatus = this.positionlist[0].employeeStatus),
            (this.NoticePeriod = this.positionlist[0].noticePeriod),
            (this.ProbationPeriod = this.positionlist[0].probationPeriod),
            (this.ConfirmationDueDate = this.datepipe.transform(
              this.positionlist[0].confirmationDueDate,
              'yyyy-MM-dd'
            ) == '1990-01-01' ? ' ' : this.datepipe.transform(
              this.positionlist[0].confirmationDueDate,
              'yyyy-MM-dd'
            )),
            (this.ConfirmationStatus = this.positionlist[0].confirmationStatus),
            (this.EmployeeName = this.positionlist[0].employeeName);

          (this.ProbationEndDate = this.datepipe.transform(
            this.positionlist[0].probationEndDate,
            'yyyy-MM-dd'
          ) == '1990-01-01' ? ' ' : this.datepipe.transform(
            this.positionlist[0].probationEndDate,
            'yyyy-MM-dd'
          ));
          (this.ProbationStartDate = this.datepipe.transform(
            this.positionlist[0].probationStartDate,
            'yyyy-MM-dd'
          ) == '1990-01-01' ? ' ' : this.datepipe.transform(
            this.positionlist[0].probationStartDate,
            'yyyy-MM-dd'
          )),


            (this.ExtensionEndDate = this.datepipe.transform(
              this.positionlist[0].extensionEndDate,
              'yyyy-MM-dd'
            ) == '1990-01-01' ? ' ' : this.datepipe.transform(
              this.positionlist[0].extensionEndDate,
              'yyyy-MM-dd'
            ));


          this.EmpStartDate = ' ';
          this.EmpEndDate = ' ';
          this.StartDate = ' ';
          this.EndDate = ' ';
          (this.JobRole = this.positionlist[0].jobRole),
            this.DigiofficeService.GetRoleType().subscribe((data) => {
              debugger;
              this.JobRole12 = data.filter((x) => x.id == this.JobRole);
              this.loader = false;
              this.JobRole32 = this.JobRole12;
              this.JobRole = this.JobRole12[0].id;
            });


          (this.Supervisor = this.positionlist[0].manager);

          this.DigiofficeService.GetAllStaffNew().subscribe((data) => {
            debugger;
            this.supervisorlist12 = data.filter(
              (x) => x.id == this.Supervisor1
            );
            this.loader = false;
            this.Supervisor1 = this.supervisorlist12;
            this.Supervisor = this.Supervisor1[0].id;
            console.log('this.Supervisor21', this.Supervisor);
          });



          this.WorksiteCountry = this.positionlist[0].worksiteCountry;

          // this.DigiofficeService.GetCountryType().subscribe((data) => {
          //   debugger;
          //   this.WorksiteCountry12 = data.filter(
          //     (x) => x.id == this.WorksiteCountry1
          //   );
          //   this.loader = false;
          //   this.WorksiteCountry1 = this.WorksiteCountry12;
          //   this.WorksiteCountry = this.WorksiteCountry1[0].id;
          //   console.log(' this.WorksiteCountry21', this.WorksiteCountry);
          // });

          this.NextLevelManager = this.positionlist[0].nextLevelManager;

          // this.DigiofficeService.GetAllStaffNew().subscribe((data) => {
          //   debugger;
          //   this.NextLevelManager12 = data.filter(
          //     (x) => x.id == this.NextLevelManager1
          //   );
          //   this.loader = false;
          //   this.NextLevelManager1 = this.NextLevelManager12;
          //   this.NextLevelManager = this.NextLevelManager1[0].id;
          // });

          (this.HRManager1 = this.positionlist[0].hrManager),
            this.DigiofficeService.GetAllStaffNew().subscribe((data) => {
              debugger;
              this.HRManager12 = data.filter((x) => x.id == this.HRManager1);
              this.loader = false;
              this.HRManager1 = this.HRManager12;
              this.HRManager = this.HRManager1[0].id;
            });

          (this.AlternateHRManager1 = this.positionlist[0].alternateHRManager),
            this.DigiofficeService.GetAllStaffNew().subscribe((data) => {
              debugger;
              this.AlternateHRManager12 = data.filter(
                (x) => x.id == this.AlternateHRManager1
              );
              this.loader = false;
              this.AlternateHRManager1 = this.AlternateHRManager12;
              this.AlternateHRManager = this.AlternateHRManager1[0].id;
            });

          (this.GroupHead = this.positionlist[0].groupHead),
            // this.DigiofficeService.GetAllStaffNew().subscribe((data) => {
            //   debugger;
            //   this.GroupHead12 = data.filter((x) => x.id == this.GroupHead1);
            //   this.loader = false;
            //   this.GroupHead1 = this.GroupHead12;
            //   this.GroupHead = this.GroupHead1[0].id;
            // });




            // this.WorksiteProvince = this.leavelist[0].worksiteProvince,


            console.log('this.WorksiteProvince121', this.WorksiteProvince);

          (this.WorksiteCity = this.positionlist[0].worksiteCity),
            // this.DigiofficeService.GetCityType().subscribe((data) => {
            //   debugger;
            //   this.WorksiteCity12 = data.filter(
            //     (x) => x.id == this.WorksiteCity1
            //   );
            //   this.loader = false;
            //   this.WorksiteCity1 = this.WorksiteCity12;
            //   this.WorksiteCity = this.WorksiteCity1[0].id;
            //   console.log('this.WorksiteCity21', this.WorksiteCity);
            // });
            console.log('this.WorksiteCity121', this.WorksiteCity);

          (this.WorksiteLocation = this.positionlist[0].worksiteLocation),
            // this.DigiofficeService.GetWorkingLocationMaster().subscribe(
            //   (data) => {
            //     debugger;
            //     this.WorksiteLocation12 = data.filter(
            //       (x) => x.id == this.WorksiteLocation1
            //     );
            //     this.loader = false;
            //     this.WorksiteLocation1 = this.WorksiteLocation12;
            //     this.WorksiteLocation = this.WorksiteLocation1[0].id;
            //     console.log('this.WorksiteLocation21', this.WorksiteLocation);
            //   }
            // );
            console.log('this.WorksiteLocation121', this.WorksiteLocation);

          // (this.CompanyIssuedMobile = this.positionlist[0].companyIssuedMobile),
          (this.SAPVendorNo = this.positionlist[0].sapVendorNo),
            (this.WorkArrangement = this.positionlist[0].workArrangement),
            (this.SubSection = this.positionlist[0].subSection),
            (this.Designation = this.positionlist[0].designation)

              // this.DigiofficeService.GetDesignationMaster().subscribe(
              //   (data) => {
              //     debugger;
              //     this.Designation12 = data.filter(
              //       (x) => x.id == this.Designation
              //     );
              //     this.loader = false;
              //     this.Designation1 = this.Designation12;
              //     this.Designation = this.Designation1[0].id;
              //   }
              // );

              (this.CostCenter = this.positionlist[0].costCentre),
            // this.DigiofficeService.GetCostCentersMaster().subscribe(
            //   (data) => {
            //     debugger;
            //     this.Costcenter12 = data.filter(
            //       (x) => x.id == this.CostCenter1
            //     );
            //     this.loader = false;
            //     this.CostCenter1 = this.Costcenter12
            //     this.CostCenter = this.CostCenter1[0].id;
            //   }
            // );

            this.loader = false;
        });

        this.DigiofficeService.GetMyAddressDetails().subscribe((data) => {
          debugger;

          this.leavelist = data.filter((x) => x.staffId == this.ID);
          (this.OfficialEmail = this.leavelist[0].officialEmail),
            this.PersonalEmailForContact = this.leavelist[0].personalEmailForContact;
          // (this.CompanyIssuedMobile = this.leavelist[0].contactCompanyIssuedMobile),
          (this.CompanyIssuedMobile = this.leavelist[0].companyIssuedMobile),
            (this.AddressType = this.leavelist[0].addressType == null ? 0 : this.leavelist[0].addressType),
            (this.AddressType2 = this.leavelist[0].addressType2 == null ? 0 : this.leavelist[0].addressType2),
            (this.Relationship = this.leavelist[0].relationship),
            (this.FindPlace = this.leavelist[0].findPlace),
            (this.AddressLine1 = this.leavelist[0].addressLine1),
            (this.AddressLine2 = this.leavelist[0].addressLine2),
            (this.AddressLine3 = this.leavelist[0].addressLine3),
            (this.AddressLine4 = this.leavelist[0].addressLine4),
            (this.SubDistrictPostcode =
              this.leavelist[0].subDistrictPostcode),
            (this.SubDistrictPostcode2 =
              this.leavelist[0].subDistrictPostcode2),
            (this.AddressPersonalContactNo = this.leavelist[0].mobile),

            (this.LandLineFax = this.leavelist[0].landLineFax),
            (this.IsCorrespondance = this.leavelist[0].isCorrespondance),
            (this.RequestType = this.leavelist[0].requestType),
            (this.EmergencyContactName =
              this.leavelist[0].emergencyContactName),
            (this.EmergencyContactRelationship =
              this.leavelist[0].emergencyContactRelationship),
            (this.EmergencyContactMobileNumber =
              this.leavelist[0].emergencyContactMobileNumber),

            (this.EmergencyContactLandLineNumber =
              this.leavelist[0].emergencyContactLandLineNumber),
            (this.EmergencyContact_EmailID =
              this.leavelist[0].emergencyContact_EmailID),
            (this.EmergencyContact_Address =
              this.leavelist[0].emergencyContact_Address),

            (this.EmergencyContactName1 =
              this.leavelist[0].emergencyContactName1),
            (this.EmergencyContactRelationship1 =
              this.leavelist[0].emergencyContactRelationship1),
            (this.EmergencyContactMobileNumber1 =
              this.leavelist[0].emergencyContactMobileNumber1),

            (this.EmergencyContactLandLineNumber1 =
              this.leavelist[0].emergencyContactLandLineNumber1),
            (this.EmergencyContact_EmailID1 =
              this.leavelist[0].emergencyContact_EmailID1),
            (this.EmergencyContact_Address1 =
              this.leavelist[0].emergencyContact_Address1),
            (this.CountryID = this.leavelist[0].country),
            (this.CountryID2 = this.leavelist[0].country2),

            (this.StateID = this.leavelist[0].province == null ? 0 : this.leavelist[0].province),
            (this.StateID2 = this.leavelist[0].province2 == null ? 0 : this.leavelist[0].province2),

            (this.CityID = this.leavelist[0].district == null ? 0 : this.leavelist[0].district),
            (this.CityID2 = this.leavelist[0].district2),

            (this.Barangay = this.leavelist[0].barangay),
            (this.BarangayType2 = this.leavelist[0].barangay2),
            (this.EmergencyContactOfficeNumber =
              this.leavelist[0].emergencyContactOfficeNumber),
            console.log("this.leavelist", this.leavelist)
          console.log('this.OfficialEmail', this.OfficialEmail);

          this.getstate();
          this.getcity();
          this.getbarangay();
          if (this.CountryID == 5) {
            debugger;
            this.show = 2;
          } else {
            this.show = 1;
          }
          //  this.CountryID = this.leavelist[0].countryID,
          //   this.DigiofficeService.GetStateType().subscribe(data => {
          //     debugger
          //     this.Provincelist = data.filter(x => x.countryID == this.CountryID);
          //     this.StateID = this.leavelist[0].stateID;
          //     this.DigiofficeService.GetCityType().subscribe(data => {
          //       debugger
          //       this.Citylist = data.filter(x => x.stateID == thidattachments.StateID);
          //       this.CityID = this.leavelist[0].cityID,
          //         this.show = 1;
          //       this.Barangay = this.leavelist[0].barangay
          // })
        });
        this.DigiofficeService.GetDependentDetails().subscribe((data) => {
          debugger;

          this.leavelist = data.filter((x) => x.staffId == this.ID);
          this.dattachment = this.leavelist[0].dattachment
          // this.cb = this.leavelist[0].cb,
          //   this.Religion = this.leavelist[0].religion,
          //   this.DependentName = this.leavelist[0].dependentName,
          //   this.Relationship1 = this.leavelist[0].relationship,
          //   this.Gender1 = this.leavelist[0].gender;
          //   if ((this.datepipe.transform(this.leavelist[0].dateOfBirth, 'yyyy-MM-dd')) == "1990-01-01") {
          //     this.DateOfBirth = " "
          //   }
          //   else {
          //     this.DateOfBirth = this.datepipe.transform(this.leavelist[0].dateOfBirth, 'yyyy-MM-dd')
          //   }

          //    this.DateOfBirth = this.datepipe.transform(this.leavelist[0].dateOfBirth, 'yyyy-MM-dd'),
          //   this.Address = this.leavelist[0].address,
          //   this.Mobile = this.leavelist[0].mobile,
          //   this.Is_Dependent = this.leavelist[0].is_Dependent,
          //   this.Id_Number = this.leavelist[0].id_Number,
          //   this.Is_Child_Adopted = this.leavelist[0].is_Child_Adopted,
          //   this.Race = this.leavelist[0].race,
          //   this.CitizenShip = this.leavelist[0].citizenShip,

          //   this.Working_Status = this.leavelist[0].working_Status,
          //   this.Request_Type = this.leavelist[0].request_Type

          this.loader = false;
        });

        this.DigiofficeService.GetNomination().subscribe((data) => {
          debugger;

          this.leavelist = data.filter((x) => x.staffId == this.ID);
          // (this.Dependent = this.leavelist[0].dependent),
          //   (this.Percentage = this.leavelist[0].percentage),
          //   (this.NomineeType = this.leavelist[0].nomineeType),
          //   (this.GuardianName = this.leavelist[0].guardianName),
          //   (this.GuardianRelationship =
          //     this.leavelist[0].guardianRelationship),
          //   (this.BeneficiaryDOB = this.datepipe.transform(
          //     this.leavelist[0].beneficiaryDOB,
          //     'yyyy-MM-dd'
          //   ) == '1990-01-01' ? ' ' : this.datepipe.transform(
          //     this.positionlist[0].beneficiaryDOB,
          //     'yyyy-MM-dd'
          //   )),

          this.loader = false;
        });

        this.DigiofficeService.GetEmploymentDetails().subscribe((data) => {
          debugger;
          this.employmentlist = data.filter((x) => x.staffId == this.ID);
          // this.employmentlist = data.filter((x) => x.staffId == this.ID).splice(0, 1);


          this.loader = false;
        });

        this.DigiofficeService.GetEducationDetails().subscribe((data) => {
          debugger;
          // this.leavelist = data.filter((x) => String(x.staffId) == this.ID);
          this.leavelist = data.filter(x => x.staffID == this.ID)
          // this.EducationType = this.leavelist[0].educationType,
          // this.NameOfQualification = this.leavelist[0].nameOfQualification,
          // this.Branch = this.leavelist[0].branch,
          // this.InstitutionName = this.leavelist[0].institutionName,
          // this.Country = this.leavelist[0].country,
          // this.EducationGrade = this.leavelist[0].grade,
          // this.StartDateMonth = this.datepipe.transform(this.leavelist[0].startDateMonth, 'yyyy-MM-dd'),
          // this.StartDateYear = this.datepipe.transform(this.leavelist[0].startDateYear, 'yyyy-MM-dd'),
          // this.EndDateMonth = this.datepipe.transform(this.leavelist[0].endDateMonth, 'yyyy-MM-dd'),
          // this.EndDateYear = this.datepipe.transform(this.leavelist[0].endDateYear, 'yyyy-MM-dd'),
          // this.Attachmentedu = this.leavelist[0].eductionAttachment,

          // this.LicenseOrCertification = this.leavelist[0].licenseOrCertification
          this.loader = false
        });

        this.DigiofficeService.GetBanks().subscribe((data) => {
          debugger;
          this.Bankslist = data;
          this.loader = false;
        });

        this.DigiofficeService.GetBankDetails().subscribe((data) => {
          debugger;

          this.leavelist = data.filter((x) => x.staffId == this.ID);
          (this.NameOfBank = this.leavelist[0].nameOfBank),
            (this.AccountHolderName = this.leavelist[0].accountHolderName),
            (this.BankAccountNumber = this.leavelist[0].bankAccountNumber),
            (this.accountType = this.leavelist[0].accountType),
            (this.branchAddress = this.leavelist[0].branchAddress),
            (this.BankAccountNumber = this.leavelist[0].bankAccountNumber);
          (this.BranchName = this.leavelist[0].branchName);
          (this.GcashHolderName = this.leavelist[0].gcashHolderName),
            (this.GcashAccountNumber = this.leavelist[0].gcashAccountNumber);
          (this.GcashMobileNumber = this.leavelist[0].gcashMobileNumber);
          this.loader = false;
        });

        this.DigiofficeService.GetID_Details().subscribe((data) => {
          debugger;

          let temp: any = data.filter((x) => x.staffId == this.ID && x.status == 'Approved');
          // this.NameOnDocument = temp[0].nameOnDocument
          // this.IssuingAuthority = temp[0].issuingAuthority,
          //   this.PlaceOfIssue = temp[0].placeOfIssue;
          // this.IDAttachment = temp[0].idattachment;
          this.idaphoto = temp[0].idaphoto,
            // this.IDType = temp[0].idType,
            // this.Number = temp[0].number,


            // (this.IssueDate = this.datepipe.transform(this.employmentlist[0].issueDate,'yyyy-MM-dd') == '1990-01-01 00:00:00.000'? null: 
            // this.datepipe.transform(this.employmentlist[0].issueDate,'yyyy-MM-dd')),


            // (this.ExpiryDate = this.datepipe.transform(this.employmentlist[0].expiryDate,'yyyy-MM-dd') == '1990-01-01 00:00:00.000'? null: 
            // this.datepipe.transform(this.employmentlist[0].expiryDate,'yyyy-MM-dd')),



            // this.IssueDate = this.datepipe.transform(temp[0].issueDate, 'yyyy-MM-dd') == "1990-01-01 00:00:00.000" ? null : this.datepipe.transform(temp[0].issueDate, 'yyyy-MM-dd'),
            // this.ExpiryDate = this.datepipe.transform(temp[0].expiryDate, 'yyyy-MM-dd') == "1990-01-01 00:00:00.000" ? null : this.datepipe.transform(temp[0].expiryDate, 'yyyy-MM-dd'),

            (this.loader = false);
        });

        this.DigiofficeService.GetVisaDetails().subscribe((data) => {
          debugger;
          this.leavelist = data.filter((x) => x.staffId == this.ID);
          (this.VisaType = this.leavelist[0].visaType),
            (this.VisaIssueDate = this.datepipe.transform(
              this.leavelist[0].visaIssueDate,
              'yyyy-MM-dd'
            )),
            (this.VisaExpiryDate = this.datepipe.transform(
              this.leavelist[0].visaExpiryDate,
              'yyyy-MM-dd'
            ));
          this.loader = false;
        });

        this.DigiofficeService.GetSalaryDetails().subscribe((data) => {
          debugger;
          this.leavelist = data.filter((x) => x.staffId == this.ID);
          (this.EmployeeName = this.leavelist[0].employeeName),
            (this.Grade = this.leavelist[0].grade),
            // (this.Designation = this.leavelist[0].designation),
            (this.PayRateType = this.leavelist[0].payRateType),
            (this.PayStructure = this.leavelist[0].payStructure),
            (this.EffectiveFromDate = this.datepipe.transform(
              this.leavelist[0].effectiveFromDate,
              'yyyy-MM-dd'
            )),
            (this.Reason = this.leavelist[0].reason);
          this.loader = false;
        });
      }
    });

  }



  public getdob() {
    var birthdate: any = new Date(this.DOB);
    var cur: any = new Date();
    var diff: any = cur - birthdate; // This is the difference in milliseconds
    this.Age = Math.floor(diff / 31557600000); // Divide by 1000*60*60*24*365.25
    if (this.Age < 18) {
      Swal.fire("Staff's Age must be above 18");
      this.DOB = ""

    }
  }



  uniquelist: any;
  uniquesectionlist: any;

  uniquelist11: any;


  public getDependdentList() {
    debugger
    this.DigiofficeService.GetDependentDetails().subscribe((data) => {
      debugger;
      this.Dependentlist = data.filter((x) => String(x.staffId) == this.ID && x.status == 'Approved');
      this.loader = false;
    });
  }

  public GetWorkingLocationMaster() {
    this.DigiofficeService.GetWorkingLocationMaster().subscribe((data) => {
      debugger;
      this.worklocationlist = data;
    });
  }

  public GetDivisionMaster() {
    this.DigiofficeService.GetDivisionMaster().subscribe((data) => {
      debugger;
      // this.Divisionlist = data.filter(x => x.entityID == this.Entity && x.groupID == this.Group);
      this.Divisionlist = data;
      this.uniquelist = this.Divisionlist

      const key = 'sort';
      this.uniquelist = [
        ...new Map(
          this.Divisionlist.map((item: { [x: string]: any }) => [
            item[key],
            item,
          ])
        ).values(),
      ];
    });
  }
  uniquedropdownDeptList: any;
  public GetDepartment() {
    this.DigiofficeService.GetDepartment().subscribe((data) => {
      debugger;
      // this.dropdownDeptList = data.filter(x => x.entityID == this.Entity && x.groupID == this.Group && x.divisionID == this.Division);;
      this.dropdownDeptList = data;

      this.uniquedropdownDeptList = this.dropdownDeptList

      const key = 'sort';
      this.uniquedropdownDeptList = [
        ...new Map(
          this.uniquedropdownDeptList.map((item: { [x: string]: any }) => [
            item[key],
            item,
          ])
        ).values(),
      ];
    });
  }

  public GetSectionMaster() {
    this.DigiofficeService.GetSectionMaster().subscribe((data) => {
      debugger;
      this.SectionList = data.filter(x => x.entityID == this.Entity && x.groupID == this.Group && x.divisionID == this.Division && x.departmentID == this.Department);
      // this.SectionList = data;
      //this.uniquesectionlist = this.SectionList

      //   const key = 'sort';
      //   this.uniquesectionlist = [
      //     ...new Map(
      //       this.SectionList.map((item: { [x: string]: any }) => [
      //         item[key],
      //         item,
      //       ])
      //     ).values(),
      //   ];
      // });


    });
  }

  public GetSubSectionMaster() {
    this.DigiofficeService.GetSubSectionMaster().subscribe((data) => {
      debugger;
      this.SubSectionList = data;
    });
  }


  public GetGroupMaster() {
    this.DigiofficeService.GetGroupMaster().subscribe((data) => {
      debugger;
      // this.grouplist = data.filter(x => x.entityID == this.Entity)
      this.grouplist = data
    });
  }
  public GetRoleType() {
    this.DigiofficeService.GetRoleType().subscribe((data) => {
      debugger;
      this.dropdownRoleList = data;
    });
  }

  public GetDesignationMaster() {
    this.DigiofficeService.GetDesignationMaster().subscribe((data) => {
      debugger;
      // this.Designationlist = data.filter(x => x.brandid == this.Band && x.levelID == this.level[0].id)
      this.Designationlist = data
      this.Designationlist1 = data
    });
  }

  public GetBrandMaster() {
    this.DigiofficeService.GetBrandMaster().subscribe((data) => {
      debugger;
      this.dropdownBandList = data;
    });
  }

  bandonItemSelect(item: any) {
    debugger;
    console.log(item);
    this.Band = item.target.value;

    this.DigiofficeService.GetLevelType().subscribe((data) => {
      debugger;
      this.levellist234 = data.filter(x => x.brandid == this.Band)

      // if (this.companyid == 1001) {
      //   if ((this.Band == 10014 || this.Band == 10023)) {
      //     this.levellist234 = data.filter(x => x.id < 40);
      //   }
      //   else if (this.Band == 3) {
      //     this.levellist234 = data.filter(x => x.id == 39);
      //   }
      //   else {
      //     this.levellist234 = data.filter(x => x.id >= 40);
      //   }

      // }

      // else {
      //   this.levellist234 = data.filter(x=>x.brandid==this.Band1)

      // }

    });
  }


  SectiononItemSelect(item: any) {
    debugger;
    console.log(item);
    this.Section = item.target.value;
  }


  SubSectiononItemSelect(item: any) {
    debugger;
    console.log(item);
    this.SubSection = item.id;
  }

  DesignationonItemSelect(item: any) {
    debugger;
    console.log(item);
    this.Designation = item.target.value;
  }

  roleselectedItems(item: any) {
    debugger;

    this.JobRole = item.target.value;
  }

  empselectedItems(item: any) {
    debugger;
    console.log(item);
    this.EmployeementType = item.name;
  }

  deptonItemSelect(item: any) {
    debugger;
    console.log(item);
    this.Department = item.target.value;
    // this.Department = item.id;

    this.DigiofficeService.GetSectionMaster().subscribe((data) => {
      debugger;
      this.SectionList = data.filter(x => x.entityID == this.Entity && x.groupID == this.Group && x.divisionID == this.Division && x.departmentID == this.Department);
      // this.SectionList = data

    });
  }



  public GetLevelType() {
    this.DigiofficeService.GetLevelType().subscribe((data) => {
      debugger;
      // this.levellist234 = data.filter(x => x.brandid == this.Band)
      this.levellist234 = data

    });
  }

  public GetSubsidaryMaster() {
    this.DigiofficeService.GetSubsidaryMaster().subscribe((data) => {
      debugger;
      this.SubsidaryList = data;
    });
  }

  public GetBanks() {
    this.DigiofficeService.GetBanks().subscribe((data) => {
      debugger;
      this.Bankslist = data;
      this.loader = false;
    });
  }

  public GetShiftMaster() {
    this.DigiofficeService.GetShiftMaster().subscribe((data) => {
      debugger;
      this.Shiflist = data;
    });
  }
  Countrylist2: any;
  public GetCountryType() {
    this.DigiofficeService.GetCountryType().subscribe((data) => {
      debugger;
      this.Countrylist = data;
      this.Countrylist2 = data;
    });
  }

  MajorList: any;
  public GetMajorMaster() {
    this.DigiofficeService.GetMajorMaster().subscribe((data) => {
      debugger;
      this.MajorList = data;

    });
  }

  public GetCostCentersMaster() {
    this.DigiofficeService.GetCostCentersMaster().subscribe((data) => {
      debugger;
      this.costcenterlist = data;
    });
  }

  getstate() {
    this.DigiofficeService.GetStateType().subscribe((data) => {
      debugger;
      // this.Provincelist = data.filter((x) => x.countryID == this.CountryID);
      this.Provincelist = data;
      // this.Provincelist = data;
      this.Provincelist1 = data;
      this.Provincelist2 = data;
    });
  }
  Citylist1: any;
  public getcity() {
    this.DigiofficeService.GetCityType().subscribe((data) => {
      debugger;
      // this.Citylist = data.filter(x => x.stateID == this.StateID);
      this.Citylist = data.filter((x) => x.stateID == this.StateID);
      console.log(this.citylist)
      this.Citylist = data;
      this.Citylist1 = data.filter((x) => x.stateID == this.StateID);
      this.Citylist2 = data
    });
  }

  public getbarangay() {
    debugger;
    this.DigiofficeService.GetBarangayMaster().subscribe((data) => {
      debugger;
      this.barangaylist = data.filter((x) => x.cityID == this.CityID);
    });
  }
  barangaylist2: any;
  public getbarangay2() {
    debugger;
    this.DigiofficeService.GetBarangayMaster().subscribe((data) => {
      debugger;
      this.barangaylist2 = data.filter((x) => x.cityID == this.CityID2);
    });
  }

  stepChanged(args: StepChangedArgs) {
    debugger;

    // console.log(args.step)
    // window.scroll({
    //   top: 0,
    //   left: 0,    debugger
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
    //   behavior: 'smooth'
    // });

    // if ((args instanceof NavigationEnd)) {

    //   window.scrollTo(0, 0)
    // }
  }

  onSelect2(event: any) {
    debugger;
    console.log(event);


    if (event.addedFiles[0] == null || event.addedFiles[0] == '.xls' || event.addedFiles[0] == '.xlsx'
      || event.addedFiles[0] == undefined || event.addedFiles[0] == "" || event.addedFiles[0] == 0 || event.addedFiles[0] == '.PDF' || event.addedFiles[0] == '.Docx') {
      Swal.fire('Drop files here Only JPG Or PNG')
    }
    else if ((event.addedFiles[0].size / 3048576) > 2) {
      Swal.fire('Please Upload File Less than 5 MB.')
    }
    else {
      this.attachments2.push(...event.addedFiles);
      this.DigiofficeService.ProjectAttachments(this.attachments2).subscribe(
        (res) => {
          debugger;
          this.attachments2url.push(res);
          debugger;
        }
      );
    }
  }
  onRemove2(event: any) {
    debugger;
    console.log(event);
    this.attachments2.splice(this.attachments2.indexOf(event), 1);
  }

  onSelect3(event: any) {
    debugger;
    console.log(event);
    if (event.addedFiles[0] == null || event.addedFiles[0] == '.xls' || event.addedFiles[0] == '.xlsx'
      || event.addedFiles[0] == undefined || event.addedFiles[0] == "" || event.addedFiles[0] == 0) {
      Swal.fire('Drop files here Only JPG,DOCX,PDF')
    }
    else {
      this.attachments3.push(...event.addedFiles);
      this.DigiofficeService.ProjectAttachments(this.attachments3).subscribe(
        (res) => {
          debugger;
          this.attachments3url.push(res);
          debugger;
        }
      );
    }
  }
  onRemove3(event: any) {
    debugger;
    console.log(event);
    this.attachments3.splice(this.attachments3.indexOf(event), 1);
  }

  onSelect4(event: any) {
    debugger;
    console.log(event);
    if (
      event.addedFiles[0] == null ||
      event.addedFiles[0] == '.xls' ||
      event.addedFiles[0] == '.xlsx' ||
      event.addedFiles[0] == undefined ||
      event.addedFiles[0] == '' ||
      event.addedFiles[0] == 0
    ) {
      Swal.fire('Drop files here only PDF, JPEG, PNG');
      this.loader = false;
    }

    else if ((event.addedFiles[0].size) > 5e+6) {
      Swal.fire('Please Upload File Less than 5 MB.')
    }
    else {
      this.attachments4.push(...event.addedFiles);
      this.DigiofficeService.ProjectAttachments(this.attachments4).subscribe(
        (res) => {
          debugger;
          this.attachments4url.push(res);
          Swal.fire("Attachment Added Successfully!!")
          debugger;
        }
      );
    }

  }
  onRemove4(event: any) {
    debugger;
    console.log(event);
    this.attachments4.splice(this.attachments4.indexOf(event), 1);
  }

  onSelect5(event: any) {
    debugger;
    console.log(event);
    this.attachments5.push(...event.addedFiles);
    this.DigiofficeService.ProjectAttachments(this.attachments5).subscribe(
      (res) => {
        debugger;
        this.attachments5url.push(res);
        debugger;
      }
    );
  }
  onRemove5(event: any) {
    debugger;
    console.log(event);
    this.attachments5.splice(this.attachments5.indexOf(event), 1);
  }
  onSelect6(event: any) {
    debugger;
    console.log(event);

    if (
      event.addedFiles[0] == null ||
      event.addedFiles[0] == '.xls' ||
      event.addedFiles[0] == '.xlsx' ||
      event.addedFiles[0] == undefined ||
      event.addedFiles[0] == '' ||
      event.addedFiles[0] == 0
    ) {
      Swal.fire('Drop files here only PDF, JPEG, PNG');
      this.loader = false;
    }

    else if ((event.addedFiles[0].size) > 5e+6) {
      Swal.fire('Please Upload File Less than 5 MB.')
    }
    else {
      this.attachments6.push(...event.addedFiles);
      this.DigiofficeService.ProjectAttachments(this.attachments6).subscribe(
        (res) => {
          debugger;
          this.attachments6url.push(res);
          debugger;
        }
      );
    }

  }
  onRemove6(event: any) {
    debugger;
    console.log(event);
    this.attachments6.splice(this.attachments6.indexOf(event), 1);
  }

  onSelect7(event: any) {
    debugger;
    console.log(event);

    if (
      event.addedFiles[0] == null ||
      event.addedFiles[0] == '.xls' ||
      event.addedFiles[0] == '.xlsx' ||
      event.addedFiles[0] == undefined ||
      event.addedFiles[0] == '' ||
      event.addedFiles[0] == 0 || event.addedFiles[0] == '.Docx'
    ) {
      Swal.fire('Drop files here only PDF, JPEG, PNG');
      this.loader = false;
    }
    else {
      this.attachments7.push(...event.addedFiles);
      this.DigiofficeService.ProjectAttachments(this.attachments7).subscribe(
        (res) => {
          debugger;
          this.attachments7url.push(res);
          debugger;
        }
      );
    }
  }
  onRemove7(event: any) {
    debugger;
    console.log(event);
    this.attachments7.splice(this.attachments7.indexOf(event), 1);
  }

  onSelect8(event: any) {
    debugger;
    console.log(event);
    this.attachments8.push(...event.addedFiles);
    this.DigiofficeService.ProjectAttachments(this.attachments8).subscribe(
      (res) => {
        debugger;
        this.attachments8url.push(res);
        debugger;
      }
    );
  }
  onRemove8(event: any) {
    debugger;
    console.log(event);
    this.attachments8.splice(this.attachments8.indexOf(event), 1);
  }

  onSelect9(event: any) {
    debugger;
    console.log(event);

    if (
      event.addedFiles[0] == null ||
      event.addedFiles[0] == '.xls' ||
      event.addedFiles[0] == '.xlsx' ||
      event.addedFiles[0] == undefined ||
      event.addedFiles[0] == '' ||
      event.addedFiles[0] == 0 || event.addedFiles[0] == '.Docx'

    ) {
      Swal.fire('Drop files here only PDF, JPEG, PNG');
      this.loader = false;
    }
    else {
      this.attachments9.push(...event.addedFiles);
      this.DigiofficeService.ProjectAttachments(this.attachments9).subscribe(
        (res) => {
          debugger;
          this.attachments9url.push(res);
          debugger;
        }
      );

    }

  }
  onRemove9(event: any) {
    debugger;
    console.log(event);
    this.attachments9.splice(this.attachments9.indexOf(event), 1);
  }

  educationID: any;
  leavelist1: any;
  public geteducationID(id: any) {
    debugger;
    this.loader = true;
    this.educationID = id;

    this.DigiofficeService.GetEducationDetails().subscribe((data) => {
      debugger;
      this.leavelist1 = data.filter((x) => String(x.id) == this.educationID);
      this.EducationType = this.leavelist1[0].educationType,
        this.prefillAttachment = this.leavelist1[0].eductionAttachment,
        this.NameOfQualification = this.leavelist1[0].nameOfQualification,
        this.Branch = this.leavelist1[0].branch,
        this.InstitutionName = this.leavelist1[0].institutionName,
        this.Country = this.leavelist1[0].country,
        this.EducationGrade = this.leavelist1[0].grade,

        (this.attachments7url[0] = this.leavelist1[0].attachmentEdu),

        (this.LicenseOrCertification =
          this.leavelist1[0].licenseOrCertification);
      if ((this.datepipe.transform(this.leavelist1[0].startDateMonth, 'yyyy-MM-dd')) == "1990-01-01") {
        this.StartDateMonth = " "
      }
      else {
        this.StartDateMonth = this.datepipe.transform(this.leavelist1[0].startDateMonth, 'yyyy-MM-dd')
      }
      if ((this.datepipe.transform(this.leavelist1[0].endDateMonth, 'yyyy-MM-dd')) == "1990-01-01") {
        this.EndDateMonth = " "
      }
      else {
        this.EndDateMonth = this.datepipe.transform(this.leavelist1[0].endDateMonth, 'yyyy-MM-dd')
      }
      if ((this.datepipe.transform(this.leavelist1[0].startDateYear, 'yyyy-MM-dd')) == "1990-01-01") {
        this.StartDateYear = " "
      }
      else {
        this.StartDateYear = this.datepipe.transform(this.leavelist1[0].startDateYear, 'yyyy-MM-dd')
      }
      if ((this.datepipe.transform(this.leavelist1[0].endDateYear, 'yyyy-MM-dd')) == "1990-01-01") {
        this.EndDateYear = " "
      }
      else {
        this.EndDateYear = this.datepipe.transform(this.leavelist1[0].endDateYear, 'yyyy-MM-dd')
      }
      this.loader = false;
    });
  }

  // public getemploymentdetails() {
  //   this.DigiofficeService.GetEmploymentDetails().subscribe(
  //     data => {
  //       debugger

  //       this.leavelist = data.filter(x => x.staffID == this.ID);
  //       this.ComapanyName = this.leavelist[0].comapanyName,
  //         this.Title = this.leavelist[0].title,
  //         this.StartDate = this.datepipe.transform(this.leavelist[0].startDate, 'yyyy-MM-dd'),
  //         this.EndDate = this.datepipe.transform(this.leavelist[0].endDate, 'yyyy-MM-dd'),
  //         this.Salary = this.leavelist[0].salary,
  //         this.CurrentEmployer = this.leavelist[0].currentEmployer
  //       this.loader = false;
  //     },
  //   );
  // }
  nominationID: any;
  nominationList: any;
  public getNomination(id: any) {
    debugger
    this.nominationID = id

    this.DigiofficeService.GetNomination().subscribe(
      data => {
        debugger

        this.nominationList = data.filter((x) => x.id == this.nominationID);
        this.Dependent = this.nominationList[0].dependent,
          this.Percentage = this.nominationList[0].percentage,
          this.NomineeType = this.nominationList[0].nomineeType,
          this.BeneficiaryDOB = this.nominationList[0].beneficiaryDOB,
          this.GuardianRelationship = this.nominationList[0].guardianRelationship,
          (this.attachments9url[0] = this.leavelist1[0].nominationAttachment),
          this.loader = false;
      });

  }



  dependentID: any
  leavelist2: any;
  public getdependentID(id: any) {
    debugger
    this.dependentID = id

    this.DigiofficeService.GetDependentDetails().subscribe(
      data => {
        debugger

        this.leavelist2 = data.filter((x) => x.id == this.dependentID);
        this.cb = this.leavelist2[0].cb,
          this.Religion = this.leavelist2[0].religion,
          this.DependentName = this.leavelist2[0].dependentName,
          this.Relationship1 = this.leavelist2[0].relationship,
          this.Gender1 = this.leavelist2[0].gender;
        if ((this.datepipe.transform(this.leavelist2[0].dateOfBirth, 'yyyy-MM-dd')) == "1990-01-01") {
          this.DateOfBirth = " "
        }
        else {
          this.DateOfBirth = this.datepipe.transform(this.leavelist2[0].dateOfBirth, 'yyyy-MM-dd')
        }

        // this.DateOfBirth = this.datepipe.transform(this.leavelist2[0].dateOfBirth, 'yyyy-MM-dd'),
        this.Address = this.leavelist2[0].address,
          this.Mobile = this.leavelist2[0].mobile,
          this.Is_Dependent = this.leavelist2[0].is_Dependent,
          this.Id_Number = this.leavelist2[0].id_Number,
          this.Is_Child_Adopted = this.leavelist2[0].is_Child_Adopted,
          this.Race = this.leavelist2[0].race,
          this.CitizenShip = this.leavelist2[0].citizenShip,

          this.Working_Status = this.leavelist2[0].working_Status,
          this.Request_Type = this.leavelist2[0].request_Type,
          this.Request_Type = this.leavelist2[0].request_Type,
          //  this.depPrifillAttachment = this.sanitizer.bypassSecurityTrustUrl(this.leavelist2[0].dependentAttachment)
          this.depPrifillAttachment = this.leavelist2[0].dependentAttachment;

        this.loader = false;
      });

  }


  IdDetailsID: any;
  leavelist3: any;
  public getIdDetailsID(id: any) {
    debugger;
    this.IdDetailsID = id;

    this.DigiofficeService.GetID_Details().subscribe((data) => {
      debugger;

      let temp: any = data.filter((x) => x.id == this.IdDetailsID && x.status == 'Approved');
      this.NameOnDocument = temp[0].nameOnDocument
      this.IssuingAuthority = temp[0].issuingAuthority,
        this.PlaceOfIssue = temp[0].placeOfIssue;
      this.IDAttachment = temp[0].idattachment;
      this.idaphoto = temp[0].idaphoto,
        this.IDType = temp[0].idType,
        this.Number = temp[0].number,

        // (this.IssueDate = this.datepipe.transform(this.employmentlist[0].issueDate,'yyyy-MM-dd') == '1990-01-01 00:00:00.000'? null: 
        // this.datepipe.transform(this.employmentlist[0].issueDate,'yyyy-MM-dd')),

        // (this.ExpiryDate = this.datepipe.transform(this.employmentlist[0].expiryDate,'yyyy-MM-dd') == '1990-01-01 00:00:00.000'? null: 
        // this.datepipe.transform(this.employmentlist[0].expiryDate,'yyyy-MM-dd')),
        // this.IssueDate = this.datepipe.transform(temp[0].issueDate, 'yyyy-MM-dd') == "1990-01-01 00:00:00.000" ? null : this.datepipe.transform(temp[0].issueDate, 'yyyy-MM-dd'),
        this.ExpiryDate = this.datepipe.transform(temp[0].expiryDate, 'yyyy-MM-dd') == "1990-01-01 00:00:00.000" ? null : this.datepipe.transform(temp[0].expiryDate, 'yyyy-MM-dd')
      if ((this.datepipe.transform(temp[0].issueDate, 'yyyy-MM-dd')) == "1990-01-01") {
        this.IssueDate = " "
      }
      else {
        this.IssueDate = this.datepipe.transform(temp[0].issueDate, 'yyyy-MM-dd')
      }

      if ((this.datepipe.transform(temp[0].expiryDate, 'yyyy-MM-dd')) == "1990-01-01") {
        this.ExpiryDate = " "
      }
      else {
        this.ExpiryDate = this.datepipe.transform(temp[0].expiryDate, 'yyyy-MM-dd')
      }
      (this.loader = false);
    });
  }






  validEmail: any;
  validMob: any;
  ValidateEmail() {
    debugger;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.Personal_Email.match(mailformat)) {
      // Swal.fire('Valid email address!');
      this.validEmail = true;
      this.loader = false;

    } else {
      Swal.fire(' InValid Personal Email Address');
      this.validEmail = false;
      this.loader = false;
    }

  }
  validEmail1: any;
  ValidateEmail1() {
    debugger;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.EmergencyContact_EmailID.match(mailformat)) {
      //  Swal.fire('Valid email address!');
      this.validEmail1 = true;
      this.loader = false;
    } else {
      Swal.fire(' InValid Emergency Email Address');
      this.EmergencyContact_EmailID = "";
      this.validEmail1 = false;
      this.loader = false;
    }

  }
  validEmail2: any;
  ValidateEmail2() {
    debugger;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.OfficialEmail.match(mailformat)) {
      //  Swal.fire('Valid email address!');
      this.validEmail2 = true;
      this.loader = false;

    } else {
      Swal.fire(' InValid Official Email Address');
      this.OfficialEmail = "";
      this.validEmail2 = false;
      this.loader = false;
    }

  }

  validEmail3: any;
  ValidateEmail3() {
    debugger;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.PersonalEmailForContact.match(mailformat)) {
      //  Swal.fire('Valid email address!');
      this.validEmail3 = true;
      this.loader = false;

    } else {
      Swal.fire(' InValid Personal Contact Email Address');
      this.PersonalEmailForContact = "";
      this.validEmail3 = false;
      this.loader = false;
    }

  }

  validEmail4: any;
  ValidateEmail4() {
    debugger;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.EmergencyContact_EmailID1.match(mailformat)) {
      //  Swal.fire('Valid email address!');
      this.validEmail4 = true;
      this.loader = false;
    } else {
      Swal.fire(' InValid Emergency Contact 2 Email Address');
      this.EmergencyContact_EmailID1 = "";
      this.validEmail4 = false;
      this.loader = false;
    }

  }

  public Save() {
    debugger;
    this.loader = true;

    //  this.ValidateEmail(); 

    if (
      this.Name == '' || this.Name == undefined || this.Name == 0 || this.Name == "" || this.Name == null ||
      //this.Personal_Email == undefined ||  this.Personal_Email == "" ||
      // this.MobilePersonal == undefined ||
      // this.MobilePersonal == '' ||
      this.Last_Name == '' || this.Last_Name == undefined || this.Last_Name == 0 || this.Last_Name == "" || this.Last_Name == null ||
      //  this.Country_Of_Birth == " " ||
      this.Gender == ' ' || this.Gender == undefined || this.Gender == 0 || this.Gender == "" || this.Gender == null || this.Gender == "0" ||
      this.DOB == ' ' || this.DOB == undefined || this.DOB == 0 || this.DOB == "" || this.DOB == null ||
      this.Nationality == '' || this.Nationality == undefined || this.Nationality == 0 || this.Nationality == "" || this.Nationality == null ||
      this.Blood_Group == '' || this.Blood_Group == undefined || this.Blood_Group == 0 || this.Blood_Group == "" || this.Blood_Group == null ||
      this.Status == '' || this.Status == undefined || this.Status == 0 || this.Status == "" || this.Status == null
      || this.Status == "selected"

    ) {
      Swal.fire('Please Fill All The Mandatory Fields');
      this.loader = false;
    }
    else if (this.roleid == 9 && this.staffID != this.ID && (this.OrginalBms == undefined || this.OrginalBms == null || this.OrginalBms == "" || this.OrginalBms == 0)) {
      Swal.fire('Please Fill All The Mandatory Fields');
      this.loader = false;
    }


    else if (this.MobilePersonal.length < 10) {
      Swal.fire("Invalid Mobile Number")
      this.validMob = false;
    }
    else if (
      this.Is_Disabled == true &&
      this.attachments213.length == 0
    ) {
      Swal.fire('Please Fill  Mandatory Fields');
    }
    else if (this.Personal_Email != null && this.Personal_Email != undefined && this.Personal_Email != "") {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (this.Personal_Email.match(mailformat)) {
        // Swal.fire('Valid email address!');
        this.validEmail = true;

        this.Restdays = '';
        for (let i = 0; i < this.restdaysarray1.length; i++) {
          this.Restdays = this.Restdays + this.restdaysarray1[i].name + ',';
        }
        var eb = {
          BuildingID: 56,
          Name: this.Name,
          PhoneNo: this.MobilePersonal,
          // 'EmailID': ((this.Personal_Email).replaceAll(' ', '')),
          EmailID: this.Personal_Email,
          TypeID: 6,
          // 'Type': Number(this.RoleType),
          Address: this.Address,
          Attachment: this.attachments3url[0],
          doj: this.JoiningDate,
          Salary: 1000,

          LeavesPerMonth: this.LeavesPerMonth,
          WorkTimings: this.WorkTimings,
          ContactNumber: this.ContactNumber,
          // 'Supervisor': 20459,
          Supervisor: this.Supervisor,
          EmployeeID: this.EmployeeCode,
          ResignationDate: this.JoiningDate,
          ChaildTotal: 10,
          MedicalLeaveEntitlement: 10,
          MaternitityLeaveEntitlement: 105,
          PaternitityLeaveEntitlement: 7,
          CompassionateLeaveEntitlement: 10,
          Leavesfrompreviousyear: 10,
          ExtendedChildcareLeaveEntitlement: 10,
          MarriageLeaveEntitlement: 10,
          Title: this.Title,
          Middle_Name: this.Middle_Name,
          Last_Name: this.Last_Name,
          PlaceO_f_Birth: this.PlaceO_f_Birth,
          Country_Of_Birth: this.Country_Of_Birth,
          Age: this.Age,
          Gender: this.Gender,
          Status: this.Status,
          // 'Date_Of_Marriage' : (String(this.Date_Of_Marriage ) == "" ? "Null" + "," : "'" + String(this.Date_Of_Marriage) + "',"),

          Date_Of_Marriage:
            this.Date_Of_Marriage == ' '
              ? '1990-01-01 00:00:00.000'
              : this.Date_Of_Marriage,
          // 'Date_Of_Marriage': this.Date_Of_Marriage,
          Religion: this.Religion == undefined ? null : this.Religion,
          Citizen_Ship: this.Citizen_Ship == undefined ? null : this.Citizen_Ship,
          Ethnicity: this.Ethnicity == undefined ? null : this.Ethnicity,
          Nationality: this.Nationality,
          Is_Disabled: this.Is_Disabled == null ? 0 : this.Is_Disabled,
          Blood_Group: this.Blood_Group,
          Height: this.Height == null ? 0 : this.Height,
          Weight: this.Weight == null ? 0 : this.Weight,
          MajorIllness: this.MajorIllness,
          IS_Night_Blind: this.IS_Night_Blind == null ? 0 : this.IS_Night_Blind,
          Is_Color_Blind: this.Is_Color_Blind == null ? 0 : this.Is_Color_Blind,
          DOB: this.DOB,
          Signature: this.attachments2url[0],
          Paygroup: this.Paygroup,
          PagiBig_ID: this.PagiBig_ID,
          PagiBigAccountNo: this.PagiBigAccountNo,
          PagibigMembership: this.PagibigMembership,
          PagibigRemarks: this.PagibigRemarks,
          EMPLOYEE_TIN: this.EMPLOYEE_TIN,
          PHILHEALTH_NO: this.PHILHEALTH_NO,
          SSSNO: this.SSSNO,

          department: this.Department == null || this.Department == undefined || this.Department == "" || this.Department == " " || this.Department == "0" ? 0 : this.Department,
          Level: this.level == null || this.level == "" ? 0 : this.level,
          ParentCompany: this.ParentCompany,
          AssignedCompany: this.AssignedCompany,
          ShiftID: 0,
          Restdays: this.Restdays,
          Is_Solo_Parent:
            this.Is_Solo_Parent == undefined ? 0 : this.Is_Solo_Parent,
          OrginalBms: this.OrginalBms == undefined || this.OrginalBms == "" || this.OrginalBms == 0 ? 0 : this.OrginalBms,
          PreviousEffectivityBMSDate: this.PreviousEffectivityBMSDate == ' ' || this.PreviousEffectivityBMSDate == ""
          ? '1990-01-01 00:00:00.000' : this.PreviousEffectivityBMSDate,
          PreviousBMS: this.PreviousBMS == null || this.PreviousBMS == "" ? 0 : this.PreviousBMS,
          CurrentEffectivityBMSDate: this.CurrentEffectivityBMSDate== ' ' || this.CurrentEffectivityBMSDate == ""
          ? '1990-01-01 00:00:00.000' : this.CurrentEffectivityBMSDate,
          CurrentBMS: 1000,
          COLA: this.COLA == null || this.COLA == "" ? 0 : this.COLA,
          IncentiveLeave: this.IncentiveLeave == null ? 0 : this.IncentiveLeave,
          HMOInsurance: this.HMOInsurance == null ? 0 : this.HMOInsurance,
          MeritInsurance: this.MeritInsurance == null ? 0 : this.MeritInsurance,
          DailerLicense: this.DailerLicense == null ? 0 : this.DailerLicense,
          Incrementals: this.Incrementals == null ? 0 : this.Incrementals,
          TaxStatus: this.TaxStatus == null ? 0 : this.TaxStatus,
          GCashNumber: this.GCashNumber == null ? 0 : this.GCashNumber,
          TalentSegment: this.TalentSegment == null ? 0 : this.TalentSegment,
          CostCentre: this.CostCenter == null || this.CostCenter == "" ? 0 : this.CostCenter,

          TranspoAllowance:
            this.TranspoAllowance == null ? 0 : this.TranspoAllowance,
          CommAllowance: this.CommAllowance == null ? 0 : this.CommAllowance,
          MealAllowance: this.MealAllowance == null ? 0 : this.MealAllowance,
          RiceAllowance: this.RiceAllowance == null ? 0 : this.RiceAllowance,
          MedicineAllowance:
            this.MedicineAllowance == null ? 0 : this.MedicineAllowance,
          MaintenanceDepreciationAllowance:
            this.MaintenanceDepreciationAllowance == null
              ? 0
              : this.MaintenanceDepreciationAllowance,
          EffectivityofAllowance:
            this.EffectivityofAllowance == null ? 0 : this.EffectivityofAllowance,
          MotherMaidenName: this.MotherMaidenName,
          FatherMaidenName: this.FatherMaidenName,
          PleaseSpecify: this.PleaseSpecify,
          SpokenLanguage: this.SpokenLanguage == null || this.SpokenLanguage == 0 ? 0 : this.SpokenLanguage,
          NickName: this.NickName == null ? 0 : this.NickName,
          MarriageCertficate: this.attachments3url[0],
          // PWDDisabilityAttachment: this.attachments21[0],
          PWDDisabilityAttachment: this.attachments21[0] == undefined
            ? this.PWDDisabilityAttachmenturl
            : this.attachments21[0],
        };
        this.DigiofficeService.InsertMyDetails(eb).subscribe((data) => {
          debugger;
          debugger;
          if (data == 0) {
            Swal.fire('Sorry Staff Cannot Be Added, Staff With Same Mobile Number or EmailID Already Exists');
            this.loader = false;
          }
          else if (data == 1) {
            Swal.fire('Sorry Staff Cannot Be Added, Staff With Same EmailID Already Exists');
            this.loader = false;
          }
          

          else {
            this.StaffID = data;

            Swal.fire('Saved Successfully');
            this.loader = false;
          }

          // this.SaveDependantDetails();
          // this.SaveNomination();
          // this.SaveEmployment();
          // this.SaveEducation();
          // this.SaveIdDetails();
          // this.SaveBankDetails();
          // this.SaveVisaDetails();

          //  this.SaveSalaryDetails();

          // this.SaveAddressDetails();
          // this.SavePositionDetails();
        });


      } else {
        // Swal.fire(' InValid Email Address');
        this.loader = false;
        /*  this.validEmail = false; */
      }
    }
    else {
      this.Restdays = '';
      for (let i = 0; i < this.restdaysarray1.length; i++) {
        this.Restdays = this.Restdays + this.restdaysarray1[i].name + ',';
      }
      var eb = {
        BuildingID: 56,
        Name: this.Name,
        PhoneNo: this.MobilePersonal,
        // 'EmailID': ((this.Personal_Email).replaceAll(' ', '')),
        EmailID: this.Personal_Email,
        TypeID: 6,
        // 'Type': Number(this.RoleType),
        Address: this.Address,
        Attachment: this.attachments3url[0],
        doj: this.JoiningDate,
        Salary: 1000,

        LeavesPerMonth: this.LeavesPerMonth,
        WorkTimings: this.WorkTimings,
        ContactNumber: this.ContactNumber,
        // 'Supervisor': 20459,
        Supervisor: this.Supervisor,
        EmployeeID: this.EmployeeCode,
        ResignationDate: this.JoiningDate,
        ChaildTotal: 10,
        MedicalLeaveEntitlement: 10,
        MaternitityLeaveEntitlement: 105,
        PaternitityLeaveEntitlement: 7,
        CompassionateLeaveEntitlement: 10,
        Leavesfrompreviousyear: 10,
        ExtendedChildcareLeaveEntitlement: 10,
        MarriageLeaveEntitlement: 10,
        Title: this.Title,
        Middle_Name: this.Middle_Name,
        Last_Name: this.Last_Name,
        PlaceO_f_Birth: this.PlaceO_f_Birth,
        Country_Of_Birth: this.Country_Of_Birth,
        Age: this.Age,
        Gender: this.Gender,
        Status: this.Status,
        // 'Date_Of_Marriage' : (String(this.Date_Of_Marriage ) == "" ? "Null" + "," : "'" + String(this.Date_Of_Marriage) + "',"),

        Date_Of_Marriage:
          this.Date_Of_Marriage == ' '
            ? '1990-01-01 00:00:00.000'
            : this.Date_Of_Marriage,
        // 'Date_Of_Marriage': this.Date_Of_Marriage,
        Religion: this.Religion == undefined ? null : this.Religion,
        Citizen_Ship: this.Citizen_Ship == undefined ? null : this.Citizen_Ship,
        Ethnicity: this.Ethnicity == undefined ? null : this.Ethnicity,
        Nationality: this.Nationality,
        Is_Disabled: this.Is_Disabled == null ? 0 : this.Is_Disabled,
        Blood_Group: this.Blood_Group,
        Height: this.Height == null ? 0 : this.Height,
        Weight: this.Weight == null ? 0 : this.Weight,
        MajorIllness: this.MajorIllness,
        IS_Night_Blind: this.IS_Night_Blind == null ? 0 : this.IS_Night_Blind,
        Is_Color_Blind: this.Is_Color_Blind == null ? 0 : this.Is_Color_Blind,
        DOB: this.DOB,
        Signature: this.attachments2url[0],
        Paygroup: this.Paygroup,
        PagiBig_ID: this.PagiBig_ID,
        PagiBigAccountNo: this.PagiBigAccountNo,
        PagibigMembership: this.PagibigMembership,
        PagibigRemarks: this.PagibigRemarks,
        EMPLOYEE_TIN: this.EMPLOYEE_TIN,
        PHILHEALTH_NO: this.PHILHEALTH_NO,
        SSSNO: this.SSSNO,

        department: this.Department == null || this.Department == undefined || this.Department == "" || this.Department == " " || this.Department == "0" ? 0 : this.Department,
        Level: this.level == null || this.level == "" ? 0 : this.level,
        ParentCompany: this.ParentCompany,
        AssignedCompany: this.AssignedCompany,
        ShiftID: 0,
        Restdays: this.Restdays,
        Is_Solo_Parent:
          this.Is_Solo_Parent == undefined ? 0 : this.Is_Solo_Parent,
        OrginalBms: this.OrginalBms == undefined || this.OrginalBms == "" || this.OrginalBms == 0 ? 0 : this.OrginalBms,
        PreviousEffectivityBMSDate: this.PreviousEffectivityBMSDate == ' ' || this.PreviousEffectivityBMSDate == ""
        ? '1990-01-01 00:00:00.000' : this.PreviousEffectivityBMSDate,
        PreviousBMS: this.PreviousBMS == null || this.PreviousBMS == "" ? 0 : this.PreviousBMS,
        CurrentEffectivityBMSDate: this.CurrentEffectivityBMSDate== ' ' || this.CurrentEffectivityBMSDate == ""
        ? '1990-01-01 00:00:00.000' : this.CurrentEffectivityBMSDate,
        CurrentBMS: 1000,
        COLA: this.COLA == null || this.COLA == "" ? 0 : this.COLA,
        IncentiveLeave: this.IncentiveLeave == null ? 0 : this.IncentiveLeave,
        HMOInsurance: this.HMOInsurance == null ? 0 : this.HMOInsurance,
        MeritInsurance: this.MeritInsurance == null ? 0 : this.MeritInsurance,
        DailerLicense: this.DailerLicense == null ? 0 : this.DailerLicense,
        Incrementals: this.Incrementals == null ? 0 : this.Incrementals,
        TaxStatus: this.TaxStatus == null ? 0 : this.TaxStatus,
        GCashNumber: this.GCashNumber == null ? 0 : this.GCashNumber,
        TalentSegment: this.TalentSegment == null ? 0 : this.TalentSegment,
        CostCentre: this.CostCenter == null || this.CostCenter == "" ? 0 : this.CostCenter,

        TranspoAllowance:
          this.TranspoAllowance == null ? 0 : this.TranspoAllowance,
        CommAllowance: this.CommAllowance == null ? 0 : this.CommAllowance,
        MealAllowance: this.MealAllowance == null ? 0 : this.MealAllowance,
        RiceAllowance: this.RiceAllowance == null ? 0 : this.RiceAllowance,
        MedicineAllowance:
          this.MedicineAllowance == null ? 0 : this.MedicineAllowance,
        MaintenanceDepreciationAllowance:
          this.MaintenanceDepreciationAllowance == null
            ? 0
            : this.MaintenanceDepreciationAllowance,
        EffectivityofAllowance:
          this.EffectivityofAllowance == null ? 0 : this.EffectivityofAllowance,
        MotherMaidenName: this.MotherMaidenName,
        FatherMaidenName: this.FatherMaidenName,
        PleaseSpecify: this.PleaseSpecify,
        SpokenLanguage: this.SpokenLanguage == null || this.SpokenLanguage == 0 ? 0 : this.SpokenLanguage,
        NickName: this.NickName == null ? 0 : this.NickName,
        MarriageCertficate: this.attachments3url[0],
        // PWDDisabilityAttachment: this.attachments21[0],
        PWDDisabilityAttachment:
          this.attachments21[0] == undefined
            ? this.PWDDisabilityAttachmenturl
            : this.attachments21[0],
      };
      this.DigiofficeService.InsertMyDetails(eb).subscribe((data) => {
        debugger;
        if (data == 0) {
          Swal.fire('Sorry Staff Cannot Be Added Staff With Same Mobile Number  or EmailID Already Exists');
          this.loader = false;
        }
        else if (data == 1) {
          this.StaffID = data;

          Swal.fire('Sorry Staff Cannot Be Added  Staff With Same EmailID Already Exists');
          this.loader = false;
        }

        else {
          this.StaffID = data;

          Swal.fire('Saved Successfully');
          this.loader = false;
        }

        // this.SaveDependantDetails();
        // this.SaveNomination();
        // this.SaveEmployment();
        // this.SaveEducation();
        // this.SaveIdDetails();
        // this.SaveBankDetails();
        // this.SaveVisaDetails();

        //  this.SaveSalaryDetails();

        // this.SaveAddressDetails();
        // this.SavePositionDetails();
      });
    }
  }

  public Update() {
    debugger;
    this.loader = true;

    this.ValidateEmail();
    if
      (this.Name == '' || this.Name == undefined || this.Name == 0 || this.Name == "" || this.Name == null ||
      //this.Personal_Email == undefined ||  this.Personal_Email == "" ||
      // this.MobilePersonal == undefined ||
      // this.MobilePersonal == '' ||
      this.Last_Name == '' || this.Last_Name == undefined || this.Last_Name == 0 || this.Last_Name == "" || this.Last_Name == null ||
      //  this.Country_Of_Birth == " " ||
      this.Gender == ' ' || this.Gender == undefined || this.Gender == 0 || this.Gender == "" || this.Gender == null ||
      this.DOB == ' ' || this.DOB == undefined || this.DOB == 0 || this.DOB == "" || this.DOB == null ||
      this.Nationality == '' || this.Nationality == undefined || this.Nationality == 0 || this.Nationality == "" || this.Nationality == null ||
      this.Blood_Group == '' || this.Blood_Group == undefined || this.Blood_Group == 0 || this.Blood_Group == "" || this.Blood_Group == null ||
      this.Status == '' || this.Status == undefined || this.Status == 0 || this.Status == "" || this.Status == null

    ) {
      Swal.fire('Please Fill All The Mandatory Fields');
      this.loader = false;
    }
    else if (this.roleid == 9 && (this.OrginalBms == undefined || this.OrginalBms == null || this.OrginalBms == "" || this.OrginalBms == 0
    || this.PreviousEffectivityBMSDate == undefined || this.PreviousEffectivityBMSDate == null || this.PreviousEffectivityBMSDate == "" || this.PreviousEffectivityBMSDate == 0
    || this.PreviousBMS == undefined || this.PreviousBMS == null || this.PreviousBMS == "" || this.PreviousBMS == 0
    || this.CurrentEffectivityBMSDate == undefined || this.CurrentEffectivityBMSDate == null || this.CurrentEffectivityBMSDate == "" || this.CurrentEffectivityBMSDate == 0
    || this.COLA == undefined || this.COLA == null || this.COLA == "" || this.COLA == 0)) {
      Swal.fire('Please Fill All The Mandatory Fields');
      this.loader = false;
    }
    // else if (this.roleid == 9 && this.staffID != this.ID && (this.OrginalBms == undefined || this.OrginalBms == null || this.OrginalBms == "" || this.OrginalBms == 0)) {
    //   Swal.fire('Please Fill All The Mandatory Fields');
    //   this.loader = false;
    // }
    else if (this.MobilePersonal == 0 || this.MobilePersonal == "" || this.MobilePersonal == undefined ||
      this.MobilePersonal == null) {
      Swal.fire('Invalid Mobile Number');
      this.loader = false;
    }
    // else if (this.MobilePersonal.length < 10) {
    //   Swal.fire("Invalid Mobile Number")
    //   this.validMob = false;
    //   this.loader = false;
    // }
    else if (
      this.Is_Disabled == true &&
      (this.PWDDisabilityAttachment == null || this.PWDDisabilityAttachment == undefined)
    ) {
      Swal.fire('Please Fill  Mandatory Fields');
      this.loader = false;
    }
    else if (this.Personal_Email != null && this.Personal_Email != undefined && this.Personal_Email != "") {

      this.Personal_Email = this.Personal_Email.replaceAll(' ', "");

      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
      if (this.Personal_Email.match(mailformat)) {
        //  Swal.fire('Valid email address!');
        this.validEmail = true;


        this.Restdays = '';
        for (let i = 0; i < this.restdaysarray1.length; i++) {
          this.Restdays = this.Restdays + this.restdaysarray1[i].name + ',';
        }

        var eb = {
          ID: this.ID,
          BuildingID: 56,
          Name: this.Name == null ? null : this.Name,
          PhoneNo: this.MobilePersonal,
          // 'PhoneNo': 0,
          // 'EmailID': ((this.Personal_Email).replaceAll(' ', '')),
          EmailID: this.Personal_Email == null ? 0 : this.Personal_Email,
          TypeID: 3,
          // 'Type': Number(this.RoleType),
          Address: this.Address == null ? 0 : this.Address,
          Attachment:
            this.attachments2url[0] == undefined
              ? this.signatureurl
              : this.attachments2url[0],
          MarriageCertficate: this.attachments3url[0],
          JoiningDate: this.JoiningDate,
          Salary: 1000,
          LeavesPerMonth: this.LeavesPerMonth == null ? 0 : this.LeavesPerMonth,
          WorkTimings: this.WorkTimings == null ? 0 : this.WorkTimings,
          ContactNumber: this.ContactNumber == null ? 0 : this.ContactNumber,
          // Supervisor: 20459,
          'Supervisor': this.Supervisor,
          EmployeeID: this.EmployeeCode == null ? 0 : this.EmployeeCode,
          ResignationDate:
            this.JoiningDate == null
              ? '1990-01-01 00:00:00.000'
              : this.JoiningDate,
          ChaildTotal: 10,
          MedicalLeaveEntitlement: 10,
          MaternitityLeaveEntitlement: 105,
          PaternitityLeaveEntitlement: 7,
          CompassionateLeaveEntitlement: 10,
          Leavesfrompreviousyear: 10,
          ExtendedChildcareLeaveEntitlement: 10,
          MarriageLeaveEntitlement: 10,
          Title: this.Title == null ? 0 : this.Title,
          Middle_Name: this.Middle_Name == null ? null : this.Middle_Name,
          Last_Name: this.Last_Name == null ? null : this.Last_Name,
          PlaceO_f_Birth:
            this.PlaceO_f_Birth == null ? null : this.PlaceO_f_Birth,
          Country_Of_Birth:
            this.Country_Of_Birth == null ? 0 : this.Country_Of_Birth,
          Age: this.Age == null ? 0 : this.Age,
          Gender: this.Gender == null ? 0 : this.Gender,
          Status: this.Status == null ? 0 : this.Status,
          // 'Date_Of_Marriage' : (String(this.Date_Of_Marriage ) == "" ? "Null" + "," : "'" + String(this.Date_Of_Marriage) + "',"),
          Date_Of_Marriage:
            this.Date_Of_Marriage == ' '
              ? '1990-01-01 00:00:00.000'
              : this.Date_Of_Marriage,
          // 'Date_Of_Marriage': this.Date_Of_Marriage,
          Religion: this.Religion == undefined ? null : this.Religion,
          Citizen_Ship: this.Citizen_Ship == undefined ? null : this.Citizen_Ship,
          Ethnicity: this.Ethnicity == undefined ? null : this.Ethnicity,
          Nationality: this.Nationality == null ? 0 : this.Nationality,
          Is_Disabled: this.Is_Disabled == null ? 0 : this.Is_Disabled,
          Blood_Group: this.Blood_Group == null ? 0 : this.Blood_Group,
          Height: this.Height == null ? 0 : this.Height,
          Weight: this.Weight == null ? 0 : this.Weight,
          MajorIllness: this.MajorIllness == null ? 0 : this.MajorIllness,
          IS_Night_Blind: this.IS_Night_Blind == null ? 0 : this.IS_Night_Blind,
          Is_Color_Blind: this.Is_Color_Blind == null ? 0 : this.Is_Color_Blind,
          DOB: this.DOB == null ? '1990-01-01 00:00:00.000' : this.DOB,
          //'Signature': this.attachments2url[0],
          Paygroup: this.Paygroup == null ? 0 : this.Paygroup,
          PagiBig_ID: this.PagiBig_ID == null ? 0 : this.PagiBig_ID,
          PagiBigAccountNo:
            this.PagiBigAccountNo == null ? 0 : this.PagiBigAccountNo,
          PagibigMembership:
            this.PagibigMembership == null ? 0 : this.PagibigMembership,
          PagibigRemarks: this.PagibigRemarks == null ? 0 : this.PagibigRemarks,
          EMPLOYEE_TIN: this.EMPLOYEE_TIN == null ? 0 : this.EMPLOYEE_TIN,
          PHILHEALTH_NO: this.PHILHEALTH_NO == null ? 0 : this.PHILHEALTH_NO,
          SSSNO: this.SSSNO == null ? 0 : this.SSSNO,
          department: this.Department == null || this.Department == undefined || this.Department == "" || this.Department == " " || this.Department == "0" ? 0 : this.Department,
          Level: this.level == null || this.level == "" ? 0 : this.level,
          ParentCompany: this.ParentCompany == null ? 0 : this.ParentCompany,
          AssignedCompany:
            this.AssignedCompany == null ? 0 : this.AssignedCompany,
          ShiftID: 0,
          Restdays: this.Restdays == null ? 0 : this.Restdays,
          Is_Solo_Parent:
            this.Is_Solo_Parent == undefined ? 0 : this.Is_Solo_Parent,
          OrginalBms: this.OrginalBms == null || this.OrginalBms == "" || this.OrginalBms == undefined || this.OrginalBms == 0 ? 0 : this.OrginalBms,
          PreviousEffectivityBMSDate:
            this.PreviousEffectivityBMSDate == null || this.PreviousEffectivityBMSDate == ""
              ? '1990-01-01 00:00:00.000'
              : this.PreviousEffectivityBMSDate,
          PreviousBMS: this.PreviousBMS == null || this.PreviousBMS == "" ? 0 : this.PreviousBMS,
          CurrentEffectivityBMSDate:
            this.CurrentEffectivityBMSDate == null || this.CurrentEffectivityBMSDate == ""
              ? '1990-01-01 00:00:00.000'
              : this.CurrentEffectivityBMSDate,
          CurrentBMS: 1000,
          COLA: this.COLA == null || this.COLA == "" ? 0 : this.COLA,
          IncentiveLeave: this.IncentiveLeave == null ? 0 : this.IncentiveLeave,
          HMOInsurance: this.HMOInsurance == null ? 0 : this.HMOInsurance,
          MeritInsurance: this.MeritInsurance == null ? 0 : this.MeritInsurance,
          DailerLicense: this.DailerLicense == null ? 0 : this.DailerLicense,
          Incrementals: this.Incrementals == null ? 0 : this.Incrementals,
          TaxStatus: this.TaxStatus == null ? 0 : this.TaxStatus,
          GCashNumber: this.GCashNumber == null ? 0 : this.GCashNumber,
          TalentSegment: this.TalentSegment == null ? 0 : this.TalentSegment,
          CostCentre: this.CostCenter == null || this.CostCenter == "" ? 0 : this.CostCenter,

          TranspoAllowance:
            this.TranspoAllowance == null ? 0 : this.TranspoAllowance,
          CommAllowance: this.CommAllowance == null ? 0 : this.CommAllowance,
          MealAllowance: this.MealAllowance == null ? 0 : this.MealAllowance,
          RiceAllowance: this.RiceAllowance == null ? 0 : this.RiceAllowance,
          MedicineAllowance:
            this.MedicineAllowance == null ? 0 : this.MedicineAllowance,
          MaintenanceDepreciationAllowance:
            this.MaintenanceDepreciationAllowance == null
              ? 0
              : this.MaintenanceDepreciationAllowance,
          EffectivityofAllowance:
            this.EffectivityofAllowance == null ? 0 : this.EffectivityofAllowance,
          MotherMaidenName:
            this.MotherMaidenName == null ? null : this.MotherMaidenName,
          FatherMaidenName:
            this.FatherMaidenName == null ? null : this.FatherMaidenName,
          PleaseSpecify: this.PleaseSpecify == null || this.PleaseSpecify == 0 ? ' ' : this.PleaseSpecify,
          SpokenLanguage: this.SpokenLanguage == null || this.SpokenLanguage == 0 ? 0 : this.SpokenLanguage,
          NickName: this.NickName == null ? 0 : this.NickName,
          // PWDDisabilityAttachment: this.attachments21[0],
          PWDDisabilityAttachment:
            this.attachments21[0] == undefined
              ? this.PWDDisabilityAttachmenturl
              : this.attachments21[0],
        };
        this.DigiofficeService.UpdateStaff(eb).subscribe((data) => {
          debugger;
          if (data == 0) {
            Swal.fire('Sorry Staff Cannot Be Added, Staff With Same Employee ID Already Exists');
            this.loader = false;
          }
          else{
            Swal.fire('Updated Successfully');
            location.reload();
            this.loader = false;
  
          }
     
          // this.UpdateDependentDetails();
          // this.UpdateNomination();
          // this.UpdateEmploymentDetails();
          // this.UpdateEducationDetails();
          // this.UpdateID_Details();
          // this.UpdateBankDetails();
          // this.UpdateVisaDetails();

          // this.UpdateSalaryDetails();

          // this.UpdateMyAddressDetails();
          // this.UpdatePositionDetails();
        });


      }
      else {
        // Swal.fire(' InValid Email Address');
        this.loader = false;
        /*  this.validEmail = false; */
      }
    }
    else {
      this.Restdays = '';
      for (let i = 0; i < this.restdaysarray1.length; i++) {
        this.Restdays = this.Restdays + this.restdaysarray1[i].name + ',';
      }

      var eb = {
        ID: this.ID,
        BuildingID: 56,
        Name: this.Name == null ? null : this.Name,
        PhoneNo: this.MobilePersonal,
        // 'PhoneNo': 0,
        // 'EmailID': ((this.Personal_Email).replaceAll(' ', '')),
        EmailID: this.Personal_Email == null ? 0 : this.Personal_Email,
        TypeID: 3,
        // 'Type': Number(this.RoleType),
        Address: this.Address == null ? 0 : this.Address,
        Attachment:
          this.attachments2url[0] == undefined
            ? this.signatureurl
            : this.attachments2url[0],
        MarriageCertficate: this.attachments3url[0],
        JoiningDate: this.JoiningDate,
        Salary: 1000,
        LeavesPerMonth: this.LeavesPerMonth == null ? 0 : this.LeavesPerMonth,
        WorkTimings: this.WorkTimings == null ? 0 : this.WorkTimings,
        ContactNumber: this.ContactNumber == null ? 0 : this.ContactNumber,
        // Supervisor: 20459,
        'Supervisor': this.Supervisor,
        EmployeeID: this.EmployeeCode == null ? 0 : this.EmployeeCode,
        ResignationDate:
          this.JoiningDate == null
            ? '1990-01-01 00:00:00.000'
            : this.JoiningDate,
        ChaildTotal: 10,
        MedicalLeaveEntitlement: 10,
        MaternitityLeaveEntitlement: 105,
        PaternitityLeaveEntitlement: 7,
        CompassionateLeaveEntitlement: 10,
        Leavesfrompreviousyear: 10,
        ExtendedChildcareLeaveEntitlement: 10,
        MarriageLeaveEntitlement: 10,
        Title: this.Title == null ? 0 : this.Title,
        Middle_Name: this.Middle_Name == null ? null : this.Middle_Name,
        Last_Name: this.Last_Name == null ? null : this.Last_Name,
        PlaceO_f_Birth:
          this.PlaceO_f_Birth == null ? null : this.PlaceO_f_Birth,
        Country_Of_Birth:
          this.Country_Of_Birth == null ? 0 : this.Country_Of_Birth,
        Age: this.Age == null ? 0 : this.Age,
        Gender: this.Gender == null ? 0 : this.Gender,
        Status: this.Status == null ? 0 : this.Status,
        // 'Date_Of_Marriage' : (String(this.Date_Of_Marriage ) == "" ? "Null" + "," : "'" + String(this.Date_Of_Marriage) + "',"),
        Date_Of_Marriage:
          this.Date_Of_Marriage == ' '
            ? '1990-01-01 00:00:00.000'
            : this.Date_Of_Marriage,
        // 'Date_Of_Marriage': this.Date_Of_Marriage,
        Religion: this.Religion == undefined ? null : this.Religion,
        Citizen_Ship: this.Citizen_Ship == undefined ? null : this.Citizen_Ship,
        Ethnicity: this.Ethnicity == undefined ? null : this.Ethnicity,
        Nationality: this.Nationality == null ? 0 : this.Nationality,
        Is_Disabled: this.Is_Disabled == null ? 0 : this.Is_Disabled,
        Blood_Group: this.Blood_Group == null ? 0 : this.Blood_Group,
        Height: this.Height == null ? 0 : this.Height,
        Weight: this.Weight == null ? 0 : this.Weight,
        MajorIllness: this.MajorIllness == null ? 0 : this.MajorIllness,
        IS_Night_Blind: this.IS_Night_Blind == null ? 0 : this.IS_Night_Blind,
        Is_Color_Blind: this.Is_Color_Blind == null ? 0 : this.Is_Color_Blind,
        DOB: this.DOB == null ? '1990-01-01 00:00:00.000' : this.DOB,
        //'Signature': this.attachments2url[0],
        Paygroup: this.Paygroup == null ? 0 : this.Paygroup,
        PagiBig_ID: this.PagiBig_ID == null ? 0 : this.PagiBig_ID,
        PagiBigAccountNo:
          this.PagiBigAccountNo == null ? 0 : this.PagiBigAccountNo,
        PagibigMembership:
          this.PagibigMembership == null ? 0 : this.PagibigMembership,
        PagibigRemarks: this.PagibigRemarks == null ? 0 : this.PagibigRemarks,
        EMPLOYEE_TIN: this.EMPLOYEE_TIN == null ? 0 : this.EMPLOYEE_TIN,
        PHILHEALTH_NO: this.PHILHEALTH_NO == null ? 0 : this.PHILHEALTH_NO,
        SSSNO: this.SSSNO == null ? 0 : this.SSSNO,
        department: this.Department == null || this.Department == undefined || this.Department == "" || this.Department == " " || this.Department == "0" ? 0 : this.Department,
        Level: this.level == null || this.level == "" ? 0 : this.level,
        ParentCompany: this.ParentCompany == null ? 0 : this.ParentCompany,
        AssignedCompany:
          this.AssignedCompany == null ? 0 : this.AssignedCompany,
        ShiftID: 0,
        Restdays: this.Restdays == null ? 0 : this.Restdays,
        Is_Solo_Parent:
          this.Is_Solo_Parent == undefined ? 0 : this.Is_Solo_Parent,
        OrginalBms: this.OrginalBms == null || this.OrginalBms == "" || this.OrginalBms == undefined || this.OrginalBms == 0 ? 0 : this.OrginalBms,
        PreviousEffectivityBMSDate:
          this.PreviousEffectivityBMSDate == null || this.PreviousEffectivityBMSDate == ""
            ? '1990-01-01 00:00:00.000'
            : this.PreviousEffectivityBMSDate,
        PreviousBMS: this.PreviousBMS == null || this.PreviousBMS == "" ? 0 : this.PreviousBMS,
        CurrentEffectivityBMSDate:
          this.CurrentEffectivityBMSDate == null  || this.CurrentEffectivityBMSDate == ""
            ? '1990-01-01 00:00:00.000'
            : this.CurrentEffectivityBMSDate,
        CurrentBMS: 1000,
        COLA: this.COLA == null || this.COLA == "" ? 0 : this.COLA,
        IncentiveLeave: this.IncentiveLeave == null ? 0 : this.IncentiveLeave,
        HMOInsurance: this.HMOInsurance == null ? 0 : this.HMOInsurance,
        MeritInsurance: this.MeritInsurance == null ? 0 : this.MeritInsurance,
        DailerLicense: this.DailerLicense == null ? 0 : this.DailerLicense,
        Incrementals: this.Incrementals == null ? 0 : this.Incrementals,
        TaxStatus: this.TaxStatus == null ? 0 : this.TaxStatus,
        GCashNumber: this.GCashNumber == null ? 0 : this.GCashNumber,
        TalentSegment: this.TalentSegment == null ? 0 : this.TalentSegment,
        CostCentre: this.CostCenter == null || this.CostCenter == "" ? 0 : this.CostCenter,

        TranspoAllowance:
          this.TranspoAllowance == null ? 0 : this.TranspoAllowance,
        CommAllowance: this.CommAllowance == null ? 0 : this.CommAllowance,
        MealAllowance: this.MealAllowance == null ? 0 : this.MealAllowance,
        RiceAllowance: this.RiceAllowance == null ? 0 : this.RiceAllowance,
        MedicineAllowance:
          this.MedicineAllowance == null ? 0 : this.MedicineAllowance,
        MaintenanceDepreciationAllowance:
          this.MaintenanceDepreciationAllowance == null
            ? 0
            : this.MaintenanceDepreciationAllowance,
        EffectivityofAllowance:
          this.EffectivityofAllowance == null ? 0 : this.EffectivityofAllowance,
        MotherMaidenName:
          this.MotherMaidenName == null ? null : this.MotherMaidenName,
        FatherMaidenName:
          this.FatherMaidenName == null ? null : this.FatherMaidenName,
        PleaseSpecify: this.PleaseSpecify == null || this.PleaseSpecify == 0 ? ' ' : this.PleaseSpecify,
        SpokenLanguage: this.SpokenLanguage == null || this.SpokenLanguage == 0 ? 0 : this.SpokenLanguage,
        NickName: this.NickName == null ? 0 : this.NickName,
        // PWDDisabilityAttachment: this.attachments21[0],
        PWDDisabilityAttachment:
          this.attachments21[0] == undefined
            ? this.PWDDisabilityAttachmenturl
            : this.attachments21[0],
      };
      this.DigiofficeService.UpdateStaff(eb).subscribe((data) => {
        debugger;

        Swal.fire('Updated Successfully');
        location.reload();
        this.loader = false;

        // this.UpdateDependentDetails();
        // this.UpdateNomination();
        // this.UpdateEmploymentDetails();
        // this.UpdateEducationDetails();
        // this.UpdateID_Details();
        // this.UpdateBankDetails();
        // this.UpdateVisaDetails();

        // this.UpdateSalaryDetails();

        // this.UpdateMyAddressDetails();
        // this.UpdatePositionDetails();
      });
    }
  }

  cb: any;
  public SaveDependantDetails() {
    debugger;
    this.loader = true;

    if (
      // this.DependentName == undefined ||
      // this.DependentName == null ||
      // this.DependentName == '' ||
      // this.DependentName == 0 ||
      // this.Relationship1 == null ||
      // this.Relationship1 == '' ||
      // this.Relationship1 == undefined ||
      // this.Relationship1 == 0 ||
      // this.Relationship1 == 'Select One' || this.attachments6.length == "" || this.attachments6.length == ' ' ||
      this.attachments6.length == undefined || this.attachments6.length == null || this.attachments6.length == 0
    ) {
      Swal.fire('Please fill Mandatory Fields');
      this.loader = false;
    } else {

      var eb = {
        DependentName: this.DependentName == undefined ? null : this.DependentName,
        Relationship: this.Relationship1 == undefined ? null : this.Relationship1,
        Gender: this.Gender1 == 0 ? null : this.Gender1,
        DateOfBirth: this.DateOfBirth == '' || this.DateOfBirth == undefined ? '1990-01-01 00:00:00.000' : this.DateOfBirth,
        Address: this.Address == undefined ? null : this.Address,
        Mobile: this.Mobile == undefined ? null : this.Mobile,
        Is_Dependent: this.Is_Dependent == undefined ? 0 : 1,
        Id_Number: this.Id_Number == undefined ? null : this.Id_Number,
        Is_Child_Adopted: this.Is_Child_Adopted == undefined ? 0 : this.Is_Child_Adopted,
        Race: this.Race == undefined ? null : this.Race,
        CitizenShip: this.CitizenShip == undefined ? null : this.CitizenShip,
        Country_Of_Birth: this.cb == undefined ? null : this.cb,
        Religion: this.Religion == undefined ? null : this.Religion,
        Working_Status: this.Working_Status == undefined ? null : this.Working_Status,
        Request_Type: this.Request_Type == undefined ? null : this.Request_Type,
        StaffID: this.StaffID,
        DependentAttachment: this.attachments6url[0],
      };
      this.DigiofficeService.InsertDependentDetails(eb).subscribe((data) => {
        debugger;
        Swal.fire('Saved Succesfully');
        // location.reload();
        this.ngOnInit();
        this.loader = false;
      });

    }
  }

  public SaveNomination() {
    debugger;
    if (
      this.Dependent == null ||
      this.Dependent == '' ||
      this.Dependent == undefined ||
      this.Dependent == 0 ||
      this.Percentage == null ||
      this.Percentage == '' ||
      this.Percentage == undefined ||
      this.Percentage == 0 ||
      this.NomineeType == undefined ||
      this.NomineeType == null ||
      this.NomineeType == '' ||
      this.NomineeType == 0 ||
      this.BeneficiaryDOB == undefined ||
      this.BeneficiaryDOB == null ||
      this.BeneficiaryDOB == '' ||
      this.BeneficiaryDOB == 0
    ) {
      Swal.fire('Please fill Mandatory Fields');
      this.loader = false;
    } else {
      var eb = {
        Dependent: this.Dependent,
        Percentage: this.Percentage,
        NomineeType: this.NomineeType,
        GuardianName: this.GuardianName,
        GuardianRelationship: this.GuardianRelationship,
        StaffID: this.StaffID,
        BeneficiaryDOB: this.BeneficiaryDOB == undefined || this.BeneficiaryDOB == '' ? '1990-01-01 00:00:00.000' : this.BeneficiaryDOB,
        NominationAttachment: this.attachments9url[0] == '' || this.attachments9url[0] == null
          ? this.Attachmentedu
          : this.attachments9url[0],
      };
      this.DigiofficeService.InsertNomination(eb).subscribe((data) => {
        debugger;
        Swal.fire('Saved Succesfully');
        this.ngOnInit();
      });
    }
  }









  public SaveEmployment() {
    debugger;
    this.loader = true;
    for (let i = 0; i <= this.unitdetailsarray.length; i++) {
      var eb = {
        // ComapanyName: this.unitdetailsarray[0].ComapanyName,
        // StartDate: this.unitdetailsarray[0].EmpStartDate,
        // EndDate: this.unitdetailsarray[0].EmpEndDate,
        // Salary: this.unitdetailsarray[0].Salary,
        // StaffID: this.StaffID,
        // Title: this.JobTitle == undefined ? null : this.JobTitle,
        // Title: this.unitdetailsarray[0].Title,

        // CurrentEmployer: this.CurrentEmployer,
        // AttachmentEmployment: this.attachments8url[0] == undefined ? this.eattachment : this.attachments8url[0],
        // EmployementTypeold: this.EmployementTypeold,

        ComapanyName: this.ComapanyName == undefined ? null : this.ComapanyName,
        Title: this.JobTitle == undefined ? null : this.JobTitle,
        StartDate: (this.EmpStartDate == ' ' || this.EmpStartDate == "" || this.EmpStartDate == undefined) ? '1990-01-01 00:00:00.000' : this.EmpStartDate,
        EndDate: (this.EmpEndDate == ' ' || this.EmpEndDate == "" || this.EmpEndDate == undefined) ? '1990-01-01 00:00:00.000' : this.EmpEndDate,
        Salary: this.Salary == undefined || this.Salary == "" ? 0 : this.Salary,
        StaffID: this.staffID,
        CurrentEmployer: this.CurrentEmployer == undefined ? false : this.CurrentEmployer,
        AttachmentEmployment: this.attachments8url[0] == undefined ? this.eattachment : this.attachments8url[0],
        EmployementTypeold: this.EmployementTypeold,
        EmploymentLevel: this.EmploymentLevel
      };
      this.DigiofficeService.InsertEmploymentDetails(eb).subscribe((data) => {
        debugger;
        this.loader = false;
        this.ngOnInit();
        Swal.fire('Saved Succesfully');
      });
    }
  }


  public SaveEducation() {
    debugger;
    this.loader = true;
    if (this.attachments7.length == 0) {
      Swal.fire("Please Fill Mandatory Fiels")
      this.loader = false;
    }
    else {
      var eb = {
        EducationType:
          this.EducationType == undefined || this.EducationType == "" ? null : this.EducationType,
        // 'Qualification': this.Qualification == undefined ? null : this.Qualification,
        NameOfQualification:
          this.NameOfQualification == undefined || this.NameOfQualification == ""
            ? null
            : this.NameOfQualification,
        Branch: this.Branch == undefined || this.Branch == "" ? null : this.Branch,
        InstitutionName:
          this.InstitutionName == undefined ? null : this.InstitutionName,
        Country: this.Country == undefined ? null : this.Country,
        // 'ScoreType': this.ScoreType == undefined ? null : this.ScoreType,
        grade: this.EducationGrade == undefined ? 0 : this.EducationGrade,
        StartDateMonth:
          this.StartDateMonth == undefined
            ? '1990-01-01 00:00:00.000'
            : this.StartDateMonth,
        StartDateYear:
          this.StartDateMonth == undefined
            ? '1990-01-01 00:00:00.000'
            : this.StartDateMonth,
        EndDateMonth:
          this.EndDateMonth == undefined
            ? '1990-01-01 00:00:00.000'
            : this.EndDateMonth,
        EndDateYear:
          this.EndDateMonth == undefined
            ? '1990-01-01 00:00:00.000'
            : this.EndDateMonth,
        StaffID: this.StaffID,
        AttachmentEdu: this.attachments7url[0],
        LicenseOrCertification:
          this.LicenseOrCertification == undefined
            ? null
            : this.LicenseOrCertification,
      };
      this.DigiofficeService.InsertEducationDetails(eb).subscribe((data) => {
        debugger;
        this.loader = false;
        Swal.fire('Saved Succesfully');
        this.loader = false;
        // location.reload();
        this.ngOnInit();
      });
    }


  }

  // public SaveEducation() {
  //   debugger;
  //   // this.loader = true;
  //   if (
  //     this.EducationType == undefined ||
  //     this.EducationType == null ||
  //     this.EducationType == '' ||
  //     this.EducationType == 0 ||
  //     this.NameOfQualification == null ||
  //     this.NameOfQualification == '' ||
  //     this.NameOfQualification == undefined ||
  //     this.NameOfQualification == 0 ||
  //     this.Branch == undefined ||
  //     this.Branch == null ||
  //     this.Branch == '' ||
  //     this.Branch == 0
  //   ) {
  //     Swal.fire('Please fill Mandatory Fields');
  //     this.loader = false;
  //   } else {
  //     var eb = {
  //       EducationType:
  //         this.EducationType == undefined ? null : this.EducationType,
  //       // 'Qualification': this.Qualification == undefined ? null : this.Qualification,
  //       NameOfQualification:
  //         this.NameOfQualification == undefined
  //           ? null
  //           : this.NameOfQualification,
  //       Branch: this.Branch == undefined ? null : this.Branch,
  //       InstitutionName:
  //         this.InstitutionName == undefined ? null : this.InstitutionName,
  //       Country: this.Country == undefined ? null : this.Country,
  //       // 'ScoreType': this.ScoreType == undefined ? null : this.ScoreType,
  //       grade: this.EducationGrade == undefined ? 0 : this.EducationGrade,
  //       StartDateMonth:
  //         this.StartDateMonth == undefined
  //           ? '1990-01-01 00:00:00.000'
  //           : this.StartDateMonth,
  //       StartDateYear:
  //         this.StartDateMonth == undefined
  //           ? '1990-01-01 00:00:00.000'
  //           : this.StartDateMonth,
  //       EndDateMonth:
  //         this.EndDateMonth == undefined
  //           ? '1990-01-01 00:00:00.000'
  //           : this.EndDateMonth,
  //       EndDateYear:
  //         this.EndDateMonth == undefined
  //           ? '1990-01-01 00:00:00.000'
  //           : this.EndDateMonth,
  //       StaffID: this.StaffID,
  //       AttachmentEdu: this.attachments7url[0],
  //       LicenseOrCertification:
  //         this.LicenseOrCertification == undefined
  //           ? null
  //           : this.LicenseOrCertification,
  //     };
  //     this.DigiofficeService.InsertEducationDetails(eb).subscribe((data) => {
  //       debugger;
  //       this.loader = false;
  //       Swal.fire('Saved Succesfully');
  //       // location.reload();
  //       this.ngOnInit();
  //     });
  //   }
  // }

  public GetEducationDetails() {
    this.DigiofficeService.GetEducationDetails().subscribe((data) => {
      debugger;
      if (this.roleid == 9) {
        this.educationlist = data.filter((x) => String(x.staffId) == this.ID);
        this.loader = false;
      }
      else {
        this.educationlist = data.filter((x) => String(x.staffId) == this.ID && x.status == 'Approved');
        this.loader = false;
      }

    });
  }

  public GetIDDetails() {
    this.DigiofficeService.GetID_Details().subscribe((data) => {
      debugger;
      this.IDList = data.filter((x) => x.staffId == this.ID && x.status == 'Approved');
      this.NameOnDocument = this.IDList[0].nameOnDocument
      this.IssuingAuthority = this.IDList[0].issuingAuthority,
        this.PlaceOfIssue = this.IDList[0].placeOfIssue;
      this.IDAttachment = this.IDList[0].idattachment;
      this.idaphoto = this.IDList[0].idaphoto,
        this.IDType = this.IDList[0].idType,
        this.Number = this.IDList[0].number,
        this.loader = false;
    });
  }



  public GetBankDetails() {
    this.DigiofficeService.GetBankDetails().subscribe((data) => {
      debugger;
      this.banklist = data.filter((x) => x.staffId == this.ID);
      this.loader = false;
    });
  }

  public SaveIdDetails() {
    debugger;
    this.loader = true;


    if (this.IDType == undefined || this.IDType == null || this.IDType == '' || this.IDType == "Select" ||
      this.IDType == 0 || this.Number == null || this.Number == '' || this.Number == undefined || this.NameOnDocument == undefined || this.NameOnDocument == '' || this.NameOnDocument == null
    ) {
      Swal.fire('Please fill Mandatory Fields');
      this.loader = false;
    }
    else if (this.Number == 0) {
      Swal.fire('Please Enter a Valid Account Number');
    }
    /*  else if (this.Number != null && this.Number != undefined && this.Number != "") {
      var pattern = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$');
      if (this.Number.match(pattern)) {
        var eb = {
          IDType: this.IDType,
          Number: this.Number,
          NameOnDocument: this.NameOnDocument,
          IssueDate: this.IssueDate,
          ExpiryDate: this.ExpiryDate,
          IssuingAuthority: this.IssuingAuthority,
          PlaceOfIssue: this.PlaceOfIssue,
          StaffID: this.StaffID,
          IDAttachment: this.attachments4url[0],
        };
        this.DigiofficeService.InsertID_Details(eb).subscribe((data) => {
          debugger;

          Swal.fire('Saved Succesfully');
          this.loader = false;
        });

      }
      else {
        Swal.fire('Please Enter a Valid Account Number');
        this.loader = false;
      }
    } */
    else {
      var eb = {
        IDType: this.IDType,
        Number: this.Number,
        NameOnDocument: this.NameOnDocument,
        IssueDate:
          this.IssueDate == undefined || this.IssueDate == ""
            ? '1990-01-01 00:00:00.000'
            : this.IssueDate,
        ExpiryDate:
          this.ExpiryDate == undefined || this.ExpiryDate == ""
            ? '1990-01-01 00:00:00.000'
            : this.ExpiryDate,
        IssuingAuthority: this.IssuingAuthority,
        PlaceOfIssue: this.PlaceOfIssue,
        StaffID: this.StaffID,
        IDAttachment: this.attachments4url[0],
      };
      this.DigiofficeService.InsertID_Details(eb).subscribe((data) => {
        debugger;

        Swal.fire('Saved Succesfully');
        this.loader = false;
        // location.reload()
        this.ngOnInit();
      });
    }
  }

  public SaveBankDetails() {
    debugger;
    if (this.NameOfBank == 'Gcash Number') {
      if (
        this.NameOfBank == undefined ||
        this.NameOfBank == null ||
        this.NameOfBank == '' ||
        this.NameOfBank == 0 || this.NameOfBank == "" ||
        this.GcashHolderName == null ||
        this.GcashHolderName == '' ||
        this.GcashHolderName == undefined ||
        this.GcashHolderName == 0 || this.GcashHolderName == ""
      ) {
        Swal.fire('Please fill Mandatory Fields');
        this.loader = false;
      }
      else {
        this.loader = true;
        var eb = {
          NameOfBank: this.NameOfBank,
          AccountHolderName: this.AccountHolderName,
          BankAccountNumber: this.BankAccountNumber,
          AccountType: this.accountType,
          BranchName: this.BranchName,
          BranchAddress: this.branchAddress,
          StaffID: this.StaffID,
          GcashHolderName: this.GcashHolderName,
          GcashAccountNumber: this.GcashAccountNumber,
          GcashMobileNumber: this.GcashMobileNumber
        };
        this.DigiofficeService.InsertBankDetails(eb).subscribe((data) => {
          debugger;
          if (data == 0) {
            Swal.fire('Bank Details Already Exists');
            this.loader = false;
          }
          else {
            Swal.fire('Saved Succesfully');
            this.ngOnInit();
            this.loader = false;
          }
        });
      }
    }
    else if (this.NameOfBank != 'Gcash Number') {
      if (
        this.NameOfBank == undefined ||
        this.NameOfBank == null ||
        this.NameOfBank == '' ||
        this.NameOfBank == 0 || this.NameOfBank == "" ||
        this.AccountHolderName == null ||
        this.AccountHolderName == '' ||
        this.AccountHolderName == undefined ||
        this.AccountHolderName == 0 || this.AccountHolderName == ""
      ) {
        Swal.fire('Please fill Mandatory Fields');
        this.loader = false;
      }
      else {
        this.loader = true;
        var eb = {
          NameOfBank: this.NameOfBank,
          AccountHolderName: this.AccountHolderName,
          BankAccountNumber: this.BankAccountNumber,
          AccountType: this.accountType,
          BranchName: this.BranchName,
          BranchAddress: this.branchAddress,
          StaffID: this.StaffID,
          GcashHolderName: this.GcashHolderName,
          GcashAccountNumber: this.GcashAccountNumber,
          GcashMobileNumber: this.GcashMobileNumber
        };
        this.DigiofficeService.InsertBankDetails(eb).subscribe((data) => {
          debugger;
          if (data == 0) {
            Swal.fire('Bank Details Already Exists');
            this.loader = false;
          }
          else {
            Swal.fire('Saved Succesfully');
            this.ngOnInit();
            this.loader = false;
          }
        });
      }
    }

  }

  public SaveVisaDetails() {
    debugger;
    this.loader = true;
    var eb = {
      VisaType: this.VisaType == undefined ? null : this.VisaType,
      VisaNumber: this.VisaNumber == undefined ? null : this.VisaNumber,
      VisaIssueDate: this.VisaIssueDate == ' ' ? this.DOB : this.VisaIssueDate,
      VisaExpiryDate:
        this.VisaExpiryDate == ' ' ? this.DOB : this.VisaExpiryDate,
      StaffID: this.StaffID,
    };
    this.DigiofficeService.InsertVisaDetails(eb).subscribe((data) => {
      debugger;
      Swal.fire('Saved Succesfully');
      this.loader = false;
      this.router.navigate(['/EmployeeDashboard']);
    });
  }

  public SaveSalaryDetails() {
    debugger;
    this.loader = true;
    var eb1 = {
      EmployeeName: this.EmployeeName,
      Grade: this.Grade,
      Designation: this.Designation,
      PayRateType: this.PayRateType,
      PayStructure: this.PayStructure,
      EffectiveFromDate: this.EffectiveFromDate,
      Reason: this.Reason,
      StaffID: this.StaffID,
    };
    this.DigiofficeService.InsertSalaryDetails(eb1).subscribe((data) => {
      debugger;

      this.loader = false;
      Swal.fire('Saved Succesfully');
      // this.router.navigate(['/EmployeeDashboard']);
    });
  }

  public SaveAddressDetails() {
    this.ValidateEmail1();
    debugger;
    this.loader = true;
    if (

      this.EmergencyContactName == '' || this.EmergencyContactName == undefined ||
      this.EmergencyContactName == 0 || this.EmergencyContactName == "" ||
      this.EmergencyContactName == null || this.OfficialEmail == '' ||
      this.OfficialEmail == undefined || this.OfficialEmail == 0 ||
      this.OfficialEmail == "" || this.OfficialEmail == null

    ) {
      Swal.fire('Please Fill All The Mandatory Fields');
      this.loader = false;
    } else if (this.EmergencyContact_EmailID != undefined && this.EmergencyContact_EmailID != null && this.EmergencyContact_EmailID != "") {
      this.EmergencyContact_EmailID = this.EmergencyContact_EmailID.replaceAll(' ', "");
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
      if (this.EmergencyContact_EmailID.match(mailformat)) {
        // Swal.fire('Valid email address!');
        this.validEmail1 = true;

        var eb = {
          AddressType: this.AddressType,
          AddressType2: this.AddressType2,
          FindPlace: this.FindPlace == undefined ? null : this.FindPlace,
          AddressLine1: this.AddressLine1,
          AddressLine2: this.AddressLine2,
          AddressLine3: this.AddressLine3,
          AddressLine4: this.AddressLine4,
          District: this.CityID,
          Province: this.StateID,
          Country: this.CountryID,
          barangay: this.Barangay,
          subDistrictPostcode: this.SubDistrictPostcode,
          Mobile: this.AddressPersonalContactNo,
          LandLineFax: this.LandLineFax,
          IsCorrespondance: 0,
          RequestType: this.RequestType,
          EmergencyContactName: this.EmergencyContactName,
          EmergencyContactRelationship: this.EmergencyContactRelationship,
          EmergencyContactMobileNumber: this.EmergencyContactMobileNumber,
          EmergencyContactOfficeNumber: this.EmergencyContactOfficeNumber,
          EmergencyContactLandLineNumber: this.EmergencyContactLandLineNumber,
          EmergencyContact_EmailID: this.EmergencyContact_EmailID,
          EmergencyContact_Address: this.EmergencyContact_Address,
          StaffID: this.StaffID,
          District2: this.CityID2,
          Province2: this.StateID2,
          Country2: this.CountryID2,
          Barangay2: this.BarangayType2,
          subDistrictPostcode1: this.SubDistrictPostcode2,
          OfficialEmail: this.OfficialEmail,
          EmergencyContactName1: this.EmergencyContactName1,
          EmergencyContactRelationship1: this.EmergencyContactRelationship1,
          EmergencyContactMobileNumber1: this.EmergencyContactMobileNumber1,
          EmergencyContact_Address1: this.EmergencyContact_Address1,
          EmergencyContact_EmailID1: this.EmergencyContact_EmailID1,
          EmergencyContactLandLineNumber1: this.EmergencyContactLandLineNumber1,
          CompanyIssuedMobile: this.CompanyIssuedMobile,
          PersonalEmailForContact: this.PersonalEmailForContact
        };
        this.DigiofficeService.InsertMyAddressDetails(eb).subscribe((data) => {
          debugger;
          Swal.fire('Saved Successfully.');
          this.ngOnInit();
          // this.router.navigate(['/EmployeeDashboard']);
          this.loader = false;
        });

      }
      else {
        Swal.fire(' InValid Email Address');
        this.loader = false;
      }
    }
    else {
      var eb = {
        AddressType: this.AddressType,
        AddressType2: this.AddressType2,
        FindPlace: this.FindPlace == undefined ? null : this.FindPlace,
        AddressLine1: this.AddressLine1,
        AddressLine2: this.AddressLine2,
        AddressLine3: this.AddressLine3,
        AddressLine4: this.AddressLine4,
        District: this.CityID,
        Province: this.StateID,
        Country: this.CountryID,
        barangay: this.Barangay,
        subDistrictPostcode: this.SubDistrictPostcode,
        Mobile: this.AddressPersonalContactNo,
        LandLineFax: this.LandLineFax,
        IsCorrespondance: 0,
        RequestType: this.RequestType,
        EmergencyContactName: this.EmergencyContactName,
        EmergencyContactRelationship: this.EmergencyContactRelationship,
        EmergencyContactMobileNumber: this.EmergencyContactMobileNumber,
        EmergencyContactOfficeNumber: this.EmergencyContactOfficeNumber,
        EmergencyContactLandLineNumber: this.EmergencyContactLandLineNumber,
        EmergencyContact_EmailID: this.EmergencyContact_EmailID,
        EmergencyContact_Address: this.EmergencyContact_Address,
        StaffID: this.StaffID,
        District2: this.CityID2,
        Province2: this.StateID2,
        Country2: this.CountryID2,
        Barangay2: this.BarangayType2,
        subDistrictPostcode1: this.SubDistrictPostcode2,
        OfficialEmail: this.OfficialEmail,
        EmergencyContactName1: this.EmergencyContactName1,
        EmergencyContactRelationship1: this.EmergencyContactRelationship1,
        EmergencyContactMobileNumber1: this.EmergencyContactMobileNumber1,
        EmergencyContact_Address1: this.EmergencyContact_Address1,
        EmergencyContact_EmailID1: this.EmergencyContact_EmailID1,
        EmergencyContactLandLineNumber1: this.EmergencyContactLandLineNumber1,
        CompanyIssuedMobile: this.CompanyIssuedMobile,
        PersonalEmailForContact: this.PersonalEmailForContact
      };
      this.DigiofficeService.InsertMyAddressDetails(eb).subscribe((data) => {
        debugger;
        Swal.fire('Saved Successfully.');
        this.ngOnInit();
        // this.router.navigate(['/EmployeeDashboard']);
        this.loader = false;
      });
    }
    // }
  }

  public UpdateMyAddressDetails() {
    // console.log("Emain", this.EmergencyContact_EmailID)



    debugger
    this.loader = true
    if (this.EmergencyContactName == "" || this.EmergencyContactName == undefined || this.EmergencyContactName == 0 || this.EmergencyContactName == null || this.EmergencyContactName == ''
      || this.OfficialEmail == "" || this.OfficialEmail == undefined || this.OfficialEmail == 0 || this.OfficialEmail == null || this.OfficialEmail == '') {
      Swal.fire('Please Fill All The Mandatory Fields')
      this.loader = false
    }
    // else if (this.AddressPersonalContactNo.length < 10 || this.AddressPersonalContactNo == '000000000000' || this.AddressPersonalContactNo.charAt(0) == 0) {
    //   Swal.fire("Enter valid Contact Number")
    // }
    else if (this.AddressPersonalContactNo == '000000000000') {
      Swal.fire("Enter valid Contact Number")
    }
    else if (this.EmergencyContact_EmailID != null || this.EmergencyContact_EmailID1 != null || this.PersonalEmailForContact != null ||
      this.OfficialEmail != null || this.EmergencyContact_EmailID != "" || this.EmergencyContact_EmailID1 != "" || this.PersonalEmailForContact != "" ||
      this.OfficialEmail != ""

      // this.PersonalEmailForContact != undefined || this.PersonalEmailForContact != null || 
      // this.PersonalEmailForContact != "" || this.EmergencyContact_EmailID != undefined || 
      // this.EmergencyContact_EmailID != null || this.EmergencyContact_EmailID != "" || 
      // this.EmergencyContact_EmailID1 != undefined || this.EmergencyContact_EmailID1 != null || 
      // this.EmergencyContact_EmailID1 != "" || this.OfficialEmail != undefined || 
      // this.OfficialEmail != null || this.OfficialEmail != ""
    ) {
      if (this.PersonalEmailForContact) {
        this.ValidateEmail3();
        this.PersonalEmailForContact = this.PersonalEmailForContact.replaceAll(' ', "");
      }
      if (this.EmergencyContact_EmailID) {
        this.ValidateEmail1();
        this.EmergencyContact_EmailID = this.EmergencyContact_EmailID.replaceAll(' ', "");
      }
      if (this.EmergencyContact_EmailID1) {
        this.ValidateEmail4();
        this.EmergencyContact_EmailID1 = this.EmergencyContact_EmailID1.replaceAll(' ', "");
      }
      if (this.OfficialEmail) {
        this.ValidateEmail2();
        this.OfficialEmail = this.OfficialEmail.replaceAll(' ', "");
      }
      // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
      // if (this.PersonalEmailForContact.match(mailformat)&&this.OfficialEmail.match(mailformat)) {

      // Swal.fire('Valid email address!');
      if (this.validEmail1 == true) {
        this.UpdateEmailMyAddressDetails();
        this.loader = false;
      }
      if (this.validEmail2 == true) {
        this.UpdateEmailMyAddressDetails();
        this.loader = false;
      }
      if (this.validEmail3 == true) {
        this.UpdateEmailMyAddressDetails();
        this.loader = false;
      }
      if (this.validEmail4 == true) {
        this.UpdateEmailMyAddressDetails();
        this.loader = false;
      }
      // else {
      //   Swal.fire(' InValid Email Address');
      //   this.ngOnInit();
      //   this.loader=false;
      // }



      //   if(){
      //     this.UpdateEmailMyAddressDetails();
      //      this.loader=false;
      //   }
      // if(){
      //     this.UpdateEmailMyAddressDetails();
      //     this.loader=false;
      //   }
      //    if(){
      //     this.UpdateEmailMyAddressDetails();
      //     this.loader=false;
      //   }

      // this.validEmail3 = true;
      // this.validEmail1 = true;
      // this.validEmail4 = true;
      // this.validEmail2 = true;


      // } 
      // else {
      //   Swal.fire(' InValid Email Address');
      //   this.ngOnInit();
      //   this.loader=false;
      // }
    }
    else {

      // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
      // if (this.OfficialEmail.match(mailformat)) {

      //   Swal.fire('Valid email address!');
      //   this.validEmail2 = true;
      var eb = {
        'ID': this.StaffID,
        'AddressType': this.AddressType,
        'AddressType2': this.AddressType2,
        'FindPlace': this.FindPlace,
        'AddressLine1': this.AddressLine1,
        'AddressLine2': this.AddressLine2,
        'AddressLine3': this.AddressLine3,
        'AddressLine4': this.AddressLine4,
        'Relationship': this.Relationship,
        // 'District': this.District,
        // 'Province': this.Province,
        // 'Country': this.Country1,

        'District': this.CityID == '0' ? 0 : this.CityID,
        'Province': this.StateID == 'Select Province' ? 0 : this.StateID,
        'Country': this.CountryID,
        'barangay': this.Barangay == 'Select Barangay' ? 0 : this.Barangay,
        'SubDistrictPostcode': this.SubDistrictPostcode,
        'Mobile': this.AddressPersonalContactNo,
        'LandLineFax': this.LandLineFax,
        'IsCorrespondance': this.IsCorrespondance,
        'RequestType': this.RequestType,
        'EmergencyContactName': this.EmergencyContactName,
        'EmergencyContactRelationship': this.EmergencyContactRelationship,
        'EmergencyContactMobileNumber': this.EmergencyContactMobileNumber,
        'EmergencyContactOfficeNumber': this.EmergencyContactOfficeNumber,
        'EmergencyContactLandLineNumber': this.EmergencyContactLandLineNumber,
        'EmergencyContact_EmailID': this.EmergencyContact_EmailID,
        'EmergencyContact_Address': this.EmergencyContact_Address,
        // 'AlternateHRManager': this.AlternateHRManager,
        // 'SubSection': this.SubSection,
        // 'WorkArrangement': this.WorkArrangement,
        'District2': this.CityID2 == '0' ? 0 : this.CityID2,
        'Province2': this.StateID2 == 'Select Province' ? 0 : this.StateID2,
        'Country2': this.CountryID2,
        'Barangay2': this.BarangayType2 == 'Select Barangay' ? 0 : this.BarangayType2,
        'SubDistrictPostcode2': this.SubDistrictPostcode2,
        'OfficialEmail': this.OfficialEmail,
        'EmergencyContactName1': this.EmergencyContactName1,
        'EmergencyContactRelationship1': this.EmergencyContactRelationship1,
        'EmergencyContactMobileNumber1': this.EmergencyContactMobileNumber1,
        'EmergencyContact_Address1': this.EmergencyContact_Address1,
        'EmergencyContact_EmailID1': this.EmergencyContact_EmailID1,
        'EmergencyContactLandLineNumber1': this.EmergencyContactLandLineNumber1,
        'CompanyIssuedMobile': this.CompanyIssuedMobile,
        'PersonalEmailForContact': this.PersonalEmailForContact
      }
      this.DigiofficeService.UpdateMyAddressDetails(eb).subscribe(

        data => {
          debugger
          Swal.fire("Updated Successfully!!!")
          this.ngOnInit();
          this.loader = false
        },
      )
      // }
      // else{
      //   Swal.fire(' Invalid Email Address');
      //   this.ngOnInit();
      //   this.loader=false;
      // }
    }
    // else if (this.EmergencyContact_EmailID != undefined && this.EmergencyContact_EmailID != null && this.EmergencyContact_EmailID != "") {
    //   this.ValidateEmail1(); 
    //   this.EmergencyContact_EmailID = this.EmergencyContact_EmailID.replaceAll(' ', "");
    //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    //   if (this.EmergencyContact_EmailID.match(mailformat)) {

    //     Swal.fire('Valid email address!');
    //     this.validEmail1 = true;

    //     var eb = {
    //       'ID': this.StaffID,
    //       'AddressType': this.AddressType,
    //       'AddressType2': this.AddressType2,
    //       'FindPlace': this.FindPlace,
    //       'AddressLine1': this.AddressLine1,
    //       'AddressLine2': this.AddressLine2,
    //       'AddressLine3': this.AddressLine3,
    //       'AddressLine4': this.AddressLine4,
    //       'Relationship': this.Relationship,
    //       // 'District': this.District,
    //       // 'Province': this.Province,
    //       // 'Country': this.Country1,

    //       'District': this.CityID == 'Select City' ? 0 : this.CityID,
    //       'Province': this.StateID == 'Select Province' ? 0 : this.StateID,
    //       'Country': this.CountryID,
    //       'barangay': this.Barangay == 'Select Barangay' ? 0 : this.Barangay,
    //       'SubDistrictPostcode': this.SubDistrictPostcode,
    //       'Mobile': this.AddressPersonalContactNo,
    //       'LandLineFax': this.LandLineFax,
    //       'IsCorrespondance': this.IsCorrespondance,
    //       'RequestType': this.RequestType,
    //       'EmergencyContactName': this.EmergencyContactName,
    //       'EmergencyContactRelationship': this.EmergencyContactRelationship,
    //       'EmergencyContactMobileNumber': this.EmergencyContactMobileNumber,
    //       'EmergencyContactOfficeNumber': this.EmergencyContactOfficeNumber,
    //       'EmergencyContactLandLineNumber': this.EmergencyContactLandLineNumber,
    //       'EmergencyContact_EmailID': this.EmergencyContact_EmailID,
    //       'EmergencyContact_Address': this.EmergencyContact_Address,
    //       // 'AlternateHRManager': this.AlternateHRManager,
    //       // 'SubSection': this.SubSection,
    //       // 'WorkArrangement': this.WorkArrangement,
    //       'District2': this.CityID2 == '0' ? 0 : this.CityID2,
    //       'Province2': this.StateID2 == 'Select Province' ? 0 : this.StateID2,
    //       'Country2': this.CountryID2,
    //       'Barangay2': this.BarangayType2 == 'Select Barangay' ? 0 : this.BarangayType2,
    //       'SubDistrictPostcode2': this.SubDistrictPostcode2,
    //       'OfficialEmail': this.OfficialEmail,
    //       'EmergencyContactName1': this.EmergencyContactName1,
    //       'EmergencyContactRelationship1': this.EmergencyContactRelationship1,
    //       'EmergencyContactMobileNumber1': this.EmergencyContactMobileNumber1,
    //       'EmergencyContact_Address1': this.EmergencyContact_Address1,
    //       'EmergencyContact_EmailID1': this.EmergencyContact_EmailID1,
    //       'EmergencyContactLandLineNumber1': this.EmergencyContactLandLineNumber1,
    //       'CompanyIssuedMobile':this.CompanyIssuedMobile,
    //       'PersonalEmailForContact':this.PersonalEmailForContact
    //     }
    //     this.DigiofficeService.UpdateMyAddressDetails(eb).subscribe(

    //       data => {
    //         debugger
    //         Swal.fire("Updated Successfully!!!")
    //         // location.reload();
    //         this.ngOnInit();
    //         this.loader = false
    //       },
    //     )

    //   } 
    //   else {
    //     Swal.fire(' InValid Email Address');
    //     this.ngOnInit();
    //     this.loader=false;
    //   }
    // }
    // else if (this.EmergencyContact_EmailID1 != undefined && this.EmergencyContact_EmailID1 != null && this.EmergencyContact_EmailID1 != "") {
    //   this.ValidateEmail4(); 
    //   this.EmergencyContact_EmailID1 = this.EmergencyContact_EmailID1.replaceAll(' ', "");
    //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    //   if (this.EmergencyContact_EmailID1.match(mailformat)) {

    //     Swal.fire('Valid email address!');
    //     this.validEmail4 = true;

    //     var eb = {
    //       'ID': this.StaffID,
    //       'AddressType': this.AddressType,
    //       'AddressType2': this.AddressType2,
    //       'FindPlace': this.FindPlace,
    //       'AddressLine1': this.AddressLine1,
    //       'AddressLine2': this.AddressLine2,
    //       'AddressLine3': this.AddressLine3,
    //       'AddressLine4': this.AddressLine4,
    //       'Relationship': this.Relationship,
    //       // 'District': this.District,
    //       // 'Province': this.Province,
    //       // 'Country': this.Country1,

    //       'District': this.CityID == 'Select City' ? 0 : this.CityID,
    //       'Province': this.StateID == 'Select Province' ? 0 : this.StateID,
    //       'Country': this.CountryID,
    //       'barangay': this.Barangay == 'Select Barangay' ? 0 : this.Barangay,
    //       'SubDistrictPostcode': this.SubDistrictPostcode,
    //       'Mobile': this.AddressPersonalContactNo,
    //       'LandLineFax': this.LandLineFax,
    //       'IsCorrespondance': this.IsCorrespondance,
    //       'RequestType': this.RequestType,
    //       'EmergencyContactName': this.EmergencyContactName,
    //       'EmergencyContactRelationship': this.EmergencyContactRelationship,
    //       'EmergencyContactMobileNumber': this.EmergencyContactMobileNumber,
    //       'EmergencyContactOfficeNumber': this.EmergencyContactOfficeNumber,
    //       'EmergencyContactLandLineNumber': this.EmergencyContactLandLineNumber,
    //       'EmergencyContact_EmailID': this.EmergencyContact_EmailID,
    //       'EmergencyContact_Address': this.EmergencyContact_Address,
    //       // 'AlternateHRManager': this.AlternateHRManager,
    //       // 'SubSection': this.SubSection,
    //       // 'WorkArrangement': this.WorkArrangement,
    //       'District2': this.CityID2 == '0' ? 0 : this.CityID2,
    //       'Province2': this.StateID2 == 'Select Province' ? 0 : this.StateID2,
    //       'Country2': this.CountryID2,
    //       'Barangay2': this.BarangayType2 == 'Select Barangay' ? 0 : this.BarangayType2,
    //       'SubDistrictPostcode2': this.SubDistrictPostcode2,
    //       'OfficialEmail': this.OfficialEmail,
    //       'EmergencyContactName1': this.EmergencyContactName1,
    //       'EmergencyContactRelationship1': this.EmergencyContactRelationship1,
    //       'EmergencyContactMobileNumber1': this.EmergencyContactMobileNumber1,
    //       'EmergencyContact_Address1': this.EmergencyContact_Address1,
    //       'EmergencyContact_EmailID1': this.EmergencyContact_EmailID1,
    //       'EmergencyContactLandLineNumber1': this.EmergencyContactLandLineNumber1,
    //       'CompanyIssuedMobile':this.CompanyIssuedMobile,
    //       'PersonalEmailForContact':this.PersonalEmailForContact
    //     }
    //     this.DigiofficeService.UpdateMyAddressDetails(eb).subscribe(

    //       data => {
    //         debugger
    //         Swal.fire("Updated Successfully!!!")
    //         // location.reload();
    //         this.ngOnInit();
    //         this.loader = false
    //       },
    //     )

    //   } 
    //   else {
    //     Swal.fire(' InValid Email Address');
    //     this.ngOnInit();
    //     this.loader=false;
    //   }
    // }


    // }
  }

  public UpdateEmailMyAddressDetails() {
    var eb = {
      'ID': this.StaffID,
      'AddressType': this.AddressType,
      'AddressType2': this.AddressType2,
      'FindPlace': this.FindPlace,
      'AddressLine1': this.AddressLine1,
      'AddressLine2': this.AddressLine2,
      'AddressLine3': this.AddressLine3,
      'AddressLine4': this.AddressLine4,
      'Relationship': this.Relationship,
      // 'District': this.District,
      // 'Province': this.Province,
      // 'Country': this.Country1,

      'District': this.CityID == 'Select City' ? 0 : this.CityID,
      'Province': this.StateID == 'Select Province' ? 0 : this.StateID,
      'Country': this.CountryID,
      'barangay': this.Barangay == 'Select Barangay' ? 0 : this.Barangay,
      'SubDistrictPostcode': this.SubDistrictPostcode,
      'Mobile': this.AddressPersonalContactNo,
      'LandLineFax': this.LandLineFax,
      'IsCorrespondance': this.IsCorrespondance,
      'RequestType': this.RequestType,
      'EmergencyContactName': this.EmergencyContactName,
      'EmergencyContactRelationship': this.EmergencyContactRelationship,
      'EmergencyContactMobileNumber': this.EmergencyContactMobileNumber,
      'EmergencyContactOfficeNumber': this.EmergencyContactOfficeNumber,
      'EmergencyContactLandLineNumber': this.EmergencyContactLandLineNumber,
      'EmergencyContact_EmailID': this.EmergencyContact_EmailID,
      'EmergencyContact_Address': this.EmergencyContact_Address,
      // 'AlternateHRManager': this.AlternateHRManager,
      // 'SubSection': this.SubSection,
      // 'WorkArrangement': this.WorkArrangement,
      'District2': this.CityID2 == '0' ? 0 : this.CityID2,
      'Province2': this.StateID2 == 'Select Province' ? 0 : this.StateID2,
      'Country2': this.CountryID2,
      'Barangay2': this.BarangayType2 == 'Select Barangay' ? 0 : this.BarangayType2,
      'SubDistrictPostcode2': this.SubDistrictPostcode2,
      'OfficialEmail': this.OfficialEmail,
      'EmergencyContactName1': this.EmergencyContactName1,
      'EmergencyContactRelationship1': this.EmergencyContactRelationship1,
      'EmergencyContactMobileNumber1': this.EmergencyContactMobileNumber1,
      'EmergencyContact_Address1': this.EmergencyContact_Address1,
      'EmergencyContact_EmailID1': this.EmergencyContact_EmailID1,
      'EmergencyContactLandLineNumber1': this.EmergencyContactLandLineNumber1,
      'CompanyIssuedMobile': this.CompanyIssuedMobile,
      'PersonalEmailForContact': this.PersonalEmailForContact
    }
    this.DigiofficeService.UpdateMyAddressDetails(eb).subscribe(

      data => {
        debugger
        Swal.fire("Updated Successfully!!!")
        // location.reload();
        this.ngOnInit();
        this.loader = false
      },
    )
  }

  public getRoleType(event: any) {
    debugger;
    this.RoleType = event.target.value;
  }

  public SavePositionDetails() {
    debugger;
    this.loader = true;
    if (
      this.EmployeeCode == 0 || this.EmployeeCode == undefined || this.EmployeeCode == null || this.EmployeeCode == '' || this.EmployeeCode == "" ||
      //this.OfficialEmail == undefined || this.OfficialEmail == undefined ||   this.OfficialEmail == null ||   this.OfficialEmail == '' ||   this.OfficialEmail == "" ||
      this.Band == '' || this.Band == undefined || this.Band == null || this.Band == '' || this.Band == "" ||

      this.EmployeeStatus == ' ' ||
      this.EmployeeStatus == undefined ||
      // this.NoticePeriod == ' ' ||
      // this.NoticePeriod == undefined ||
      // this.ConfirmationDueDate == ' ' ||
      // this.ConfirmationDueDate == undefined ||
      this.JoiningDate == undefined || this.JoiningDate == null || this.JoiningDate == '' || this.JoiningDate == "" ||
      this.level == undefined || this.level == '' || this.level == 0 || this.level == null || this.level == "" ||
      this.JobRole == undefined ||
      this.JobRole == 0 ||
      this.JobRole == "" ||
      this.JobRole == null ||
      this.JobRole == "" ||
      // this.Department1 == undefined ||
      // this.Department1 == '' ||
      this.Supervisor == undefined || this.Supervisor == '' || this.Supervisor == 0 || this.Supervisor == null || this.Supervisor == "" ||
      // this.Supervisor1 == "" ||
      this.EmployeementType == undefined || this.EmployeementType == '' || this.EmployeementType == 0 || this.EmployeementType == null || this.EmployeementType == "" ||
      this.Designation == undefined ||
      this.Designation == "" || this.Designation == 0 || this.Designation == null ||
      // this.StartDate == undefined ||
      this.Division == undefined ||
      this.Division == 0 ||
      this.Division == null ||
      this.Division == '' ||
      this.Entity == undefined ||
      this.Entity == '' ||
      this.Entity == null || this.Entity == 0 || this.Entity == "" ||
      this.Group == 0 ||
      this.Group == undefined ||
      this.Group == '' ||
      this.Group == null ||
      this.level == 0 ||
      this.level == undefined ||
      this.level == '' ||
      this.level == null ||
      this.SAPVendorNo == undefined ||
      this.SAPVendorNo == '' ||
      this.SAPVendorNo == "" ||
      this.SAPVendorNo == null ||
      this.PositionLogin == undefined ||
      this.PositionLogin == '' ||
      this.PositionLogin == "" ||
      this.PositionLogin == null

    ) {
      Swal.fire('Please Fill All The Mandatory Fields');
      this.loader = false;
    } else {
      var eb = {
        EmployeeCode: this.EmployeeCode,
        OfficialEmail: this.OfficialEmail,
        Band: this.Band,
        Grade: this.Grade2,
        JobRole: this.JobRole,
        Manager: this.Supervisor,
        EmployeeType: this.EmployeeType == undefined ? null : this.EmployeeType,
        EmployeeStatus: this.EmployeeStatus,
        NoticePeriod: this.NoticePeriod,
        ProbationPeriod: this.ProbationPeriod,
        ConfirmationDueDate: this.ConfirmationDueDate == undefined || this.ConfirmationDueDate == '' || this.ConfirmationDueDate == " " ? '1990-01-01 00:00:00.000' : this.ConfirmationDueDate,
        // this.ConfirmationDueDate == undefined
        //   ? ' '
        //   : this.ConfirmationDueDate,
        ConfirmationStatus: this.ConfirmationStatus,
        EmployeeName: this.EmployeeName,
        StaffID: this.StaffID,
        // ExtensionEndDate: this.ExtensionEndDate,
        ExtensionEndDate: this.ExtensionEndDate == undefined || this.ExtensionEndDate == '' || this.ExtensionEndDate == " " ? '1990-01-01 00:00:00.000' : this.ExtensionEndDate,
        // ProbationEndDate: this.ProbationEndDate,
        ProbationEndDate: this.ProbationEndDate == undefined || this.ProbationEndDate == '' || this.ProbationEndDate == " " ? '1990-01-01 00:00:00.000' : this.ProbationEndDate,
        // ProbationStartDate: this.ProbationStartDate,
        ProbationStartDate: this.ProbationStartDate == undefined || this.ProbationStartDate == '' || this.ProbationStartDate == " " ? '1990-01-01 00:00:00.000' : this.ProbationStartDate,
        StartDate: (this.StartDate == "" || this.StartDate == ' ' || this.StartDate == null) ? '1993-07-22 00:00:00.000'
          : this.StartDate,
        EndDate:
          this.EndDate == undefined || this.EndDate == " "
            ? '1993-07-22 00:00:00.000'
            : this.EndDate,
        // StartDate: this.StartDate,
        // EndDate: this.EndDate,

        NextLevelManager: this.NextLevelManager,
        HRManager: this.HRManager,
        GroupHead: this.GroupHead,

        EmployementType: this.EmployementType,
        Entity: this.Entity,
        Group: this.Group == undefined || this.Group == "" || this.Group == null ? 0 : this.Group,
        // Group: this.Group,
        Division: this.Division,
        Department: this.Department == null || this.Department == undefined || this.Department == "" || this.Department == " " || this.Department == "0" ? 0 : this.Department,
        Section: this.Section,
        SubSection: this.SubSection,
        WorksiteCountry: this.WorksiteCountry,
        WorksiteCity: this.WorksiteCity,
        WorksiteProvince: this.WorksiteProvince,
        WorksiteLocation: this.WorksiteLocation,
        CompanyIssuedMobile: this.CompanyIssuedMobile,
        SAPVendorNo: this.SAPVendorNo,
        level: this.level,
        Designation: this.Designation,
        CostCentre: this.CostCenter == null || this.CostCenter == "" ? 0 : this.CostCenter,
        JoiningDate: this.JoiningDate == undefined || this.JoiningDate == '' ? '1990-01-01 00:00:00.000' : this.JoiningDate,
        PositionLogin: this.PositionLogin
      };
      this.DigiofficeService.InsertPositionDetails(eb).subscribe((data) => {
        debugger;

        Swal.fire('Saved Succesfully');
        this.ngOnInit();
        this.loader = false;
      });
    }
  }

  public UpdateDependentDetails() {
    debugger;
    this.loader = true;
    if (

      this.attachments6.length == undefined || this.attachments6.length == null || this.attachments6.length == 0
      // this.DependentName == undefined ||
      // this.DependentName == null ||
      // this.DependentName == '' ||
      // this.DependentName == 0 ||
      // this.Relationship1 == null ||
      // this.Relationship1 == '' ||
      // this.Relationship1 == undefined ||
      // this.Relationship1 == 0 ||
      // this.Relationship1 == 'Select One'

      // ( this.dattachment == null)

      // || this.attachments6.length == "" || this.attachments6.length == ' ' ||
      // this.attachments6.length == undefined || this.attachments6.length == null ||
    ) {
      Swal.fire('Please fill Mandatory Fields');
      this.loader = false;
    } else {
      var eb = {
        ID: this.dependentID,
        StaffID: this.StaffID,
        DependentName:
          this.DependentName == undefined ? null : this.DependentName,
        Relationship:
          this.Relationship1 == undefined ? null : this.Relationship1,
        Gender: this.Gender1 == 0 ? null : this.Gender1,
        DateOfBirth: (this.DateOfBirth == ' ' || this.DateOfBirth == undefined) ? '1990-01-01 00:00:00.000' : this.DateOfBirth,
        Address: this.Address == undefined ? null : this.Address,
        Mobile: this.Mobile == undefined ? null : this.Mobile,
        Is_Dependent: this.Is_Dependent == undefined ? 0 : this.Is_Dependent,
        Id_Number: this.Id_Number == undefined ? null : this.Id_Number,
        Is_Child_Adopted: this.Is_Child_Adopted == undefined ? 0 : 1,
        Race: this.Race == undefined ? null : this.Race,
        CitizenShip: this.CitizenShip == '' ? null : this.CitizenShip,
        Country_Of_Birth: this.cb == '' ? null : this.cb,
        Religion: this.Religion == undefined ? null : this.Religion,
        Working_Status:
          this.Working_Status == 'Select One' ? null : this.Working_Status,
        Request_Type: this.Request_Type == undefined ? null : this.Request_Type,
        // DependentAttachment: this.attachments6url[0] == "" || this.attachments6url[0] == null ? this.dattachment : this.attachments6url[0],
        DependentAttachment: this.attachments6url[0] == "" || this.attachments6url[0] == undefined || this.attachments6url[0] == 0 ? this.dattachment : this.attachments6url[0],

      };
      this.DigiofficeService.UpdateDependentDetails(eb).subscribe((data) => {
        debugger;
        Swal.fire('Updated Successfully!!!');
        // location.reload();
        this.ngOnInit();
        this.loader = false;
      });

    }


    //   public UpdateDependentDetails() {
    //   debugger;
    //   this.loader = true;
    //   if (
    //     // this.DependentName == undefined ||
    //     // this.DependentName == null ||
    //     // this.DependentName == '' ||
    //     // this.DependentName == 0 ||
    //     // this.Relationship1 == null ||
    //     // this.Relationship1 == '' ||
    //     // this.Relationship1 == undefined ||
    //     // this.Relationship1 == 0 ||
    //     // this.Relationship1 == 'Select One'

    //     // ( this.dattachment == null)

    //     // || this.attachments6.length == "" || this.attachments6.length == ' ' ||
    //     // this.attachments6.length == undefined || this.attachments6.length == null ||
    //   ) 
    //   {
    //     Swal.fire('Please fill Mandatory Fields');
    //     this.loader = false;
    //   } else 
    //   {
    //     var eb = {
    //       ID: this.dependentID,
    //       StaffID: this.StaffID,
    //       DependentName:
    //         this.DependentName == undefined ? null : this.DependentName,
    //       Relationship:
    //         this.Relationship1 == undefined ? null : this.Relationship1,
    //       Gender: this.Gender1 == 0 ? null : this.Gender1,
    //       DateOfBirth: (this.DateOfBirth == ' ' || this.DateOfBirth == undefined) ? '1990-01-01 00:00:00.000' : this.DateOfBirth,
    //       Address: this.Address == undefined ? null : this.Address,
    //       Mobile: this.Mobile == undefined ? null : this.Mobile,
    //       Is_Dependent: this.Is_Dependent == undefined ? 0 : this.Is_Dependent,
    //       Id_Number: this.Id_Number == undefined ? null : this.Id_Number,
    //       Is_Child_Adopted: this.Is_Child_Adopted == undefined ? 0 : 1,
    //       Race: this.Race == undefined ? null : this.Race,
    //       CitizenShip: this.CitizenShip == '' ? null : this.CitizenShip,
    //       Country_Of_Birth: this.cb == '' ? null : this.cb,
    //       Religion: this.Religion == undefined ? null : this.Religion,
    //       Working_Status:
    //         this.Working_Status == 'Select One' ? null : this.Working_Status,
    //       Request_Type: this.Request_Type == undefined ? null : this.Request_Type,
    //       // DependentAttachment: this.attachments6url[0] == "" || this.attachments6url[0] == null ? this.dattachment : this.attachments6url[0],
    //       DependentAttachment: this.attachments6url[0] == "" || this.attachments6url[0] == undefined || this.attachments6url[0] == 0 ? this.dattachment : this.attachments6url[0],

    //     };
    //     this.DigiofficeService.UpdateDependentDetails(eb).subscribe((data) => {
    //       debugger;
    //       Swal.fire('Updated Successfully!!!');
    //       // location.reload();
    //       this.ngOnInit();
    //       this.loader = false;
    //     });
    //   }
    // }
  }
  public UpdateNomination() {
    debugger;
    if (
      this.Dependent == null ||
      this.Dependent == '' ||
      this.Dependent == undefined ||
      this.Dependent == 0 ||
      this.Percentage == 0 ||
      this.Percentage == null ||
      this.NomineeType == '' ||
      this.NomineeType == undefined ||
      this.NomineeType == 0 ||
      this.BeneficiaryDOB == '' ||
      this.BeneficiaryDOB == undefined ||
      this.BeneficiaryDOB == ''
    ) {
      Swal.fire('Please fill Mandatory Fields');
      this.loader = false;
    } else {
      this.loader = true;
      var eb = {
        ID: this.nominationID,
        Dependent: this.Dependent,
        Percentage: this.Percentage,
        NomineeType: this.NomineeType == undefined ? null : this.NomineeType,
        GuardianName: this.GuardianName == undefined ? null : this.GuardianName,
        GuardianRelationship:
          this.GuardianRelationship == undefined
            ? null
            : this.GuardianRelationship,
        BeneficiaryDOB: this.BeneficiaryDOB == undefined || this.BeneficiaryDOB == '' ? '1990-01-01 00:00:00.000' : this.BeneficiaryDOB,
        NominationAttachment:
          this.attachments9url[0] == '' || this.attachments9url[0] == null
            ? this.Attachmentedu
            : this.attachments9url[0],
      };
      this.DigiofficeService.UpdateNomination(eb).subscribe((data) => {
        debugger;
        Swal.fire('Updated Successfully!!!');
        // location.reload();
        this.ngOnInit();
        this.loader = false;
      });
    }
  }

  public UpdateEmploymentDetails() {
    debugger;
    // this.loader = true;
    var eb = {
      ID: this.employmentID,
      ComapanyName: this.ComapanyName == undefined ? null : this.ComapanyName,
      Title: this.JobTitle == undefined ? null : this.JobTitle,
      StartDate: (this.EmpStartDate == ' ' || this.EmpStartDate == "" || this.EmpStartDate == undefined) ? '1990-01-01 00:00:00.000' : this.EmpStartDate,
      EndDate: (this.EmpEndDate == ' ' || this.EmpEndDate == "" || this.EmpEndDate == undefined) ? '1990-01-01 00:00:00.000' : this.EmpEndDate,
      Salary: this.Salary == undefined || this.Salary == "" ? 0 : this.Salary,
      CurrentEmployer: this.CurrentEmployer == undefined ? false : this.CurrentEmployer,
      AttachmentEmployment: this.attachments8url[0] == undefined ? this.eattachment : this.attachments8url[0],
      EmployementTypeold: this.EmployementTypeold,
      EmploymentLevel: this.EmploymentLevel
    };
    this.DigiofficeService.UpdateEmploymentDetails(eb).subscribe((data) => {
      debugger;
      Swal.fire('Updated Successfully!!!');
      // location.reload();
      this.ngOnInit();
      this.loader = false;
    });
  }

  public UpdateEducationDetails() {
    debugger;
    this.loader = true;

    var eb = {
      ID: this.educationID,
      StaffID: this.StaffID,
      EducationType:
        this.EducationType == undefined ? null : this.EducationType,
      // 'Qualification': this.Qualification == undefined ? null : this.Qualification,
      NameOfQualification: this.NameOfQualification == undefined ? null : this.NameOfQualification,
      Branch: this.Branch == undefined ? null : this.Branch,
      InstitutionName:
        this.InstitutionName == undefined ? null : this.InstitutionName,
      Country: this.Country == undefined ? null : this.Country,
      // 'ScoreType': this.ScoreType == undefined ? null : this.ScoreType,
      Grade: this.EducationGrade == undefined ? 0 : this.EducationGrade,
      StartDateMonth: this.StartDateMonth == undefined || this.StartDateMonth == " "

        ? '1990-01-01 00:00:00.000'
        : this.StartDateMonth,
      StartDateYear:
        this.StartDateMonth == undefined || this.StartDateMonth == " "
          ? '1990-01-01 00:00:00.000'
          : this.StartDateMonth,
      EndDateMonth:
        this.EndDateMonth == undefined || this.EndDateMonth == " "
          ? '1990-01-01 00:00:00.000'
          : this.EndDateMonth,
      EndDateYear:
        this.EndDateMonth == undefined || this.EndDateMonth == " "
          ? '1990-01-01 00:00:00.000'
          : this.EndDateMonth,
      AttachmentEdu:
        this.attachments7url[0] == '' || this.attachments7url[0] == null
          ? this.Attachmentedu
          : this.attachments7url[0],
      LicenseOrCertification:
        this.LicenseOrCertification == undefined
          ? null
          : this.LicenseOrCertification,
    };
    this.DigiofficeService.UpdateEducationDetails(eb).subscribe((data) => {
      debugger;
      Swal.fire('Updated Successfully!!!');
      // location.reload();
      this.ngOnInit();
      this.loader = false;
    });

  }

  // public UpdateEducationDetails() {
  //   debugger;
  //   this.loader = true;
  //   if (
  //     this.EducationType == undefined ||
  //     this.EducationType == null ||
  //     this.EducationType == '' ||
  //     this.EducationType == 0 ||
  //     this.NameOfQualification == null ||
  //     this.NameOfQualification == '' ||
  //     this.NameOfQualification == undefined ||
  //     this.NameOfQualification == 0 ||
  //     this.Branch == undefined ||
  //     this.Branch == null ||
  //     this.Branch == '' ||
  //     this.Branch == 0
  //   ) {
  //     Swal.fire('Please fill Mandatory Fields');
  //     this.loader = false;
  //   } else {
  //     var eb = {
  //       ID: this.educationID,
  //       StaffID: this.StaffID,
  //       EducationType:
  //         this.EducationType == undefined ? null : this.EducationType,
  //       // 'Qualification': this.Qualification == undefined ? null : this.Qualification,
  //       NameOfQualification: this.NameOfQualification == undefined ? null : this.NameOfQualification,
  //       Branch: this.Branch == undefined ? null : this.Branch,
  //       InstitutionName:
  //         this.InstitutionName == undefined ? null : this.InstitutionName,
  //       Country: this.Country == undefined ? null : this.Country,
  //       // 'ScoreType': this.ScoreType == undefined ? null : this.ScoreType,
  //       Grade: this.EducationGrade == undefined ? 0 : this.EducationGrade,
  //       StartDateMonth: this.StartDateMonth == undefined || this.StartDateMonth == " "

  //         ? '1990-01-01 00:00:00.000'
  //         : this.StartDateMonth,
  //       StartDateYear:
  //         this.StartDateMonth == undefined || this.StartDateMonth == " "
  //           ? '1990-01-01 00:00:00.000'
  //           : this.StartDateMonth,
  //       EndDateMonth:
  //         this.EndDateMonth == undefined || this.EndDateMonth == " "
  //           ? '1990-01-01 00:00:00.000'
  //           : this.EndDateMonth,
  //       EndDateYear:
  //         this.EndDateMonth == undefined || this.EndDateMonth == " "
  //           ? '1990-01-01 00:00:00.000'
  //           : this.EndDateMonth,
  //       AttachmentEdu:
  //         this.attachments7url[0] == '' || this.attachments7url[0] == null
  //           ? this.Attachmentedu
  //           : this.attachments7url[0],
  //       LicenseOrCertification:
  //         this.LicenseOrCertification == undefined
  //           ? null
  //           : this.LicenseOrCertification,
  //     };
  //     this.DigiofficeService.UpdateEducationDetails(eb).subscribe((data) => {
  //       debugger;
  //       Swal.fire('Updated Successfully!!!');
  //       // location.reload();
  //       this.ngOnInit();
  //       this.loader = false;
  //     });
  //   }
  // }


  public DeleteEducationDetails(id: any) {
    debugger;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteEducationDetails(id).subscribe({
          next: (data) => {
            debugger;
            Swal.fire('Deleted Successfully!');
            this.ngOnInit();
            this.loader = false;
          },
          error: (err) => {
            Swal.fire('Issue in Delete Education Details');
            // Insert error in Db Here//
            var obj = {
              PageName: this.currentUrl,
              ErrorMessage: err.error.message,
            };
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              (data) => {
                debugger;
              }
            );
          },
        });
      }
    });
  }

  public UpdateID_Details() {
    debugger;
    this.loader = true;

    if (this.IDType == undefined || this.IDType == null || this.IDType == '' || this.IDType == "Select" ||
      this.IDType == 0 || this.Number == null || this.Number == '' || this.Number == undefined || this.NameOnDocument == undefined || this.NameOnDocument == '' || this.NameOnDocument == null
    ) {
      // (this.attachments4.length == 0 && this.idaphoto == null)
      Swal.fire("Please fill Mandatory Fields");
      this.loader = false;
    }
    else if (this.Number == 0) {
      Swal.fire('Please Enter a Valid Account Number');
    }
    /*  else if (this.Number != null && this.Number != undefined && this.Number != "") {
      var pattern = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$');
      if (this.Number.match(pattern)) {
        var eb = {
          ID: this.StaffID,
          IDType: this.IDType,
          Number: this.Number,
          NameOnDocument: this.NameOnDocument,
          IssueDate:
            this.IssueDate == undefined
              ? '1990-01-01 00:00:00.000'
              : this.IssueDate,
          ExpiryDate:
            this.ExpiryDate == undefined
              ? '1990-01-01 00:00:00.000'
              : this.ExpiryDate,
          IssuingAuthority: this.IssuingAuthority,
          PlaceOfIssue: this.PlaceOfIssue,
          IDAttachment: this.attachments4url[0],
        };
        this.DigiofficeService.UpdateID_Details(eb).subscribe((data) => {
          debugger;
          Swal.fire('Updated Successfully!!!');
          location.reload();
        });
        this.loader = false;
      }
      else {
        Swal.fire('Please Enter a Valid Account Number');
        this.loader = false;
      }
    } */ else {
      var eb = {
        ID: this.IdDetailsID,
        StaffID: this.StaffID,
        IDType: this.IDType,
        Number: this.Number,
        NameOnDocument: this.NameOnDocument,
        IssueDate:
          this.IssueDate == undefined || this.IssueDate == "" || this.IssueDate == " "
            ? '1990-01-01 00:00:00.000'
            : this.IssueDate,
        ExpiryDate:
          this.ExpiryDate == undefined || this.ExpiryDate == "" || this.ExpiryDate == " "
            ? '1990-01-01 00:00:00.000'
            : this.ExpiryDate,
        IssuingAuthority: this.IssuingAuthority,
        PlaceOfIssue: this.PlaceOfIssue,


        IDAttachment: this.attachments4url[0] == '' || this.attachments4url[0] == null ? this.idaphoto : this.attachments4url[0],

      };
      this.DigiofficeService.UpdateID_Details(eb).subscribe((data) => {
        debugger;
        Swal.fire('Updated Successfully!!!');
        // location.reload();
        this.ngOnInit();
      });
      this.loader = false;
    }
  }

  public DeleteIDDetails(id: any) {
    debugger;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteID_Details(id).subscribe({
          next: (data) => {
            debugger;
            Swal.fire('Deleted Successfully!');
            this.ngOnInit();
            this.loader = false;
          },
          error: (err) => {
            Swal.fire('Issue in Delete ID Details');
            // Insert error in Db Here//
            var obj = {
              PageName: this.currentUrl,
              ErrorMessage: err.error.message,
            };
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              (data) => {
                debugger;
              }
            );
          },
        });
      }
    });
  }

  public DeleteBankDetails(id: any) {
    debugger;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!',
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteBankDetails(id).subscribe({
          next: (data) => {
            debugger;
            Swal.fire('Deleted Successfully!');
            this.ngOnInit();
            this.loader = false;
          },
          error: (err) => {
            Swal.fire('Issue in Delete Bank Details');
            // Insert error in Db Here//
            var obj = {
              PageName: this.currentUrl,
              ErrorMessage: err.error.message,
            };
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              (data) => {
                debugger;
              }
            );
          },
        });
      }
    });
  }


  public UpdateBankDetails() {
    debugger;
    this.loader = true;

    if (this.NameOfBank == 'Gcash Number') {
      if (
        this.NameOfBank == undefined ||
        this.NameOfBank == null ||
        this.NameOfBank == '' ||
        this.NameOfBank == 0 || this.NameOfBank == "" ||
        this.GcashHolderName == null ||
        this.GcashHolderName == '' ||
        this.GcashHolderName == undefined ||
        this.GcashHolderName == 0 || this.GcashHolderName == ""
      ) {
        Swal.fire('Please fill Mandatory Fields');
        this.loader = false;
      }
      else {
        var eb = {
          ID: this.ID,
          // AccountType: this.accountType,
          NameOfBank: this.NameOfBank,
          AccountHolderName: this.AccountHolderName,
          BankAccountNumber: this.BankAccountNumber,
          AccountType: this.accountType,
          BranchName: this.BranchName,
          BranchAddress: this.branchAddress,
          GcashHolderName: this.GcashHolderName,
          GcashAccountNumber: this.GcashAccountNumber,
          GcashMobileNumber: this.GcashMobileNumber
        }
        this.DigiofficeService.UpdateBankDetails(eb).subscribe((data) => {
          debugger;
          Swal.fire('Updated Successfully!!!');
          // location.reload();
          this.ngOnInit();
          this.loader = false;
        });
      }
    }
    else if (this.NameOfBank != 'Gcash Number') {
      if (
        this.NameOfBank == undefined ||
        this.NameOfBank == null ||
        this.NameOfBank == '' ||
        this.NameOfBank == 0 || this.NameOfBank == "" ||
        this.AccountHolderName == null ||
        this.AccountHolderName == '' ||
        this.AccountHolderName == undefined ||
        this.AccountHolderName == 0 || this.AccountHolderName == ""
      ) {
        Swal.fire('Please fill Mandatory Fields');
        this.loader = false;
      }
      else {
        var eb = {
          ID: this.StaffID,
          // AccountType: this.accountType,
          NameOfBank: this.NameOfBank,
          AccountHolderName: this.AccountHolderName,
          BankAccountNumber: this.BankAccountNumber,
          AccountType: this.accountType,
          BranchName: this.BranchName,
          BranchAddress: this.branchAddress,
          GcashHolderName: this.GcashHolderName,
          GcashAccountNumber: this.GcashAccountNumber,
          GcashMobileNumber: this.GcashMobileNumber
        }
        this.DigiofficeService.UpdateBankDetails(eb).subscribe((data) => {
          debugger;
          Swal.fire('Updated Successfully!!!');
          // location.reload();
          this.ngOnInit();
          this.loader = false;
        });
      }
    }

  }



  public UpdateVisaDetails() {
    debugger;
    this.loader = true;
    var eb = {
      ID: this.StaffID,

      VisaType: this.VisaType == undefined ? null : this.VisaType,
      VisaNumber: this.VisaNumber == undefined ? null : this.VisaNumber,
      VisaIssueDate: this.VisaIssueDate == ' ' ? this.DOB : this.VisaIssueDate,
      VisaExpiryDate:
        this.VisaExpiryDate == ' ' ? this.DOB : this.VisaExpiryDate,
    };
    this.DigiofficeService.UpdateVisaDetails(eb).subscribe((data) => {
      debugger;
      Swal.fire('Updated Successfully!!!');
      // location.reload();
      this.loader = false;
    });
  }

  public UpdateSalaryDetails() {
    debugger;
    this.loader = true;
    var eb1 = {
      ID: this.StaffID,
      EmployeeName: this.EmployeeName,
      Grade: this.Grade,
      Designation: this.Designation,
      PayRateType: this.PayRateType,
      PayStructure: this.PayStructure,
      EffectiveFromDate: this.EffectiveFromDate,
      Reason: this.Reason,
    };
    this.DigiofficeService.UpdateSalaryDetails(eb1).subscribe((data) => {
      debugger;

      Swal.fire('Updated Successfully!!!');
      // location.reload();
      this.loader = false;
    });
  }
  AddressPersonalContactNo: any;




  public UpdatePositionDetails() {
    debugger;
    this.loader = true;
    if (
      this.EmployeeCode == 0 || this.EmployeeCode == undefined || this.EmployeeCode == null || this.EmployeeCode == '' || this.EmployeeCode == "" ||
      // this.OfficialEmail == undefined || this.OfficialEmail == undefined ||   this.OfficialEmail == null ||   this.OfficialEmail == '' ||   this.OfficialEmail == "" ||
      this.Band == '' || this.Band == undefined || this.Band == null || this.Band == '' || this.Band == "" ||

      this.EmployeeStatus == ' ' ||
      this.EmployeeStatus == undefined ||
      // this.NoticePeriod == ' ' ||
      // this.NoticePeriod == undefined ||
      // this.ConfirmationDueDate == ' ' ||
      // this.ConfirmationDueDate == undefined ||
      this.JoiningDate == undefined || this.JoiningDate == null || this.JoiningDate == '' || this.JoiningDate == "" ||
      this.level == undefined || this.level == '' || this.level == 0 || this.level == null || this.level == "" ||
      this.JobRole == undefined ||
      this.JobRole == 0 ||
      this.JobRole == "" ||
      this.JobRole == null ||
      this.JobRole == "" ||
      // this.Department1 == undefined ||
      // this.Department1 == '' ||
      this.Supervisor == undefined || this.Supervisor == '' || this.Supervisor == 0 || this.Supervisor == null || this.Supervisor == "" ||
      // this.Supervisor1 == "" ||
      this.EmployeementType == undefined || this.EmployeementType == '' || this.EmployeementType == 0 || this.EmployeementType == null || this.EmployeementType == "" ||
      this.Designation == undefined ||
      this.Designation == "" || this.Designation == 0 || this.Designation == null ||
      // this.StartDate == undefined ||
      this.Division == undefined ||
      this.Division == 0 ||
      this.Division == null ||
      this.Division == '' ||
      this.Entity == undefined ||
      this.Entity == '' ||
      this.Entity == null || this.Entity == 0 || this.Entity == "" ||
      this.Group == 0 ||
      this.Group == undefined ||
      this.Group == '' ||
      this.Group == null ||
      this.SAPVendorNo == undefined ||
      this.SAPVendorNo == '' ||
      this.SAPVendorNo == "" ||
      this.SAPVendorNo == null ||
      this.PositionLogin == undefined ||
      this.PositionLogin == '' ||
      this.PositionLogin == "" ||
      this.PositionLogin == null
    ) {
      Swal.fire('Please Fill All The Mandatory Fields');
      this.loader = false;
    } else {
      var eb = {
        ID: this.StaffID,
        EmployeeCode: this.EmployeeCode,
        OfficialEmail: this.OfficialEmail,
        Band: this.Band,
        Grade: this.level,
        JobRole: this.JobRole,
        Manager: this.Supervisor,
        EmployeeType:this.EmployeementType == undefined ? null : this.EmployeementType,
        EmployeeStatus: this.EmployeeStatus,
        NoticePeriod: this.NoticePeriod,
        ProbationPeriod: this.ProbationPeriod,
        ConfirmationDueDate: this.ConfirmationDueDate == undefined || this.ConfirmationDueDate == '' || this.ConfirmationDueDate == " " ? '1990-01-01 00:00:00.000' : this.ConfirmationDueDate,
        // this.ConfirmationDueDate == undefined
        //   ? ' '
        //   : this.ConfirmationDueDate,
        // ConfirmationDueDate: this.ConfirmationDueDate,
        ConfirmationStatus: this.ConfirmationStatus,
        EmployeeName: this.EmployeeName,
        ExtensionEndDate: this.ExtensionEndDate == undefined || this.ExtensionEndDate == '' || this.ExtensionEndDate == " " ? '1990-01-01 00:00:00.000' : this.ExtensionEndDate,
        // ExtensionEndDate: this.ExtensionEndDate,
        // ProbationEndDate: '1993-07-22 00:00:00.000',
        ProbationEndDate: this.ProbationEndDate == undefined || this.ProbationEndDate == '' || this.ProbationEndDate == " " ? '1990-01-01 00:00:00.000' : this.ProbationEndDate,
        // ProbationStartDate: '1993-07-22 00:00:00.000',
        ProbationStartDate: this.ProbationStartDate == undefined || this.ProbationStartDate == '' || this.ProbationStartDate == " " ? '1990-01-01 00:00:00.000' : this.ProbationStartDate,
        StartDate: (this.StartDate == "" || this.StartDate == ' ' || this.StartDate == null) ? '1993-07-22 00:00:00.000'
          : this.StartDate,
        EndDate:
          this.ConfirmationDueDate == undefined || this.ConfirmationDueDate == " "
            ? '1993-07-22 00:00:00.000'
            : this.ConfirmationDueDate,
        NextLevelManager: this.NextLevelManager,
        HRManager: this.HRManager,
        GroupHead: this.GroupHead,

        Entity: this.Entity,
        Group: this.Group == undefined || this.Group == "" || this.Group == null ? 0 : this.Group,
        // Group: this.Group,
        Division: this.Division,
        Department: this.Department == null || this.Department == undefined || this.Department == "" || this.Department == " " || this.Department == "0" ? 0 : this.Department,
        Section: this.Section,
        WorksiteCountry: this.WorksiteCountry,
        WorksiteCity: this.WorksiteCity,
        WorksiteProvince: this.WorksiteProvince,
        WorksiteLocation: this.WorksiteLocation,
        CompanyIssuedMobile: this.CompanyIssuedMobile,
        SAPVendorNo: this.SAPVendorNo,
        level: this.level,
        Designation: this.Designation,
        CostCentre: this.CostCenter == null || this.CostCenter == "" ? 0 : this.CostCenter,
        AlternateHRManager: this.AlternateHRManager,
        SubSection: this.SubSection,
        WorkArrangement: this.WorkArrangement,
        JoiningDate: this.JoiningDate == undefined || this.JoiningDate == '' ? '1990-01-01 00:00:00.000' : this.JoiningDate,
        PositionLogin: this.PositionLogin
      };
      this.DigiofficeService.UpdatePositionDetails(eb).subscribe((data) => {
        if (data == 0) {
          Swal.fire('Sorry Staff Cannot Be Added, Staff With Same Employee ID Already Exists');
          this.loader = false;
        }
        else{
          Swal.fire('Updated Successfully');
          location.reload();
          this.loader = false;

        }
        // Swal.fire('Updated Successfully');
        // this.ngOnInit();
        // this.router.navigate(['/EmployeeForm']);
        // location.reload();
        // this.ngOnInit();
        // this.loader = false;
      });
    }
  }

  unitdetailsarray: any = [];
  arrayid: any;
  public showtable: any;

  public insertdetails() {
    this.showtable = 1;
    debugger;
    var stt = {
      ComapanyName: this.ComapanyName,
      Title: this.JobTitle,
      StartDate: (this.EmpStartDate == ' ' || this.EmpStartDate == "" || this.EmpStartDate == undefined) ? '1990-01-01 00:00:00.000' : this.EmpStartDate,
      EndDate: (this.EmpEndDate == ' ' || this.EmpEndDate == "" || this.EmpEndDate == undefined) ? '1990-01-01 00:00:00.000' : this.EmpEndDate,

      // StartDate: this.EmpStartDate,
      // EndDate: this.EmpEndDate,
      Salary: this.Salary,
    };
    this.unitdetailsarray.push(stt);
    this.arrayid = this.arrayid + 1;
  }

  public cancel() {
    debugger;
    location.reload();
  }

  public GetCountryID(event: any) {
    this.CountryID = event.target.value;
    this.DigiofficeService.GetStateType().subscribe((data) => {
      debugger;
      // this.Provincelist = data.filter((x) => x.countryID == this.CountryID);
      this.Provincelist = data
    });
    if (this.CountryID != this.StateID) {
      this.CityID = 'Select City';
      this.Barangay = 'Select Barangay';
      this.StateID = 'Select Province';
    }
  }
  Provincelist2: any;
  public GetCountryID2(event: any) {
    this.CountryID2 = event.target.value;
    this.DigiofficeService.GetStateType().subscribe((data) => {
      debugger;
      this.Provincelist2 = data.filter((x) => x.countryID == this.CountryID2);
    });
    if (this.CountryID2 != this.StateID2) {
      this.CityID2 = 'Select City';
      this.BarangayType2 = 'Select Barangay';
      this.StateID2 = 'Select Province';
    }
  }

  public GetProvinceID(event: any) {
    this.StateID = event.target.value;
    this.WorksiteProvince = event.target.value;

    this.DigiofficeService.GetCityType().subscribe((data) => {
      debugger;
      this.Citylist1 = data.filter((x) => x.stateID == this.StateID);
      this.Citylist = data.filter((x) => x.stateID == this.StateID);
    });
    // if(this.CountryID!=this.StateID){
    //   this.CityID="";
    // }
  }
  Citylist2: any;
  public GetProvinceID2(event: any) {
    this.StateID2 = event.target.value;
    this.DigiofficeService.GetCityType().subscribe((data) => {
      debugger;
      this.Citylist2 = data.filter((x) => x.stateID == this.StateID2);
    });
  }

  public GetBarangay(event: any) {
    this.StateID = event.target.value;
    this.DigiofficeService.GetBarangayMaster().subscribe((data) => {
      debugger;
      this.Barangaylist = data.filter((x) => x.cityID == this.CityID);
    });
  }

  show: any;

  // public GetCItyID(event: any) {
  //   debugger
  //   this.CityID = event.target.value;
  //   if (this.CityID == 103) {
  //     this.show = 1;
  //   } else {
  //     this.show = 2;
  //   }

  // }

  public restdaysarray: any = [];
  public restdaysarray1: any = [];

  onItemSelectrest(item: any) {
    debugger;
    console.log(item);
    this.restdaysarray1.push(item);
  }

  onItemSelect(item: any) {
    debugger;
    console.log(item);
    this.Supervisor = item.target.value;
  }

  onItemSelect1(item: any) {
    debugger;
    console.log(item);
    this.NextLevelManager = item.target.value;
  }

  onItemSelect2(item: any) {
    debugger;
    console.log(item);
    this.GroupHead = item.target.value;
  }

  onItemSelect3(item: any) {
    debugger;
    this.HRManager = item.id;
  }

  onItemSelect83(item: any) {
    debugger;
    this.AlternateHRManager = item.id;
  }

  costcenteronItemSelect(item: any) {
    debugger;
    console.log(item);
    this.CostCenter = item.target.value;
  }

  countryonItemSelect(item: any) {
    debugger;
    console.log(item);
    // this.CostCenter = item.id
    this.WorksiteCountry = item.target.value;
    this.DigiofficeService.GetStateType().subscribe((data) => {
      debugger;
      this.Provincelist = data.filter((x) => x.countryID == this.WorksiteCountry);
      // this.Provincelist = data
      this.Citylist = [];
      this.WorkingLocationList = [];
    });
  }

  countryofbirthonItemSelect(item: any) {
    debugger;
    console.log(item);
    // this.CostCenter = item.id
    this.Country_Of_Birth = item.id;
    // this.DigiofficeService.GetStateType().subscribe((data) => {
    //   debugger;
    //   this.Provincelist = data.filter((x) => x.countryID == this.Country_Of_Birth);
    //   this.Citylist = [];
    //   this.WorkingLocationList = [];
    // });
  }

  provinceonItemSelect(item: any) {
    debugger;
    this.WorksiteProvince = item.id;
    this.DigiofficeService.GetCityType().subscribe((data) => {
      debugger;
      this.Citylist = data.filter((x) => x.stateID == this.WorksiteProvince);
      this.WorkingLocationList = [];
    });
  }

  WorkingLocationList: any;
  cityonItemSelect(item: any) {
    debugger;
    this.WorksiteCity = item.target.value;
    this.DigiofficeService.GetWorkingLocationMaster().subscribe((data) => {
      debugger;
      this.WorkingLocationList = data.filter((x) => x.cityid == this.WorksiteCity);
      // this.WorkingLocationList = data
      this.worklocationlist = this.WorkingLocationList;
    });
  }

  worklocationonItemSelect(item: any) {
    debugger;
    this.WorksiteLocation = item.target.value;
    // this.DigiofficeService.GetWorkingLocationMaster().subscribe(data => {
    //   debugger
    //   this.WorkingLocationList = data.filter(x => x.cityid == this.CityID)
    // })
  }

  grouponItemSelect(item: any) {
    debugger;
    this.Group = item.target.value;
    this.DigiofficeService.GetDivisionMaster().subscribe((data) => {
      debugger;
      this.uniquelist = data.filter(x => x.entityID == this.Entity && x.groupID == this.Group);
      // this.Divisionlist = data
    });

  }
  DivisionItemSelect(item: any) {
    debugger;
    this.Division = item.target.value;
    this.DigiofficeService.GetDepartment().subscribe((data) => {
      debugger;
      this.uniquedropdownDeptList = data.filter(x => x.entityID == this.Entity && x.groupID == this.Group && x.divisionID == this.Division);
      // this.dropdownDeptList = data

    });

  }
  levelid: any
  Designationlist1: any;
  levelonItemSelect(item: any) {
    debugger;
    this.level = item.target.value;
    this.DigiofficeService.GetDesignationMaster().subscribe((data) => {
      debugger;
      // this.Designationlist1 = data.filter(x => x.brandid == this.Band && x.levelID == this.level);
      this.Designationlist1 = data.filter(x => x.brandid == this.Band && x.levelID == this.level)
    });

    // if (this.level == 2 || this.level == 3) {
    //   this.DigiofficeService.GetDesignationMaster().subscribe((data) => {
    //     debugger;
    //     this.Designationlist1 = data.filter(x => x.id == 1);
    //   });
    // }
    // else {
    //   this.DigiofficeService.GetDesignationMaster().subscribe((data) => {
    //     debugger;
    //     this.Designationlist1 = data.filter(x => x.levelID == this.level);
    //   });
    // }


  }


  managerList: any;
  public GetmyDetails() {
    this.DigiofficeService.GetAllStaffNew().subscribe((data) => {
      debugger;
      this.managerList = data.filter((x) => x.login == 2 && x.fullname != null);
      console.log(' this.managerList', this.managerList);
      this.HRManagerlist = data.filter((x) => x.login == 9 && x.fullname != null);
      this.Department = this.supervisorlist12[0].department;
    });
  }

  public getAssignedCompany() {
    debugger;
    this.DigiofficeService.GetMyDetails().subscribe((data) => {
      debugger;
      this.supervisorlist = data.filter(
        (x) => x.type == 2 && x.assignedCompany == this.AssignedCompany
      );
      this.loader = false;
    });
  }

  public getDepartmentid() {
    this.DigiofficeService.GetMyDetails().subscribe((data) => {
      debugger;
      this.supervisorlist = data.filter(
        (x) => x.type == 2 && x.department == this.Department
      );
      this.loader = false;
    });
  }

  public getLevelid() {

    this.DigiofficeService.GetMyDetails().subscribe((data) => {
      debugger;
      this.supervisorlist = data.filter((x) => x.level == this.level);
      this.loader = false;
    });
  }


  public ApprovedependentID(ID: any) {
    debugger;
    var res = {
      ID: ID,
      Status: 'Approved'
    }
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to Approve it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Approve it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.ApprovedependentID(res).subscribe((data) => {
          debugger;
          Swal.fire('Approved Successfully');
          location.reload();
        });
      }
    });
  }

  public RejectDependentDetails(ID: any) {
    debugger;
    var res = {
      ID: ID,
      Status: 'Rejected'
    }
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to Reject it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Reject it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.RejectdependentID(res).subscribe((data) => {
          debugger;
          Swal.fire('Rejected Successfully');
          location.reload();
        });
      }
    });
  }

  public DeleteDependentDetails(ID: any) {
    debugger;
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteDependentDetails(ID).subscribe((data) => {
          debugger;
          Swal.fire('Deleted Successfully!');
          location.reload();
        });
      }
    });
  }

  public DeleteNomination(ID: any) {
    debugger;
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteNomination(ID).subscribe((data) => {
          debugger;
          Swal.fire('Deleted Successfully!');
          this.ngOnInit();
          //location.reload();()
        });
      }
    });
  }




  file: any;
  public getmedicalUrl(file: any) {
    debugger;
    this.file = file;
  }

  preventZero(number: any) {
    debugger;
    let no = number.split();
    if (this.MobilePersonal.length >= 1) {
      debugger;
      if (this.MobilePersonal[0] == '0') {
        this.MobilePersonal = undefined;
        this.MobilePersonal = null;
        Swal.fire("First digit should not be Zero")
          ; number = "";
      }
      if (this.MobilePersonal[0] == '+') {
      }

    }
  }


  preventZero1(number: any) {

    debugger;



    let no = number.split();



    if (this.AddressPersonalContactNo.length >= 1) {

      debugger;

      if (this.AddressPersonalContactNo[0] == '0') {



        this.AddressPersonalContactNo = undefined;

        this.AddressPersonalContactNo = null;

        Swal.fire("First digit should not be Zero")

          ; number = "";

      }

      if (this.AddressPersonalContactNo[0] == '+') {

      }

    }
  }

  preventZero2(number: any) {

    debugger;
    let no = number.split();
    if (this.EmergencyContactMobileNumber.length >= 1) {
      debugger;
      if (this.EmergencyContactMobileNumber[0] == '0') {
        this.EmergencyContactMobileNumber = undefined;
        this.EmergencyContactMobileNumber = null;
        Swal.fire("First digit should not be Zero")

          ; number = "";
      }

      if (this.EmergencyContactMobileNumber[0] == '+') {

      }

    }
  }

  preventZero4(number: any) {

    debugger;
    let no = number.split();
    if (this.CompanyIssuedMobile.length >= 1) {
      debugger;
      if (this.CompanyIssuedMobile == '00000') {
        this.CompanyIssuedMobile = undefined;
        this.CompanyIssuedMobile = null;
        Swal.fire("Invalid")

          ; number = "";
      }

      if (this.CompanyIssuedMobile[0] == '+') {

      }

    }
  }

  temp: any;
  employmentID: any;
  public getemploymentID1(id: any) {
    this.employmentID = id
    this.DigiofficeService.GetEmploymentDetails().subscribe((data) => {
      debugger;

      let temp = data.filter((x) => x.id == this.employmentID);
      this.ComapanyName = temp[0].comapanyName;
      this.JobTitle = temp[0].title;
      this.EmployementTypeold = temp[0].employementTypeold;
      this.EmploymentLevel = temp[0].employmentLevel;

      // if ((this.datepipe.transform(this.leavelist1[0].startDate, 'yyyy-MM-dd')) == "1990-01-01") {
      //   this.EmpStartDate = " "
      // }
      // else {
      //   this.EmpStartDate = this.datepipe.transform(this.leavelist1[0].startDate, 'yyyy-MM-dd')
      // }



      // if ((this.datepipe.transform(this.leavelist1[0].endDate, 'yyyy-MM-dd')) == "1990-01-01") {
      //   this.EmpEndDate = " "
      // }
      // else {
      //   this.EmpEndDate = this.datepipe.transform(this.leavelist1[0].endDate, 'yyyy-MM-dd')
      // }



      (this.EmpStartDate = this.datepipe.transform(temp[0].startDate, 'yyyy-MM-dd') == '1990-01-01' ? null : this.datepipe.transform(temp[0].startDate, 'yyyy-MM-dd'
      )),
        (this.EmpEndDate = this.datepipe.transform(temp[0].endDate, 'yyyy-MM-dd') == '1990-01-01' ? null : this.datepipe.transform(temp[0].endDate, 'yyyy-MM-dd'
        ))
      this.AttachmentEmployment = this.employmentlist[0].employmentAttachment,
        this.eattachment = this.employmentlist[0].eattachment,
        (this.attachments8url[0] = this.temp[0].attachmentEmployment),
        // this.StartDate = this.employmentlist[0].startDate
        // this.EndDate = this.employmentlist[0].endDate
        (this.Salary = temp[0].salary);
      this.loader = false;
    });


  }


  public DeleteEmploymentDetails(id: any) {
    debugger;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value == true) {
        this.DigiofficeService.DeleteEmploymentDetails(id).subscribe({
          next: (data) => {
            debugger;
            Swal.fire('Deleted Successfully!');
            this.ngOnInit();
            location.reload();
            this.loader = false;
          },
          error: (err) => {
            Swal.fire('Issue in Delete Employment Details');
            // Insert error in Db Here//
            var obj = {
              PageName: this.currentUrl,
              ErrorMessage: err.error.message,
            };
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              (data) => {
                debugger;
              }
            );
          },
        });
      }
    });
  }
  nomination: any;

  public GetNomination1() {

    this.DigiofficeService.GetNomination().subscribe((data) => {
      debugger;

      // this.nomination = data.filter((x) => x.staffId == this.ID && x.status == 'Approved');
      this.nomination = data.filter((x) => x.staffId == this.ID);
      //this.loader = false;
    });
  }




  public GetLanguageMaster() {
    this.DigiofficeService.GetLanguageMaster().subscribe((data) => {
      debugger;
      this.language = data

    });

  }

  LanguageName: any;
  languageonItemSelect(item: any) {
    debugger;
    console.log(item);
    // this.CostCenter = item.id
    this.LanguageName = item.id;

  }
  //prashant orgchart 26-11-2022
  public getEntity() {
    debugger
    this.DigiofficeService.GetGroupMaster().subscribe((data) => {
      debugger;
      this.grouplist = data.filter(x => x.entityID == this.Entity);
    });
  }



  onRemove21(event: any) {
    debugger;
    console.log(event);
    this.attachments213.splice(this.attachments.indexOf(event), 1);

  }

  onSelect21(event: any) {
    debugger;

    console.log(event);
    if (
      event.addedFiles[0] == null ||
      event.addedFiles[0] == '.xls' ||
      event.addedFiles[0] == '.xlsx' ||
      event.addedFiles[0] == undefined ||
      event.addedFiles[0] == '' ||
      event.addedFiles[0] == 0
    ) {
      Swal.fire('Drop files here Only PDF,JPEG,PNG');
      this.loader = false;
    }

    else if ((event.addedFiles[0].size) > 5e+6) {
      Swal.fire('Please Upload File Less than 5 MB.')
    }
    else {
      this.attachments213.push(...event.addedFiles);
      this.DigiofficeService.ProjectAttachments(this.attachments213).subscribe(
        (res) => {
          debugger;
          this.attachments21.push(res);
          this.loader = false;
          debugger;
        }
      );
    }
  }

  public getroleid(event: any) {
    this.PositionLogin = event.target.value;
  }


}


