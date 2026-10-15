import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name: string = '';
  email: string = '';
  isDonor: boolean | null = null;  // null = még nem választott (kötelező mező)
  message: string = '';

  isValidEmail: boolean = true;

  // a validateEmail csak eldönti, hogy jó-e; ez a metódus menti el az eredményt, amit a sablon figyel
  checkEmail() : void {
    this.isValidEmail = this.validateEmail(this.email);
  }

  submitForm() : void {
    this.checkEmail();
    if(!this.isValidEmail){
      return;
    }
    if(this.name === '' || this.message === '' || this.isDonor === null){
      alert('Kérjük, töltsön ki minden mezőt!');
      return;
    }
    alert(`Köszönjük az üzenetét, ${this.name}! A(z) ${this.email} címen fogjuk keresni.`);
    console.log({
      name: this.name,
      email: this.email,
      isDonor: this.isDonor,
      message: this.message
    });
    this.name = '';
    this.email = '';
    this.isDonor = null;
    this.message = '';
  }

  validateEmail(email: string) : boolean {
    const parts = email.split('@');
    if(parts.length !== 2){  // pontosan egy @ kell
      return false;
    }
    const localPart = parts[0];   // a @ előtti rész
    const domainPart = parts[1];  // a @ utáni rész
    const domainParts = domainPart.split('.');
    const topLevelDomain = domainParts[domainParts.length - 1];  // az utolsó pont utáni rész (.hu, .com)

    return localPart.length >= 5
      && domainPart.length >= 5
      && domainPart.includes('.')
      && topLevelDomain.length >= 2;
  }
}
