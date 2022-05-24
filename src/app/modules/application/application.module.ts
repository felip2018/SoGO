import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { ApplicationRoutingModule } from './application-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    TemplateComponent
  ],
  imports: [
    ApplicationRoutingModule,
    CommonModule,
    RouterModule,
  ]
})
export class ApplicationModule { }
