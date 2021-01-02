import { Component, OnInit } from '@angular/core';
import {MockVideos} from '../mock-videos';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  // videos!: Video[];
  videos = MockVideos;
  // @ts-ignore
  // selectedVideo = Video;

  // constructor(private videoService: VideoService) { }
  constructor() { }

  ngOnInit(): void {
    // this.videoService.getAllVideos().subscribe(data => {
    //   this.videos = data;
    // });
  }

  // public onSelect(video: Video): void {
  //   this.selectedVideo = video;
  // }

}
