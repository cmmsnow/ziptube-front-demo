import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Video} from '../video';
import {VideosService} from '../service/videos.service';
import {AUTHENTICATED_USER, MYVIDEOID, VIDEOID} from '../service/authentication.service';

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
  currentVideoId!: number;

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.getVideos();
    this.userName = sessionStorage.getItem(AUTHENTICATED_USER);
    this.getStoredVideoId();
  }

  ngAfterContentChecked(): void {
    this.getMyVideos();
    this.getStoredVideoId();
    if (this.selectedVideo == null && this.currentVideoId == null) {
      this.onSelect(this.getMyLastVideo());
    } else {
      this.onSelect(this.getSelectedVideoWithVideoId());
    }
  }

  getStoredVideoId(): void{
    // @ts-ignore
    if (sessionStorage.getItem(MYVIDEOID) != null){
      // @ts-ignore
      this.currentVideoId  = + sessionStorage.getItem(MYVIDEOID);
    }
  }

  // @ts-ignore
  getSelectedVideoWithVideoId(): Video{
    for (const item of this.myVideos) {
      if (item.videoId === this.currentVideoId) { return item; }
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
    sessionStorage.setItem(MYVIDEOID, video.videoId.toString());
    this.getStoredVideoId();
    this.selectedVideo = this.getSelectedVideoWithVideoId();
  }
}
