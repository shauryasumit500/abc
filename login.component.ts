import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'abc'
  password = ''

  constructor() { }

  ngOnInit(): void {
  }
  handlelogin() {
    console.log('jytfuyt');
  }

}
