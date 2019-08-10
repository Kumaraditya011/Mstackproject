import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PostblogComponent } from './postblog/postblog.component';
import { SevicesComponent } from './sevices/sevices.component';
import { ToodooComponent } from './toodoo/toodoo.component';
import { DashnavComponent } from './dashnav/dashnav.component';
import {AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService } from './token-interceptor.service';

import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    FooterComponent,
    ViewuserComponent,
    MapComponent,
    SidebarComponent,
    ContactComponent,
    ViewcontactComponent,
    GalleryComponent,
    PostblogComponent,
    SevicesComponent,
    ToodooComponent,
    DashnavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),

    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
