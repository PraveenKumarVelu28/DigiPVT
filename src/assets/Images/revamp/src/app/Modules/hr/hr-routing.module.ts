import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Pages/Services/services/auth.guard';
import { PayslipviewComponent } from 'src/app/payslipview/payslipview.component';
import { ManagerDashboardComponent } from '../manager/manager-dashboard/manager-dashboard.component';
import { AddressDetailsWizardComponent } from './address-details-wizard/address-details-wizard.component';
import { AddlookandfeelComponent } from './Configuration/addlookandfeel/addlookandfeel.component';
import { AttendanceconfigComponent } from './Configuration/attendanceconfig/attendanceconfig.component';
import { AttendanceconfigdashComponent } from './Configuration/attendanceconfigdash/attendanceconfigdash.component';
import { LeaveConfigurationComponent } from './Configuration/leave-configuration/leave-configuration.component';
import { LeaveConfigurationdashComponent } from './Configuration/leave-configurationdash/leave-configurationdash.component';
import { LoadattedanceComponent } from './Configuration/loadattedance/loadattedance.component';
import { LoanConfigurationDashComponent } from './Configuration/loan-configuration-dash/loan-configuration-dash.component';
import { LoanConfigurationMasterComponent } from './Configuration/loan-configuration-master/loan-configuration-master.component';
import { LookandfeeldashComponent } from './Configuration/lookandfeeldash/lookandfeeldash.component';
import { OverTimeConfigurationComponent } from './Configuration/over-time-configuration/over-time-configuration.component';
import { RetirementConfigurationComponent } from './Configuration/retirement-configuration/retirement-configuration.component';
import { AddstaffsalaryComponent } from './Employee/addstaffsalary/addstaffsalary.component';
import { ATDRequestsDashComponent } from './Employee/atdrequests-dash/atdrequests-dash.component';
import { ATDRequestsComponent } from './Employee/atdrequests/atdrequests.component';
import { BenefirsenrollmetdashComponent } from './Employee/benefirsenrollmetdash/benefirsenrollmetdash.component';
import { ContradictionComponent } from './Employee/contradiction/contradiction.component';
import { ContradictiondashComponent } from './Employee/contradictiondash/contradictiondash.component';
import { ExitformalityformComponent } from './Employee/exitformalityform/exitformalityform.component';
import { RetirementListComponent } from './Employee/retirement-list/retirement-list.component';
import { StaffsalarydashComponent } from './Employee/staffsalarydash/staffsalarydash.component';
import { GenerateCsvfilesComponent } from './generate-csvfiles/generate-csvfiles.component';
import { HRComponent } from './hr.component';
import { HRDashboardComponent } from './hrdashboard/hrdashboard.component';
import { HrleavereuestComponent } from './hrleavereuest/hrleavereuest.component';
import { InactivestaffDetailsComponent } from './inactivestaff-details/inactivestaff-details.component';
import { LeaveUploadComponent } from './leave-upload/leave-upload.component';
import { LicenceDetailsComponent } from './licence-details/licence-details.component';
import { EmployeebenfitsmasteraddComponent } from './Masters/employeebenfitsmasteradd/employeebenfitsmasteradd.component';
import { EmployeebenfitsmasterdashComponent } from './Masters/employeebenfitsmasterdash/employeebenfitsmasterdash.component';
import { GrivelnecemasterComponent } from './Masters/grivelnecemaster/grivelnecemaster.component';
import { GrivelnecemasterdashComponent } from './Masters/grivelnecemasterdash/grivelnecemasterdash.component';
import { LeaveTypeDashboardComponent } from './Masters/leave-type-dashboard/leave-type-dashboard.component';
import { LeaveTypeFormComponent } from './Masters/leave-type-form/leave-type-form.component';
import { LevelTypeDashComponent } from './Masters/level-type-dash/level-type-dash.component';
import { LevelTypeFormComponent } from './Masters/level-type-form/level-type-form.component';
import { LoanMasterDashComponent } from './Masters/loan-master-dash/loan-master-dash.component';
import { LoanMasterComponent } from './Masters/loan-master/loan-master.component';
import { RolebenefitsmappingComponent } from './Masters/rolebenefitsmapping/rolebenefitsmapping.component';
import { RolebenefitsmappingdashComponent } from './Masters/rolebenefitsmappingdash/rolebenefitsmappingdash.component';
import { StaffBulkUploadExceptionsFormComponent } from './Masters/staff-bulk-upload-exceptions-form/staff-bulk-upload-exceptions-form.component';
import { StaffBulkUploadExceptionsComponent } from './Masters/staff-bulk-upload-exceptions/staff-bulk-upload-exceptions.component';
import { TransportationTypeDashComponent } from './Masters/transportation-type-dash/transportation-type-dash.component';
import { TransportationTypeFormComponent } from './Masters/transportation-type-form/transportation-type-form.component';
import { MyTeamLoansComponent } from './my-team-loans/my-team-loans.component';
import { PayrollTrigggerComponent } from './payroll-triggger/payroll-triggger.component';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { AcceptedTicketsComponent } from './SupportTicketsForHR/accepted-tickets/accepted-tickets.component';
import { ClosedTicketsComponent } from './SupportTicketsForHR/closed-tickets/closed-tickets.component';
import { RejectedTicketsComponent } from './SupportTicketsForHR/rejected-tickets/rejected-tickets.component';
import { TransferemployeeComponent } from './transferemployee/transferemployee.component';
import { GeneratePreliminaryReportComponent } from './generate-preliminary-report/generate-preliminary-report.component';

