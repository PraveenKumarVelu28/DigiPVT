import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentMappingDashboardComponent } from './component-mapping-dashboard/component-mapping-dashboard.component';
import { ComponentMappingFormComponent } from './component-mapping-form/component-mapping-form.component';
import { ComponentMasterFormComponent } from './component-master-form/component-master-form.component';
import { ComponentMasterComponent } from './component-master/component-master.component';
import { ExecutedInitialPayrollRunsComponent } from './executed-initial-payroll-runs/executed-initial-payroll-runs.component';
import { InitialPayrollDashComponent } from './initial-payroll-dash/initial-payroll-dash.component';
import { MyTeamAttendenceComponent } from './my-team-attendence/my-team-attendence.component';
import { MyTeamOverTimeDetailsComponent } from './my-team-over-time-details/my-team-over-time-details.component';
import { PayperiodSettingsDashComponent } from './payperiod-settings-dash/payperiod-settings-dash.component';
import { PayperiodSettingsFormComponent } from './payperiod-settings-form/payperiod-settings-form.component';
import { PayrollComponentBulkUploadComponent } from './payroll-component-bulk-upload/payroll-component-bulk-upload.component';
import { PayrollProcessorComponent } from './payroll-processor.component';
import { StaffLeavesUploadComponent } from './staff-leaves-upload/staff-leaves-upload.component';
import { RunLwopValidationComponent } from './run-lwop-validation/run-lwop-validation.component';
const routes: Routes = [
  { path: '', component: PayrollProcessorComponent },
  { path: 'RunLwopValidation', component: RunLwopValidationComponent },
  { path: 'StaffLeavesUpload', component: StaffLeavesUploadComponent },
  { path: 'PayrollComponentBulkUpload', component: PayrollComponentBulkUploadComponent },
  { path: 'MyTeamOverTimeDetails', component: MyTeamOverTimeDetailsComponent },
  { path: 'ComponentMappingDashboard', component: ComponentMappingDashboardComponent },
  { path: 'ComponentMappingForm', component: ComponentMappingFormComponent },
  { path: 'ComponentMappingForm/:id', component: ComponentMappingFormComponent },
  { path: 'ComponentMaster', component: ComponentMasterComponent },
  { path: 'ComponentMasterForm', component: ComponentMasterFormComponent },
  { path: 'ComponentMasterForm/:id', component: ComponentMasterFormComponent },
  {path:'ExecutedInitialPayrollRuns',component:ExecutedInitialPayrollRunsComponent},
  {path:'InitialPayrollDash',component:InitialPayrollDashComponent},
  { path: 'PayperiodSettingsDash', component: PayperiodSettingsDashComponent },
  { path: 'PayperiodSettingsForm', component: PayperiodSettingsFormComponent },
  { path: 'PayperiodSettingsForm/:id', component: PayperiodSettingsFormComponent },
  { path: 'MyTeamAttendence', component: MyTeamAttendenceComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollProcessorRoutingModule { }
