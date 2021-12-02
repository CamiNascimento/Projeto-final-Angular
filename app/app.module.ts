import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdoptionModule } from './Features/Adoption/adoption.module';
import { LoginModule } from './Features/Login/login.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from "@angular/common/locales/pt";
import { UsersModule } from './Features/Users/users.module';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdoptionModule,
    LoginModule,
    UsersModule
    
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
