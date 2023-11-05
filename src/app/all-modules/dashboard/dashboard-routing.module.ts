import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardAspirantComponent } from './dashboard-aspirant/dashboard-aspirant.component';
import { DashboardCompanyComponent } from './dashboard-company/dashboard-company.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'dashboard-aspirant', component: DashboardAspirantComponent },
      { path: 'dashboard-company', component: DashboardCompanyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
