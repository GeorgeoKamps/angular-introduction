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

     users: Person[] = [
      {
        givenName: 'John',
        surName: 'Doe',
        age: 30,
        email: 'john.doe@example.com',
        address: '123 Main St',
      },
      {
        givenName: 'Jane',
        surName: 'Doe',
        age: 28,
        email: 'jane.doe@example.com',
        address: '123 Main St',
      },
      {
        givenName: 'Jim',
        surName: 'Brown',
        age: 45,
        email: 'jim.brown@example.com',
        address: '456 Park Ave',
      },
      {
        givenName: 'Jill',
        surName: 'Brown',
        age: 42,
        email: 'jill.brown@example.com',
        address: '456 Park Ave',
      },
      {
        givenName: 'Jake',
        surName: 'Smith',
        age: 36,
        email: 'jake.smith@example.com',
        address: '789 Broadway',
      },
      {
        givenName: 'Judy',
        surName: 'Smith',
        age: 34,
        email: 'judy.smith@example.com',
        address: '789 Broadway',
      },
      {
        givenName: 'Jack',
        surName: 'Johnson',
        age: 50,
        email: 'jack.johnson@example.com',
        address: '321 Oak St',
      },
      {
        givenName: 'Julie',
        surName: 'Johnson',
        age: 48,
        email: 'julie.johnson@example.com',
        address: '321 Oak St',
      },
      {
        givenName: 'Jerry',
        surName: 'Davis',
        age: 55,
        email: 'jerry.davis@example.com',
        address: '654 Pine St',
      },
      {
        givenName: 'June',
        surName: 'Davis',
        age: 53,
        email: 'june.davis@example.com',
        address: '654 Pine St',
      },
    ]
};

