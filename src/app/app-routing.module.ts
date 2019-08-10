import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {LoginComponent } from './login/login.component';
import {RegisterComponent } from './register/register.component';
import {DashboardComponent } from './dashboard/dashboard.component';
import {ViewuserComponent } from './viewuser/viewuser.component';
import {MapComponent } from './map/map.component';
import {ContactComponent } from './contact/contact.component';
import {ViewcontactComponent } from './viewcontact/viewcontact.component';
import {GalleryComponent } from './gallery/gallery.component';
import {PostblogComponent } from './postblog/postblog.component';


import { ToodooComponent } from './toodoo/toodoo.component';
import {DashnavComponent } from './dashnav/dashnav.component';

import { AuthGuard } from './auth.guard';





const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'viewuser',component:ViewuserComponent},
  {path:'map',component:MapComponent},
  {path:'contact',component:ContactComponent},
  {path:'viewcontact',component:ViewcontactComponent},

  
  {path:'gallery',component:GalleryComponent,
  canActivate: [AuthGuard]},


  {path:'postblog',component:PostblogComponent},
  {path:'toodoo',component:ToodooComponent},
  {path:'dashnav',component:DashnavComponent},




  
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
