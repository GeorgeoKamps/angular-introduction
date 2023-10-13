import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './interfaces/person';

import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Georgeo";
  lastname = "Kampouris";

    person: Person ={
     givenName: "Georgeo",
     surName: "Kampouris",
     age: 25,
     email: "georgeokamps@gmail.com",
    address: "skg"
    };

    person2: Person ={
      givenName: "akis",
      surName: "stapasidis",
      age: 25,
      email: "stapass@gmail.com",
     address: "skg"
     };
};

