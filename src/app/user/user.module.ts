import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AccountComponent } from './pages/account/account.component';


@NgModule({
  declarations: [LoginComponent, AccountComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
