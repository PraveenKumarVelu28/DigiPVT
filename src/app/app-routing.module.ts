import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: 'PayrollAdmin', loadChildren: () => import('./Modules/payroll-admin/payroll-admin.module').then(m => m.PayrollAdminModule) }, 
  { path: 'PayrollProcessor', loadChildren: () => import('./Modules/payroll-processor/payroll-processor.module').then(m => m.PayrollProcessorModule) },
  { path: 'Shared', loadChildren: () => import('./Modules/shared/shared.module').then(m => m.SharedModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
