import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerLocatorDetailsComponent } from './TeamRequest/manager-locator-details/manager-locator-details.component';
import { MyTeamTimesheetComponent } from './TeamRequest/my-team-timesheet/my-team-timesheet.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerComponent } from './manager.component';
import { MyTeamAttendenceRegularisationComponent } from './TeamAttendance/my-team-attendence-regularisation/my-team-attendence-regularisation.component';
import { MyTeamAttendenceComponent } from './TeamAttendance/my-team-attendence/my-team-attendence.component';
import { MyTeamOverTimeDetailsComponent } from './TeamAttendance/my-team-over-time-details/my-team-over-time-details.component';
import { MyTeamWeeklyShiftComponent } from './TeamAttendance/my-team-weekly-shift/my-team-weekly-shift.component';
import { StaffShiftMasterComponent } from './TeamAttendance/staff-shift-master/staff-shift-master.component';
import { MyTeamLeaveDetailsComponent } from './TeamRequest/my-team-leave-details/my-team-leave-details.component';
import { ExitformalityformdashComponent } from './TeamRequest/exitformalityformdash/exitformalityformdash.component';
import { TeamAttendanceReportsComponent } from './TeamReport/team-attendance-reports/team-attendance-reports.component';
import { NotPunchedInReportComponent } from './TeamReport/not-punched-in-report/not-punched-in-report.component';
import { TeamLeaveReportsComponent } from './TeamReport/team-leave-reports/team-leave-reports.component';
import { TeamTimesheetReportsComponent } from './TeamReport/team-timesheet-reports/team-timesheet-reports.component';
import { LocaterReportsComponent } from '../employee/Reports/locater-reports/locater-reports.component';
import { TeamLocatorReportsComponent } from './TeamReport/team-locator-reports/team-locator-reports.component';
import { MyteamtravelreportComponent } from './TeamReport/myteamtravelreport/myteamtravelreport.component';
import { TeamAttendanceCorrectionComponent } from './TeamAttendance/team-attendance-correction/team-attendance-correction.component';
import { AuthGuard } from 'src/app/Pages/Services/services/auth.guard';
import { MyTeamShiftCorrectionComponent } from './TeamAttendance/my-team-shift-correction/my-team-shift-correction.component';
import { StaffShiftMasterByManagerIDComponent } from './TeamShift/staff-shift-master-by-manager-id/staff-shift-master-by-manager-id.component';
import { TeamAttendanceCorrectionReportsComponent } from './TeamReport/team-attendance-correction-reports/team-attendance-correction-reports.component';
import { AllteamleavedetailsComponent } from './TeamRequest/allteamleavedetails/allteamleavedetails.component';
import { AllstaffovertimedetailsComponent } from './TeamAttendance/allstaffovertimedetails/allstaffovertimedetails.component';

const routes: Routes = [{ path: '', component: ManagerComponent },

{ path: 'ManagerDashboard', component: ManagerDashboardComponent  ,canActivate: [AuthGuard]},
{ path: 'HRDashboard', component: ManagerDashboardComponent  ,canActivate: [AuthGuard]},
{ path: 'MyTeamAttendence', component: MyTeamAttendenceComponent ,canActivate: [AuthGuard]},
{ path: 'MyTeamAttendenceRegularisation', component: MyTeamAttendenceRegularisationComponent  ,canActivate: [AuthGuard]},
{ path: 'MyTeamOverTimeDetails', component: MyTeamOverTimeDetailsComponent  ,canActivate: [AuthGuard]},
{ path: 'MyTeamWeeklyShift', component: MyTeamWeeklyShiftComponent  ,canActivate: [AuthGuard]},
{ path: 'StaffShiftMaster', component: StaffShiftMasterComponent  ,canActivate: [AuthGuard]},
{ path: 'ManagerLocatorDetails', component: ManagerLocatorDetailsComponent  ,canActivate: [AuthGuard]},
{ path: 'MyTeamLeaveDetails', component: MyTeamLeaveDetailsComponent  ,canActivate: [AuthGuard]},
{ path: 'MyTeamTimesheet', component: MyTeamTimesheetComponent  ,canActivate: [AuthGuard]},
{ path: 'Exitformalityformdash', component: ExitformalityformdashComponent  ,canActivate: [AuthGuard]},
{ path: 'TeamAttendanceReports', component: TeamAttendanceReportsComponent  ,canActivate: [AuthGuard]},
{ path: 'NotPunchedInReport', component: NotPunchedInReportComponent  ,canActivate: [AuthGuard]},
{ path: 'TeamLeaveReports', component: TeamLeaveReportsComponent  ,canActivate: [AuthGuard]},
{ path: 'TeamTimesheetReports', component: TeamTimesheetReportsComponent  ,canActivate: [AuthGuard]},
{ path: 'TeamLocatorReports', component: TeamLocatorReportsComponent  ,canActivate: [AuthGuard]},
{ path: 'Myteamtravelreport', component: MyteamtravelreportComponent  ,canActivate: [AuthGuard]},
{ path: 'StaffShiftMaster/:id', component: StaffShiftMasterComponent  ,canActivate: [AuthGuard]},
{ path: 'MyTeamAttendanceCorrection', component: TeamAttendanceCorrectionComponent ,canActivate: [AuthGuard]},
{ path: 'MyTeamShiftCorrection', component: MyTeamShiftCorrectionComponent ,canActivate: [AuthGuard]},
{ path: 'StaffShiftMasterByManagerID', component: StaffShiftMasterByManagerIDComponent  ,canActivate: [AuthGuard]},
{ path: 'StaffShiftMasterByManagerID/:id', component: StaffShiftMasterByManagerIDComponent  ,canActivate: [AuthGuard]},
{ path: 'TeamAttendanceCorrectionReports', component: TeamAttendanceCorrectionReportsComponent  ,canActivate: [AuthGuard]},
{ path: 'allteamleavedetails', component: AllteamleavedetailsComponent  ,canActivate: [AuthGuard]},
{ path: 'allstaffovertimedetails', component: AllstaffovertimedetailsComponent  ,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ManagerRoutingModule { }