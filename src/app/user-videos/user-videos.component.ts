import { Component, OnInit } from '@angular/core';
import {MockVideos} from '../mock-videos';
import {AVideo} from '../video';

@Component({
  selector: 'app-user-videos',
  templateUrl: './user-videos.component.html',
  styleUrls: ['./user-videos.component.css']
})
export class UserVideosComponent implements OnInit {
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
