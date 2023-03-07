import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StaffDetailsWizardComponent } from './staff-details-wizard/staff-details-wizard.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'StaffDetailsWizard', component: StaffDetailsWizardComponent },
  { path: 'StaffDetailsWizard/:id', component: StaffDetailsWizardComponent },
  { path: 'StaffDashboard', component: StaffDashboardComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
