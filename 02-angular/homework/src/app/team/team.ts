import { Component } from '@angular/core';
import { Employee } from '../models/employee';
import { Position } from '../models/position';

@Component({
  selector: 'app-team',
  standalone: false,
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team {
  employees: Employee[] = [
    new Employee(
      'https://www.w3schools.com/howto/img_avatar.png',
      'John Doe',
      Position.VOLUNTEER,
      'john.doe@example.com'
    ),
    new Employee(
      'https://www.w3schools.com/howto/img_avatar.png',
      'Filip Ugovsek',
      Position.CEO ,
      'filip.ugovsek@example.com'
    ),
    new Employee(
      'https://www.w3schools.com/howto/img_avatar.png',
      'Filip Ugovsek',
      Position.CEO ,
      'filip.ugovsek@example.com'
    ),
    new Employee(
      'https://www.w3schools.com/howto/img_avatar.png',
      'Filip Ugovsek',
      Position.CEO ,
      'filip.ugovsek@example.com'
    )
  ];
}
