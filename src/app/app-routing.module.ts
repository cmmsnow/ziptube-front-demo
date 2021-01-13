import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {EditProfilePageComponent} from './edit-profile-page/edit-profile-page.component';
import {UploadVideoPageComponent} from './upload-video-page/upload-video-page.component';
import {ErrorComponent} from './error/error.component';
import {VideosComponent} from './videos/videos.component';
import {MyVideosComponent} from './my-videos/my-videos.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {RegisterPageComponent} from './register-page/register-page.component';
import {EditVideoPageComponent} from './edit-video-page/edit-video-page.component';

const routes: Routes = [
  {path: '', component: VideosComponent},
  // {path: '/:videoId', component: VideosComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'editprofile', component: EditProfilePageComponent, canActivate: [RouteGuardService]},
  {path: 'myvideos', component: MyVideosComponent, canActivate: [RouteGuardService]},
  // {path: 'myvideos/:videoId', component: MyVideosComponent, canActivate: [RouteGuardService]},
  {path: 'uploadvideo', component: UploadVideoPageComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'editvideo', component: EditVideoPageComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
