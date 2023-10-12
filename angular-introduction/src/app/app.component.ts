import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Georgeo";
  lastname = "Kampouris";
 
  person ={
    givenName: "Georgeo",
    surName: "Kampouris",
    age: "25",
    email: "georgeokamps@gmail.com"
};
}

