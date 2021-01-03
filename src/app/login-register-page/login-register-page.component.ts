import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
// Need to import User here

@Component({
  selector: 'app-login-register-page',
  templateUrl: './login-register-page.component.html',
  styleUrls: ['./login-register-page.component.css']
})
export class LoginRegisterPageComponent implements OnInit {

  loginUsername = 'Christian1';
  loginPassword = '';
  firstname = '';
  lastname = '';
  username = '';
  password = '';
  email = '';
  errorMessage = 'Invalid Credentials. Please try again';
  invalidLogin = false;

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin = () => {
    if (this.hardcodedAuthenticationService.authenticate(this.loginUsername, this.loginPassword)) {
      this.router.navigate(['']);
      console.log('Username: ' + this.loginUsername);
      console.log('Password: ' + this.loginPassword);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleRegistration = () => {
    console.log('hello');
  }

}
