import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css']
})
export class EditProfilePageComponent implements OnInit {

  username = this.authenticationService.getAuthenticatedUser();
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  invalidUpdate = false;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    if (typeof this.username === 'string') {
      this.userService.executeJWTGetUserService(this.username)
        .subscribe(
          response => {
            this.firstName = response.firstName;
            this.lastName = response.lastName;
            this.email = response.email;
          }
        );
    }
  }

  handleJWTProfileUpdate = () => {
    if (typeof this.username === 'string') {
      this.userService.executeJWTUpdateUserService(this.username, this.firstName, this.lastName, this.email,
        this.password)
        .subscribe(
          response => {
            console.log(`Response: ${response}`);
          },
          error => {
            console.log(`Error: ${error}`);
            this.invalidUpdate = true;
          }
        );
    }
  }
}
