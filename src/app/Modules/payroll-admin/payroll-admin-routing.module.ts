import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PayrollAdminComponent } from './payroll-admin.component';
import { ValidationMasterDashboardComponent } from './validation-master-dashboard/validation-master-dashboard.component';
import { ValidationMasterFormComponent } from './validation-master-form/validation-master-form.component';
import { ValidationpasswordDashboardComponent } from './validationpassword-dashboard/validationpassword-dashboard.component';
import { ValidationpasswordFormComponent } from './validationpassword-form/validationpassword-form.component';

const routes: Routes = [
  { path: '', component: PayrollAdminComponent },
  {path:'ValidationpasswordDashboard',component:ValidationpasswordDashboardComponent},
  {path:'ValidationpasswordForm',component:ValidationpasswordFormComponent},
  {path:'ValidationpasswordForm/:id',component:ValidationpasswordFormComponent},
  {path:'AdminDashboard',component:AdminDashboardComponent},
  {path:'ValidationMasterDashboard',component:ValidationMasterDashboardComponent},
  {path:'ValidationMasterForm',component:ValidationMasterFormComponent},
  {path:'ValidationMasterForm/:id',component:ValidationMasterFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollAdminRoutingModule { }
