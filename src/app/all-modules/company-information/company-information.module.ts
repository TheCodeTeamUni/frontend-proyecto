import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInformationComponent } from './company-information.component';
import { CompanyInformationRoutingModule } from './company-information-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { BasicDataComponent } from './basic-data/basic-data.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyInformationRoutingModule
  ],
  declarations: [
    CompanyInformationComponent,
    ProfileComponent,
    BasicDataComponent

  ]
})
export class CompanyInformationModule { }