const routes: Routes = [
  { path: '', component: HRComponent },

  { path: 'GeneratePreliminaryReport', component: GeneratePreliminaryReportComponent ,canActivate: [AuthGuard] },
  { path: 'Staffdashboard', component: StaffdashboardComponent ,canActivate: [AuthGuard] },
  { path: 'AddressDetailsWizard', component: AddressDetailsWizardComponent  ,canActivate: [AuthGuard]},
  { path: 'AddressDetailsWizard/:id', component: AddressDetailsWizardComponent  ,canActivate: [AuthGuard]},
  { path: 'GenerateCsvfiles', component: GenerateCsvfilesComponent  ,canActivate: [AuthGuard]},
  { path: 'Hrleavereuest', component: HrleavereuestComponent  ,canActivate: [AuthGuard]},
  { path: 'MyTeamLoans', component: MyTeamLoansComponent  ,canActivate: [AuthGuard]},

  { path: 'ATDRequestsDash', component: ATDRequestsDashComponent  ,canActivate: [AuthGuard]},
  { path: 'RetirementList', component: RetirementListComponent  ,canActivate: [AuthGuard]},
  { path: 'Contradictiondash', component: ContradictiondashComponent  ,canActivate: [AuthGuard]},
  { path: 'Benefirsenrollmetdash', component: BenefirsenrollmetdashComponent  ,canActivate: [AuthGuard]},
  { path: 'Staffsalarydash', component: StaffsalarydashComponent  ,canActivate: [AuthGuard]},
  { path: 'Addstaffsalary', component: AddstaffsalaryComponent  ,canActivate: [AuthGuard]},
  { path: 'Addstaffsalary/:id', component: AddstaffsalaryComponent  ,canActivate: [AuthGuard]},
  { path: 'Contradiction', component: ContradictionComponent },
  { path: 'Exitformalityform', component: ExitformalityformComponent  ,canActivate: [AuthGuard]},
  { path: 'ATDRequests', component: ATDRequestsComponent  ,canActivate: [AuthGuard]},


  { path: 'LeaveTypeDashboard', component: LeaveTypeDashboardComponent  ,canActivate: [AuthGuard]},
  { path: 'LeaveTypeForm', component: LeaveTypeFormComponent  ,canActivate: [AuthGuard]},
  { path: 'LeaveTypeForm/:id', component: LeaveTypeFormComponent  ,canActivate: [AuthGuard]},
  { path: 'LoanMasterDash', component: LoanMasterDashComponent  ,canActivate: [AuthGuard]},
  { path: 'LoanMaster', component: LoanMasterComponent  ,canActivate: [AuthGuard]},
  { path: 'LoanMaster/:id', component: LoanMasterComponent  ,canActivate: [AuthGuard]},
  { path: 'TransportationTypeDash', component: TransportationTypeDashComponent  ,canActivate: [AuthGuard]},
  { path: 'TransportationTypeForm', component: TransportationTypeFormComponent  ,canActivate: [AuthGuard]},
  { path: 'TransportationTypeForm/:id', component: TransportationTypeFormComponent  ,canActivate: [AuthGuard]},
  { path: 'LevelTypeDash', component: LevelTypeDashComponent  ,canActivate: [AuthGuard]},
  { path: 'LevelTypeForm', component: LevelTypeFormComponent  ,canActivate: [AuthGuard]},
  { path: 'LevelTypeForm/:id', component: LevelTypeFormComponent  ,canActivate: [AuthGuard]},
  { path: 'Employeebenfitsmasterdash', component: EmployeebenfitsmasterdashComponent  ,canActivate: [AuthGuard]},
  { path: 'Employeebenfitsmasteradd', component: EmployeebenfitsmasteraddComponent  ,canActivate: [AuthGuard]},
  { path: 'Employeebenfitsmasteradd/:id', component: EmployeebenfitsmasteraddComponent  ,canActivate: [AuthGuard]},
  { path: 'Rolebenefitsmappingdash', component: RolebenefitsmappingdashComponent  ,canActivate: [AuthGuard]},
  { path: 'Rolebenefitsmappingdash', component: RolebenefitsmappingdashComponent  ,canActivate: [AuthGuard]},
  { path: 'Rolebenefitsmappingdash/:id', component: RolebenefitsmappingdashComponent  ,canActivate: [AuthGuard]},
  { path: 'Grivelnecemasterdash', component: GrivelnecemasterdashComponent  ,canActivate: [AuthGuard]},
  { path: 'Grivelnecemaster', component: GrivelnecemasterComponent  ,canActivate: [AuthGuard]},
  { path: 'Grivelnecemaster/:id', component: GrivelnecemasterComponent  ,canActivate: [AuthGuard]},


  { path: 'Lookandfeeldash', component: LookandfeeldashComponent  ,canActivate: [AuthGuard]},
  { path: 'Addlookandfeel', component: AddlookandfeelComponent  ,canActivate: [AuthGuard]},
  { path: 'Addlookandfeel/:id', component: AddlookandfeelComponent  ,canActivate: [AuthGuard]},
  { path: 'LeaveConfigurationdash', component: LeaveConfigurationdashComponent  ,canActivate: [AuthGuard]},
  { path: 'LeaveConfiguration', component: LeaveConfigurationComponent  ,canActivate: [AuthGuard]},
  { path: 'LeaveConfiguration/:id', component: LeaveConfigurationComponent  ,canActivate: [AuthGuard]},
  { path: 'OverTimeConfiguration', component: OverTimeConfigurationComponent  ,canActivate: [AuthGuard]},
  { path: 'RetirementConfiguration', component: RetirementConfigurationComponent  ,canActivate: [AuthGuard]},
  { path: 'LoanConfigurationDash', component: LoanConfigurationDashComponent  ,canActivate: [AuthGuard]},
  { path: 'LoanConfigurationDash/:id', component: LoanConfigurationDashComponent  ,canActivate: [AuthGuard]},
  { path: 'LoanConfigurationMaster', component: LoanConfigurationMasterComponent  ,canActivate: [AuthGuard]},
  { path: 'LoanConfigurationMaster/:id', component: LoanConfigurationMasterComponent  ,canActivate: [AuthGuard]},
  { path: 'Loadattedance', component: LoadattedanceComponent  ,canActivate: [AuthGuard]},
  { path: 'Rolebenefitsmapping', component: RolebenefitsmappingComponent  ,canActivate: [AuthGuard]},
  { path: 'Transferemployee', component: TransferemployeeComponent  ,canActivate: [AuthGuard]},
  { path: 'HRDashboard', component: HRDashboardComponent  ,canActivate: [AuthGuard]},
  { path: 'Attendanceconfig/:id', component: AttendanceconfigComponent  ,canActivate: [AuthGuard]},
  { path: 'Attendanceconfig', component: AttendanceconfigComponent  ,canActivate: [AuthGuard]},
  { path: 'Attendanceconfigdash', component: AttendanceconfigdashComponent  ,canActivate: [AuthGuard]},

  { path: 'AcceptedTickets', component: AcceptedTicketsComponent  ,canActivate: [AuthGuard]},
  { path: 'RejectedTickets', component: RejectedTicketsComponent  ,canActivate: [AuthGuard]},
  { path: 'ClosedTickets', component: ClosedTicketsComponent  ,canActivate: [AuthGuard]},
  {path: 'LeaveUpload', component: LeaveUploadComponent  ,canActivate: [AuthGuard]},
  {path: 'payslipview', component: PayslipviewComponent  ,canActivate: [AuthGuard]},
  {path:'LicenceDetails',component:LicenceDetailsComponent},
  {path:'InactivestaffDetails',component:InactivestaffDetailsComponent},
  {path:'PayrollTriggger',component:PayrollTrigggerComponent},
  { path: 'StaffBulkUploadExceptions', component: StaffBulkUploadExceptionsComponent  ,canActivate: [AuthGuard]},
  { path: 'StaffBulkUploadExceptionsForm', component: StaffBulkUploadExceptionsFormComponent  ,canActivate: [AuthGuard]},
  { path: 'StaffBulkUploadExceptionsForm/:id', component: StaffBulkUploadExceptionsFormComponent  ,canActivate: [AuthGuard]},
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRRoutingModule { }
