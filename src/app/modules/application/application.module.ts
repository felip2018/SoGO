import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ApplicationTemplateComponent } from './template/template.component';
import { Router, RouterModule } from '@angular/router';
import { ApplicationRoutingModule } from './application-routing.module';
import { ConfigProfilesComponent } from './pages/config-profiles/config-profiles.component';
import { ConfigCitiesComponent } from './pages/config-cities/config-cities.component';
import { ConfigPeopleComponent } from './pages/config-people/config-people.component';
import { ConfigEstablishmentsComponent } from './pages/config-establishments/config-establishments.component';
import { ConfigUsersComponent } from './pages/config-users/config-users.component';
import { ConfigIdentityTypesComponent } from './pages/config-identity-types/config-identity-types.component';
import { ConfigMeasurementUnitsComponent } from './pages/config-measurement-units/config-measurement-units.component';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ApplicationTemplateComponent,
    ConfigProfilesComponent,
    ConfigCitiesComponent,
    ConfigPeopleComponent,
    ConfigEstablishmentsComponent,
    ConfigUsersComponent,
    ConfigIdentityTypesComponent,
    ConfigMeasurementUnitsComponent
  ],
  imports: [
    ApplicationRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ApplicationModule { }
