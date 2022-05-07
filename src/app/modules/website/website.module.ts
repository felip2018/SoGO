import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WebsiteRoutingModule } from './website-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
