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
import { StaffLeavesUploadComponent } from './staff-leaves-upload/staff-leaves-upload.component';
import { PayperiodSettingsDashComponent } from './payperiod-settings-dash/payperiod-settings-dash.component';
import { PayperiodSettingsFormComponent } from './payperiod-settings-form/payperiod-settings-form.component';
import { MyTeamAttendenceComponent } from './my-team-attendence/my-team-attendence.component';
import { RunLwopValidationComponent } from './run-lwop-validation/run-lwop-validation.component';
import { LwopValidationDetailsComponent } from './lwop-validation-details/lwop-validation-details.component';
import { UploadGeneratedLwopComponent } from './upload-generated-lwop/upload-generated-lwop.component';
import { BonusValidationComponent } from './bonus-validation/bonus-validation.component';
import { BonusValidationDetailsComponent } from './bonus-validation-details/bonus-validation-details.component';
import { UploadBonusValuesComponent } from './upload-bonus-values/upload-bonus-values.component';
import { UploadAllowanceComponent } from './upload-allowance/upload-allowance.component';
import { UploadPayPeriodAllowanceComponent } from './upload-pay-period-allowance/upload-pay-period-allowance.component';
import { FMAValidationComponent } from './fmavalidation/fmavalidation.component';
import { RunAllowanceValidationComponent } from './run-allowance-validation/run-allowance-validation.component';
import { ValidatedAllowanceDetailsComponent } from './validated-allowance-details/validated-allowance-details.component';
import { RunFMAValidationComponent } from './run-fmavalidation/run-fmavalidation.component';
import { ValidatedFMADetailsComponent } from './validated-fmadetails/validated-fmadetails.component';
import { UploadBasicPayValuesComponent } from './upload-basic-pay-values/upload-basic-pay-values.component';
import { RunBasicPayValidationComponent } from './run-basic-pay-validation/run-basic-pay-validation.component';
import { ValidatedBasicPayValuesComponent } from './validated-basic-pay-values/validated-basic-pay-values.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { ValidatedRetroBasicPayAdjustmentsComponent } from './validated-retro-basic-pay-adjustments/validated-retro-basic-pay-adjustments.component';
import { UploadGeneratedEncashmentsComponent } from './upload-generated-encashments/upload-generated-encashments.component';
import { RunHolidayEncashmentValidationComponent } from './run-holiday-encashment-validation/run-holiday-encashment-validation.component';
import { ValidatedHolidayEnCashmentsComponent } from './validated-holiday-en-cashments/validated-holiday-en-cashments.component';




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
    ExecutedInitialPayrollRunsComponent,
    StaffLeavesUploadComponent,
    PayperiodSettingsDashComponent,
    PayperiodSettingsFormComponent,
    MyTeamAttendenceComponent,
    RunLwopValidationComponent,
    LwopValidationDetailsComponent,
    UploadGeneratedLwopComponent,

    BonusValidationComponent,
    BonusValidationDetailsComponent,
    UploadBonusValuesComponent,
    UploadAllowanceComponent,
    UploadPayPeriodAllowanceComponent,
    FMAValidationComponent,
    RunAllowanceValidationComponent,
    ValidatedAllowanceDetailsComponent,
    RunFMAValidationComponent,
    ValidatedFMADetailsComponent,
    UploadBasicPayValuesComponent,
    RunBasicPayValidationComponent,
    ValidatedBasicPayValuesComponent,
    HolidaysComponent,
    ValidatedRetroBasicPayAdjustmentsComponent,
    UploadGeneratedEncashmentsComponent,
    RunHolidayEncashmentValidationComponent,
    ValidatedHolidayEnCashmentsComponent
  ],
  imports: [
    PayrollProcessorRoutingModule,
    SharedModule
  ]
})
export class PayrollProcessorModule { }
