import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './sections-of-page/header-bar/header-bar.component';
import { FooterBarComponent } from './sections-of-page/footer-bar/footer-bar.component';
import { VideoBarComponent } from './sections-of-page/video-bar/video-bar.component';
import { CenterVideoComponent } from './sections-of-page/center-video/center-video.component';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
import { MainVideoPageComponent } from './main-video-page/main-video-page.component';
import { UserVideoPageComponent } from './user-video-page/user-video-page.component';
import { UploadVideoPageComponent } from './upload-video-page/upload-video-page.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterBarComponent,
    CenterVideoComponent,
    VideoBarComponent,
    EditProfilePageComponent,
    LoginRegisterPageComponent,
    MainVideoPageComponent,
    UserVideoPageComponent,
    UploadVideoPageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
