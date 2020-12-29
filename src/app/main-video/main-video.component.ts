import { Component, OnInit } from '@angular/core';
import { OldVideos } from '../old-videos';

@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.component.html',
  styleUrls: ['./main-video.component.css']
})
export class MainVideoComponent implements OnInit {
  videos = OldVideos;

  constructor() { }

  ngOnInit(): void {
  }

}
