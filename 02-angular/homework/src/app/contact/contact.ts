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
  isDonor: boolean = false;
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
    if(this.name === '' || this.email === '' || this.message === ''){
      alert('Please fill in all fields.');
      return;
    }
    alert(`Thank you for your message, ${this.name}! We will contact you at ${this.email}.`);
    console.log({
      name: this.name,
      email: this.email,
      isDonor: this.isDonor,
      message: this.message
    });
    this.name = '';
    this.email = '';
    this.isDonor = false;
    this.message = '';
  }

  validateEmail(email: string) : boolean {
    const parts = email.split('@');
    const localPart = parts[0];   // a @ előtti rész
    const domainPart = parts[1];  // a @ utáni rész (undefined, ha nincs @)

    return email.includes('@')
      && localPart.length >= 5
      && domainPart.length >= 5
      && domainPart.includes('.')
      && domainPart.split('.')[1].length >= 2;
  }

  // TODO: ideiglenes, a validáció ellenőrzése után törölni (a konstruktorral együtt)
  constructor() {
    this.testValidateEmail();
  }

  testValidateEmail() : void {
    const cases: { email: string, expected: boolean }[] = [
      { email: 'kovacs@gmail.com', expected: true },
      { email: 'abcde@ab.hu', expected: true },        // határeset: pont 5 és 5 karakter
      { email: 'kovacs@mail.co.uk', expected: true },  // több pont
      { email: 'kovacs@mail.c.hu', expected: true },   // több pont, rövid középső rész
      { email: 'abcd@gmail.com', expected: false },    // @ előtt csak 4 karakter
      { email: 'kovacs@a.hu', expected: false },       // @ után csak 4 karakter
      { email: 'kovacs@gmailcom', expected: false },   // nincs pont a @ után
      { email: 'kovacs@gmail.c', expected: false },    // pont után csak 1 karakter
      { email: 'kovacs@gmail.', expected: false },     // pont után semmi
      { email: 'kovacs.gmail.com', expected: false },  // nincs @
      { email: '', expected: false },
    ];

    console.table(cases.map(c => {
      const actual = this.validateEmail(c.email);
      return { email: c.email, expected: c.expected, actual: actual, ok: actual === c.expected ? '✅' : '❌' };
    }));
  }
}
