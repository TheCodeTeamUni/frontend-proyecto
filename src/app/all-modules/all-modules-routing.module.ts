import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AllModulesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'aspirant-information',
        loadChildren: () =>
          import('./aspirant-information/aspirant-information.module').then(
            (m) => m.AspirantInformationModule
          ),
      },
      {
        path: 'company-information',
        loadChildren: () =>
          import('./company-information/company-information.module').then(
            (m) => m.CompanyInformationModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'aspirants',
        loadChildren: () =>
          import('./aspirants/aspirants.module').then((m) => m.AspirantsModule),
      },
      {
        path: 'interviews',
        loadChildren: () =>
          import('./interviews/interviews.module').then((m) => m.InterviewsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllModulesRoutingModule {}
