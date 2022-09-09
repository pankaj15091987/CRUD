import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { ServicesComponent } from './services/services.component';
import { PeopleComponent } from './people/people.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';


@NgModule({
  declarations: [
    ServicesComponent,
    PeopleComponent,
    CustomersComponent,
    PartnersComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
