import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeModule } from 'angular-gauge';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { StaffShiftMasterComponent } from './TeamAttendance/staff-shift-master/staff-shift-master.component';
import { ExitformalityformdashComponent } from './TeamRequest/exitformalityformdash/exitformalityformdash.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TeamAttendanceReportsComponent } from './TeamReport/team-attendance-reports/team-attendance-reports.component';
import { NotPunchedInReportComponent } from './TeamReport/not-punched-in-report/not-punched-in-report.component';
import { TeamLeaveReportsComponent } from './TeamReport/team-leave-reports/team-leave-reports.component';
import { TeamTimesheetReportsComponent } from './TeamReport/team-timesheet-reports/team-timesheet-reports.component';
import { TeamLocatorReportsComponent } from './TeamReport/team-locator-reports/team-locator-reports.component';
import { MyteamtravelreportComponent } from './TeamReport/myteamtravelreport/myteamtravelreport.component';
import { SharedModule } from '../shared/shared.module';
import { TeamAttendanceCorrectionComponent } from './TeamAttendance/team-attendance-correction/team-attendance-correction.component';
import { MyTeamShiftCorrectionComponent } from './TeamAttendance/my-team-shift-correction/my-team-shift-correction.component';
import { StaffShiftMasterByManagerIDComponent } from './TeamShift/staff-shift-master-by-manager-id/staff-shift-master-by-manager-id.component';
import { TeamAttendanceCorrectionReportsComponent } from './TeamReport/team-attendance-correction-reports/team-attendance-correction-reports.component';
import { AllteamleavedetailsComponent } from './TeamRequest/allteamleavedetails/allteamleavedetails.component';
import { AllstaffovertimedetailsComponent } from './TeamAttendance/allstaffovertimedetails/allstaffovertimedetails.component';
@NgModule({
  declarations: [
    ManagerComponent,
    ManagerDashboardComponent,
    StaffShiftMasterComponent,
    ExitformalityformdashComponent,
    TeamAttendanceReportsComponent,
    NotPunchedInReportComponent,
    TeamLeaveReportsComponent,
    TeamTimesheetReportsComponent,
    TeamLocatorReportsComponent,
    MyteamtravelreportComponent,
    TeamAttendanceCorrectionComponent,
    MyTeamShiftCorrectionComponent,
    StaffShiftMasterByManagerIDComponent,
    TeamAttendanceCorrectionReportsComponent,
    AllteamleavedetailsComponent,
    AllstaffovertimedetailsComponent,

  ],
  imports: [
    FormsModule,
    CommonModule,
    ManagerRoutingModule,
    GaugeModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    DropzoneModule,
    NgxDropzoneModule,
    SharedModule

  ]
})

export class ManagerModule { }