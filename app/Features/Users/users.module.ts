import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }

