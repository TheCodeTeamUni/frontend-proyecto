import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthenticationGuard } from './core/auth/authentication.guard';
import { RegisterTypeComponent } from './register-type/register-type.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterTypeComponent,
    RegisterComponent,
    LandingComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,

    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    AuthenticationGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
