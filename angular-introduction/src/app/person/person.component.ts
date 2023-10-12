import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  person ={
    givenName: "Georgeo",
    surName: "Kampouris",
    age: "25",
    email: "georgeokamps@gmail.com"
};
}
