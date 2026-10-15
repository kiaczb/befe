import { Position } from "./position";

export class Employee {
  imageUrl: string;
  name: string;
  position: Position;
  email: string;

  public constructor (imageUrl: string, name: string, position: Position, email: string) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.position = position;
    this.email = email;
  }
}