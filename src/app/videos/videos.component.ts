import { Component, OnInit } from '@angular/core';
import {MockVideos} from '../mock-videos';
import {VideosService} from '../service/videos.service';
import {Video} from '../video';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  // videos = MockVideos;
  videos!: Video[];
  selectedVideo!: Video;

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.getVideos();
    this.onSelect(this.getLastVideo());
  }

  getVideos(): void {
    this.videosService.getVideos()
      .subscribe((videos: Video[]) => this.videos = videos);
  }

  public getLastVideo(): Video {
    return this.videos[this.videos.length - 1];
  }

  public onSelect(video: Video): void {
    this.selectedVideo = video;
  }

}
