import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';
import { AddTestComponent } from './add-test/add-test.component';
import { TestsRoutingModule } from './tests-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { AspirantTestComponent } from './aspirant-test/aspirant-test.component';

@NgModule({
  imports: [
    CommonModule,
    TestsRoutingModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule,
  ],
  declarations: [
    TestsComponent,
    AddTestComponent,
    AspirantTestComponent
  ]
})
export class TestsModule { }
