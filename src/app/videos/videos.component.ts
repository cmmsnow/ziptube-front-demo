import { Component, OnInit } from '@angular/core';
import {MockVideos} from '../mock-videos';
import { AVideo } from '../video';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos = MockVideos;
  // videos!: AVideo[];

  // @ts-ignore
  // selectedVideo = Video;

  constructor() {}
  // constructor(private videoService: VideoService) { }

  ngOnInit(): void {}
  // ngOnInit(): void {
  //   this.getVideos();
  // }

  // getVideos(): void {
  //   this.videoService.getVideos()
  //     .subscribe((videos: AVideo[]) => this.videos = videos);
  // }

  // public onSelect(video: Video): void {
  //   this.selectedVideo = video;
  // }

}
