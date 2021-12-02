import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PhonePipe } from './Pipes/phone.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PhonePipe
  ]
})
export class SharedModule { }
