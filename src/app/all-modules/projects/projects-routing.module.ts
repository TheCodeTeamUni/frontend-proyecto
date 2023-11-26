import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsAddComponent } from './projects-add/projects-add.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: 'projects-add', component: ProjectsAddComponent},
      { path: 'projects-detail/:id', component: ProjectsDetailComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
