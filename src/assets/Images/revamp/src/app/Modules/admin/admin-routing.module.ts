import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from '../shared/help/help.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AdminComponent } from './admin.component';
import { AdmindashbaordComponent } from './admindashbaord/admindashbaord.component';
import { AnnouncementDashboardComponent } from './announcement-dashboard/announcement-dashboard.component';
import { AnnouncementFormComponent } from './announcement-form/announcement-form.component';
import { CompanydashboardComponent } from './companydashboard/companydashboard.component';
import { HolidayDashboardComponent } from './holiday-dashboard/holiday-dashboard.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';
import { AddbarangaymasterComponent } from './Master/addbarangaymaster/addbarangaymaster.component';
import { BarangaymasterComponent } from './Master/barangaymaster/barangaymaster.component';
import { CityMasterDashComponent } from './Master/city-master-dash/city-master-dash.component';
import { CityMasterFormComponent } from './Master/city-master-form/city-master-form.component';
import { CountryMasterDashComponent } from './Master/country-master-dash/country-master-dash.component';
import { CountryMasterFormComponent } from './Master/country-master-form/country-master-form.component';
import { ShiftMasterDashComponent } from './Master/shift-master-dash/shift-master-dash.component';
import { ShiftMasterFormComponent } from './Master/shift-master-form/shift-master-form.component';
import { StateMasterDashComponent } from './Master/state-master-dash/state-master-dash.component';
import { StateMasterFormComponent } from './Master/state-master-form/state-master-form.component';
import { BuildingMasterDashComponent } from './Master/building-master-dash/building-master-dash.component';
import { BuildingMasterComponent } from './Master/building-master/building-master.component';
import { DeniminisaddComponent } from './Master/deniminisadd/deniminisadd.component';
import { DeniminisdashComponent } from './Master/deniminisdash/deniminisdash.component';
import { DepartmentmasteraddComponent } from './Master/departmentmasteradd/departmentmasteradd.component';
import { DepartmentmasterdashComponent } from './Master/departmentmasterdash/departmentmasterdash.component';
import { FloordashComponent } from './Master/floordash/floordash.component';
import { OtratesdashComponent } from './Master/otratesdash/otratesdash.component';
import { OtratesnewComponent } from './Master/otratesnew/otratesnew.component';
import { RoleMasterDashComponent } from './Master/role-master-dash/role-master-dash.component';
import { RoleMasterFormComponent } from './Master/role-master-form/role-master-form.component';
import { SubsidarydashboardComponent } from './Master/subsidarydashboard/subsidarydashboard.component';
import { SubsidaryformComponent } from './Master/subsidaryform/subsidaryform.component';
import { WorkStationTypeDashComponent } from './Master/work-station-type-dash/work-station-type-dash.component';
import { WorkStationTypeFormComponent } from './Master/work-station-type-form/work-station-type-form.component';
import { NotificationComponent } from './notification/notification.component';
import { AuthGuard } from 'src/app/Pages/Services/services/auth.guard';
import { RegionMasterDashComponent } from './Master/region-master-dash/region-master-dash.component';
import { RegionMasterFormComponent } from './Master/region-master-form/region-master-form.component';

