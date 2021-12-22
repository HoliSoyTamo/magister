import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsComponent } from './admin/docs/docs.component';
import { RegisterUsersComponent } from './admin/register-users/register-users.component';
import { AuthGuard } from './loginusers/auth.guard';
import { DashboardComponent } from './loginusers/dashboard/dashboard.component';
import { RegisterStudentsComponent } from './secretary/register-students/register-students.component';
import { SearchStudentsComponent } from './secretary/search-students/search-students.component';
import { HomeComponent } from './shared/home/home.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchStudentsComponent },
    { path: 'registerUsers', component: RegisterUsersComponent },
    { path: 'registerStudents', component: RegisterStudentsComponent },
    { path: 'genDoc', component: DocsComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }