import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UploadVideoPageComponent } from './upload-video-page/upload-video-page.component';
import { ErrorComponent } from './error/error.component';
import { VideosComponent } from './videos/videos.component';
import { MyVideosComponent } from './my-videos/my-videos.component';
import { CommentsComponent } from './comments/comments.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpErrorInterceptor} from './service/http-error.interceptor';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterBarComponent,
    EditProfilePageComponent,
    LoginPageComponent,
    UploadVideoPageComponent,
    ErrorComponent,
    VideosComponent,
    MyVideosComponent,
    CommentsComponent,
    LogoutComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
