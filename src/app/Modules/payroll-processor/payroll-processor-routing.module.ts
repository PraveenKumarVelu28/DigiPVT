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
import { RunBasicPayValidationComponent } from './run-basic-pay-validation/run-basic-pay-validation.component';
import { UploadBasicPayValuesComponent } from './upload-basic-pay-values/upload-basic-pay-values.component';
import { ValidatedBasicPayValuesComponent } from './validated-basic-pay-values/validated-basic-pay-values.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { ValidatedRetroBasicPayAdjustmentsComponent } from './validated-retro-basic-pay-adjustments/validated-retro-basic-pay-adjustments.component';
import { UploadGeneratedEncashmentsComponent } from './upload-generated-encashments/upload-generated-encashments.component';
import { ValidatedHolidayEnCashmentsComponent } from './validated-holiday-en-cashments/validated-holiday-en-cashments.component';
import { RunHolidayEncashmentValidationComponent } from './run-holiday-encashment-validation/run-holiday-encashment-validation.component';
import { UploadRetroValuesOTComponent } from './upload-retro-values-ot/upload-retro-values-ot.component';
import { UploadColaValuesComponent } from './upload-cola-values/upload-cola-values.component';
import { RunColAValidationComponent } from './run-col-avalidation/run-col-avalidation.component';
import { ValidatedColaValuesComponent } from './validated-cola-values/validated-cola-values.component';
import { UploadClothingAllowancesComponent } from './upload-clothing-allowances/upload-clothing-allowances.component';
import { ValidatedClothingAllowancesComponent } from './validated-clothing-allowances/validated-clothing-allowances.component';
import { RetroValidatedClothingAllowancesComponent } from './retro-validated-clothing-allowances/retro-validated-clothing-allowances.component';
import { RunClothingAllowanceComponent } from './run-clothing-allowance/run-clothing-allowance.component';
import { UploadPayrollSummaryReportComponent } from './upload-payroll-summary-report/upload-payroll-summary-report.component';
import { RunPayrollSummaryValidationComponent } from './run-payroll-summary-validation/run-payroll-summary-validation.component';
import { ValidatedPayrollSummaryReportComponent } from './validated-payroll-summary-report/validated-payroll-summary-report.component';
import { RunLoanProceedsValidationComponent } from './run-loan-proceeds-validation/run-loan-proceeds-validation.component';
import { ValidatedLoanProceedsComponent } from './validated-loan-proceeds/validated-loan-proceeds.component';
import { UploadRegularCollegeSemValidationComponent } from './upload-regular-college-sem-validation/upload-regular-college-sem-validation.component';
import { UploadSummerCollegeSemValidationComponent } from './upload-summer-college-sem-validation/upload-summer-college-sem-validation.component';
import { PayrollYTDUploadComponent } from './payroll-ytdupload/payroll-ytdupload.component';
import { RunTaxValidationComponent } from './run-tax-validation/run-tax-validation.component'; 
import { ValidatedTaxValuesComponent } from './validated-tax-values/validated-tax-values.component';
import { RunSubjectLoadValidationComponent } from './run-subject-load-validation/run-subject-load-validation.component';
import { ValidatedSubjectLoadDetailsComponent } from './validated-subject-load-details/validated-subject-load-details.component';
import { UploadPhilHealthSummaryReportComponent } from './upload-phil-health-summary-report/upload-phil-health-summary-report.component';
import { RunSummerSemValidationComponent } from './run-summer-sem-validation/run-summer-sem-validation.component';
import { ValidatedSummerSemSubjectLoadsComponent } from './validated-summer-sem-subject-loads/validated-summer-sem-subject-loads.component';
const routes: Routes = [
  { path: '', component: PayrollProcessorComponent },
  { path: 'RunSummerSemValidation', component: RunSummerSemValidationComponent },

  { path: 'ValidatedSummerSemSubjectLoads', component: ValidatedSummerSemSubjectLoadsComponent },


  { path: 'UploadSummerCollegeSemValidation', component: UploadSummerCollegeSemValidationComponent },

  { path: 'RunSubjectLoadValidation', component: RunSubjectLoadValidationComponent },
  { path: 'ValidatedSubjectLoadDetails', component: ValidatedSubjectLoadDetailsComponent },


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
  { path: 'LwopValidationDetails', component: LwopValidationDetailsComponent },
  {path:'BonusValidation',component:BonusValidationComponent},
  { path: 'UploadGeneratedLwop', component: UploadGeneratedLwopComponent },

  { path: 'BonusValidation', component: BonusValidationComponent },
  { path: 'BonusValidationDetails', component: BonusValidationDetailsComponent },
  { path: 'UploadBonusValues', component: UploadBonusValuesComponent },

  { path: 'UploadAllowance', component: UploadAllowanceComponent },
  { path: 'UploadPayPeriodAllowance', component: UploadPayPeriodAllowanceComponent},
  { path: 'FMAValidation', component: FMAValidationComponent},

  { path: 'RunAllowanceValidation', component: RunAllowanceValidationComponent},
  { path: 'ValidatedAllowanceDetails', component: ValidatedAllowanceDetailsComponent},

  { path: 'RunFMAValidation', component: RunFMAValidationComponent},
  { path: 'ValidatedFMADetails', component: ValidatedFMADetailsComponent},
  { path: 'RunBasicPayValidation', component: RunBasicPayValidationComponent},

  { path: 'UploadBasicPayValues', component: UploadBasicPayValuesComponent},
  { path: 'ValidatedBasicPayValues', component: ValidatedBasicPayValuesComponent},
  { path: 'Holidays', component: HolidaysComponent},
  { path: 'ValidatedRetroBasicPayAdjustments', component: ValidatedRetroBasicPayAdjustmentsComponent},

  { path: 'UploadGeneratedEncashments', component: UploadGeneratedEncashmentsComponent},
  { path: 'ValidatedClothingAllowances', component: ValidatedClothingAllowancesComponent},
  { path: 'RunHolidayEncashmentValidation', component: RunHolidayEncashmentValidationComponent},



  { path: 'UploadRetroValuesOT', component: UploadRetroValuesOTComponent},
    { path: 'UploadColaValues', component: UploadColaValuesComponent},
    
  { path: 'RunColAValidation', component: RunColAValidationComponent},
  { path: 'ValidatedColaValues', component: ValidatedColaValuesComponent},
  { path: 'UploadClothingAllowances', component: UploadClothingAllowancesComponent},
  { path: 'ValidatedClothingAllowances', component: ValidatedClothingAllowancesComponent},
  { path: 'RetroValidatedClothingAllowances', component: RetroValidatedClothingAllowancesComponent},
  { path: 'RunClothingAllowance', component: RunClothingAllowanceComponent},

  { path: 'UploadPayrollSummaryReport', component: UploadPayrollSummaryReportComponent},
  { path: 'RunPayrollSummaryValidation', component: RunPayrollSummaryValidationComponent},
  { path: 'ValidatedPayrollSummaryReport', component: ValidatedPayrollSummaryReportComponent},
  { path: 'RunLoanProceedsValidation', component: RunLoanProceedsValidationComponent},
  { path: 'ValidatedLoanProceeds', component: ValidatedLoanProceedsComponent},
  { path: 'UploadRegularCollegeSemValidation', component: UploadRegularCollegeSemValidationComponent},
  { path: 'UploadSummerCollegeSemValidation', component: UploadSummerCollegeSemValidationComponent},


  { path: 'PayrollYTDUpload', component: PayrollYTDUploadComponent},
  { path: 'RunTaxValidation', component: RunTaxValidationComponent},
  { path: 'ValidatedTaxValues', component: ValidatedTaxValuesComponent},



  { path: 'UploadPhilHealthSummaryReport', component: UploadPhilHealthSummaryReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollProcessorRoutingModule { }
