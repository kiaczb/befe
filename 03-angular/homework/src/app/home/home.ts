import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  contactName: string = '';
  contactEmail: string = '';
  contactMessage: string = '';

  sendMessage() : void {
    console.log('Név:', this.contactName);
    console.log('Email:', this.contactEmail);
    console.log('Üzenet:', this.contactMessage);
  }
}
