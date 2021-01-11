import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  handleJWTProfileUpdate = () => {
    this.userService.executeJWTUpdateUserService(this.username, this.firstName, this.lastName, this.email,
      this.password)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
