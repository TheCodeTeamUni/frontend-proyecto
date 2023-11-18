import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInformationComponent } from './company-information.component';
import { CompanyInformationRoutingModule } from './company-information-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BasicDataComponent } from './basic-data/basic-data.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CompanyInformationRoutingModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [
    CompanyInformationComponent,
    ProfileComponent,
    BasicDataComponent

  ]
})
export class CompanyInformationModule { }
