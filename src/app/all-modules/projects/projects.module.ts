import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ProjectsAddComponent } from './projects-add/projects-add.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule,
  ],
  declarations: [
    ProjectsComponent,
    ProjectsAddComponent,
    ProjectsDetailComponent

  ]
})
export class ProjectsModule { }
