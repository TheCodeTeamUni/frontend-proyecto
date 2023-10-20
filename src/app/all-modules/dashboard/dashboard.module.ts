import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { DashboardAspirantComponent } from "./dashboard-aspirant/dashboard-aspirant.component";
import { NgCircleProgressModule } from "ng-circle-progress";
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAspirantComponent,


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      imageWidth: 80,
      imageHeight: 80,
    }),
  ],
})
export class DashboardModule {}
