import { Component, OnInit } from '@angular/core';
import {VideosService} from '../service/videos.service';
import {Video} from '../video';
import {Router} from '@angular/router';

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
  username = '';
  title = '';
  description = '';

  constructor(public videosService: VideosService, private router: Router) { }

  ngOnInit(): void {
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

  editVideo(videoId: number): void {
    this.videosService.updateVideo(videoId, this.username, this.title, this.description).subscribe(
      response => {
        console.log(this.editedVideo);
        console.log(response);
      });
  }

  deleteVideo = (videoId: number) => {
    this.videosService.deleteVideo(videoId).subscribe(
      response => {
        return response;
      });
  }


}
