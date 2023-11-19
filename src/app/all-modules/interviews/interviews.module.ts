import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { InterviewsRoutingModule } from './interviews-routing.module';
import { CompanyInterviewsComponent } from './company-interviews/company-interviews.component';
import { AspirantsInterviewsComponent } from './aspirants-interviews/aspirants-interviews.component';

@NgModule({
  imports: [
    CommonModule,
    InterviewsRoutingModule
  ],
  declarations: [
    InterviewsComponent,
    CompanyInterviewsComponent,
    AspirantsInterviewsComponent
  ]
})
export class InterviewsModule { }
