import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterviewsComponent } from './interviews.component';
import { CompanyInterviewsComponent } from './company-interviews/company-interviews.component';
import { AspirantsInterviewsComponent } from './aspirants-interviews/aspirants-interviews.component';

const routes: Routes = [
  {
    path: '',
    component: InterviewsComponent,
    children: [
      { path: 'company-interviews', component: CompanyInterviewsComponent},
      { path: 'aspirant-interviews', component: AspirantsInterviewsComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewsRoutingModule {}
