import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HRRoutingModule } from './hr-routing.module';
import { HRComponent } from './hr.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { AddressDetailsWizardComponent } from './address-details-wizard/address-details-wizard.component';
import { GenerateCsvfilesComponent } from './generate-csvfiles/generate-csvfiles.component';
import { HrleavereuestComponent } from './hrleavereuest/hrleavereuest.component';
import { MyTeamLoansComponent } from './my-team-loans/my-team-loans.component';
import { StaffsalarydashComponent } from './Employee/staffsalarydash/staffsalarydash.component';
import { BenefirsenrollmetdashComponent } from './Employee/benefirsenrollmetdash/benefirsenrollmetdash.component';
import { ContradictiondashComponent } from './Employee/contradictiondash/contradictiondash.component';
import { RetirementListComponent } from './Employee/retirement-list/retirement-list.component';
import { ATDRequestsDashComponent } from './Employee/atdrequests-dash/atdrequests-dash.component';
import { AddstaffsalaryComponent } from './Employee/addstaffsalary/addstaffsalary.component';
import { ContradictionComponent } from './Employee/contradiction/contradiction.component';
import { ExitformalityformComponent } from './Employee/exitformalityform/exitformalityform.component';
import { ATDRequestsComponent } from './Employee/atdrequests/atdrequests.component';
import { LeaveTypeDashboardComponent } from './Masters/leave-type-dashboard/leave-type-dashboard.component';
import { LeaveTypeFormComponent } from './Masters/leave-type-form/leave-type-form.component';
import { LoanMasterDashComponent } from './Masters/loan-master-dash/loan-master-dash.component';
import { LoanMasterComponent } from './Masters/loan-master/loan-master.component';
import { TransportationTypeDashComponent } from './Masters/transportation-type-dash/transportation-type-dash.component';
import { TransportationTypeFormComponent } from './Masters/transportation-type-form/transportation-type-form.component';
import { LevelTypeDashComponent } from './Masters/level-type-dash/level-type-dash.component';
import { LevelTypeFormComponent } from './Masters/level-type-form/level-type-form.component';
import { EmployeebenfitsmasterdashComponent } from './Masters/employeebenfitsmasterdash/employeebenfitsmasterdash.component';
import { EmployeebenfitsmasteraddComponent } from './Masters/employeebenfitsmasteradd/employeebenfitsmasteradd.component';
import { RolebenefitsmappingdashComponent } from './Masters/rolebenefitsmappingdash/rolebenefitsmappingdash.component';
import { RolebenefitsmappingComponent } from './Masters/rolebenefitsmapping/rolebenefitsmapping.component';
import { GrivelnecemasterdashComponent } from './Masters/grivelnecemasterdash/grivelnecemasterdash.component';
import { LookandfeeldashComponent } from './Configuration/lookandfeeldash/lookandfeeldash.component';
import { AddlookandfeelComponent } from './Configuration/addlookandfeel/addlookandfeel.component';
import { LeaveConfigurationdashComponent } from './Configuration/leave-configurationdash/leave-configurationdash.component';
import { LeaveConfigurationComponent } from './Configuration/leave-configuration/leave-configuration.component';
import { OverTimeConfigurationComponent } from './Configuration/over-time-configuration/over-time-configuration.component';
import { RetirementConfigurationComponent } from './Configuration/retirement-configuration/retirement-configuration.component';
import { LoanConfigurationDashComponent } from './Configuration/loan-configuration-dash/loan-configuration-dash.component';
import { LoanConfigurationMasterComponent } from './Configuration/loan-configuration-master/loan-configuration-master.component';
import { LoadattedanceComponent } from './Configuration/loadattedance/loadattedance.component';
import { GrivelnecemasterComponent } from './Masters/grivelnecemaster/grivelnecemaster.component';
import { TransferemployeeComponent } from './transferemployee/transferemployee.component';
import { HRDashboardComponent } from './hrdashboard/hrdashboard.component';
import { GaugeModule } from 'angular-gauge';
import { AttendanceconfigdashComponent } from './Configuration/attendanceconfigdash/attendanceconfigdash.component';
import { AttendanceconfigComponent } from './Configuration/attendanceconfig/attendanceconfig.component';
import { NewTicketsComponent } from './SupportTicketsForHR/new-tickets/new-tickets.component';
import { AcceptedTicketsComponent } from './SupportTicketsForHR/accepted-tickets/accepted-tickets.component';
import { RejectedTicketsComponent } from './SupportTicketsForHR/rejected-tickets/rejected-tickets.component';
import { ClosedTicketsComponent } from './SupportTicketsForHR/closed-tickets/closed-tickets.component';
import { LeaveUploadComponent } from './leave-upload/leave-upload.component';
import { LeaveUploadFormComponent } from './leave-upload-form/leave-upload-form.component';
import { LicenceDetailsComponent } from './licence-details/licence-details.component';
import { InactivestaffDetailsComponent } from './inactivestaff-details/inactivestaff-details.component';
import { PayrollTrigggerComponent } from './payroll-triggger/payroll-triggger.component';
import { GeneratePreliminaryReportComponent } from './generate-preliminary-report/generate-preliminary-report.component';
import { StaffBulkUploadExceptionsComponent } from './Masters/staff-bulk-upload-exceptions/staff-bulk-upload-exceptions.component';
import { StaffBulkUploadExceptionsFormComponent } from './Masters/staff-bulk-upload-exceptions-form/staff-bulk-upload-exceptions-form.component';


