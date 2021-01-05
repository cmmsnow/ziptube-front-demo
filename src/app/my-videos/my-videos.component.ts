import { Component, OnInit } from '@angular/core';
import {MockVideos} from '../mock-videos';
import {Video} from '../video';

@Component({
  selector: 'app-my-videos',
  templateUrl: './my-videos.component.html',
  styleUrls: ['./my-videos.component.css']
})
export class MyVideosComponent implements OnInit {
  videos = MockVideos;
  // // @ts-ignore
  // selectedVideo = Video;

  constructor() { }

  ngOnInit(): void {
  }

  // public onSelect(video: Video): void {
  //   this.selectedVideo = video;
  // }
}
