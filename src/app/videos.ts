import {OnInit} from '@angular/core';
import {Video} from './video';
import {VideoService} from './video.service';

export class Videos implements OnInit{
  videos!: Video[];

  constructor(private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe(data => {
      this.videos = data;
    });
  }
}
