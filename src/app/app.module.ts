import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { VideoBarComponent } from './video-bar/video-bar.component';
import { CenterVideoComponent } from './center-video/center-video.component';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterBarComponent,
    CenterVideoComponent,
    VideoBarComponent,
    EditProfilePageComponent,
    LoginRegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
