import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllModulesRoutingModule } from './all-modules-routing.module';
import { AllModulesComponent } from './all-modules.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarAspirantComponent } from '../sidebar-aspirant/sidebar-aspirant.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { SidebarCompanyComponent } from '../sidebar-company/sidebar-company.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AllModulesComponent,
    HeaderComponent,
    SidebarAspirantComponent,
    SidebarCompanyComponent,
  ],
  imports: [
    CommonModule,
    AllModulesRoutingModule,
    PerfectScrollbarModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(AllModulesData),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AllModulesModule {}
