import { Component } from '@angular/core';
import { Animal } from '../models/animal';
import { Species } from '../models/species';

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
    new Animal('https://images.dog.ceo/breeds/retriever-golden/20200814_163629_200814.jpg', 'Buddy', Species.DOG, true, 3),
    new Animal('https://cataas.com/cat/05Xd4JtN14983pns', 'Mittens', Species.CAT, false, 2),
    new Animal('https://images.dog.ceo/breeds/maltese/n02085936_8449.jpg', 'Charlie', Species.DOG, true, 5),
    new Animal('https://cataas.com/cat/0BTTVEVWXNyOgXYd', 'Whiskers', Species.CAT, false, 1),
    new Animal('https://images.dog.ceo/breeds/mountain-bernese/n02107683_1468.jpg', 'Max', Species.DOG, true, 4),
    new Animal('https://cataas.com/cat/0C2bQ39x8kuhx31p', 'Luna', Species.CAT, false, 2),
    new Animal('https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.jpg', 'Rocky', Species.DOG, true, 6),
    new Animal('https://cataas.com/cat/0EsIYDG0at0TPpPD', 'Coco', Species.CAT, false, 3),
    new Animal('https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_3983.jpg', 'Daisy', Species.CAT, false, 2),
    new Animal('https://cataas.com/cat/04eEQhDfAL8l5nt3', 'Simba', Species.DOG, true, 4)
  ];    

  adopt(animal: Animal) : void{
    this.selectedAnimal = animal;
  }

  subscribe() : void{
    if(this.credentials.name === '' || this.credentials.phone === '' || this.selectedAnimal == null ){
      alert('Please fill in all fields.');
      return;
    }
    alert(`Thank you for adopting ${this.selectedAnimal.name}! We will contact you at ${this.credentials.phone}.`);
    console.log(this.credentials);
    this.credentials = { name: '', phone: '' };
    this.selectedAnimal = null;
  }
}
