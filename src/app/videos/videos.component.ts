import { Component, OnInit } from '@angular/core';
// import {AVideo} from '../video';
import {MockVideos} from '../mock-videos';

export class Video {
  constructor(
    public videoId: number,
    public title: string,
    public description: string,
    public postedBy: string,
    public timestamp: string,
    public url: string
  ) {}
} // step 23

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

  // constructor(private videodata: Videodata) { }
  constructor() { }

  ngOnInit(): void {
    // this.videodata.getAllVideos().subscribe(data => {
    //   this.videos = data;
    // });
  }

  // public onSelect(video: Video): void {
  //   this.selectedVideo = video;
  // }

}