const routes: Routes = [

  { path: '', component: AdminComponent },
  { path: 'Admindashbaord', component: AdmindashbaordComponent ,canActivate: [AuthGuard]},
  { path: 'Companydashboard', component: CompanydashboardComponent ,canActivate: [AuthGuard]},
  { path: 'Addcompany', component: AddcompanyComponent ,canActivate: [AuthGuard]},
  { path: 'Addcompany/:id', component: AddcompanyComponent ,canActivate: [AuthGuard]},
  { path: 'HolidayDashboard', component: HolidayDashboardComponent ,canActivate: [AuthGuard]},
  { path: 'HolidayForm', component: HolidayFormComponent ,canActivate: [AuthGuard]},
  { path: 'HolidayForm/:id', component: HolidayFormComponent ,canActivate: [AuthGuard]},
  { path: 'AnnouncementForm', component: AnnouncementFormComponent ,canActivate: [AuthGuard]},
  { path: 'AnnouncementForm/:id', component: AnnouncementFormComponent ,canActivate: [AuthGuard]},
  { path: 'AnnouncementDashboard', component: AnnouncementDashboardComponent ,canActivate: [AuthGuard]},
  { path: 'ShiftMasterForm/:id', component: ShiftMasterFormComponent ,canActivate: [AuthGuard]},
  { path: 'ShiftMasterForm', component: ShiftMasterFormComponent ,canActivate: [AuthGuard]},
  { path: 'Departmentmasteradd', component: DepartmentmasteraddComponent ,canActivate: [AuthGuard]},
  { path: 'ShiftMasterDash', component: ShiftMasterDashComponent ,canActivate: [AuthGuard]},
  { path: 'CountryMasterDash', component: CountryMasterDashComponent ,canActivate: [AuthGuard]},
  { path: 'CountryMasterForm/:id', component: CountryMasterFormComponent ,canActivate: [AuthGuard]},
  { path: 'CountryMasterForm', component: CountryMasterFormComponent ,canActivate: [AuthGuard]},
  { path: 'CityMasterDash', component: CityMasterDashComponent ,canActivate: [AuthGuard]},
  { path: 'CityMasterForm/:id', component: CityMasterFormComponent ,canActivate: [AuthGuard]},
  { path: 'CityMasterForm', component: CityMasterFormComponent ,canActivate: [AuthGuard]},
  // { path: 'BarangayMasterDash', component: BarangaymasterComponent },
  // { path: 'BarangayMasterForm', component: AddbarangaymasterComponent },
  // { path: 'BarangayMasterForm/:id', component: AddbarangaymasterComponent },
  { path: 'StateMasterDash', component: StateMasterDashComponent ,canActivate: [AuthGuard]},

  { path: 'StateMasterForm', component: StateMasterFormComponent ,canActivate: [AuthGuard]},
  { path: 'StateMasterForm/:id', component: StateMasterFormComponent ,canActivate: [AuthGuard]},
  { path: 'Departmentmasteradd', component: DepartmentmasteraddComponent ,canActivate: [AuthGuard]},
  { path: 'Departmentmasteradd/:id', component: DepartmentmasteraddComponent ,canActivate: [AuthGuard]},
  { path: 'Departmentmasterdash', component: DepartmentmasterdashComponent ,canActivate: [AuthGuard]},
  { path: 'RoleMasterDash', component: RoleMasterDashComponent ,canActivate: [AuthGuard]},
  { path: 'RoleMasterForm', component: RoleMasterFormComponent ,canActivate: [AuthGuard]},
  { path: 'RoleMasterForm/:id', component: RoleMasterFormComponent ,canActivate: [AuthGuard]},
  { path: 'Floordash', component: FloordashComponent,canActivate: [AuthGuard]},

  { path: 'Addbarangaymaster/:id', component: AddbarangaymasterComponent ,canActivate: [AuthGuard]},
  { path: 'Addbarangaymaster', component: AddbarangaymasterComponent ,canActivate: [AuthGuard]},
  { path: 'Barangaymaster', component: BarangaymasterComponent ,canActivate: [AuthGuard]},
  
  { path: 'BuildingMasterDash', component: BuildingMasterDashComponent,canActivate: [AuthGuard]},
  { path: 'BuildingMaster', component: BuildingMasterComponent ,canActivate: [AuthGuard]},
  { path: 'BuildingMaster/:id', component: BuildingMasterComponent ,canActivate: [AuthGuard]},
  { path: 'Deniminisadd', component: DeniminisaddComponent ,canActivate: [AuthGuard]},
  { path: 'Deniminisadd/:id', component: DeniminisaddComponent ,canActivate: [AuthGuard]},
  { path: 'Deniminisdash', component: DeniminisdashComponent ,canActivate: [AuthGuard]},
  { path: 'WorkStationTypeForm/:id', component: WorkStationTypeFormComponent ,canActivate: [AuthGuard]},
  { path: 'Otratesdash', component: OtratesdashComponent ,canActivate: [AuthGuard]},
  { path: 'Otratesnew', component: OtratesnewComponent,canActivate: [AuthGuard]},
  { path: 'Otratesnew/:id', component: OtratesnewComponent ,canActivate: [AuthGuard]},
  { path: 'WorkStationTypeDash', component: WorkStationTypeDashComponent ,canActivate: [AuthGuard]},
  { path: 'WorkStationTypeForm', component: WorkStationTypeFormComponent ,canActivate: [AuthGuard]},
  { path: 'WorkStationTypeForm/:id', component: WorkStationTypeFormComponent,canActivate: [AuthGuard]},
  { path: 'Subsidarydashboard', component: SubsidarydashboardComponent ,canActivate: [AuthGuard]},
  { path: 'Subsidaryform', component: SubsidaryformComponent ,canActivate: [AuthGuard]},
  { path: 'Subsidaryform/:id', component: SubsidaryformComponent ,canActivate: [AuthGuard]},
  { path: 'Help', component: HelpComponent ,canActivate: [AuthGuard]},
  { path: 'notification', component: NotificationComponent,canActivate: [AuthGuard]},
  { path: 'RegionMasterDash', component: RegionMasterDashComponent ,canActivate: [AuthGuard]},

  { path: 'RegionMasterForm', component: RegionMasterFormComponent ,canActivate: [AuthGuard]},
  { path: 'RegionMasterForm/:id', component: RegionMasterFormComponent ,canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class AdminRoutingModule { }