import { Component, OnInit } from '@angular/core';
import {VideosService} from '../service/videos.service';
import {Video} from '../video';
import {Router} from '@angular/router';
import {AUTHENTICATED_USER, MYVIDEOID} from '../service/authentication.service';

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
  videos!: Video[];
  userName!: string | null;
  title = '';
  description = '';
  videoId!: number;
  videoTitle!: string;
  videoDescription!: string;

  constructor(public videosService: VideosService, private router: Router) { }

  ngOnInit(): void {
    this.videosService.getVideos()
      .subscribe((videos: Video[]) => this.videos = videos);
    this.userName = sessionStorage.getItem(AUTHENTICATED_USER);
   // @ts-ignore
    this.videoId = + sessionStorage.getItem(MYVIDEOID);
    this.video = this.getSelectedVideoWithVideoId();
  }

  // @ts-ignore
  getSelectedVideoWithVideoId(): Video{
    for (const item of this.videos) {
      if (item.videoId === this.videoId) { return item; }
    }
  }

  showDeleteVideo = () => {
    this.warningIsVisible = '';
  }

  confirmVideoDeleted = () => {
    this.warningIsVisible = 'd-none';
    this.confirmDeleteIsVisible = '';

  }

  editVideo(): void {
    this.userName = sessionStorage.getItem(AUTHENTICATED_USER);
    this.videosService.updateVideo(this.videoId, this.userName, this.videoTitle, this.videoDescription).subscribe(
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
