import { Component, OnInit } from '@angular/core';
import {VideosService} from '../service/videos.service';
import {Video} from '../video';
import {Router} from '@angular/router';
import {AUTHENTICATED_USER} from '../service/authentication.service';

@Component({
  selector: 'app-edit-video-page',
  templateUrl: './edit-video-page.component.html',
  styleUrls: ['./edit-video-page.component.css']
})
export class EditVideoPageComponent implements OnInit {

  warningIsVisible = 'd-none';
  confirmDeleteIsVisible = 'd-none';
  editedVideo!: string;
  video!: Video;
  username!: string | null;
  title = '';
  description = '';
  videoId!: number;
  videoTitle!: string;
  videoDescription!: string;

  constructor(public videosService: VideosService, private router: Router) { }

  ngOnInit(): void {
   // this.videoId = sessionStorage.getItem(VIDEOID);
  }

  showDeleteVideo = () => {
    this.warningIsVisible = '';
  }

  confirmVideoDeleted = () => {
    this.warningIsVisible = 'd-none';
    this.confirmDeleteIsVisible = '';

  }

  // routeToMyVideos = () => {
  //   this.router.navigate(['myvideos']);  }

  editVideo(): void {
    this.username = sessionStorage.getItem(AUTHENTICATED_USER);
    this.videosService.updateVideo(this.videoId, this.username, this.videoTitle, this.videoDescription).subscribe(
      response => {
        console.log(this.editedVideo);
        console.log(response);
      });
  }

  deleteVideo = () => {
    this.videosService.deleteVideo(this.videoId).subscribe(
      response => {
        return response;
      });
  }


}
