import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentMappingDashboardComponent } from './component-mapping-dashboard/component-mapping-dashboard.component';
import { ComponentMappingFormComponent } from './component-mapping-form/component-mapping-form.component';
import { ComponentMasterFormComponent } from './component-master-form/component-master-form.component';
import { ComponentMasterComponent } from './component-master/component-master.component';
import { MyTeamOverTimeDetailsComponent } from './my-team-over-time-details/my-team-over-time-details.component';
import { PayrollComponentBulkUploadComponent } from './payroll-component-bulk-upload/payroll-component-bulk-upload.component';
import { PayrollProcessorComponent } from './payroll-processor.component';
import { StaffLeavesUploadComponent } from './staff-leaves-upload/staff-leaves-upload.component';
const routes: Routes = [
  { path: '', component: PayrollProcessorComponent },
  { path: 'StaffLeavesUpload', component: StaffLeavesUploadComponent },
  { path: 'PayrollComponentBulkUpload', component: PayrollComponentBulkUploadComponent },
  { path: 'MyTeamOverTimeDetails', component: MyTeamOverTimeDetailsComponent },
  { path: 'ComponentMappingDashboard', component: ComponentMappingDashboardComponent },
  { path: 'ComponentMappingForm', component: ComponentMappingFormComponent },
  { path: 'ComponentMappingForm/:id', component: ComponentMappingFormComponent },
  { path: 'ComponentMaster', component: ComponentMasterComponent },
  { path: 'ComponentMasterForm', component: ComponentMasterFormComponent },
  { path: 'ComponentMasterForm/:id', component: ComponentMasterFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollProcessorRoutingModule { }
