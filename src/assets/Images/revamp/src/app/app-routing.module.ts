import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { AuthGuard } from './Pages/Services/services/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Admin', loadChildren: () => import('./Modules/admin/admin.module').then(m => m.AdminModule) ,canActivate: [AuthGuard]},
  { path: 'Employee', loadChildren: () => import('./Modules/employee/employee.module').then(m => m.EmployeeModule) ,canActivate: [AuthGuard]},
  { path: 'Manager', loadChildren: () => import('./Modules/manager/manager.module').then(m => m.ManagerModule) ,canActivate: [AuthGuard]},
  { path: 'HR', loadChildren: () => import('./Modules/hr/hr.module').then(m => m.HRModule) ,canActivate: [AuthGuard]},
  { path: 'Shared', loadChildren: () => import('./Modules/shared/shared.module').then(m=>m.SharedModule),canActivate: [AuthGuard]},
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
