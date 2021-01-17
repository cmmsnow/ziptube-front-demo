import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login-register-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginUsername = '';
  loginPassword = '';
  errorMessage = 'Invalid Credentials. Please try again';
  invalidLogin = false;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  handleJWTAuthLogin = () => {
    this.authenticationService.executeJWTAuthenticationService(this.loginUsername, this.loginPassword)
      .subscribe(
        response => {
          this.router.navigate([``]);
          this.invalidLogin = false;
          return response;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
