import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopitionComponent } from './Features/Adoption/Pages/adopition/adopition.component';

import { LoginComponent } from './Features/Login/Pages/login/login.component';
import { RegistrationComponent } from './Features/Users/Pages/registration/registration.component';
import { AuthGuard } from './Shared/Guards/auth.guard';


const routes: Routes = [
  {path:'', pathMatch:"full", redirectTo:"/login"},
  {path:'login', component:LoginComponent},
  {path:"lista-para-adocao", component:AdopitionComponent, canActivate: [AuthGuard] },
  {path:"cadastro", component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
