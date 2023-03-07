import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpolicyComponent } from './Requests/addpolicy/addpolicy.component';
import { ApplyloanComponent } from './Requests/applyloan/applyloan.component';
import { ApplyOtComponent } from './Attendance/apply-ot/apply-ot.component';
import { AttendanceViewComponent } from './Attendance/attendance-view/attendance-view.component';
import { AttendenceDetailsComponent } from './Attendance/attendence-details/attendence-details.component';
import { MyOverTimeDetailsComponent } from './Attendance/my-over-time-details/my-over-time-details.component';
import { MyTeamAttendenceRegularisationComponent } from '../manager/TeamAttendance/my-team-attendence-regularisation/my-team-attendence-regularisation.component';
import { MyTeamAttendenceComponent } from '../manager/TeamAttendance/my-team-attendence/my-team-attendence.component';
import { MyTeamOverTimeDetailsComponent } from '../manager/TeamAttendance/my-team-over-time-details/my-team-over-time-details.component';
import { MyTeamWeeklyShiftComponent } from '../manager/TeamAttendance/my-team-weekly-shift/my-team-weekly-shift.component';
import { WeeklyShiftComponent } from './Attendance/weekly-shift/weekly-shift.component';
import { EmployeeResignformComponent } from './Requests/employee-resignform/employee-resignform.component';
import { EmployeeComponent } from './employee.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { LocatorRequestFormComponent } from './Requests/locator-request-form/locator-request-form.component';
import { NewLeaveRequestComponent } from './Requests/new-leave-request/new-leave-request.component';
import { OrgchartComponent } from './orgchart/orgchart.component';
import { PolicydashbaordComponent } from './policydashbaord/policydashbaord.component';
import { RaisegrievancComponent } from './Requests/raisegrievanc/raisegrievanc.component';
import { AttendanceReportsComponent } from './Reports/attendance-reports/attendance-reports.component';
import { LeaveReportsComponent } from './Reports/leave-reports/leave-reports.component';
import { LocaterReportsComponent } from './Reports/locater-reports/locater-reports.component';
import { MytravelreportComponent } from './Reports/mytravelreport/mytravelreport.component';
import { TimesheetReportsComponent } from './Reports/timesheet-reports/timesheet-reports.component';
import { EmployeeResignationComponent } from './Requests/employee-resignation/employee-resignation.component';
import { EmployeeloandashComponent } from './Requests/employeeloandash/employeeloandash.component';
import { GrievancedashComponent } from './Requests/grievancedash/grievancedash.component';
import { LeaveListDashboardComponent } from './Requests/leave-list-dashboard/leave-list-dashboard.component';
import { LocatorDashboardComponent } from './Requests/locator-dashboard/locator-dashboard.component';
import { TimeSheetComponent } from './Requests/time-sheet/time-sheet.component';
import { TimesheetformComponent } from './Requests/timesheetform/timesheetform.component';
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
import { AuthGuard } from 'src/app/Pages/Services/services/auth.guard';
import { LogReportComponent } from './Reports/log-report/log-report.component';
import { LeaveUploadComponent } from '../hr/leave-upload/leave-upload.component';
import { ShiftCorrectionComponent } from './Attendance/shift-correction/shift-correction.component';
import { ShiftCorrectionFormComponent } from './Attendance/shift-correction-form/shift-correction-form.component';
import { AttendanceCorrectionReportComponent } from './Reports/attendance-correction-report/attendance-correction-report.component';
import { EmployeeAttendanceReportComponent } from './employee-attendance-report/employee-attendance-report.component';
import { EmployeeOvertimeReportComponent } from './employee-overtime-report/employee-overtime-report.component';
import { PositionDetailsComponent } from './MyProfile/position-details/position-details.component';
import { NominationComponent } from './MyProfile/nomination/nomination.component';
import { MyProfiletabsComponent } from './MyProfile/my-profiletabs/my-profiletabs.component';
import { IDDetailsComponent } from './MyProfile/iddetails/iddetails.component';
import { EmployeeInformationComponent } from './MyProfile/employee-information/employee-information.component';
import { EmployementDetailsComponent } from './MyProfile/employement-details/employement-details.component';
import { EducationDetailsComponent } from './MyProfile/education-details/education-details.component';
import { DependentDetailsComponent } from './MyProfile/dependent-details/dependent-details.component';
import { ContactDetailsComponent } from './MyProfile/contact-details/contact-details.component';
import { BankDetailsComponent } from './MyProfile/bank-details/bank-details.component';

