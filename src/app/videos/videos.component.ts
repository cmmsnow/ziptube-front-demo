import { Component, OnInit } from '@angular/core';
import {VideoService} from '../services/video.service';
import {Video} from '../video';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos!: Video[];
  // @ts-ignore
  selectedVideo = Video;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe(data => {
      this.videos = data;
    });
  }

  public onSelect(video: Video): void {
    this.selectedVideo = video;
  }

}
