import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollProcessorRoutingModule } from './payroll-processor-routing.module';
import { PayrollProcessorComponent } from './payroll-processor.component';
import { ComponentMasterComponent } from './component-master/component-master.component';
import { ComponentMasterFormComponent } from './component-master-form/component-master-form.component';
import { ComponentMappingDashboardComponent } from './component-mapping-dashboard/component-mapping-dashboard.component';
import { ComponentMappingFormComponent } from './component-mapping-form/component-mapping-form.component';
import { PayrollComponentBulkUploadComponent } from './payroll-component-bulk-upload/payroll-component-bulk-upload.component';
import { MyTeamOverTimeDetailsComponent } from './my-team-over-time-details/my-team-over-time-details.component';
import { SharedModule } from '../shared/shared.module';
import { InitialPayrollDashComponent } from './initial-payroll-dash/initial-payroll-dash.component';
import { ExecutedInitialPayrollRunsComponent } from './executed-initial-payroll-runs/executed-initial-payroll-runs.component';


@NgModule({
  declarations: [
    PayrollProcessorComponent,
    ComponentMasterComponent,
    ComponentMasterFormComponent,
    ComponentMappingDashboardComponent,
    ComponentMappingFormComponent,
    PayrollComponentBulkUploadComponent,
    MyTeamOverTimeDetailsComponent,
    InitialPayrollDashComponent,
    ExecutedInitialPayrollRunsComponent
  ],
  imports: [
    CommonModule,
    PayrollProcessorRoutingModule,
    SharedModule
  ]
})
export class PayrollProcessorModule { }
