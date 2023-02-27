import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PayrollAdminComponent } from './payroll-admin.component';
import { ValidationpasswordDashboardComponent } from './validationpassword-dashboard/validationpassword-dashboard.component';
import { ValidationpasswordFormComponent } from './validationpassword-form/validationpassword-form.component';

const routes: Routes = [
  { path: '', component: PayrollAdminComponent },
  {path:'ValidationpasswordDashboard',component:ValidationpasswordDashboardComponent},
  {path:'ValidationpasswordForm',component:ValidationpasswordFormComponent},
  {path:'ValidationpasswordForm/:id',component:ValidationpasswordFormComponent},
  {path:'AdminDashboard',component:AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollAdminRoutingModule { }
