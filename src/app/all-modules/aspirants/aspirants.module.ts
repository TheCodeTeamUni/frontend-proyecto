import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AspirantsComponent } from './aspirants.component';
import { AspirantsRoutingModule } from './aspirants-routing.module';
import { SearchAspirantComponent } from './search-aspirant/search-aspirant.component';
import { ProfileAspirantComponent } from './profile-aspirant/profile-aspirant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AspirantsRoutingModule,
    ReactiveFormsModule,
    FormsModule,



  ],
  declarations: [
    AspirantsComponent,
    SearchAspirantComponent,
    ProfileAspirantComponent
  ],
})
export class AspirantsModule { }
