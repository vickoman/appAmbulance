import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  @ViewChild('fieldEmail') fieldEmail: ElementRef | undefined;
  @ViewChild('fieldPassword') fieldPassword: ElementRef | undefined;

  userEmail = '';
  userPassword = '';

  constructor() {}

  set email(e: any) {
    this.userEmail = e.target.value.trim();
  }

  set password(e: any) {
    this.userPassword = e.target.value.trim();
  }

  get email() {
    return this.userEmail.toLowerCase();
  }

  get password() {
    return this.userPassword.toLowerCase();
  }

  buttonHandler() {
    console.log('Evento handler click');
    console.log(this.fieldEmail?.nativeElement.value);
    console.log(this.fieldPassword?.nativeElement.value);
  }

  ngOnInit(): void {}
}
