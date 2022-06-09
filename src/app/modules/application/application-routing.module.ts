import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigCitiesComponent } from './pages/config-cities/config-cities.component';
import { ConfigEstablishmentsComponent } from './pages/config-establishments/config-establishments.component';
import { ConfigIdentityTypesComponent } from './pages/config-identity-types/config-identity-types.component';
import { ConfigMeasurementUnitsComponent } from './pages/config-measurement-units/config-measurement-units.component';
import { ConfigPeopleComponent } from './pages/config-people/config-people.component';
import { ConfigProfilesComponent } from './pages/config-profiles/config-profiles.component';
import { ConfigUsersComponent } from './pages/config-users/config-users.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'config-cities', component: ConfigCitiesComponent },
  { path: 'config-establishments', component: ConfigEstablishmentsComponent },
  { path: 'config-identity-types', component: ConfigIdentityTypesComponent },
  { path: 'config-people', component: ConfigPeopleComponent },
  { path: 'config-profiles', component: ConfigProfilesComponent },
  { path: 'config-users', component: ConfigUsersComponent },
  { path: 'config-measurement-units', component: ConfigMeasurementUnitsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
