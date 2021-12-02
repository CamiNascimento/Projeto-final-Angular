import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from './Components/animal/animal.component';
import { AnimalsListComponent } from './Components/animals-list/animals-list.component';
import { AdopitionComponent } from './Pages/adopition/adopition.component';
import { SharedModule } from 'src/app/Shared/shared.module';



@NgModule({
  declarations: [
    AnimalComponent,
    AnimalsListComponent,
    AdopitionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AdoptionModule { }
