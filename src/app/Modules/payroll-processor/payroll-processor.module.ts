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
import { UploadRetroValuesOTComponent } from './upload-retro-values-ot/upload-retro-values-ot.component';
import { UploadColaValuesComponent } from './upload-cola-values/upload-cola-values.component';
import { ValidatedColaValuesComponent } from './validated-cola-values/validated-cola-values.component';
import { RunColAValidationComponent } from './run-col-avalidation/run-col-avalidation.component';
import { UploadClothingAllowancesComponent } from './upload-clothing-allowances/upload-clothing-allowances.component';
import { RunClothingAllowanceComponent } from './run-clothing-allowance/run-clothing-allowance.component';
import { ValidatedClothingAllowancesComponent } from './validated-clothing-allowances/validated-clothing-allowances.component';
import { RetroValidatedClothingAllowancesComponent } from './retro-validated-clothing-allowances/retro-validated-clothing-allowances.component';
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
import { UploadPhilHealthSummaryReportComponent } from './upload-phil-health-summary-report/upload-phil-health-summary-report.component';
import { RunPhilhealthValidationComponent } from './run-philhealth-validation/run-philhealth-validation.component';
import { ValidatedPhilhealthDetailsComponent } from './validated-philhealth-details/validated-philhealth-details.component';
import { RunSubjectLoadValidationComponent } from './run-subject-load-validation/run-subject-load-validation.component';
import { ValidatedSubjectLoadDetailsComponent } from './validated-subject-load-details/validated-subject-load-details.component';
import { ValidatedSummerSemSubjectLoadsComponent } from './validated-summer-sem-subject-loads/validated-summer-sem-subject-loads.component';
import { RunSummerSemValidationComponent } from './run-summer-sem-validation/run-summer-sem-validation.component';
import { UploadPayrollInputsComponent } from './upload-payroll-inputs/upload-payroll-inputs.component';
import { UploadTandLValuesComponent } from './upload-tand-lvalues/upload-tand-lvalues.component';
import { RunTandLValidationComponent } from './run-tand-lvalidation/run-tand-lvalidation.component';
import { ValidatedTandLDetailsComponent } from './validated-tand-ldetails/validated-tand-ldetails.component';
import { ValidatedPayrollSummaryReportForUNCComponent } from './validated-payroll-summary-report-for-unc/validated-payroll-summary-report-for-unc.component';
import { UploadPayrollSummaryReprtValuesComponent } from './upload-payroll-summary-reprt-values/upload-payroll-summary-reprt-values.component';
import { UploadMasterListComponent } from './upload-master-list/upload-master-list.component';
import { RunNewHireAndRetireesValidationComponent } from './run-new-hire-and-retirees-validation/run-new-hire-and-retirees-validation.component';
import { ValidatedNewHiresDetailsComponent } from './validated-new-hires-details/validated-new-hires-details.component';
import { UploadAttendanceDaysCountComponent } from './upload-attendance-days-count/upload-attendance-days-count.component';
import { ValidatedBlanKStatsComponent } from './validated-blan-kstats/validated-blan-kstats.component';
import { RunBlankStatsValidationComponent } from './run-blank-stats-validation/run-blank-stats-validation.component';
import { UploadHeadCountValuesComponent } from './upload-head-count-values/upload-head-count-values.component';
import { ValidatedHeadCountDetailsComponent } from './validated-head-count-details/validated-head-count-details.component';
import { RunHeadCountValidationComponent } from './run-head-count-validation/run-head-count-validation.component';
import { TimeandAttendanceEligibilityMasterComponent } from './timeand-attendance-eligibility-master/timeand-attendance-eligibility-master.component';
import { EmployeeBatchMasterComponent } from './employee-batch-master/employee-batch-master.component';
import { ValidatedStatutoryDeductionsComponent } from './validated-statutory-deductions/validated-statutory-deductions.component';
import { UploadLoanReportComponent } from './upload-loan-report/upload-loan-report.component';
import { UploadLOAandSuspendedStaffComponent } from './upload-loaand-suspended-staff/upload-loaand-suspended-staff.component';
import { ValidatedPayrollInputsComponent } from './validated-payroll-inputs/validated-payroll-inputs.component';
import { RunPayrollInputValidationComponent } from './run-payroll-input-validation/run-payroll-input-validation.component';
import { UploadOvertimeReportComponent } from './upload-overtime-report/upload-overtime-report.component';
import { RunOvertimeReportValidationComponent } from './run-overtime-report-validation/run-overtime-report-validation.component';
import { ValidatedOvertimeReportDetailsComponent } from './validated-overtime-report-details/validated-overtime-report-details.component';
import { ValidatedAllowanceDetailsForMWCComponent } from './validated-allowance-details-for-mwc/validated-allowance-details-for-mwc.component';




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
    ValidatedHolidayEnCashmentsComponent,
    UploadRetroValuesOTComponent,
    UploadColaValuesComponent,
    ValidatedColaValuesComponent,
    RunColAValidationComponent,
    UploadClothingAllowancesComponent,
    RunClothingAllowanceComponent,
    ValidatedClothingAllowancesComponent,
    RetroValidatedClothingAllowancesComponent,
    UploadPayrollSummaryReportComponent,
    RunPayrollSummaryValidationComponent,
    ValidatedPayrollSummaryReportComponent,
    RunLoanProceedsValidationComponent,
    ValidatedLoanProceedsComponent,
    UploadRegularCollegeSemValidationComponent,
    UploadSummerCollegeSemValidationComponent,
    PayrollYTDUploadComponent,
    RunTaxValidationComponent,
    ValidatedTaxValuesComponent,
    UploadPhilHealthSummaryReportComponent,
    RunPhilhealthValidationComponent,
    ValidatedPhilhealthDetailsComponent,
    RunSubjectLoadValidationComponent,
    ValidatedSubjectLoadDetailsComponent,
    ValidatedSummerSemSubjectLoadsComponent,
    RunSummerSemValidationComponent,
    UploadPayrollInputsComponent,
    UploadTandLValuesComponent,
    RunTandLValidationComponent,
    ValidatedTandLDetailsComponent,
    ValidatedPayrollSummaryReportForUNCComponent,
    UploadPayrollSummaryReprtValuesComponent,
    UploadMasterListComponent,
    RunNewHireAndRetireesValidationComponent,
    ValidatedNewHiresDetailsComponent,
    UploadAttendanceDaysCountComponent,
    ValidatedBlanKStatsComponent,
    RunBlankStatsValidationComponent,
    UploadHeadCountValuesComponent,
    ValidatedHeadCountDetailsComponent,
    RunHeadCountValidationComponent,
    TimeandAttendanceEligibilityMasterComponent,
    EmployeeBatchMasterComponent,
    ValidatedStatutoryDeductionsComponent,
    UploadLoanReportComponent,
    UploadLOAandSuspendedStaffComponent,
    ValidatedPayrollInputsComponent,
    RunPayrollInputValidationComponent,
    UploadOvertimeReportComponent,
    RunOvertimeReportValidationComponent,
    ValidatedOvertimeReportDetailsComponent,
    ValidatedAllowanceDetailsForMWCComponent
  ],
  imports: [
    PayrollProcessorRoutingModule,
    SharedModule
  ]
})
export class PayrollProcessorModule { }
