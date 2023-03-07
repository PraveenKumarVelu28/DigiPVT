import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { MyTeamAttendenceComponent } from '../manager/TeamAttendance/my-team-attendence/my-team-attendence.component';
import { MyTeamWeeklyShiftComponent } from '../manager/TeamAttendance/my-team-weekly-shift/my-team-weekly-shift.component';
import { MyTeamOverTimeDetailsComponent } from '../manager/TeamAttendance/my-team-over-time-details/my-team-over-time-details.component';
import { MyOverTimeDetailsComponent } from './Attendance/my-over-time-details/my-over-time-details.component';
import { MyTeamAttendenceRegularisationComponent } from '../manager/TeamAttendance/my-team-attendence-regularisation/my-team-attendence-regularisation.component';
import { AttendanceViewComponent } from './Attendance/attendance-view/attendance-view.component';
import { WeeklyShiftComponent } from './Attendance/weekly-shift/weekly-shift.component';
import { AttendenceDetailsComponent } from './Attendance/attendence-details/attendence-details.component';
import { GaugeModule } from 'angular-gauge';
import { ApplyOtComponent } from './Attendance/apply-ot/apply-ot.component';
import { LeaveListDashboardComponent } from './Requests/leave-list-dashboard/leave-list-dashboard.component';
import { MyTeamLeaveDetailsComponent } from '../manager/TeamRequest/my-team-leave-details/my-team-leave-details.component';
import { TimeSheetComponent } from './Requests/time-sheet/time-sheet.component';
import { MyTeamTimesheetComponent } from '../manager/TeamRequest/my-team-timesheet/my-team-timesheet.component';
import { LocatorDashboardComponent } from './Requests/locator-dashboard/locator-dashboard.component';
import { ManagerLocatorDetailsComponent } from '../manager/TeamRequest/manager-locator-details/manager-locator-details.component';
import { EmployeeloandashComponent } from './Requests/employeeloandash/employeeloandash.component';
import { GrievancedashComponent } from './Requests/grievancedash/grievancedash.component';
import { EmployeeResignationComponent } from './Requests/employee-resignation/employee-resignation.component';
import { AttendanceReportsComponent } from './Reports/attendance-reports/attendance-reports.component';
import { LeaveReportsComponent } from './Reports/leave-reports/leave-reports.component';
import { TimesheetReportsComponent } from './Reports/timesheet-reports/timesheet-reports.component';
import { LocaterReportsComponent } from './Reports/locater-reports/locater-reports.component';
import { MytravelreportComponent } from './Reports/mytravelreport/mytravelreport.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
// import { OrgchartComponent } from './orgchart/orgchart.component';
import { PolicydashbaordComponent } from './policydashbaord/policydashbaord.component';
import { AddpolicyComponent } from './Requests/addpolicy/addpolicy.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { NewLeaveRequestComponent } from './Requests/new-leave-request/new-leave-request.component';
import { TimesheetformComponent } from './Requests/timesheetform/timesheetform.component';
import { LocatorRequestFormComponent } from './Requests/locator-request-form/locator-request-form.component';
import { ApplyloanComponent } from './Requests/applyloan/applyloan.component';
import { RaisegrievancComponent } from './Requests/raisegrievanc/raisegrievanc.component';
import { EmployeeResignformComponent } from './Requests/employee-resignform/employee-resignform.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { VaccineFormComponent } from './vaccine-form/vaccine-form.component';
import { VaccinedashboardComponent } from './vaccinedashboard/vaccinedashboard.component';
import { ChatComponent } from './chat/chat.component';
import { ProjectfoldersComponentComponent } from './projectfolders-component/projectfolders-component.component';
import { NewfolderComponentComponent } from './newfolder-component/newfolder-component.component';
import { MyAccountSettingComponent } from './my-account-setting/my-account-setting.component';
import { MyAccountsettingModifyComponent } from './my-accountsetting-modify/my-accountsetting-modify.component';
import { EmploymentCertificateComponent } from './employment-certificate/employment-certificate.component';
import { AttendanceCorrectionComponent } from './Attendance/attendance-correction/attendance-correction.component';
import { AttendanceCorrectionFormComponent } from './Attendance/attendance-correction-form/attendance-correction-form.component';
import { LogReportComponent } from './Reports/log-report/log-report.component';
import { ShiftCorrectionComponent } from './Attendance/shift-correction/shift-correction.component';
import { ShiftCorrectionFormComponent } from './Attendance/shift-correction-form/shift-correction-form.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { AttendanceCorrectionReportComponent } from './Reports/attendance-correction-report/attendance-correction-report.component';
import { EmployeeAttendanceReportComponent } from './employee-attendance-report/employee-attendance-report.component';
import { EmployeeOvertimeReportComponent } from './employee-overtime-report/employee-overtime-report.component';
import { IDDetailsComponent } from './MyProfile/iddetails/iddetails.component';
import { BankDetailsComponent } from './MyProfile/bank-details/bank-details.component';
import { EducationDetailsComponent } from './MyProfile/education-details/education-details.component';
import { NominationComponent } from './MyProfile/nomination/nomination.component';
import { EmployementDetailsComponent } from './MyProfile/employement-details/employement-details.component';
import { DependentDetailsComponent } from './MyProfile/dependent-details/dependent-details.component';
import { ContactDetailsComponent } from './MyProfile/contact-details/contact-details.component';
import { PositionDetailsComponent } from './MyProfile/position-details/position-details.component';
import { EmployeeInformationComponent } from './MyProfile/employee-information/employee-information.component';
import { MyProfiletabsComponent } from './MyProfile/my-profiletabs/my-profiletabs.component';
@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeedashboardComponent,
    MyTeamAttendenceComponent,
    MyTeamWeeklyShiftComponent,
    MyTeamOverTimeDetailsComponent,
    MyOverTimeDetailsComponent,
    MyTeamAttendenceRegularisationComponent,
    AttendanceViewComponent,
    WeeklyShiftComponent,
    AttendenceDetailsComponent,
    ApplyOtComponent,
    LeaveListDashboardComponent,
    MyTeamLeaveDetailsComponent,
    TimeSheetComponent,
    MyTeamTimesheetComponent,
    LocatorDashboardComponent,
    ManagerLocatorDetailsComponent,
    EmployeeloandashComponent,
    GrievancedashComponent,
    EmployeeResignationComponent,
    AttendanceReportsComponent,
    LeaveReportsComponent,
    TimesheetReportsComponent,
    LocaterReportsComponent,
    MytravelreportComponent,
    // OrgchartComponent,
    PolicydashbaordComponent,
    AddpolicyComponent,
    NewLeaveRequestComponent,
    TimesheetformComponent,
    LocatorRequestFormComponent,
    ApplyloanComponent,
    RaisegrievancComponent,
    EmployeeResignformComponent,
    ViewGroupComponent,
    VaccineFormComponent,
    VaccinedashboardComponent,
    ChatComponent,
    ProjectfoldersComponentComponent,
    NewfolderComponentComponent,
    MyAccountSettingComponent,
    MyAccountsettingModifyComponent,
    EmploymentCertificateComponent,
    AttendanceCorrectionComponent,
    AttendanceCorrectionFormComponent,
    LogReportComponent,
    ShiftCorrectionComponent,
    ShiftCorrectionFormComponent,
    AttendanceCorrectionReportComponent,
    EmployeeAttendanceReportComponent,
    EmployeeOvertimeReportComponent,
    MyProfiletabsComponent, 
    EmployeeInformationComponent, 
    PositionDetailsComponent, 
    ContactDetailsComponent, 
    DependentDetailsComponent, 
    EmployementDetailsComponent, 
    NominationComponent, 
    EducationDetailsComponent, 
    BankDetailsComponent, 
    IDDetailsComponent

  ],
  imports: [
    TimepickerModule.forRoot(),
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    SharedModule,
    GaugeModule.forRoot(),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2FilterPipeModule,
    NgxOrgChartModule,

  ],
  providers: [
    {
      provide: HttpClientModule
    },

  ],
  bootstrap: [AppComponent]
})

export class EmployeeModule { }