import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './page-sections/header-bar/header-bar.component';
import { FooterBarComponent } from './page-sections/footer-bar/footer-bar.component';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
// import { MainVideoPageComponent } from './main-video-page/main-video-page.component';
import { UploadVideoPageComponent } from './upload-video-page/upload-video-page.component';
import { ErrorComponent } from './error/error.component';
import { VideosComponent } from './videos/videos.component';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { CenterVideoComponent } from './page-sections/center-video/center-video.component';
import { VideoBarComponent } from './page-sections/video-bar/video-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterBarComponent,
    EditProfilePageComponent,
    LoginRegisterPageComponent,
    // MainVideoPageComponent,
    UploadVideoPageComponent,
    ErrorComponent,
    VideosComponent,
    UsersComponent,
    CommentsComponent,
    CenterVideoComponent,
    VideoBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
