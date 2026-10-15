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
    new Employee('https://i.pravatar.cc/300?img=12', 'Kovács Péter', Position.CEO, 'kovacs.peter@menhely.hu'),
    new Employee('https://i.pravatar.cc/300?img=47', 'Nagy Anna', Position.SHELTER_MANAGER, 'nagy.anna@menhely.hu'),
    new Employee('https://i.pravatar.cc/300?img=33', 'Szabó Gábor', Position.VETERINARIAN, 'szabo.gabor@menhely.hu'),
    new Employee('https://i.pravatar.cc/300?img=5', 'Tóth Eszter', Position.ANIMAL_CARETAKER, 'toth.eszter@menhely.hu'),
    new Employee('https://i.pravatar.cc/300?img=68', 'Horváth Bence', Position.VOLUNTEER, 'horvath.bence@menhely.hu'),
  ];
}
