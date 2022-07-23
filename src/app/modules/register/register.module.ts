import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../shared/services/authentication.service';
import { SharedModule } from '../shared/shared.module';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { RegisterBusinessComponent } from './pages/register-business/register-business.component';
import { RegisterRoutingModule } from './register-routing.module';



@NgModule({
  declarations: [
    RegisterBusinessComponent,
    RegisterAdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class RegisterModule { }
