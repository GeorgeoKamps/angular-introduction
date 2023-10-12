import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
 
@Input() person: Person ={
  givenName: "the person's firstname",
  surName: "the person's lastname",
  age: 0,
  email: "the person's email",
  address: "the person's address"
};
}
