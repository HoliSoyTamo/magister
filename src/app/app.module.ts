import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './loginusers/login/login.component';
import { DashboardComponent } from './loginusers/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DocsComponent } from './admin/docs/docs.component';
import { RegisterUsersComponent } from './admin/register-users/register-users.component';
import { RegisterStudentsComponent } from './secretary/register-students/register-students.component';
import { SearchStudentsComponent } from './secretary/search-students/search-students.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    DocsComponent,
    RegisterUsersComponent,
    RegisterStudentsComponent,
    SearchStudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
