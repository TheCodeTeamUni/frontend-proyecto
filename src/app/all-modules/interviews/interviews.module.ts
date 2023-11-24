import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewsComponent } from './interviews.component';
import { InterviewsRoutingModule } from './interviews-routing.module';
import { CompanyInterviewsComponent } from './company-interviews/company-interviews.component';
import { AspirantsInterviewsComponent } from './aspirants-interviews/aspirants-interviews.component';
import { InterviewDetailComponent } from './interview-detail/interview-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InterviewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    InterviewsComponent,
    CompanyInterviewsComponent,
    AspirantsInterviewsComponent,
    InterviewDetailComponent
  ]
})
export class InterviewsModule { }
