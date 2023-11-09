import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspirantsComponent } from './aspirants.component';
import { AspirantsRoutingModule } from './aspirants-routing.module';
import { SearchAspirantComponent } from './search-aspirant/search-aspirant.component';

@NgModule({
  imports: [
    CommonModule,
    AspirantsRoutingModule
  ],
  declarations: [
    AspirantsComponent,
    SearchAspirantComponent
  ],
})
export class AspirantsModule { }
