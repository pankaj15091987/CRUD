import { PeopleComponent } from './home-module/people/people.component';
import { ServicesComponent } from './home-module/services/services.component';
import { RegisterComponent } from './layout/register/register.component';
import { LoginComponent } from './layout/login/login.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:"home", component:HomeComponent
  
},
{
  path:"about-us", component:AboutUsComponent
},
{
  path:"contact-us", component:ContactUsComponent
},
{
  path:"gallary", component:GalleryComponent
},
{
  path:"login", component:LoginComponent
},
{
  path:"register", component:RegisterComponent
},
{
  path:"service", component:ServicesComponent
},
{
  path:"people", component:PeopleComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
