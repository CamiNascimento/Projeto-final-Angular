import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Model/animal.model';
import { AdoptionService } from '../../Services/adoption.service';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss']
})
export class AnimalsListComponent implements OnInit {

  animals: Array<Animal> = []

  filteredAnimals: Array<Animal> = [];

  constructor(private animalsService: AdoptionService) { }

  ngOnInit(): void {
    this.animals = this.animalsService.getAnimal();
    this.filteredAnimals = this.animals;
  }

searchByEspecie(event: any) {
  const value =event.target.value;
  const filteredAnimals = this.animals.filter((animal) => animal.especie.toUpperCase().search(value.toUpperCase()) > -1);
  if(filteredAnimals.length === 0){
    this.filteredAnimals =this.animals;
    return alert("Nenhum Resultado Disponível para essa busca")
  }
  return this.filteredAnimals = filteredAnimals;
}

searchByRaca(event: any){
  const value =event.target.value;
  const filteredAnimals = this.animals.filter((animal) => animal.raca.toUpperCase().search(value.toUpperCase()) > -1);
  if(filteredAnimals.length === 0){
    this.filteredAnimals =this.animals;
    return alert("Nenhum Resultado Disponível para essa busca")
  }
  return this.filteredAnimals = filteredAnimals;

}

}
