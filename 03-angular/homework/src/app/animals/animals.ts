import { Component } from '@angular/core';
import { Animal } from '../models/animal';
import { Species } from '../models/species';
import { Gender } from '../models/gender';

@Component({
  selector: 'app-animals',
  standalone: false,
  templateUrl: './animals.html',
  styleUrl: './animals.css',
})
export class Animals {

  selectedAnimal: Animal | null = null;
  credentials = {
    name: '',
    phone: ''
  };

  animals: Animal[] = [
    new Animal('https://images.dog.ceo/breeds/retriever-golden/20200814_163629_200814.jpg', 'Buddy', Species.DOG, Gender.MALE, 3),
    new Animal('https://cataas.com/cat/05Xd4JtN14983pns', 'Mittens', Species.CAT, Gender.FEMALE, 2),
    new Animal('https://images.dog.ceo/breeds/maltese/n02085936_8449.jpg', 'Charlie', Species.DOG, Gender.MALE, 5),
    new Animal('https://cataas.com/cat/0BTTVEVWXNyOgXYd', 'Whiskers', Species.CAT, Gender.FEMALE, 1),
    new Animal('https://images.dog.ceo/breeds/mountain-bernese/n02107683_1468.jpg', 'Max', Species.DOG, Gender.MALE, 4),
    new Animal('https://cataas.com/cat/0C2bQ39x8kuhx31p', 'Luna', Species.CAT, Gender.FEMALE, 2),
    new Animal('https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.jpg', 'Rocky', Species.DOG, Gender.MALE, 6),
    new Animal('https://cataas.com/cat/0EsIYDG0at0TPpPD', 'Coco', Species.CAT, Gender.FEMALE, 3),
    new Animal('https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_3983.jpg', 'Daisy', Species.DOG, Gender.FEMALE, 2),
    new Animal('https://cataas.com/cat/04eEQhDfAL8l5nt3', 'Simba', Species.CAT, Gender.MALE, 4)
  ];

  adopt(animal: Animal) : void{
    this.selectedAnimal = animal;
  }

  saveAnimal() : void{
    if(this.selectedAnimal == null ){
      alert('Nincs kiválasztva állat!');
      return;
    }
    console.log(`Az örökbefogadás sikeres! ${this.selectedAnimal.name} örökbefogadása megtörtént.`);
    this.selectedAnimal = null;
  }

  startAdoption() : void{
    if(this.credentials.name === '' || this.credentials.phone === ''){
      alert('Kérjük, töltsön ki minden mezőt, és válasszon egy állatot!');
      return;
    }
    this.saveAnimal();
     console.log(this.credentials);
    this.credentials = { name: '', phone: '' };
    this.selectedAnimal = null;
  }
}