const routes: Routes = [

  { path: '', component: EmployeeComponent },
  { path: 'Employeedashboard', component: EmployeedashboardComponent, canActivate: [AuthGuard] },

  { path: 'AttendanceView', component: AttendanceViewComponent, canActivate: [AuthGuard] },
  { path: 'AttendenceDetails', component: AttendenceDetailsComponent, canActivate: [AuthGuard] },
  { path: 'MyOverTimeDetails', component: MyOverTimeDetailsComponent, canActivate: [AuthGuard] },

  { path: 'WeeklyShift', component: WeeklyShiftComponent, canActivate: [AuthGuard] },
  { path: 'MyTeamWeeklyShift', component: MyTeamWeeklyShiftComponent, canActivate: [AuthGuard] },
  { path: 'ApplyOT', component: ApplyOtComponent, canActivate: [AuthGuard] },

  { path: 'EmployeeResignation', component: EmployeeResignationComponent, canActivate: [AuthGuard] },
  { path: 'Employeeloandash', component: EmployeeloandashComponent, canActivate: [AuthGuard] },
  { path: 'Grievancedash', component: GrievancedashComponent, canActivate: [AuthGuard] },

  { path: 'LeaveListDashboard', component: LeaveListDashboardComponent, canActivate: [AuthGuard] },
  { path: 'LocatorDashboard', component: LocatorDashboardComponent, canActivate: [AuthGuard] },

  { path: 'TimeSheet', component: TimeSheetComponent, canActivate: [AuthGuard] },

  { path: 'AttendanceReports', component: AttendanceReportsComponent, canActivate: [AuthGuard] },
  { path: 'LeaveReports', component: LeaveReportsComponent, canActivate: [AuthGuard] },
  { path: 'LocaterReports', component: LocaterReportsComponent, canActivate: [AuthGuard] },
  { path: 'Mytravelreport', component: MytravelreportComponent, canActivate: [AuthGuard] },
  { path: 'TimesheetReports', component: TimesheetReportsComponent, canActivate: [AuthGuard] },
  { path: 'Grievancedash', component: GrievancedashComponent, canActivate: [AuthGuard] },

  { path: 'Company-policy', component: ProjectfoldersComponentComponent, canActivate: [AuthGuard] },
  { path: 'create-folder', component: NewfolderComponentComponent, canActivate: [AuthGuard] },
  { path: 'Policydashbaord', component: PolicydashbaordComponent, canActivate: [AuthGuard] },
  { path: 'Policydashbaord/:id', component: PolicydashbaordComponent, canActivate: [AuthGuard] },
  { path: 'Addpolicy', component: AddpolicyComponent, canActivate: [AuthGuard] },
  { path: 'Addpolicy/:id', component: AddpolicyComponent, canActivate: [AuthGuard] },

  { path: 'NewLeaveRequest', component: NewLeaveRequestComponent, canActivate: [AuthGuard] },
  { path: 'Timesheetform', component: TimesheetformComponent, canActivate: [AuthGuard] },
  { path: 'LocatorRequestForm', component: LocatorRequestFormComponent, canActivate: [AuthGuard] },
  { path: 'applyloan', component: ApplyloanComponent, canActivate: [AuthGuard] },
  { path: 'Raisegrievanc', component: RaisegrievancComponent, canActivate: [AuthGuard] },
  { path: 'EmployeeResignform', component: EmployeeResignformComponent, canActivate: [AuthGuard] },
  { path: 'MyAccountSetting', component: MyAccountSettingComponent, canActivate: [AuthGuard] },
  { path: 'MyAccountsettingModify', component: MyAccountsettingModifyComponent, canActivate: [AuthGuard] },
  { path: 'Orgchart', component: OrgchartComponent, canActivate: [AuthGuard] },
  { path: 'ViewGroup', component: ViewGroupComponent, canActivate: [AuthGuard] },
  { path: 'VaccineForm', component: VaccineFormComponent, canActivate: [AuthGuard] },
  { path: 'VaccineForm/:id', component: VaccineFormComponent, canActivate: [AuthGuard] },
  { path: 'Vaccinedashboard', component: VaccinedashboardComponent, canActivate: [AuthGuard] },
  { path: 'Chat/:id', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'EmploymentCertificate', component: EmploymentCertificateComponent, canActivate: [AuthGuard] },
  { path: 'AttendanceCorrection', component: AttendanceCorrectionComponent, canActivate: [AuthGuard] },
  { path: 'AttendanceCorrectionForm', component: AttendanceCorrectionFormComponent, canActivate: [AuthGuard] },
  { path: 'AttendanceCorrectionForm/:id', component: AttendanceCorrectionFormComponent, canActivate: [AuthGuard] },
  { path: 'LogReport', component: LogReportComponent, canActivate: [AuthGuard] },
  { path: 'ShiftCorrection', component: ShiftCorrectionComponent, canActivate: [AuthGuard] },
  { path: 'ShiftCorrectionForm', component: ShiftCorrectionFormComponent, canActivate: [AuthGuard] },
  { path: 'ShiftCorrectionForm/:id', component: ShiftCorrectionFormComponent, canActivate: [AuthGuard] },
  { path: 'AttendanceCorrectionReport', component: AttendanceCorrectionReportComponent, canActivate: [AuthGuard] },
  { path: 'EmployeeAttendanceReport', component: EmployeeAttendanceReportComponent, canActivate: [AuthGuard] },
  { path: 'EmployeeOvertimeReport', component: EmployeeOvertimeReportComponent, canActivate: [AuthGuard] },
  { path: 'PositionDetails', component: PositionDetailsComponent, canActivate: [AuthGuard] },
  { path: 'PositionDetails/:StaffID', component: PositionDetailsComponent, canActivate: [AuthGuard] },
  { path: 'Nomination', component: NominationComponent, canActivate: [AuthGuard] }, 
  { path: 'MyProfiletabs', component: MyProfiletabsComponent, canActivate: [AuthGuard] }, 
  { path: 'MyProfiletabs/:id', component: MyProfiletabsComponent, canActivate: [AuthGuard] }, 
  { path: 'IDDetails', component: IDDetailsComponent, canActivate: [AuthGuard] }, 
  { path: 'EmployeeInformation', component: EmployeeInformationComponent, canActivate: [AuthGuard] }, 
  { path: 'EmployementDetails', component: EmployementDetailsComponent, canActivate: [AuthGuard] }, 
  { path: 'EducationDetails', component: EducationDetailsComponent, canActivate: [AuthGuard] }, 
  { path: 'DependentDetails', component: DependentDetailsComponent, canActivate: [AuthGuard] }, 
  { path: 'ContactDetails', component: ContactDetailsComponent, canActivate: [AuthGuard] }, 
  { path: 'BankDetails', component: BankDetailsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})

export class EmployeeRoutingModule { }