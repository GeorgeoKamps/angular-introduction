import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './interfaces/person';

import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    PersonComponent,
    PersonAltComponent,
    EventBindComponent,
    OutputDemoComponent,
    PersonCardComponent],
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
        photoURL: 'https://i.pravatar.cc/?image=1',
        givenName: 'John',
        surName: 'Doe',
        age: 30,
        email: 'john.doe@example.com',
        address: '123 Main St',
      },
      {
        photoURL: 'https://i.pravatar.cc/?image=2',
        givenName: 'Jane',
        surName: 'Doe',
        age: 28,
        email: 'jane.doe@example.com',
        address: '123 Main St',
      },
      {
        photoURL: 'https://i.pravatar.cc/?image=3',
        givenName: 'Jim',
        surName: 'Brown',
        age: 45,
        email: 'jim.brown@example.com',
        address: '456 Park Ave',
      },
      {
        photoURL: 'https://i.pravatar.cc/?image=4',
        givenName: 'Jill',
        surName: 'Brown',
        age: 42,
        email: 'jill.brown@example.com',
        address: '456 Park Ave',
      },
      {
        photoURL: 'https://i.pravatar.cc/?image=5',
        givenName: 'Jake',
        surName: 'Smith',
        age: 36,
        email: 'jake.smith@example.com',
        address: '789 Broadway',
      },
      {
        photoURL: 'https://i.pravatar.cc/?image=6',
        givenName: 'Judy',
        surName: 'Smith',
        age: 34,
        email: 'judy.smith@example.com',
        address: '789 Broadway',
      },
      {
        photoURL: 'https://i.pravatar.cc/?image=7',
        givenName: 'Jack',
        surName: 'Johnson',
        age: 50,
        email: 'jack.johnson@example.com',
        address: '321 Oak St',
      },
      {
        photoURL: 'https://i.pravatar.cc/?image=8',
        givenName: 'Julie',
        surName: 'Johnson',
        age: 48,
        email: 'julie.johnson@example.com',
        address: '321 Oak St',
      },
      {
        photoURL: 'https://i.pravatar.cc/?image=9',
        givenName: 'Jerry',
        surName: 'Davis',
        age: 55,
        email: 'jerry.davis@example.com',
        address: '654 Pine St',
      },
      {
        photoURL: 'https://i.pravatar.cc/?image=10',
        givenName: 'June',
        surName: 'Davis',
        age: 53,
        email: 'june.davis@example.com',
        address: '654 Pine St',
      },
    ];

    sendUser: Person | undefined

    onDeleteUser(i:number) {
      this.users.splice(i,1)
    }

    onSendUser(user:Person){
      console.log(user);
      this.sendUser = user;
    }
};

