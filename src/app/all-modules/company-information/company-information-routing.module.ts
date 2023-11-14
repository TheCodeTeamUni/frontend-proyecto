import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CompanyInformationComponent } from './company-information.component';
import { BasicDataComponent } from './basic-data/basic-data.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyInformationComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'basic-data', component: BasicDataComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyInformationRoutingModule {}
