import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { SidebarComponent } from './Pages/CommanPages/sidebar/sidebar.component';
import { HeaderComponent } from './Pages/CommanPages/header/header.component';
import { FooterComponent } from './Pages/CommanPages/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './Modules/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './Modules/interceptor';
import { HttpInterceptor } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PayslipviewComponent } from './payslipview/payslipview.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { SidebarWithIconComponent } from './Pages/CommanPages/sidebar-with-icon/sidebar-with-icon.component';
import { BsDatepickerModule, BsDatepickerConfig,BsLocaleService } from 'ngx-bootstrap/datepicker';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    PayslipviewComponent,
    CompanyProfileComponent,
    SidebarWithIconComponent
  ],
  imports: [
    TimepickerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    MatDialogModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgbModule

    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'xsrf-token',
    //   headerName: 'XSRF-TOKEN',
    // }),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    CookieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
