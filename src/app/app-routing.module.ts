import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginRegisterPageComponent} from './login-register-page/login-register-page.component';
import {EditProfilePageComponent} from './edit-profile-page/edit-profile-page.component';
import {UploadVideoPageComponent} from './upload-video-page/upload-video-page.component';
import {ErrorComponent} from './error/error.component';
import {VideosComponent} from './videos/videos.component';
import {UserVideosComponent} from './user-videos/user-videos.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';

const routes: Routes = [
  {path: '', component: VideosComponent},
  {path: 'login', component: LoginRegisterPageComponent},
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
