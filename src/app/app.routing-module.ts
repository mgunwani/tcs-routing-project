import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { EmployeeSupportComponent } from './employee-support/employee-support.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";

export const applicationRoutes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user-detail/:id', component: UserDetailComponent },
    {
        path: 'support', component: SupportComponent, children: [
            { path: 'customer-support', component: CustomerSupportComponent },
            { path: 'employee-support', component: EmployeeSupportComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
]