import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Video} from '../video';
import {VideosService} from '../service/videos.service';
import {AUTHENTICATED_USER} from '../service/authentication.service';

@Component({
  selector: 'app-my-videos',
  templateUrl: './my-videos.component.html',
  styleUrls: ['./my-videos.component.css']
})
export class MyVideosComponent implements OnInit, AfterContentChecked {
  videos!: Video[];
  selectedVideo!: Video;
  myVideos!: Video[];
  userName!: string | null;

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.getVideos();
    this.userName = sessionStorage.getItem(AUTHENTICATED_USER);
  }

  ngAfterContentChecked(): void {
    this.getMyVideos();
    if (this.selectedVideo == null) {
      this.onSelect(this.getMyLastVideo());
    }
  }

  getVideos(): void {
    // this.videosService.getVideosByUsername(this.userName)
    this.videosService.getVideos()
      .subscribe((videos: Video[]) => this.videos = videos);
  }

  public getMyVideos(): void {
    this.myVideos = this.videos.filter(video => video.userName === this.userName);
  }

  public getMyLastVideo(): Video {
    return this.myVideos[this.myVideos.length - 1];
  }

  public onSelect(video: Video): void {
    this.selectedVideo = video;
  }
}
