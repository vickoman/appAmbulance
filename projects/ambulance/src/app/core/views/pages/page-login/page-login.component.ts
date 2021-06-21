import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { User } from 'projects/ambulance/src/app/users/domain/user.interface';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  @ViewChild('fieldEmail') fieldEmail: ElementRef | undefined;
  @ViewChild('fieldPassword') fieldPassword: ElementRef | undefined;
  @Output() onLogin: EventEmitter<Partial<User>> = new EventEmitter<Partial<User>>();
  @Output() onRecovery: EventEmitter<string> = new EventEmitter<string>();

  user: Partial<User> = {};

  constructor() {}

  getInputsFromUser(): Partial<User> {
    const user: User = {
      email: this.fieldEmail?.nativeElement.value,
      password: this.fieldPassword?.nativeElement.value,
    };
    return user;
  }

  buttonHandler() {
    const user: Partial<User> = this.getInputsFromUser();
    this.onLogin.emit(user);

  }

  recoveryHandler() {
    const user: Partial<User> = this.getInputsFromUser();
    this.onRecovery.emit(user.email);
  }

  ngOnInit(): void {}
}