@NgModule({
  declarations: [
    HRComponent,
    StaffdashboardComponent,
    AddressDetailsWizardComponent,
    GenerateCsvfilesComponent,
    HrleavereuestComponent,
    MyTeamLoansComponent,
    StaffsalarydashComponent,
    BenefirsenrollmetdashComponent,
    ContradictiondashComponent,
    RetirementListComponent,
    ATDRequestsDashComponent,
    AddstaffsalaryComponent,
    ContradictionComponent,
    ExitformalityformComponent,
    ATDRequestsComponent,
    LeaveTypeDashboardComponent,
    LeaveTypeFormComponent,
    LoanMasterDashComponent,
    LoanMasterComponent,
    TransportationTypeDashComponent,
    TransportationTypeFormComponent,
    LevelTypeDashComponent,
    LevelTypeFormComponent,
    EmployeebenfitsmasterdashComponent,
    EmployeebenfitsmasteraddComponent,
    RolebenefitsmappingdashComponent,
    RolebenefitsmappingComponent,
    GrivelnecemasterdashComponent,
    LookandfeeldashComponent,
    AddlookandfeelComponent,
    LeaveConfigurationdashComponent,
    LeaveConfigurationComponent,
    OverTimeConfigurationComponent,
    RetirementConfigurationComponent,
    LoanConfigurationDashComponent,
    LoanConfigurationMasterComponent,
    LoadattedanceComponent,
    GrivelnecemasterComponent,
    TransferemployeeComponent,
    HRDashboardComponent,
    AttendanceconfigdashComponent,
    AttendanceconfigComponent,
    NewTicketsComponent,
    AcceptedTicketsComponent,
    RejectedTicketsComponent,
    ClosedTicketsComponent,
    LeaveUploadComponent,
    LeaveUploadFormComponent,
    LicenceDetailsComponent,
    InactivestaffDetailsComponent,
    PayrollTrigggerComponent,
    GeneratePreliminaryReportComponent,
    StaffBulkUploadExceptionsComponent,
    StaffBulkUploadExceptionsFormComponent
 
  ],
  imports: [
    CommonModule,
    HRRoutingModule,
    SharedModule,
    FormsModule,
 
    
    
    GaugeModule.forRoot(),
  ]
})
export class HRModule { }
