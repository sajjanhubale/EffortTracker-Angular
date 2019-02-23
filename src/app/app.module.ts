import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { ApiCallService } from './api/apicall.service';
import { EfforttrackerComponent } from './efforttracker/efforttracker.component';
import { OverviewComponent } from './overview/overview.component';
import { AddeffortsComponent } from './addefforts/addefforts.component';
import { ClientsComponent } from './clients/clients.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from "primeng/calendar"
import {TableModule} from 'primeng/table';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/growl';
import {OverviewGuardService} from "./overview/overview-guard.service";
import { NavbarComponent } from './navbar/navbar.component'
import { GlobalService } from './global.service';
import { MyHttpLogInterceptor } from './http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EfforttrackerComponent,
    OverviewComponent,
    AddeffortsComponent,
    ClientsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    TableModule,
    KeyFilterModule,
    MenubarModule,
    GrowlModule,
    RouterModule.forRoot([
      {path:'efforttracker',component:EfforttrackerComponent},
      {path:'login',component:LoginComponent},
      {path:'overview',component:OverviewComponent},
      {path:'addefforts',component:AddeffortsComponent},
      {path:'myclients',canActivate:[OverviewGuardService],component:ClientsComponent}, 
      
    ])
    
  ],
  providers: [ApiCallService,OverviewGuardService,MessageService,NavbarComponent,GlobalService,{ provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
