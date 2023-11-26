import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsComponent } from './tests.component';
import { AddTestComponent } from './add-test/add-test.component';
import { AspirantTestComponent } from './aspirant-test/aspirant-test.component';

const routes: Routes = [
  {
    path: '',
    component: TestsComponent,
    children: [
      { path: 'add-test', component: AddTestComponent },
      { path: 'aspirant-test', component: AspirantTestComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsRoutingModule {}
