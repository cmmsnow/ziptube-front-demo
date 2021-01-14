import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {VideosService} from '../service/videos.service';
import {Video} from '../video';
import {VIDEOID} from '../service/authentication.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit, AfterContentChecked{
  videos!: Video[];
  selectedVideo!: Video;
  currentVideoId!: number;

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.getVideos();
    this.getStoredVideoId();
  }

  ngAfterContentChecked(): void {
    if (this.selectedVideo == null && this.currentVideoId == null) {
      this.onSelect(this.getLastVideo());
    } else {
      this.onSelect(this.getSelectedVideoWithVideoId());
    }
  }

  getStoredVideoId(): void{
    // @ts-ignore
    if (sessionStorage.getItem(VIDEOID) != null){
      // @ts-ignore
      this.currentVideoId  = + sessionStorage.getItem(VIDEOID);
    }
  }

  // @ts-ignore
  getSelectedVideoWithVideoId(): Video{
    for (const item of this.videos) {
      if (item.videoId === this.currentVideoId) { return item; }
    }
  }

  getVideos(): void {
    this.videosService.getVideos()
      .subscribe((videos: Video[]) => this.videos = videos);
  }

  public getLastVideo(): Video {
    return this.videos[this.videos.length - 1];
  }

  public onSelect(video: Video): void {
    sessionStorage.setItem(VIDEOID, video.videoId.toString());
    this.getStoredVideoId();
    this.selectedVideo = this.getSelectedVideoWithVideoId();
  }

}
