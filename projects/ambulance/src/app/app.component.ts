import { Component } from '@angular/core';
import { User } from './users/domain/user.interface';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ambulance Management Application';
  currentDate =  new Date();

  login(user: Partial<User>) {
    console.log(user);
  }
}
