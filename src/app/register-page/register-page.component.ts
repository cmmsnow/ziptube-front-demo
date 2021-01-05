import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  firstname = '';
  lastname = '';
  username = '';
  password = '';
  email = '';

  constructor(private router: Router,
              public userService: UserService) { }

  ngOnInit(): void {
  }

  handleJWTRegistration = () => {
    this.userService.executeJWTRegistrationService(this.firstname, this.lastname, this.username, this.password,
      this.email).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['login']);
        },
      error => {
          console.log(error);
      }
    );
  }
}
