import { Species } from "./species";

export class Animal {
imageUrl: string;
  name: string;
  species: Species;
  gender: string;
  age: number;

  constructor(imageUrl: string, name: string, species: Species, gender: boolean, age: number) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.species = species;
    this.gender = gender ? 'Male' : 'Female';
    this.age = age;
  }
}