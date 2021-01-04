import { Component, OnInit } from '@angular/core';
// import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
  }

}
