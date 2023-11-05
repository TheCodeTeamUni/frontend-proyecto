import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AspirantInformationComponent } from './aspirant-information.component';
import { AspirantInformationRoutingModule } from './aspirant-information-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    AspirantInformationRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      imageWidth: 80,
      imageHeight: 80,
    }),
  ],
  declarations: [
    AspirantInformationComponent,
    PersonalInformationComponent,
    EducationComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProfileComponent,
  ],
})
export class AspirantInformationModule {}
