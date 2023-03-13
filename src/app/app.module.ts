import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { FooterComponent } from './Pages/CommonPages/footer/footer.component';
import { HeaderComponent } from './Pages/CommonPages/header/header.component';
// import { LoaderComponent } from './Pages/CommonPages/loader/loader.component';
import { SidebarComponent } from './Pages/CommonPages/sidebar/sidebar.component';
import { SharedModule } from './Modules/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { Ng2SearchPipeModule } from 'ng2-search-filter/src/ng2-filter.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    //LoaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // Ng2SearchPipeModule,
   HttpClientModule,
   SharedModule,
   NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
