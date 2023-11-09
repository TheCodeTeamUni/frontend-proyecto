import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AspirantsComponent } from './aspirants.component';
import { SearchAspirantComponent } from './search-aspirant/search-aspirant.component';


const routes: Routes = [
  {
    path: '',
    component: AspirantsComponent,
    children: [

      { path: 'search-aspirant', component: SearchAspirantComponent},

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AspirantsRoutingModule {}
