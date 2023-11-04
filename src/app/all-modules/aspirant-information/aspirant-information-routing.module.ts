import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AspirantInformationComponent } from './aspirant-information.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AspirantInformationComponent,
    children: [
      { path: 'personal-information', component: PersonalInformationComponent},
      { path: 'education', component: EducationComponent},
      { path: 'work-experience', component: WorkExperienceComponent},
      { path: 'skills', component: SkillsComponent},
      { path: 'profile', component: ProfileComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AspirantInformationRoutingModule {}
