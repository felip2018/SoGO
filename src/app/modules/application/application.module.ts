import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ApplicationTemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { ApplicationRoutingModule } from './application-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ApplicationTemplateComponent
  ],
  imports: [
    ApplicationRoutingModule,
    CommonModule,
    RouterModule,
  ]
})
export class ApplicationModule { }
