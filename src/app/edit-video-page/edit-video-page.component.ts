import {Component, OnInit} from '@angular/core';
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

  constructor(public videosService: VideosService, private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.videoId = +sessionStorage.getItem(MYVIDEOID);
    this.getVideos();
    this.userName = sessionStorage.getItem(AUTHENTICATED_USER);
    console.log(this.userName);
  }

  // @ts-ignore
  getSelectedVideoWithVideoId(): Video {
    for (const item of this.videos) {
      if (item.videoId === this.videoId) {
        return item;
      }
    }
  }

  getVideos = () => {
    this.videosService.getVideos()
      .subscribe(
        response => {
          this.videos = response;
          this.video = this.getSelectedVideoWithVideoId();
          this.title = this.video.title;
          this.description = this.video.description;
        });
  }
  // refresh(): void { window.location.reload(); }

  showDeleteVideo = () => {
    this.warningIsVisible = '';
  }

  toggleState = () => {
    this.warningIsVisible = 'd-none';
  }

  confirmVideoDeleted = () => {
    this.warningIsVisible = 'd-none';
    this.confirmDeleteIsVisible = '';

  }

  editVideo(): void {
    this.videosService.updateVideo(this.videoId, this.userName, this.title, this.description).subscribe(
      response => {
        console.log(response);
      });
    this.getVideos();
    this.router.navigate(['myvideos']);
  }

  deleteVideo = () => {
    this.videosService.deleteVideo(this.videoId).subscribe(
      response => {
        // this.router.navigate(['']);
        return response;
      });
    this.getVideos();
    this.router.navigate(['myvideos']);
  }
}
