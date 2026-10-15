import { Gender } from "./gender";
import { Species } from "./species";

export class Animal {
  imageUrl: string;
  name: string;
  species: Species;
  gender: Gender;
  age: number;

  constructor(imageUrl: string, name: string, species: Species, gender: Gender, age: number) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.species = species;
    this.gender = gender;
    this.age = age;
  }
}
