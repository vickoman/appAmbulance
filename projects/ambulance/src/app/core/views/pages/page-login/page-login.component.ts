import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'projects/ambulance/src/app/users/domain/user.interface';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  @ViewChild('fieldEmail') fieldEmail: ElementRef | undefined;
  @ViewChild('fieldPassword') fieldPassword: ElementRef | undefined;

  user: Partial<User> = {};

  constructor() {}

  getInputsFromUser(): Partial<User> {
    return {
      email: this.fieldEmail?.nativeElement.value,
      password: this.fieldPassword?.nativeElement.value,
    };
  }

  buttonHandler() {
    console.log('Evento handler click');
    console.log(this.getInputsFromUser());
  }

  ngOnInit(): void {}
}
