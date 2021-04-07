import { applicationRoutes } from './app.routing-module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { EmployeeSupportComponent } from './employee-support/employee-support.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SupportComponent,
    PageNotFoundComponent,
    CustomerSupportComponent,
    EmployeeSupportComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
