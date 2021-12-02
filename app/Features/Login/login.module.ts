import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Pages/login/login.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class LoginModule { }
