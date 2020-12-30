import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainVideoPageComponent} from './main-video-page/main-video-page.component';
import {LoginRegisterPageComponent} from './login-register-page/login-register-page.component';
import {EditProfilePageComponent} from './edit-profile-page/edit-profile-page.component';
import {UserVideoPageComponent} from './user-video-page/user-video-page.component';
import {UploadVideoPageComponent} from './upload-video-page/upload-video-page.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: '', component: MainVideoPageComponent},
  {path: 'loginregister', component: LoginRegisterPageComponent},
  {path: 'editprofile', component: EditProfilePageComponent},
  {path: 'uservideos', component: UserVideoPageComponent},
  {path: 'uploadvideo', component: UploadVideoPageComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
