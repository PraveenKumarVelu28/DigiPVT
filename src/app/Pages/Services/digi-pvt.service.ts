import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DigiPVTService {

  constructor(private http: HttpClient) { }

  private url: string = '';
  // public host = sessionStorage.getItem('digiofficeapiurl');

  // public host = 'http://localhost:1807'
  public host='https://103.12.1.76/DigiPVTAPI'
  // public basehost = "https://103.12.1.76//AliLiveUATApi"

  // public GetNotification(UserID: any) {
  //   return this.http.get<any[]>(
  //     this.host + "/User/GetNotification?UserID=" + UserID
  //   );
  // }


  public InsertOTRates(json: any) {
    let APIURL = this.host + "/Master/InsertOTRates";
    return this.http.post<any>(APIURL, json);
  }

  public UpdateOTRates(json: any) {
    //debugger
    let APIURL = this.host + "/Master/UpdateOTRates";
    return this.http.post<any>(APIURL, json);
  }

  public InsertLoanConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertLoanConfiguration';
    return this.http.post(this.url, data);
  }
  public UpdateLoanConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateLoanConfiguration';
    return this.http.post(this.url, data);
  }



  public GetLoanConfiguration() {
    return this.http.get<any[]>(
      this.host + "/Master/GetLoanConfiguration"

    );
  }

  public getIPAddress() {
    return this.http.get("https://api.ipify.org/?format=json");
  }


  public GetCancelledStaffLeaves(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Master/GetCancelledStaffLeaves?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }


  public GetLoanMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetLoanMaster"

    );
  }


  public Enable_Disable_Loans(data: any) {
    //debugger;
    this.url = this.host + '/Master/Enable_Disable_Loans';
    return this.http.post(this.url, data);
  }

  public InsertLoanMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertLoanMaster';
    return this.http.post(this.url, data);
  }

  public UpdateLoanMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateLoanMaster';
    return this.http.post(this.url, data);
  }


  public DeleteLoanMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteLoanMaster?ID=" + ID);
  }



  public InsertExpensesWEB(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/InsertExpensesWEB';
    return this.http.post(this.url, data);
  }


  public InsertWorkplaceRequestWeb(data: any) {
    //debugger;
    this.url = this.host + '/Building/InsertWorkplaceRequestWeb';
    return this.http.post(this.url, data);
  }





  public GetExpensesMaster() {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetExpensesMaster"
    );
  }

  public InsertStaffLeavesWeb(data: any) {
    //debugger;
    this.url = this.host + '/Building/InsertStaffLeaves';
    return this.http.post(this.url, data);
  }

  public InsertStaffFromOnboarding(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertStaffFromOnboarding';
    return this.http.post(this.url, data);
  }




  public GetLeaveType() {
    return this.http.get<any[]>(
      this.host + "/MasterDemo/GetLeaveType"

    );
  }
  public GetShiftMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetShiftMaster"

    );
  }

  public GetOTRates() {
    return this.http.get<any[]>(
      this.host + "/Master/GetOTRates"

    );
  }
  public GetProjectFolders() {
    return this.http.get<any[]>(
      this.host + "/Master/GetProjectFolders"

    );
  }



  public GetProjectMasterList() {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetProjectMasterList"
    );
  }






  public GetCurrencyMaster() {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetCurrencyMaster"
    );
  }


  public GetSupervisor() {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetSupervisor?ID=0"
    );
  }


  public GetExpensesListweb() {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetExpensesListweb?UserID=227&TypeID=2&SDate=01-01-2020&EDate=01-01-2025"
    );
  }



  public GetOtNightOt(Sdate: any, Edate: any, Shift: any, StaffID: any, Date: any) {
    return this.http.get<any[]>(
      this.host + "/Master/GetOtNightOt?StartTime=" + Sdate + "&EndTime=" + Edate + "&Shift=" + Shift + "&StaffID=" + StaffID + "&Date=" + Date
    );
  }


  public GetWorkplaceRequestDashboard() {
    return this.http.get<any[]>(
      this.host + "/Building/GetWorkplaceRequestDashboard?RaisedBy=0"
    );
  }


  public Get_Employees_For_Payroll(startdate: any, enddate: any) {
    //debugger
    return this.http.get<any[]>(this.host + "/Building/Get_Employees_For_Payroll?startdate=" + startdate + "&enddate=" + enddate);
  }



  public GetTransportRequestType() {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetTransportRequestType"
    );
  }




  public GetBuildinglist() {
    return this.http.get<any[]>(
      this.host + "/Building/GetBuildinglist"
    );
  }





  public DeleteApplicantBankStatement(data: any) {
    //debugger;
    this.url = this.host + '/MasterDemo/DeleteApplicantBankStatement';
    return this.http.post(this.url, data);
  }

  public GetStaffLeaves(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetStaffLeaves?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetApprovedStaffLeavesByStaffID(ID: any, TypeID: any, Sdate: any, Edate: any) {
    //debugger  
    return this.http.get<any[]>(
      this.host + "/Building/GetApprovedStaffLeavesByStaffID?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetAllStaffLeaves(ID: any, TypeID: any, Sdate: any, Edate: any) {
    //debugger 
    return this.http.get<any[]>(
      this.host + "/Building/GetAllStaffLeaves?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetPendingStaffLeavesByStaffID(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetPendingStaffLeavesByStaffID?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetRejectedStaffLeavesByStaffID(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetRejectedStaffLeavesByStaffID?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }


  public GetApprovedStaffLeavesBySupervisor(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetApprovedStaffLeavesBySupervisor?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetPendingStaffLeavesBySupervisor(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetPendingStaffLeavesBySupervisor?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetRejectedStaffLeavesBySupervisor(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetRejectedStaffLeavesBySupervisor?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }


  public GetApprovedStaffLeavesByHR(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetApprovedStaffLeavesByHR?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetPendingStaffLeavesByHR(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetPendingStaffLeavesByHR?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetRejectedStaffLeavesByHR(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetRejectedStaffLeavesByHR?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetLocatorRequests(UserID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetLocatorRequests?UserID=" + UserID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetStaffByManagerID(UserID: any,) {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetStaffByManagerID?StaffID=" + UserID
    );
  }
  public GetAttendanceByManagerID(UserID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetAttendanceByManagerID?UserID=" + UserID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }




  public InsertLocatorTable(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/InsertLocatorTable';
    return this.http.post(this.url, data);
  }

  public InsertAnnouncements(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertAnnouncement';
    return this.http.post(this.url, data);
  }
  public UpdateAnnouncements(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateAnnouncement';
    return this.http.post(this.url, data);
  }



  public GetAnnouncementsByBuildingID(BuildingID: any) {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetAnnouncementsByBuildingID?BuildingID=" + BuildingID
    );
  }

  public ProjectAttachments(files: any) {
    //debugger
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    this.url = this.host + '/Announcement/ProjectAttachments';
    return this.http.post<any[]>(this.url, formdata);
  }

  public UploadmultipleProjectAttachments(files: any) {
    //debugger
    let formdata: FormData = new FormData();
    formdata.append('file_upload', files, files.name);
    this.url = this.host + '/Announcement/ProjectAttachments';
    return this.http.post<any[]>(this.url, formdata);
  }

  public InsertEmployeeVaccinationDetails(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertEmployeeVaccinationDetails';
    return this.http.post(this.url, data);
  }

  public ClearProbation(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/ClearProbation';
    return this.http.post(this.url, data);
  }
  public GetEmployeeVaccinationDetails() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeVaccinationDetails"
    );
  }
  public InsertTimeSheets_Table(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/InsertTimeSheets_Table';
    return this.http.post(this.url, data);
  }
  public GetTimeSheetDetailsforweb() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetTimeSheetDetailsforweb"
    );
  }





  public GetCompanyDetails() {
    return this.http.get<any[]>(
      this.host + "/Building/GetCompanyDetails"
    );
  }



  public InsertCompanyDetails(data: any) {
    //debugger;
    this.url = this.host + '/Building/InsertCompanyDetails';
    return this.http.post(this.url, data);
  }

  public UpdateCompanyDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateCompanyDetails';
    return this.http.post(this.url, data);
  }


  public InsertHolidays(data: any) {
    //debugger;
    this.url = this.host + '/Building/InsertHolidays';
    return this.http.post(this.url, data);
  }

  public InsertPolicies(data: any) {
    //debugger;
    this.url = this.host + '/Building/InsertPolicies';
    return this.http.post(this.url, data);
  }
  public InsertMyDetails(data: any) {
    //debugger;
    this.url = this.host + '/Building/InsertBuildingStaff';
    return this.http.post(this.url, data);
  }



  public InsertMyDetailsinApprover(data: any) {
    //debugger;
    this.url = 'https://ali.digiofficeapp.com/ALIApprover/' + '/Building/InsertMyDetailsinApprover';
    return this.http.post(this.url, data);
  }
  public UpdateDetailsforsecodment(data: any) {
    //debugger;
    this.url = 'https://ali.digiofficeapp.com/ALIApprover/' + '/Announcement/UpdateDetailsforsecodment';
    return this.http.post(this.url, data);
  }



  public InsertMyDetailsBycompany(data: any, url: any) {
    //debugger;
    this.url = url + '/Building/InsertBuildingStaff';
    return this.http.post(this.url, data);
  }



  public InsertUserRoleType(data: any) {
    //debugger;
    this.url = this.host + '/MasterDemo/InsertUserRoleType';
    return this.http.post(this.url, data);
  }




  public GetHolidays() {
    return this.http.get<any[]>(
      this.host + "/Building/GetHolidays"
    );
  }

  public GetPolicies() {
    return this.http.get<any[]>(
      this.host + "/Building/GetPolicies"
    );
  }


  public GetFloorType(BuildingID: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetFloorTypebyBID?BID=" + BuildingID
    );
  }
  public GetRoleType() {
    return this.http.get<any[]>(
      this.host + "/MasterDemo/GetRoleType?UserTypeID=" + 1
    );
  }


  public GetPreliminarySalary() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetPreliminarySalary"
    );
  }


  public Get_PreliminaryReport(EmployeeID: any, LopdaysCount: any, startdate: any, enddate: any) {
    //debugger
    return this.http.get<any[]>(this.host + "/Announcement/Get_PreliminaryReport?EmployeeID=" + EmployeeID + "&LopdaysCount=" + LopdaysCount + "&startdate=" + startdate + "&enddate=" + enddate);
  }


  // public GetPayrollVariance(EmployeeID: any, Month: any, Year: any, Payperiod: any, EndMonth: any, EndYear: any, EndPayperiod: any) {
  //   //debugger
  //   return this.http.get<any[]>(this.basehost + "/Announcement/GetPayrollVariance?EmployeeID=" + EmployeeID + "&StartMonth=" + Month + "&StartYear=" + Year + "&StartPayperiod=" + Payperiod + "&EndMonth=" + EndMonth + "&EndYear=" + EndYear + "&EndPayperiod=" + EndPayperiod);
  // }



  public GetMyDetailsForLogin(username: any, Password: any, roletype: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Building/GetMyDetailsForLogin?EmailID=" + username + "&Password=" + Password + "&roleType=" + roletype);
  }

  public GetStaffLeaveCountForDashboard(ID: any, TypeID: any, Sdate: any, Edate: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Building/GetStaffLeaveCountForDashboard?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate);
  }

  public GetEmployeeLoansCountforDashboard(ID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Building/GetEmployeeLoansCountforDashboard?ID=" + ID);
  }



  public GetMyDetails() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetMyDetails"
    );
  }
  public GetMyDetailsBycompany(url: any) {
    //debugger
    return this.http.get<any[]>(
      url + "/Announcement/GetMyDetails"
    );
  }


  public GetMyDetailsByStaffID(StaffID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetMyDetailsByStaffID?ID=" + StaffID
    );
  }


  public GetDeMinimisMapping() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetDeMinimisMapping"
    );
  }


  public GetBenefitsRoleMapping() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetBenefitsRoleMapping"
    );
  }

  public InsertTransportationRequestsMob(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/InsertTransportationRequestsMob';
    return this.http.post(this.url, data);
  }


  public GetTransportationRequests() {
    return this.http.get<any[]>(
      this.host + "/TransportationRequest/GetTransportationRequest?UserID=227&TypeID=2&SDate=01-01-2020&EDate=01-01-2029"
    );
  }

  public InsertLeaveTypeMaster(data: any) {
    //debugger;
    this.url = this.host + '/ProjectRequest/InsertLeaveTypeMaster';
    return this.http.post(this.url, data);
  }
  public InsertShiftMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertShiftMaster';
    return this.http.post(this.url, data);
  }



  public InsertExpenseMaster(data: any) {
    //debugger;
    this.url = this.host + '/ProjectRequest/InsertExpenseMaster';
    return this.http.post(this.url, data);
  }

  public Get_WorkStationType_Master() {
    return this.http.get<any[]>(
      this.host + "/Building/Get_WorkStationType_Master"
    );
  }


  public InsertWorkStationType_Master(data: any) {
    //debugger;
    this.url = this.host + '/ProjectRequest/InsertWorkStationType_Master';
    return this.http.post(this.url, data);
  }

  public GetStaffExitFormality() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetStaffExitFormality"
    );
  }
  public GetAttrionanylticsdatabymonth() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetAttrionanylticsdatabymonth"
    );
  }

  public InsertStaffExitFormality(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertStaffExitFormality';
    return this.http.post(this.url, data);
  }


  public UpdateStaffExitFormality(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateStaffExitFormality';
    return this.http.post(this.url, data);
  }

  public UploadEmployeeData(data: any) {
    debugger;
    this.url = 'http://localhost:1807/' + '/Master/UploadEmployeeData';
    return this.http.post(this.url, data);
  }





  public InsertTransportRequestType(data: any) {
    //debugger;
    this.url = this.host + '/ProjectRequest/InsertTransportRequestType';
    return this.http.post(this.url, data);
  }


  public GetCountryType() {
    return this.http.get<any[]>(
      this.host + "/Building/GetCountryType"
    );
  }

  public GetContactCountryType() {
    return this.http.get<any[]>(
      this.host + "/Building/GetContactCountryType"
    );
  }

  public GetGrivenceMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetGrivenceMaster"
    );
  }


  public GetStateType() {
    return this.http.get<any[]>(
      this.host + "/Building/GetStateType?CountryID=" + 1
    );
  }

  public GetContactStateType() {
    return this.http.get<any[]>(
      this.host + "/Building/GetContactStateType?CountryID=" + 1
    );
  }

  public GetStateType1(id: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetStateType?CountryID=" + id
    );
  }

  // public GetStateType(id: any) {
  //   return this.http.get<any[]>(
  //     this.host + "/Building/GetStateType?CountryID=" + id
  //   );
  // }

  public GetCityType() {
    return this.http.get<any[]>(
      this.host + "/Building/GetCityType?StateID=4"
    );
  }

  public GetContactCityType() {
    return this.http.get<any[]>(
      this.host + "/Building/GetContactCityType?StateID=4"
    );
  }

  public InsertNomination(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertNomination';
    return this.http.post(this.url, data);
  }

  public InsertMyAddressDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertMyAddressDetails';
    return this.http.post(this.url, data);
  }

  public InsertEmploymentDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertEmploymentDetails';
    return this.http.post(this.url, data);
  }

  public InsertEducationDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertEducationDetails';
    return this.http.post(this.url, data);
  }

  public InsertID_Details(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertID_Details';
    return this.http.post(this.url, data);
  }

  public InsertBankDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertBankDetails';
    return this.http.post(this.url, data);
  }


  public InsertVisaDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertVisaDetails';
    return this.http.post(this.url, data);
  }

  public InsertSalaryDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertSalaryDetails';
    return this.http.post(this.url, data);
  }


  public InsertPositionDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertPositionDetails';
    return this.http.post(this.url, data);
  }


  public InsertDependentDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertDependentDetails';
    return this.http.post(this.url, data);
  }

  public UpdateExpencesApproveBySupervisor(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateExpencesApproveBySupervisor';
    return this.http.post(this.url, data);
  }


  public UpdateStaffShift(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateStaffShift';
    return this.http.post(this.url, data);
  }

  public UpdateLeaveType(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateLeaveType';
    return this.http.post(this.url, data);
  }


  public UpdateWorkStationType_Master(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateWorkStationType_Master';
    return this.http.post(this.url, data);
  }


  public UpdateTransportRequestType(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateTransportRequestType';
    return this.http.post(this.url, data);
  }


  public UpdateCityType(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateCityType';
    return this.http.post(this.url, data);
  }


  public UpdateCountryType(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateCountryType';
    return this.http.post(this.url, data);
  }


  public UpdateStateType(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateStateType';
    return this.http.post(this.url, data);
  }


  public InsertStateType(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/InsertStateType';
    return this.http.post(this.url, data);
  }



  public InsertCityType(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/InsertCityType';
    return this.http.post(this.url, data);
  }


  public InsertCountryType(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/InsertCountryType';
    return this.http.post(this.url, data);
  }

  public InsertProjectFolders(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertProjectFolders';
    return this.http.post(this.url, data);
  }


  public InsertGrivenceMaster(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/InsertGrivenceMaster';
    return this.http.post(this.url, data);
  }
  public UpdateGrivenceMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateGrivenceMaster';
    return this.http.post(this.url, data);
  }

  public UpdateHolidays(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateHolidays';
    return this.http.post(this.url, data);
  }

  public UpdateExpencesMaster(data: any) {
    //debugger;
    this.url = this.host + '/ProjectRequest/UpdateExpencesMaster';
    return this.http.post(this.url, data);
  }


  public DisableCompany(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/DisableCompany';
    return this.http.post(this.url, data);
  }




  public GetPositionDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetPositionDetails"
    );
  }

  public GetMyAddressDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetMyAddressDetails"
    );
  }

  public GetDependentDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetDependentDetails"
    );
  }



  public GetNomination() {
    return this.http.get<any[]>(
      this.host + "/Master/GetNomination"
    );
  }

  public GetEmploymentDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmploymentDetails"
    );
  }

  public GetEducationDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetEducationDetails"
    );
  }


  public GetBankDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetBankDetails"
    );
  }



  public GetID_Details() {
    return this.http.get<any[]>(
      this.host + "/Master/GetID_Details"
    );
  }


  public GetVisaDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetVisaDetails"
    );
  }

  public GetSalaryDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetSalaryDetails"
    );
  }



  public UpdatePositionDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdatePositionDetails';
    return this.http.post(this.url, data);
  }

  public UpdateEmploymentDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateEmploymentDetails';
    return this.http.post(this.url, data);
  }


  public UpdateEducationDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateEducationDetails';
    return this.http.post(this.url, data);
  }


  public UpdateMyDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateMyDetails';
    return this.http.post(this.url, data);
  }


  public UpdateSalaryDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateSalaryDetails';
    return this.http.post(this.url, data);
  }


  public UpdateBankDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateBankDetails';
    return this.http.post(this.url, data);
  }


  public UpdateVisaDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateVisaDetails';
    return this.http.post(this.url, data);
  }


  public UpdateID_Details(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateID_Details';
    return this.http.post(this.url, data);
  }


  public UpdateNomination(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateNomination';
    return this.http.post(this.url, data);
  }

  public UpdateDependentDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateDependentDetails';
    return this.http.post(this.url, data);
  }
  public UpdateAttendanceEnableDisable(data: any) {
    ////debugger;
    this.url = this.host + '/Announcement/UpdateAttendanceEnableDisable';
    return this.http.post(this.url, data);
  }

  public DeleteEducationDetails(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteEducationDetails?ID=" + ID);
  }
  public DeleteDependentDetails(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteDependentDetails?ID=" + ID);
  }

  public ApprovedependentID(data: any) {
    ////debugger;
    this.url = this.host + '/Master/ApproveRejectDependentDetails';
    return this.http.post(this.url, data);
  }

  public RejectdependentID(data: any) {
    ////debugger;
    this.url = this.host + '/Master/ApproveRejectDependentDetails';
    return this.http.post(this.url, data);
  }

  public DeleteID_Details(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteID_Details?ID=" + ID);
  }

  public DeleteBankDetails(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteBankDetails?ID=" + ID);
  }

  public DeleteStaffShiftDetails(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteStaffShiftDetails?ID=" + ID);
  }


  public UpdateMyAddressDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateMyAddressDetails';
    return this.http.post(this.url, data);
  }


  public DeleteCityType(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteCityType?ID=" + ID);
  }


  public DeleteCountryType(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteCountryType?ID=" + ID);
  }

  public DeleteGrivenceMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteGrivenceMaster?ID=" + ID);
  }

  public DeleteStateType(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteStateType?ID=" + ID);
  }

  public DeleteOBEmpDocSSSID(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocSSSID?ID=" + ID);
  }

  public DeleteOBEmpDocTIN(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocTIN?ID=" + ID);
  }


  public DeleteOBEmpDocAcknowledgementForms(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocAcknowledgementForms?ID=" + ID);
  }


  public DeleteOBEmpDocbir_form_2316(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocbir_form_2316?ID=" + ID);
  }

  public DeleteOBEmpDocBirthCertificate(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocBirthCertificate?ID=" + ID);
  }

  public DeleteOBEmpDocGroupLifeInsurenceForm(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocGroupLifeInsurenceForm?ID=" + ID);
  }

  public DeleteOBEmpDochdmf_form(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDochdmf_form?ID=" + ID);
  }

  public DeleteOBEmpDocHMOForms(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocHMOForms?ID=" + ID);
  }

  public DeleteOBEmpDocIDForm(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocIDForm?ID=" + ID);
  }

  public DeleteOBEmpDocIDPhoto2(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocIDPhoto2?ID=" + ID);
  }

  public DeleteOBEmpDocMarriageCertificate(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocMarriageCertificate?ID=" + ID);
  }

  public DeleteOBEmpDocNBI_Clearance(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocNBI_Clearance?ID=" + ID);
  }

  public DeleteOBEmpDocParkingForms(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocParkingForms?ID=" + ID);
  }

  public DeleteOBEmpDocPayroll_bank_acc(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocPayroll_bank_acc?ID=" + ID);
  }

  public DeleteOBEmpDocPhilhealth(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocPhilhealth?ID=" + ID);
  }

  public DeleteOBEmpDocPhotos(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocPhotos?ID=" + ID);
  }
  public DeleteOBEmpDocValid_Govt_ID(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocValid_Govt_ID?ID=" + ID);
  }

  public DeleteOBEmpDocValidID2(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocValidID2?ID=" + ID);
  }

  public DeleteOBEmpDocClearnce_form(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocClearnce_form?ID=" + ID);
  }

  public DeleteOBEmpDocPersonalInfoSheet(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOBEmpDocPersonalInfoSheet?ID=" + ID);
  }



  public DeleteWorkStationType_Master(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteWorkStationType_Master?ID=" + ID);
  }


  public DeleteTransportRequestType(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteTransportRequestType?ID=" + ID);
  }


  public DeleteExpencesMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteExpencesMaster?ID=" + ID);
  }


  public DeleteHolidays(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteHolidays?ID=" + ID);
  }
  public DeletePolicies(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeletePolicies?ID=" + ID);
  }
  public DeleteBuildingStaff(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Building/DeleteBuildingStaff?ID=" + ID);
  }
  public DeleteAnnouncement(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteAnnouncement?ID=" + ID);
  }


  // public sendemailattachements(data: any) {
  //   //debugger
  //   this.url = this.host + '/Master/sendemailsmtp';
  //   return this.http.post(this.url, data)
  // }

  public sendemailattachements(data: any) {
    //debugger
    this.url = this.host + '/Master/sendemailattachements';
    return this.http.post(this.url, data)
  }

  public sendemailattachementsforemail(data: any) {
    //debugger
    this.url = '  https://asticom.digiofficeapp.com/AsticomMainAPI' + '/Master/sendemailattachements';
    return this.http.post(this.url, data)

  }



  public DeleteLeaveTypeMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/ProjectRequest/DeleteLeaveTypeMaster?ID=" + ID);
  }

  public InsertAttendanceWeb(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/InsertAttendanceWeb';
    return this.http.post(this.url, data);
  }
  public InitiateStaffOnboarding(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertInitiateStaffOnboarding';
    return this.http.post(this.url, data);
  }

  public UpdateOnBoardingInitiation(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateOnBoardingInitiation';
    return this.http.post(this.url, data);
  }

  public UpdateOnboardingStatusByHR(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateOnboardingStatusByHR';
    return this.http.post(this.url, data);
  }



  public UpdateAttendanceWeb(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateAttendanceWeb';
    return this.http.post(this.url, data);
  }



  public GetAttendance() {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetAttendance?UserID=1&SDate=01-01-2020&EDate=01-01-2020"
    );
  }
  public GetAttendanceByEmployeeID(UserID: any, SDate: any, EDate: any) {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetAttendanceByEmployeeID?UserID=" + UserID + "&SDate=" + SDate + "&EDate=" + EDate
    );
  }
  public GetTimeSheetDetailsforwebByEmployeeID(UserID: any, SDate: any, EDate: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetTimeSheetDetailsforwebByEmployeeID?UserID=" + UserID + "&SDate=" + SDate + "&EDate=" + EDate
    );
  }


  public ApproveAttendanceRegularisation(data: any) {
    //debugger;
    this.url = this.host + '/Master/ApproveAttendanceRegularisation';
    return this.http.post(this.url, data);
  }
  public ApproveStaffLeavesNew(data: any) {
    //debugger;
    this.url = this.host + '/Building/ApproveStaffLeavesNew';
    return this.http.post(this.url, data);
  }


  public ApprovePayroll(data: any) {
    //debugger;
    this.url = this.host + '/Building/ApprovePayroll';
    return this.http.post(this.url, data);
  }


  public ApproveStaffLeavesNewforsecodnment(data: any, host: any) {
    //debugger;
    this.url = host + '/Building/ApproveStaffLeavesNew';
    return this.http.post(this.url, data);
  }


  public ApproveStaffLeavesNewForHR(data: any) {
    //debugger;
    this.url = this.host + '/Building/ApproveStaffLeavesNewForHR';
    return this.http.post(this.url, data);
  }








  public ApproveTimeSheet(data: any) {
    //debugger;
    this.url = this.host + '/Master/ApproveTimeSheet';
    return this.http.post(this.url, data);
  }
  public UpdatePassword(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdatePassword';
    return this.http.post(this.url, data);
  }


  // public ApproveTravelRequest(data: any) {
  //   //debugger;
  //   this.url = this.host + '/MobileUser/ApproveTravelRequest';
  //   return this.http.post(this.url, data);
  // }

  public ApproveTravelRequest(id: any) {
    return this.http.get<any[]>(
      this.host + "/MobileUser/ApproveTravelRequest?ID=" + id
    );
  }


  public RejectTravelRequest(id: any, Rejected: any) {
    return this.http.get<any[]>(
      this.host + "/MobileUser/RejectTravelRequest?ID=" + id + "&RejectReason=" + Rejected
    );
  }




  public ApproveWorkplaceRequest(id: any) {
    return this.http.get<any[]>(
      this.host + "/Building/ApproveWorkplaceRequest?ID=" + id
    );
  }

  public UpdateStaff(data: any) {
    //debugger;
    this.url = this.host + '/Building/UpdateBuildingStaff';
    return this.http.post(this.url, data);
  }

  public UpdateRetirementConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateRetirementConfiguration';
    return this.http.post(this.url, data);
  }




  public DeleteOTRates(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOTRates?ID=" + ID);
  }

  public DeletePreliminary(staffID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeletePreliminary?staffID=" + staffID);
  }


  public Delete_ProjectFolders(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/Delete_ProjectFolders?ID=" + ID);
  }


  public GetNotification(UserID: any) {
    return this.http.get<any[]>(
      this.host + "/User/GetNotification?UserID=" + UserID
    );
  }

  public ClearNotificationByID(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/ClearNotificationByID?ID=" + ID);
  }


  public UpdateShiftMaster(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateShiftMaster';
    return this.http.post(this.url, data);
  }

  public UpdateLocatorStatus(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateLocatorStatus';
    return this.http.post(this.url, data);
  }

  public CancelLeave(ID: any, NoOfDays: any, UserID: any, LeaveTypeID: any, Status: any) {
    //debugger;
    return this.http.get<any[]>(
      this.host + "/MobileUser/CancelLeave?ID=" + ID + "&NoOfDays=" + NoOfDays + "&UserID=" + UserID + "&LeaveTypeID=" + LeaveTypeID + "&Status=" + Status
    );
  }

  public UpdateExpencesReject(data: any) {
    //debugger;
    this.url = this.host + '/MobileUser/UpdateExpencesReject';
    return this.http.post(this.url, data);
  }

  public CancelLocatorRequest(ID: any) {
    return this.http.get<any[]>(
      this.host + "/MobileUser/CancelLocatorRequest?ID=" + ID);
  }


  public CancelWorkplaceRequest(ID: any, WorkStationID: any) {
    return this.http.get<any[]>(
      this.host + "/MobileUser/CancelWorkplaceRequest?ID=" + ID + "&WorkStationID=" + WorkStationID);
  }



  public InsertStaffShiftDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertStaffShiftDetails';
    return this.http.post(this.url, data);
  }
  public UpdateStaffLeaves(data: any) {
    //debugger;
    this.url = this.host + '/Building/UpdateStaffLeaves';
    return this.http.post(this.url, data);
  }

  public UpdateStaffLeavesforsecondment(data: any, host: any) {
    //debugger;
    this.url = host + '/Building/UpdateStaffLeaves';
    return this.http.post(this.url, data);
  }




  public GetStaffShiftDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetStaffShiftDetails"

    );
  }
  public GetStaffShiftDetailsByband(BandID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/GetStaffShiftDetails?BandID=" + BandID

    );
  }




  public InsertNotification(data: any) {
    //debugger;
    this.url = this.host + '/User/InsertNotification';
    return this.http.post(this.url, data);
  }



  public InsertGroupChatMaster(data: any) {
    //debugger;
    this.url = this.host + "/Announcement/InsertChatWeb";
    return this.http.post(this.url, data);
  }
  public GetChatGroupMaster() {
    //debugger;
    this.url = this.host + "/Announcement/GetChatGroupMaster";
    return this.http.get<any[]>(this.url);
  }

  public GetDepartmentMaster() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetDepartmentMaster"
    );
  }

  public DeleteDepartmentMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteDepartmentMaster?ID=" + ID);
  }

  public DeleteDesignationMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteDesignationMaster?ID=" + ID);
  }

  public InsertDepartmentMaster(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertDepartmentMaster';
    return this.http.post(this.url, data);
  }

  public InsertDesignationMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertDesignationMaster';
    return this.http.post(this.url, data);
  }

  public UpdateDepartmentMaster(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateDepartmentMaster';
    return this.http.post(this.url, data);
  }
  public UpdateDesignationMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateDesignationMaster';
    return this.http.post(this.url, data);
  }


  public GetDe_minimis_Master() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetDe_minimis_Master"
    );
  }

  public DeleteDe_minimis_Master(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteDe_minimis_Master?ID=" + ID);
  }

  public DeleteDeMinimisMapping(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteDeMinimisMapping?ID=" + ID);
  }


  public InsertDe_minimis_Master(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertDe_minimis_Master';
    return this.http.post(this.url, data);
  }
  public InsertDeMinimisMapping(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertDeMinimisMapping';
    return this.http.post(this.url, data);
  }
  public InsertBenefitsRoleMapping(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertBenefitsRoleMapping';
    return this.http.post(this.url, data);
  }

  public UpdateDe_minimis_Master(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateDe_minimis_Master';
    return this.http.post(this.url, data);
  }

  public UpdateDe_minimis_Detailsforstaff(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateDe_minimis_Detailsforstaff';
    return this.http.post(this.url, data);
  }
  public GetStaffLeavesForPayrollByDate(startdate: any, enddate: any, StaffID: any) {
    //debugger
    return this.http.get<any[]>(this.host + "/Announcement/GetStaffLeavesForPayrollByDate?startdate=" + startdate + "&enddate=" + enddate + "&StaffID=" + StaffID);
  }
  public Get_Salary_Splits(EmployeeID: any, LopdaysCount: any, startdate: any, enddate: any) {
    //debugger
    return this.http.get<any[]>(this.host + "/Announcement/Get_Salary_Splits?EmployeeID=" + EmployeeID + "&LopdaysCount=" + LopdaysCount + "&startdate=" + startdate + "&enddate=" + enddate);
  }
  public Get_Salary_Splitsfor15days(EmployeeID: any, LopdaysCount: any, startdate: any, enddate: any) {
    //debugger
    return this.http.get<any[]>(this.host + "/Announcement/Get_Salary_Splitsfor15days?EmployeeID=" + EmployeeID + "&LopdaysCount=" + LopdaysCount + "&startdate=" + startdate + "&enddate=" + enddate);
  }

  public Get_RunLwopValidation(EmployeeID: any,  startdate: any, enddate: any) {
    //debugger
    return this.http.get<any[]>(this.host + "/Announcement/Get_RunLwopValidation?EmployeeID=" + EmployeeID  + "&startdate=" + startdate + "&enddate=" + enddate);
  }


  public Get_RunBonusValidation(EmployeeID: any,  startdate: any, enddate: any) {
    //debugger
    return this.http.get<any[]>(this.host + "/Announcement/GetRunBonusValidation?EmployeeID=" + EmployeeID  + "&startdate=" + startdate + "&enddate=" + enddate);
  }



  public GetRunAllowanceValidation(EmployeeID: any,  startdate: any, enddate: any) {
    //debugger
    return this.http.get<any[]>(this.host + "/Announcement/GetRunAllowanceValidation?EmployeeID=" + EmployeeID  + "&startdate=" + startdate + "&enddate=" + enddate);
  }




  public DeleteEmployeeSalary(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteEmployeeSalary?ID=" + ID);
  }

  public DeleteStaffExitFormality(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteStaffExitFormality?ID=" + ID);
  }


  public GetEmployeeSalaryMonthly() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeSalaryMonthly"
    );
  }

  public GetValidatedLwopDetails() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetValidatedLwopDetails"
    );
  }
  
  public InsertGeneratedLwopValues(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertGeneratedLwopValues';
    return this.http.post(this.url, data);
  }
  

   public InsertBonusValidation(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertBonusValidation';
    return this.http.post(this.url, data);
  }
  
  

  

  public GetCompanyAddressDetails() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetCompanyAddressDetails"
    );
  }

  public GetGeneratedLwopValues() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetGeneratedLwopValues"
    );
  }


   public GetBonusValidation() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetBonusValidation"
    );
  }

  
  public GetValidatedBonusDetails() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Vendor/GetValidatedBonusDetails"
    );
  }

  
  public GetValidatedAllowanceValues() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetValidatedAllowanceValues"
    );
  }

  
  

  public GetEmployeeSalary() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeSalary"
    );
  }

  public GetStaffOverTimeDetails() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetStaffOverTimeDetails"
    );
  }

  public DeleteStaffOverTimeDetails(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteStaffOverTimeDetails?ID=" + ID);
  }
  public CancelExpenseRequest(ID: any) {
    return this.http.get<any[]>(
      this.host + "/MobileUser/CancelExpenseRequest?ID=" + ID);
  }


  public InsertStaffOverTimeDetails(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertStaffOverTimeDetails';
    return this.http.post(this.url, data);
  }



  public GetEmployeeTransition() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeTransition"
    );
  }

  public DeleteEmployeeTransition(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteEmployeeTransition?ID=" + ID);
  }

  public InsertEmployeeTransition(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertEmployeeTransition';
    return this.http.post(this.url, data);
  }
  public UpdateEmployeeTransition(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateEmployeeTransition';
    return this.http.post(this.url, data);
  }

  public GetEmployeeBenfits() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeBenfits"
    );
  }

  public DeleteEmployeeBenfits(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteEmployeeBenfits?ID=" + ID);
  }

  public InsertEmployeeBenfits(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertEmployeeBenfits';
    return this.http.post(this.url, data);
  }
  public UpdateEmployeeBenfits(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateEmployeeBenfits';
    return this.http.post(this.url, data);
  }





  public GetEmployeeBenfitsDetails() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeBenfitsDetails"
    );
  }

  public DeleteEmployeeBenfitsDetails(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteEmployeeBenfitsDetails?ID=" + ID);
  }

  public DeleteLoginbasedModuleMaping(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteLoginbasedModuleMaping?ID=" + ID);
  }


  public InsertEmployeeBenfitsDetails(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertEmployeeBenfitsDetails';
    return this.http.post(this.url, data);
  }
  public UpdateEmployeeBenfitsDetails(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateEmployeeBenfitsDetails';
    return this.http.post(this.url, data);
  }


  public InsertEmployeeDocuments(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertEmployeeDocuments';
    return this.http.post(this.url, data);
  }



  public InsertOnboardingEmployeeDocuments(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertOnboardingEmployeeDocuments';
    return this.http.post(this.url, data);
  }

  public InsertLoginbasedModuleMaping(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertLoginbasedModuleMaping';
    return this.http.post(this.url, data);
  }
  public GetLoginbasedModuleMaping() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetLoginbasedModuleMaping"
    );
  }

  public ProjectAttachmentsbyuserid(files: any, userid: any) {
    //debugger
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    this.url = this.host + '/Master/ProjectAttachmentsbyuserid?userid=' + userid;
    return this.http.post<any[]>(this.url, formdata);
  }





  public GetEmployeeDocuments() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeDocuments"
    );
  }

  public GetOnboardingEmployeeDocuments() {
    return this.http.get<any[]>(
      this.host + "/Master/GetOnboardingEmployeeDocuments"
    );
  }

  public GetUserroleType() {
    return this.http.get<any[]>(
      this.host + "/MasterDemo/GetUserroleType"
    );
  }



  public GetEmployeeLoans() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeLoans"
    );
  }

  public DeleteEmployeeLoans(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteEmployeeLoans?ID=" + ID);
  }

  public InsertEmployeeLoans(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertEmployeeLoans';
    return this.http.post(this.url, data);
  }
  public UpdateEmployeeLoans(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateEmployeeLoans';
    return this.http.post(this.url, data);
  }

  public InsertProjectMaster(data: any) {
    //debugger;
    this.url = this.host + '/ProjectRequest/InsertProjectMaster';
    return this.http.post(this.url, data);
  }

  public UpdateProjectMaster(data: any) {
    //debugger;
    this.url = this.host + '/ProjectRequest/UpdateProjectMaster';
    return this.http.post(this.url, data);
  }



  public DeleteProjectMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/ProjectRequest/DeleteProjectMaster?ID=" + ID);
  }

  public InsertBuilding(data: any) {
    //debugger;
    this.url = this.host + '/Building/InsertBuilding';
    return this.http.post(this.url, data);
  }

  public UpdateBuilding(data: any) {
    //debugger;
    this.url = this.host + '/Building/UpdateBuilding';
    return this.http.post(this.url, data);
  }

  public DeleteBuilding(ID: any) {
    //debugger;
    return this.http.get<any[]>(
      this.host + "/Building/DeleteBuilding?ID=" + ID);

  }
  public DeleteFloorType(ID: any) {
    //debugger;
    return this.http.get<any[]>(
      this.host + "/Building/deletefloor?ID=" + ID);

  }


  public UpdateEmployeeLoansByHR(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateEmployeeLoansByHR';
    return this.http.post(this.url, data);
  }

  public UpdateEmployeeLoansByProcessor(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateEmployeeLoansByPayroll';
    return this.http.post(this.url, data);
  }


  public UpdateExitInterview(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateExitInterview';
    return this.http.post(this.url, data);
  }
  public UpdateQuitClaimForm(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateQuitClaimForm';
    return this.http.post(this.url, data);
  }


  public GetGrivenceRequests() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetGrivenceRequests"
    );
  }

  public DeleteGrivenceRequests(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteGrivenceRequests?ID=" + ID);
  }

  public InsertGrivenceRequests(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertGrivenceRequests';
    return this.http.post(this.url, data);
  }
  public UpdateGrivenceRequests(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateGrivenceRequests';
    return this.http.post(this.url, data);
  }

  public GetHelpdeskrequest() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetHelpdeskrequest"
    );
  }

  public DeleteHelpdeskrequest(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteHelpdeskrequest?ID=" + ID);
  }

  public InsertHelpdeskrequest(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertHelpdeskrequest';
    return this.http.post(this.url, data);
  }
  public UpdateHelpdeskrequest(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateHelpdeskrequest';
    return this.http.post(this.url, data);
  }
  public GrievanceReply(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/GrievanceReply';
    return this.http.post(this.url, data);
  }
  public HelpDeskReply(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/HelpDeskReply';
    return this.http.post(this.url, data);
  }

  public ClearStaffExitFormality(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/ClearStaffExitFormality';
    return this.http.post(this.url, data);
  }
  public RetainEmployeee(data: any) {
    //debugger;
    this.url = this.host + '/Master/RetainEmployeee';
    return this.http.post(this.url, data);
  }


  public UpdateWorkingDay(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateWorkingDay';
    return this.http.post(this.url, data);
  }

  public ApproveOtRequest(data: any) {
    //debugger;
    this.url = this.host + '/Master/ApproveOtRequest';
    return this.http.post(this.url, data);
  }


  public GetDepartment() {
    //debugger
    let APIURL = this.host + "/Announcement/GetDepartmentMaster";
    return this.http.get<any[]>(APIURL);
  }

  public UpdateOtFromManager(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateOtFromManager';
    return this.http.post(this.url, data);
  }

  public PreApproveOtRequest(data: any) {
    //debugger;
    this.url = this.host + '/Master/PreApproveOtRequest';
    return this.http.post(this.url, data);
  }



  ///


  // public GetAttendanceConfiguration() {
  //   return this.http.get<any[]>(
  //     this.host + "/Master/GetAttendanceConfiguration"
  //   );
  // }

  public GetAttendanceConfiguration() {
    //debugger
    let APIURL = this.host + "/Master/GetAttendanceConfiguration";
    return this.http.get<any[]>(APIURL);
  }

  public InsertAttendanceConfiguration(json: any) {
    //debugger
    let APIURL = this.host + "/Master/InsertAttendanceConfiguration";
    return this.http.post<any[]>(APIURL, json);
  }


  // public InsertAttendanceConfiguration(data: any) {
  //   //debugger;
  //   this.url = this.host + '/Master/InsertAttendanceConfiguration';
  //   return this.http.post(this.url, data);
  // }
  public UpdateAttendanceConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateAttendanceConfiguration';
    return this.http.post(this.url, data);
  }



  public DeleteAttendanceConfiguration(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteAttendanceConfiguration?ID=" + ID);
  }


  public GetCompanyConfiguration() {
    return this.http.get<any[]>(
      this.host + "/Master/GetCompanyConfiguration"
    );
  }



  public DeleteCompanyConfiguration(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteCompanyConfiguration?ID=" + ID);
  }


  public InsertCompanyConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertCompanyConfiguration';
    return this.http.post(this.url, data);
  }
  public UpdateCompanyConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateCompanyConfiguration';
    return this.http.post(this.url, data);
  }


  public GetLeaveConfiguration() {
    return this.http.get<any[]>(
      this.host + "/Master/GetLeaveConfiguration"
    );
  }

  public GetCheckListMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetCheckListMaster"
    );
  }


  public DeleteLeaveConfiguration(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteLeaveConfiguration?ID=" + ID);
  }


  public InsertLeaveConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertLeaveConfiguration';
    return this.http.post(this.url, data);
  }



  public UpdateLeaveConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateLeaveConfiguration';
    return this.http.post(this.url, data);
  }


  public UploadbulkAttendanceWeb(data: any) {
    //debugger;
    this.url = this.host + '/Master/UploadbulkAttendanceWeb';
    return this.http.post(this.url, data);
  }
  public DeleteBarangayMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteBarangayMaster?ID=" + ID);
  }







  public InsertBarangayMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertBarangayMaster';
    return this.http.post(this.url, data);
  }
  public UpdateBarangayMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateBarangayMaster';
    return this.http.post(this.url, data);
  }
  public GetBarangayMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetBarangayMaster"
    );
  }



  public GetLeaveTypeforconfig() {
    return this.http.get<any[]>(
      this.host + "/Master/GetLeaveTypeforconfig"

    );
  }

  public GetEmployeeLoansByApprover(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmployeeLoansByApprover?staffid=" + ID);
  }

  public GetEmployeeLoansByLoanProcessor(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmployeeLoansByLoanProcessor?staffid=" + ID);
  }

  public GetEmployeeLoansByLoanProcessorForFinalApproval(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmployeeLoansByLoanProcessorForFinalApproval?staffid=" + ID);
  }






  public GetEmployeeApprovedLoansByApprover(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmployeeApprovedLoansByApprover?staffid=" + ID);
  }

  public GetEmployeeRejectedLoansByApprover(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmployeeRejectedLoansByApprover?staffid=" + ID);
  }

  public GetOtConfiguration() {
    return this.http.get<any[]>(
      this.host + "/Master/GetOtConfiguration"

    );
  }
  public UpdateOtConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateOtConfiguration';
    return this.http.post(this.url, data);
  }
  public InsertLeaveBalanceDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertLeaveBalanceDetails';
    return this.http.post(this.url, data);
  }
  public GetLeaveBalanceDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetLeaveBalanceDetails"
    );
  }

  public InsertEmployeeResignation(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertEmployeeResignation';
    return this.http.post(this.url, data);
  }


  public GetEmployeeResignation() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeResignation"
    );
  }




  public InsertCompanyAssets(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertCompanyAssets';
    return this.http.post(this.url, data);
  }

  public GetCompanyAssets() {
    return this.http.get<any[]>(
      this.host + "/Master/GetCompanyAssets"
    );
  }


  public DeleteCompanyAssets(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteCompanyAssets?ID=" + ID);
  }

  public InsertOrientationPlanDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertOrientationPlanDetails';
    return this.http.post(this.url, data);
  }

  public UpdateOrientationPlanDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateOrientationPlanDetails';
    return this.http.post(this.url, data);
  }

  public UpdateEmployeeAssets(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateEmployeeAssets';
    return this.http.post(this.url, data);
  }

  public GetPayGroup() {
    //debugger
    let APIURL = this.host + "/Master/GetPayGroup";
    return this.http.get<any[]>(APIURL);
  }

  public GetEmployeeFinalSalary() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeFinalSalary"
    );
  }


  public AttachmentsUpload(files: any) {
    //debugger
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    //debugger
    let APIURL = this.host + "/Announcement/ProjectAttachments/";
    return this.http.post(APIURL, formdata);

  }



  public GetPayrollCutOffDate() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetPayrollCutOffDate"
    );
  }

  public updatepaidamount(data: any) {
    //debugger;
    this.url = this.host + '/Master/updatepaidamount';
    return this.http.post(this.url, data);
  }

  public GetThirteenthMonthSalary() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetThirteenthMonthSalary"
    );
  }






  public GetOrientationPlanDetails() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetOrientationPlanDetails"

    );
  }


  public DeleteOrientationPlanDetails(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOrientationPlanDetails?ID=" + ID);
  }


  public DeleteOrientationSession(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOrientationSession?ID=" + ID);
  }

  public DeleteOrientationPlanStaffDetails(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOrientationStaffDetails?ID=" + ID);
  }


  public CompleteOrientationPlanDetails(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/CompleteOrientationPlanDetails?ID=" + ID);
  }




  public GetAllStaffCounts() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetAllStaffCounts"
    );
  }



  public GetServiceAward() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetServiceAward"
    );
  }
  public GetManpowerPlanningandBudgeting() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetManpowerPlanningandBudgeting"
    );
  }

  public InsertServiceAward(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertServiceAward';
    return this.http.post(this.url, data);
  }
  public InsertManpowerPlanningandBudgeting(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertManpowerPlanningandBudgeting';
    return this.http.post(this.url, data);
  }


  public GetOnBoardingChecklist() {
    return this.http.get<any[]>(
      this.host + "/Master/GetOnBoardingChecklist"

    );
  }
  public GetOnBoardingInitiationTracking() {
    return this.http.get<any[]>(
      this.host + "/Master/GetOnBoardingInitiationTracking"

    );
  }


  public InsertOnBoardingChecklist(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertOnBoardingChecklist';
    return this.http.post(this.url, data);
  }




  public DeleteOnBoardingChecklist(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOnBoardingChecklist?ID=" + ID);
  }
  public InsertOrientationSession(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertOrientationSession';
    return this.http.post(this.url, data);
  }

  public GetOrientationSession() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetOrientationSession"
    );
  }




  public AcceptEmployeeResignation(ID: any, TypeID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/AcceptEmployeeResignation?ID=" + ID + "&TypeID=" + TypeID);
  }




  public GetRetirementList() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetRetirementList"
    );
  }

  public GetPromotionHistory() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetPromotionHistory"
    );
  }

  public DeletePromotionHistory(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeletePromotionHistory?ID=" + ID);
  }



  public InsertPromotionHistory(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertPromotionHistory';
    return this.http.post(this.url, data);
  }


  public UpdatePromotionHistory(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdatePromotionHistory';
    return this.http.post(this.url, data);
  }


  public InsertAssignedAssets(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertAssignedAssets';
    return this.http.post(this.url, data);
  }

  public GetAssignedAssets() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetAssignedAssets"
    );
  }


  public UpdateServiceAward(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateServiceAward';
    return this.http.post(this.url, data);
  }


  public DeleteServiceAward(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteServiceAward?ID=" + ID);
  }
  public DeleteManpowerPlanningandBudgeting(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteManpowerPlanningandBudgeting?ID=" + ID);
  }




  public UpdateCompanyAssets(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateCompanyAssets';
    return this.http.post(this.url, data);
  }

  public UpdateOrientationSession(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateOrientationSession';
    return this.http.post(this.url, data);
  }
  public UpdateEmployeeBenfitsApproval(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateEmployeeBenfitsApproval';
    return this.http.post(this.url, data);
  }


  public GetMyDetailsNotResignation() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetMyDetailsNotResignation"
    );
  }



  public UploadAttachment(data: any) {
    //debugger;
    this.url = this.host + '/Master/UploadAttachment';
    return this.http.post(this.url, data);
  }


  public InsertDe_minimis_Detailsforstaff(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertDe_minimis_Detailsforstaff';
    return this.http.post(this.url, data);
  }

  public InsertEmployeeTask(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertEmployeeTask';
    return this.http.post(this.url, data);
  }



  public UpdateEmployeeTask(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateEmployeeTask';
    return this.http.post(this.url, data);
  }


  public GetEmployeeTask() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetEmployeeTask"
    );
  }


  public UpdateComments(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateComments';
    return this.http.post(this.url, data);
  }

  public InsertcostAllocation(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertcostAllocation';
    return this.http.post(this.url, data);
  }



  public UpdatecostAllocation(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdatecostAllocation';
    return this.http.post(this.url, data);
  }


  public GetcostAllocation() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Announcement/GetcostAllocation"
    );
  }


  public UpdateBonusForStaff(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateBonusForStaff';
    return this.http.post(this.url, data);
  }


  public InsertSuccessionPlanning(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertSuccessionPlanning';
    return this.http.post(this.url, data);
  }


  public GetSuccessionPlanning() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetSuccessionPlanning"
    );
  }

  public DeleteSuccessionPlanning(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteSuccessionPlanning?ID=" + ID);
  }




  // public InsertAttachment(data: any) {
  //   //debugger;
  //   this.url = this.host3 + '/Master/InsertAttachment';
  //   return this.http.post(this.url, data);
  // }

  // public InsertSupportTickets(data: any) {
  //   //debugger;
  //   this.url = this.host3 + '/Master/InsertSupportTickets';
  //   return this.http.post(this.url, data);
  // }
  // public UpdateAttachment(data: any) {
  //   //debugger;
  //   this.url = this.host3 + '/Master/UpdateAttachment';
  //   return this.http.post(this.url, data);
  // }


  // public AttachmentsUploadsss(files: any) {
  //   //debugger
  //   let formdata: FormData = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     formdata.append('file_upload', files[i], files[i].name);
  //   }

  //   //debugger
  //   let APIURL = this.host3 + "/Master/UploadImages/";
  //   return this.http.post(APIURL, formdata);
  // }

  // public GetSupportTickets() {
  //   return this.http.get<any[]>(
  //     this.host3 + "/Master/GetSupportTickets"
  //   );
  // }

  // public GetSupportAttachment() {

  //   return this.http.get<any[]>(this.host3 + "/Master/GetSupportAttachment");
  // }

  // public DeleteSupportTickets(ID: any) {
  //   return this.http.get<any[]>(
  //     this.host3 + "/Master/DeleteSupportTickets?ID=" + ID);
  // }


  // public UpdateSupportTickets(data: any) {
  //   //debugger;
  //   this.url = this.host3 + '/Master/UpdateSupportTickets';
  //   return this.http.post(this.url, data);
  // }
  public Updatepassword(data: any) {
    //debugger;
    this.url = this.host + "/Master/Updatepassword";
    return this.http.post(this.url, data);
  }
  public Updateotp(data: any) {
    //debugger;
    this.url = this.host + "/Master/Updateotp";
    return this.http.post(this.url, data);
  }
  public Verifyotp(data: any) {
    //debugger;
    this.url = this.host + "/Master/Verifyotp";
    return this.http.post(this.url, data);
  }
  // public Authenicate(data: any) {
  //   //debugger;
  //   this.url = this.host1 + '/Master/Authenicate';
  //   return this.http.post(this.url, data);
  // }


  public UpdateATDRequests(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateATDRequests';
    return this.http.post(this.url, data);
  }


  public InsertATDRequests(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertATDRequests';
    return this.http.post(this.url, data);
  }


  public GetATDRequests() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetATDRequests"
    );
  }

  public DeleteATDRequests(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteATDRequests?ID=" + ID);
  }



  public GetContradictionforstaff() {

    return this.http.get<any[]>(this.host + "/Master/GetContradictionforstaff");
  }

  public DeleteContradictionforstaff(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteContradictionforstaff?ID=" + ID);
  }


  public InsertContradictionforstaff(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertContradictionforstaff';
    return this.http.post(this.url, data);
  }


  public GetSubsidaryMaster() {

    return this.http.get<any[]>(this.host + "/Announcement/GetSubsidaryMaster");
  }

  public InsertSubsidaryMaster(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertSubsidaryMaster';
    return this.http.post(this.url, data);
  }
  public UpdateSubsidaryMaster(data: any) {
    debugger;
    this.url = this.host + '/Announcement/UpdateSubsidaryMaster';
    return this.http.post(this.url, data);
  }

  public GetBanks() {

    return this.http.get<any[]>(this.host + "/Master/GetBanks");
  }

  public DeleteSubsidaryMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteSubsidaryMaster?ID=" + ID);
  }
  public GetCompanyID(CompanyID: any) {
    //debugger
    let APIURL = this.host + "/MobileUser/GetCompanyID?CompanyID=" + CompanyID;
    return this.http.get<any[]>(APIURL);
  }


  public UpdateEmployeeLoansByManager(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateEmployeeLoansByManager';
    return this.http.post(this.url, data);
  }


  public DeleteRoleType(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteRoleType?ID=" + ID);
  }

  public InsertRoleType(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertRoleType';
    return this.http.post(this.url, data);
  }

  public UpdateStaffEnableDisable(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateStaffEnableDisable';
    return this.http.post(this.url, data);
  }

  public UpdateRoleType(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateRoleType';
    return this.http.post(this.url, data);
  }

  public UpdateChecklistStaffID(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateChecklistStaffID';
    return this.http.post(this.url, data);
  }

  public GetLevelType() {
    return this.http.get<any[]>(
      this.host + "/Master/GetLevelType"
    );
  }

  public DeleteLevelType(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteLevelType?ID=" + ID);
  }

  public InsertLevelType(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertLevelType';
    return this.http.post(this.url, data);
  }

  public UpdateLevelType(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateLevelType';
    return this.http.post(this.url, data);
  }

  public DeleteShiftMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteShiftMaster?ID=" + ID);
  }


  public DeleteLoanConfiguration(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteLoanConfiguration?ID=" + ID);
  }



  public GetAllStaffNew() {
    return this.http.get<any[]>(
      this.host + "/Master/GetAllStaffNew"

    );
  }

  public GetAllStaffNewForReport() {
    return this.http.get<any[]>(
      this.host + "/Master/GetAllStaffNewForReport"

    );
  }

  public GetAllStaffNewbysubisidry(api: any) {
    return this.http.get<any[]>(
      api + "/Master/GetAllStaffNew"

    );
  }


  public GetAllStaffNew1() {
    return this.http.get<any[]>(
      'https://ali.digiofficeapp.com/ALIApprover/' + "/Master/GetAllStaffNew"

    );
  }




  public UpdateNotificationSeen(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateNotificationSeen';
    return this.http.post(this.url, data);
  }

  public GetExcel1(files: any) {
    //debugger
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    this.url = 'http://192.168.1.200/AsticomAPI' + '/Master/GetExcel1';
    return this.http.post<any[]>(this.url, formdata);

  }

  public InsertExceptionLogs(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertExceptionLogs';
    return this.http.post(this.url, data);
  }
  public GetExceptionLogs() {
    return this.http.get<any[]>(
      this.host + "/Master/GetExceptionLogs"

    );
  }

  public GetBrandMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetBrandMaster"
    );
  }


  public GetCostCentersMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetCostCentersMaster"
    );
  }

  public GetMajorMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetMajorMaster"
    );
  }

  public InsertCostCentersMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertCostCentersMaster';
    return this.http.post(this.url, data);
  }

  public UpdateCostCentersMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateCostCentersMaster';
    return this.http.post(this.url, data);
  }

  public GetDesignationMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetDesignationMaster"
    );
  }

  public GetGroupMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetGroupMaster"
      //this.host + "Master/GetGroupMaster"
    );
  }

  public GetDivisionMaster() {
    return this.http.get<any[]>(
      // "https://23.101.22.93/ALIAPI" + "/Master/GetDivisionMaster"
      this.host + "/Master/GetDivisionMaster"
    );
  }

  public GetWorkingLocationMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetWorkingLocationMaster"
    );
  }

  public GetEmployeePromotion() {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmployeePromotion"
    );
  }

  public InsertEmployeePromotion(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertEmployeePromotion';
    return this.http.post(this.url, data);
  }

  public UpdateEmployeePromotion(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateEmployeePromotion';
    return this.http.post(this.url, data);
  }

  public DeleteEmployeePromotion(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteEmployeePromotion?ID=" + ID);
  }

  public UpdateHrApprove(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/UpdateHrApprove?ID=" + ID);
  }

  public GetPrePaymentLoanRequest() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetPrePaymentLoanRequest"

    );
  }


  public DeletePrePaymentLoanRequest(ID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/DeletePrePaymentLoanRequest?ID=" + ID);
  }

  public InsertPrePaymentLoanRequest(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertPrePaymentLoanRequest';
    return this.http.post(this.url, data);
  }

  public UpdatePrePaymentLoanRequest(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdatePrePaymentLoanRequest';
    return this.http.post(this.url, data);
  }

  public GetMyTeamPreLoanPayments() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetMyTeamPreLoanPayments"

    );
  }

  public GetDivision() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetDivisionMaster"

    );
  }

  public DeleteDivisionMaster(ID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/DeleteDivisionMaster?ID=" + ID);
  }

  public InsertDivisionMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertDivisionMaster';
    return this.http.post(this.url, data);
  }

  public UpdateDivisionMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateDivisionMaster';
    return this.http.post(this.url, data);
  }



  public UpdateSubSectionMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateSubSectionMaster';
    return this.http.post(this.url, data);
  }


  public GetSubSectionMaster() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetSubSectionMaster"
    );
  }

  public DeleteSubSectionMaster(ID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/DeleteSubSectionMaster?ID=" + ID);
  }

  public InsertSubSectionMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertSubSectionMaster';
    return this.http.post(this.url, data);
  }

  public DeleteSectionMaster(ID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/DeleteSectionMaster?ID=" + ID);
  }

  public GetSectionMaster() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetSectionMaster"
    );
  }

  public InsertSectionMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertSectionMaster';
    return this.http.post(this.url, data);
  }

  public UpdateSectionMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateSectionMaster';
    return this.http.post(this.url, data);
  }

  public UpdateGroupMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateGroupMaster';
    return this.http.post(this.url, data);
  }


  public DeleteGroupMaster(ID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/DeleteGroupMaster?ID=" + ID);
  }

  public DeleteCostCentersMaster(ID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/DeleteCostCentersMaster?ID=" + ID);
  }


  public InsertGroupMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertGroupMaster';
    return this.http.post(this.url, data);
  }



  public UpdateBrandMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateBrandMaster';
    return this.http.post(this.url, data);
  }


  public DeleteBrandMaster(ID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/DeleteBrandMaster?ID=" + ID);
  }

  public InsertBrandMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertBrandMaster';
    return this.http.post(this.url, data);
  }


  public DeleteWorkingLocationMaster(ID: any) {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/DeleteWorkingLocationMaster?ID=" + ID);
  }
  public UpdateStaffShiftDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateStaffShiftDetails';
    return this.http.post(this.url, data);
  }

  public InsertWorkingLocationMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertWorkingLocationMaster';
    return this.http.post(this.url, data);
  }

  public UpdateWorkingLocationMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateWorkingLocationMaster';
    return this.http.post(this.url, data);
  }


  public GetEmployeeTransfer() {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmployeeTransfer"
    );
  }

  public InsertEmployeeTransfer(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertEmployeeTransfer';
    return this.http.post(this.url, data);
  }
  public InsertEmployeeTransfernew(data: any, apiurl: any) {
    //debugger;
    this.url = apiurl + '/Master/InsertEmployeeTransfer';
    return this.http.post(this.url, data);
  }

  public DeleteEmployeeTransfer(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteEmployeeTransfer?ID=" + ID);
  }


  public UpdateManagerApprove(data: any) {
    //debugger;
    return this.http.get<any[]>(
      this.host + "/Master/UpdateManagerApprove?ID=" + data)

  }



  public GetOnBoardingInitiation() {
    return this.http.get<any[]>(
      this.host + "/Master/GetOnBoardingInitiation"
    );
  }

  public GetOnBoardingInitiationByActorID() {
    return this.http.get<any[]>(
      this.host + "/Master/GetOnBoardingInitiationByActorID"
    );
  }


  public InsertOnBoardingInitiation(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertOnBoardingInitiation';
    return this.http.post(this.url, data);
  }

  public DeleteOnBoardingInitiation(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteOnBoardingInitiation?ID=" + ID);
  }


  public UpdateOnBoardingInitiationTracking(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateOnBoardingInitiationTracking';
    return this.http.post(this.url, data);
  }

  public UpdateOnboardingCompleted(ID: any) {
    //debugger;
    return this.http.get<any[]>(
      this.host + "/Master/UpdateOnboardingCompleted?ID=" + ID);
  }

  public InsertCheckListConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertCheckListConfiguration';
    return this.http.post(this.url, data);
  }

  public GetCheckListConfiguration() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetCheckListConfiguration"
    );
  }

  public UpdateCheckListConfiguration(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/UpdateCheckListConfiguration';
    return this.http.post(this.url, data);
  }

  public DeleteCheckListConfiguration(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeleteCheckListConfiguration?ID=" + ID);
  }


  public InsertOboardingCheckedList(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertOboardingCheckedList';
    return this.http.post(this.url, data);
  }

  public GetCheckListByStaffID(ID: any) {
    //debugger;
    return this.http.get<any[]>(
      this.host + "/Master/GetCheckListByStaffID?StaffID=" + ID);
  }

  public GetCheckListStatusByStaffID(ID: any) {
    //debugger;
    return this.http.get<any[]>(
      this.host + "/Master/GetCheckListStatusByStaffID?StaffID=" + ID);
  }


  public GetExitFormalityCheckListByStaffID(ID: any) {
    //debugger;
    return this.http.get<any[]>(
      this.host + "/Master/GetExitFormalityCheckListByStaffID?StaffID=" + ID);
  }

  public GetExitFormalityStatusChecklistByStaffID(ID: any) {
    //debugger;
    return this.http.get<any[]>(
      this.host + "/Master/GetExitFormalityStatusChecklistByStaffID?StaffID=" + ID);
  }

  public InsertNewGovernmentRecords(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertNewGovernmentRecords';
    return this.http.post(this.url, data);
  }


  public GetCheckList() {
    return this.http.get<any[]>(
      this.host + "/Master/GetCheckListMaster"
    );
  }
  public InsertCheckListMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertCheckListMaster';
    return this.http.post(this.url, data);
  }

  public UpdateCheckListMaster(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateCheckListMaster';
    return this.http.post(this.url, data);
  }

  public DeleteCheckListMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteCheckListMaster?ID=" + ID);
  }


  public GetExitFormalityCheckList() {
    return this.http.get<any[]>(
      this.host + "/Master/GetExitFormalityCheckList"
    );
  }
  public InsertExitFormalityCheckList(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertExitFormalityCheckList';
    return this.http.post(this.url, data);
  }

  public InsertCheckedExitFormalistyList(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertCheckedExitFormalistyList';
    return this.http.post(this.url, data);
  }

  public UpdateExitFormalityCheckList(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateExitFormalityCheckList';
    return this.http.post(this.url, data);
  }

  public DeleteExitFormalityCheckList(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteExitFormalityCheckList?ID=" + ID);
  }


  public UpdateCompleteExitFormality(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/UpdateCompleteExitFormality?ID=" + ID);
  }







  public InsertNotificationSBU(Event: any, ToUser: any, Message: any,) {
    //debugger
    var entity = {
      'Date': new Date(),
      'Event': Event,
      'FromUser': 'Admin',
      'ToUser': localStorage.getItem('staffid'),
      'Message': Message,
      'Photo': 'Null',
      'Building': 'Dynamics 1',
      'UserID': ToUser,
      'NotificationTypeID': 3,
      'VendorID': 0
    }
    this.url = this.host + '/User/InsertNotification';
    return this.http.post(this.url, entity);


  }



  public GetCompany_PayrollComputation() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetCompany_PayrollComputation"
    );
  }


  public GetNewGovernmentRecords() {
    //debugger
    let APIURL = this.host + "/Master/GetNewGovernmentRecords";
    return this.http.get<any[]>(APIURL);
  }

  public DeleteNewGovernmentRecords(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteNewGovernmentRecords?ID=" + ID);
  }

  public GetLoanClearence() {
    return this.http.get<any[]>(
      this.host + "/Doctor/GetLoanClearence"
    );
  }


  public InsertLoanClearence(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertLoanClearence';
    return this.http.post(this.url, data);
  }

  public UpdateLoanClearence(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateLoanClearence';
    return this.http.post(this.url, data);
  }

  public DeleteLoanClearence(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Doctor/DeleteLoanClearence?ID=" + ID);
  }


  public GetLoanDeduction() {
    return this.http.get<any[]>(
      this.host + "/Doctor/GetLoanDeduction"
    );
  }


  public InsertLoanDeduction(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertLoanDeduction';
    return this.http.post(this.url, data);
  }

  public UpdateLoanDeduction(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateLoanDeduction';
    return this.http.post(this.url, data);
  }

  public DeleteLoanDeduction(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Doctor/DeleteLoanDeduction?ID=" + ID);
  }



  public GetAdhocPayments() {
    return this.http.get<any[]>(
      this.host + "/Doctor/GetAdhocPayments"
    );
  }


  public InsertAdhocPayments(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertAdhocPayments';
    return this.http.post(this.url, data);
  }

  public UpdateAdhocPayments(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateAdhocPayments';
    return this.http.post(this.url, data);
  }

  public DeleteAdhocPayments(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Doctor/DeleteAdhocPayments?ID=" + ID);
  }

  public InsertPreApprovalOverTime(data: any) {
    //debugger;
    this.url = this.host + '/Announcement/InsertPreApprovalOverTime';
    return this.http.post(this.url, data);
  }

  public GetPreApprovalOverTime() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetPreApprovalOverTime"
    );
  }

  public DeletePreApprovalOverTime(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/DeletePreApprovalOverTime?ID=" + ID);
  }

  public InsertStaffRestdays(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertStaffRestdays';
    return this.http.post(this.url, data);
  }


  public UpdateStaffRestdays(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateStaffRestdays';
    return this.http.post(this.url, data);
  }

  public DeleteStaffRestDays(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteStaffRestDays?ID=" + ID);
  }

  public GetStaffRestdays() {
    return this.http.get<any[]>(
      this.host + "/Master/GetStaffRestdays"

    );
  }

  public InsertAmmortization(data: any) {
    //debugger;
    this.url = this.host + '/Master/InsertAmmortization';
    return this.http.post(this.url, data);
  }


  public GetAmmortization() {
    return this.http.get<any[]>(
      this.host + "/Master/GetAmmortization"

    );
  }


  public GetYearEndElection() {
    return this.http.get<any[]>(this.host + "/vendor/GetYearEndElection")
  }

  public InsertYearEndElection(data: any) {
    this.url = this.host + '/Master/InsertYearEndElection';
    return this.http.post(this.url, data);
  }



  public UpdateVaccinationDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateVaccinationDetails';
    return this.http.post(this.url, data);
  }


  public InsertCompany_AddressDetails(json: any) {
    //debugger
    let APIURL = this.host + "Master/InsertCompany_AddressDetails";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdateCompanyAddressDetails(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateCompanyAddressDetails';
    return this.http.post(this.url, data);
  }

  public InsertCompany_WorkPolicy(json: any) {
    //debugger
    let APIURL = this.host + "Master/InsertCompany_WorkPolicy";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdateCompanyWorkPolicy(data: any) {
    //debugger;
    this.url = this.host + 'Master/UpdateCompanyWorkPolicy';
    return this.http.post(this.url, data);
  }

  public DeleteCompany_AddressDetails(id: any) {
    //debugger
    let APIURL = this.host + "Master/DeleteCompany_AddressDetails?ID=" + id;
    return this.http.get<any[]>(APIURL);
  }




  public InsertCompany_PayrollComputation(json: any) {
    //debugger
    let APIURL = this.host + "Master/InsertCompany_PayrollComputation";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdateCompanyPayrollComputation(data: any) {
    //debugger;
    this.url = this.host + 'Master/UpdateCompanyPayrollComputation';
    return this.http.post(this.url, data);
  }


  public InsertCompanyGovernmentComputation(json: any) {
    //debugger
    let APIURL = this.host + "Master/InsertCompanyGovernmentComputation";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdateCompanyGovtComputation(data: any) {
    //debugger;
    this.url = this.host + 'Master/UpdateCompanyGovtComputation';
    return this.http.post(this.url, data);
  }


  public InsertCompany_TaxComputation(json: any) {
    //debugger
    let APIURL = this.host + "Master/InsertCompany_TaxComputation";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdateCompany_TaxComputation(data: any) {
    //debugger;
    this.url = this.host + 'Master/UpdateCompany_TaxComputation';
    return this.http.post(this.url, data);
  }



  public GetCompanyWorkPolicy() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetCompanyWorkPolicy"
    );
  }

  public GetCompanyTaxComputation() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetCompanyTaxComputation"
    );
  }

  public GetCompany_GovernmentComputation() {
    //debugger
    return this.http.get<any[]>(
      this.host + "/Master/GetCompany_GovernmentComputation"
    );
  }

  public UpdateLeaveDetails(data: any) {
    debugger;
    this.url = this.host + '/User/UpdateLeaveDetails';
    return this.http.post(this.url, data);
  }

  public DeleteEmploymentDetails(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteEmploymentDetails?ID=" + ID);
  }

  public GetEmployeeChangeRequest() {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmployeeChangeRequest"
    );
  }

  public InsertEmployeeChangeRequest(data: any) {
    this.url = this.host + '/Master/InsertEmployeeChangeRequest';
    return this.http.post(this.url, data);
  }

  public ApproveEmployeeChangeRequest(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateApproveEmployeeChangeRequest';
    return this.http.post(this.url, data);
  }


  public DeleteNomination(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteNomination?ID=" + ID);
  }

  public DeleteEmployeeChangeRequest(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteEmployeeChangeRequest?ID=" + ID);
  }

  public UpdateDeleteRequestECR(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/UpdateDeleteRequestECR?ID=" + ID);
  }

  public UpdateEmployeeChangeRequest(data: any) {
    //debugger;
    this.url = this.host + '/Master/UpdateEmployeeChangeRequest';
    return this.http.post(this.url, data);
  }

  public RejectEmployeeChangeRequest(data: any) {
    //debugger;
    this.url = this.host + '/Master/RejectEmployeeChangeRequest';
    return this.http.post(this.url, data);
  }


  public UpdateHRApprovalConfigration(data: any) {
    debugger;
    this.url = this.host + '/User/UpdateHRApprovalConfigration';
    return this.http.post(this.url, data);
  }

  public DeleteHRApprovalConfigration(ID: any, url: any) {
    return this.http.get<any[]>(
      url + "/Master/DeleteHRApprovalConfigration?ID=" + ID);
  }

  public GetHRApprovalConfigration() {
    return this.http.get<any[]>(
      this.host + "/Master/GetHRApprovalConfigration"
    );
  }

  public InsertHRApprovalConfigration(data: any, url: any) {
    this.url = url + '/Master/InsertHRApprovalConfigration';
    return this.http.post(this.url, data);
  }

  public Getantiforgerytokenforsuperadmin(data: any, url: any) {
    debugger;
    // this.url = this.host + "/Master/Verifyotp";
    this.url = url + "/Master/GetAllStaffNew"
    return this.http.post(this.url, data);
  }

  public GetAllStaffNew12(data: any) {
    return this.http.get<any[]>(
      data + "/Master/GetAllStaffNew"
    );
  }
  public GetLanguageMaster() {
    return this.http.get<any[]>(
      this.host + "/Master/GetLanguageMaster"
    );
  }




  public InsertLanguageMaster(data: any) {
    this.url = this.host + '/Master/InsertLanguageMaster';
    return this.http.post(this.url, data);
  }


  public UpdateLanguageMaster(data: any) {
    debugger;
    // this.url = this.host + '/Master/UpdateLanguageMaster';
    // return this.http.post(this.url, data);

    this.url = this.host + '/Master/UpdateLanguageMaster';
    return this.http.post(this.url, data);
  }

  // public UpdateEmployeeChangeRequest(data: any) {
  //   this.url = this.host + '/Master/UpdateEmployeeChangeRequest';
  //   return this.http.post(this.url, data);
  // }


  public DeleteLanguageMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteLanguageMaster?ID=" + ID);
  }

  public GetApprovedAttendanceCorrectionByStaffID(UserID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetApprovedAttendanceCorrectionByStaffID?ID=" + "&UserID=" + UserID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }


  public DeleteAttendanceCorrection(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteAttendanceCorrection?ID=" + ID);
  }



  public GetPendingAttendanceCorrectionByStaffID(UserID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetPendingAttendanceCorrectionByStaffID?ID=" + "&UserID=" + UserID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }


  public InsertAttendanceCorrection(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertAttendanceCorrection';
    return this.http.post(this.url, data);
  }


  // public InsertNotification(data: any) {
  //   debugger;
  //   this.url = this.host + '/User/InsertNotification';
  //   return this.http.post(this.url, data);
  // }


  // public ProjectAttachments(files: any) {
  //   debugger
  //   let formdata: FormData = new FormData();
  //   for (let i = 0; i < files.length; i++) {
  //     formdata.append('file_upload', files[i], files[i].name);
  //   }
  //   this.url = this.host + '/Announcement/ProjectAttachments';
  //   return this.http.post<any[]>(this.url, formdata);
  // }



  public UpdateAttendanceCorrection(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateAttendanceCorrection';
    return this.http.post(this.url, data);
  }




  // public GetMyDetailsByStaffID(StaffID: any) {
  //   debugger
  //   return this.http.get<any[]>(
  //     this.host + "/Master/GetMyDetailsByStaffID?ID=" + StaffID
  //   );
  // }

  public GetRejectedAttendanceCorrectionByStaffID(UserID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetRejectedAttendanceCorrectionByStaffID?ID=" + "&UserID=" + UserID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public RejectAttedanceCoorection(data: any) {
    debugger;
    this.url = this.host + '/Master/RejectAttedanceCoorection';
    return this.http.post(this.url, data);
  }

  public ApproveAttedanceCoorection(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/ApproveAttedanceCoorection';
    return this.http.post(this.url, data);
  }

  public GetAttendanceCorrection1() {
    return this.http.get<any[]>(
      this.host + "/Master/GetAttendanceCorrection"
    );
  }

  public GetApprovedAttendanceCorrectionBySupervisor(UserID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetApprovedAttendanceCorrectionBySupervisor?ID=" + "&UserID=" + UserID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public GetPendingAttendanceCorrectionBySupervisor(UserID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetPendingAttendanceCorrectionBySupervisor?ID=" + "&UserID=" + UserID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }


  public GetRejectedAttendanceCorrectionBySupervisor(UserID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetRejectedAttendanceCorrectionBySupervisor?ID=" + "&UserID=" + UserID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }

  public AcceptEmployeeTransfer(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/AcceptEmployeeTransfer?ID=" + ID);
  }

  public EmployeeReverseTransfer(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/EmployeeReverseTransfer?ID=" + ID);
  }
  public RejectEmployeeTransfer(data: any) {
    //debugger;
    this.url = this.host + '/Master/RejectEmployeeTransfer';
    return this.http.post(this.url, data);
  }





















  public GetPayPeriodSetting(){
    return this.http.get<any[]>(
      this.host +"/Master/GetPayPeriodSetting"
    );
  }


  public GetStaffOverTimeDetailsUpload() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetStaffOverTimeDetailsUpload"
    );
  }

  public InsertStaffOverTimeDetailsUpload(data: any) {
    debugger;
    this.url = this.host + '/Announcement/InsertStaffOverTimeDetailsUpload';
    return this.http.post(this.url, data);
  }
  
  public UpdateStaffOverTimeDetails(data: any) {
    debugger;
    this.url = this.host + '/Announcement/UpdateStaffOverTimeDetails';
    return this.http.post(this.url, data);
  }

  public GetComponentMaster(){
    return this.http.get<any[]>(
      this.host +"/Master/GetComponentMaster"
    );
  }
  
  public DeleteComponentMaster(ID : any){
    return this.http.get<any[]>(
      this.host + "/Master/DeleteComponentMaster?ID=" + ID);
  }

  public GetComponentMasterNotInComponentMapping(){
    return this.http.get<any[]>(
      this.host +"/Master/GetComponentMasterNotInComponentMapping"
    );
  }

  public UpdateComponentMapping(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateComponentMapping';
    return this.http.post(this.url, data);
  }

  public InsertComponentMapping(data: any) {
    debugger;
    this.url = this.host+ '/Master/InsertComponentMapping';
    return this.http.post(this.url, data);
  }

  public GetComponentMapping() {
    return this.http.get<any[]>(
      this.host + "/Master/GetComponentMapping"
      );
    }


    public InsertComponentMaster(data : any){
      this.url = this.host+ '/Master/InsertComponentMaster'
      return this.http.post(this.url, data)
    }
    public UpdateComponentMaster(data : any){
      this.url =this.host + '/Master/UpdateComponentMaster'
      return this.http.post(this.url,data)
    }

    public DeleteComponentMapping(ID: any) {
      return this.http.get<any[]>(
        this.host + "/Master/DeleteStaffRestDays?ID=" + ID);
    }
    
  public GetPayrollComponentBulkUpload(){
    return this.http.get<any[]>(
      this.host +"/Master/GetPayrollComponentBulkUpload"
    );
  }

  public InsertPayrollComponentBulkUpload(data: any) {
    debugger;
    this.url =   this.host + '/Master/InsertPayrollComponentBulkUpload';
    return this.http.post(this.url, data);
  }

  public DeletePayrollComponentBulkUpload(ID : any){
    return this.http.get<any[]>(
      this.host + "/Master/DeletePayrollComponentBulkUpload?ID=" + ID);
  }

  public DeletePayPeriodSetting(ID : any){
    return this.http.get<any[]>(
      this.host + "/Master/DeletePayPeriodSetting?ID=" + ID);
  }
  public InsertPayPeriodSetting(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertPayPeriodSetting';
    return this.http.post(this.url, data);
  }

  public UpdatePayPeriodSetting(data : any){
    this.url =this.host + '/Master/UpdatePayPeriodSetting'
    return this.http.post(this.url,data)
  }

      
  public GetAllowancesvalidation(){
    return this.http.get<any[]>(
      this.host +"/Vendor/GetAllowancesvalidation"
    );
  }

  public InsertAllowancevalidation(data: any) {
    debugger;
    this.url = this.host + '/Vendor/InsertAllowancesvalidation';
    return this.http.post(this.url, data);
  }

  public InsertUploadAllowancevalues(data: any) {
    debugger;
    this.url = this.host + '/Vendor/InsertUploadAllowancevalues';
    return this.http.post(this.url, data);
  }
      
  public GetUploadAllowancevalues(){
    return this.http.get<any[]>(
      this.host +"/Vendor/GetUploadAllowancevalues"
    );
  }

  public InsertFMAValidation(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertFMAValidation';
    return this.http.post(this.url, data);
  }
      
  public GetFMAValidation(){
    return this.http.get<any[]>(
      this.host +"/Master/GetFMAValidation"
    );
  } 
}









