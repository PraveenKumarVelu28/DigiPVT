import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AdmindashbaordComponent } from './admindashbaord/admindashbaord.component';
import { AnnouncementDashboardComponent } from './announcement-dashboard/announcement-dashboard.component';
import { AnnouncementFormComponent } from './announcement-form/announcement-form.component';
import { CompanydashboardComponent } from './companydashboard/companydashboard.component';
import { HolidayDashboardComponent } from './holiday-dashboard/holiday-dashboard.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';
import { ShiftMasterDashComponent } from './Master/shift-master-dash/shift-master-dash.component';
import { ShiftMasterFormComponent } from './Master/shift-master-form/shift-master-form.component';
import { CountryMasterDashComponent } from './Master/country-master-dash/country-master-dash.component';
import { CountryMasterFormComponent } from './Master/country-master-form/country-master-form.component';
import { CityMasterDashComponent } from './Master/city-master-dash/city-master-dash.component';
import { CityMasterFormComponent } from './Master/city-master-form/city-master-form.component';
import { StateMasterFormComponent } from './Master/state-master-form/state-master-form.component';
import { StateMasterDashComponent } from './Master/state-master-dash/state-master-dash.component';
import { BarangaymasterComponent } from './Master/barangaymaster/barangaymaster.component';
import { AddbarangaymasterComponent } from './Master/addbarangaymaster/addbarangaymaster.component';
import { DepartmentmasteraddComponent } from './Master/departmentmasteradd/departmentmasteradd.component';
import { DepartmentmasterdashComponent } from './Master/departmentmasterdash/departmentmasterdash.component';
import { SubsidarydashboardComponent } from './Master/subsidarydashboard/subsidarydashboard.component';
import { SubsidaryformComponent } from './Master/subsidaryform/subsidaryform.component';
import { OtratesdashComponent } from './Master/otratesdash/otratesdash.component';
import { OtratesnewComponent } from './Master/otratesnew/otratesnew.component';
import { BuildingMasterDashComponent } from './Master/building-master-dash/building-master-dash.component';
import { BuildingMasterComponent } from './Master/building-master/building-master.component';
import { FloordashComponent } from './Master/floordash/floordash.component';
import { RoleMasterDashComponent } from './Master/role-master-dash/role-master-dash.component';
import { RoleMasterFormComponent } from './Master/role-master-form/role-master-form.component';
import { WorkStationTypeDashComponent } from './Master/work-station-type-dash/work-station-type-dash.component';
import { WorkStationTypeFormComponent } from './Master/work-station-type-form/work-station-type-form.component';
import { DeniminisdashComponent } from './Master/deniminisdash/deniminisdash.component';
import { DeniminisaddComponent } from './Master/deniminisadd/deniminisadd.component';
import { NotificationComponent } from './notification/notification.component';
import { RegionMasterDashComponent } from './Master/region-master-dash/region-master-dash.component';
import { RegionMasterFormComponent } from './Master/region-master-form/region-master-form.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    AdminComponent,
    AdmindashbaordComponent,
    CompanydashboardComponent,
    AddcompanyComponent,
    HolidayDashboardComponent,
    HolidayFormComponent,
    AnnouncementFormComponent,
    AnnouncementDashboardComponent,
    ShiftMasterDashComponent,
    ShiftMasterFormComponent,
    CountryMasterDashComponent,
    CountryMasterFormComponent,
    CityMasterDashComponent,
    CityMasterFormComponent,
    StateMasterFormComponent,
    StateMasterDashComponent,
    BarangaymasterComponent,
    AddbarangaymasterComponent,
    DepartmentmasteraddComponent,
    DepartmentmasterdashComponent,
    SubsidarydashboardComponent,
    SubsidaryformComponent,
    OtratesdashComponent,
    OtratesnewComponent,
    BuildingMasterDashComponent,
    BuildingMasterComponent,
    FloordashComponent,
    RoleMasterDashComponent,
    RoleMasterFormComponent,
    WorkStationTypeDashComponent,
    WorkStationTypeFormComponent,
    DeniminisdashComponent,
    DeniminisaddComponent,
    NotificationComponent,
    RegionMasterDashComponent,
    RegionMasterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    TimepickerModule,
    BsDatepickerModule
  ]
})
export class AdminModule { }