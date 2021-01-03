import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
import { UploadVideoPageComponent } from './upload-video-page/upload-video-page.component';
import { ErrorComponent } from './error/error.component';
import { VideosComponent } from './videos/videos.component';
import { UserVideosComponent } from './user-videos/user-videos.component';
import { CommentsComponent } from './comments/comments.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './http-error.interceptor';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterBarComponent,
    EditProfilePageComponent,
    LoginRegisterPageComponent,
    UploadVideoPageComponent,
    ErrorComponent,
    VideosComponent,
    UserVideosComponent,
    CommentsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
