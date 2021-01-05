import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {EditProfilePageComponent} from './edit-profile-page/edit-profile-page.component';
import {UploadVideoPageComponent} from './upload-video-page/upload-video-page.component';
import {ErrorComponent} from './error/error.component';
import {VideosComponent} from './videos/videos.component';
import {UserVideosComponent} from './user-videos/user-videos.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {RegisterPageComponent} from './register-page/register-page.component';

const routes: Routes = [
  {path: '', component: VideosComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'main/:username', component: VideosComponent, canActivate: [RouteGuardService]},
  {path: 'editprofile', component: EditProfilePageComponent, canActivate: [RouteGuardService]},
  {path: 'uservideos', component: UserVideosComponent, canActivate: [RouteGuardService]},
  {path: 'uploadvideo', component: UploadVideoPageComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
