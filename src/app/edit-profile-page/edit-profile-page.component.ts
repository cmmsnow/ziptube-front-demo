import {Component, OnInit} from '@angular/core';
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
  originalEmail = '';
  invalidUpdate = false;

  constructor(
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.updateUserInformation();
  }

  updateUserInformation = () => {
    if (typeof this.username === 'string') {
      this.userService.executeJWTGetUserService(this.username)
        .subscribe(
          response => {
            this.firstName = response.firstName;
            this.lastName = response.lastName;
            this.email = response.email;
            this.originalEmail = response.email;
          }
        );
    }
  }

  handleJWTProfileUpdate = () => {
      if (typeof this.username === 'string') {
        this.userService.executePartialJWTUpdateUserService(this.username, this.firstName, this.lastName)
          .subscribe(
            response => {
              this.updateUserInformation();
              console.log(`Response: ${response}`);
            },
            error => {
              console.log(`Error: ${error}`);
              this.invalidUpdate = true;
            }
          );
      }
      window.location.reload();
    }
}
