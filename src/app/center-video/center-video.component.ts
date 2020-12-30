import { Component, OnInit } from '@angular/core';
import { OldVideos } from '../old-videos';

@Component({
  selector: 'app-main-video',
  templateUrl: './center-video.component.html',
  styleUrls: ['./center-video.component.css']
})
export class CenterVideoComponent implements OnInit {
  videos = OldVideos;

  constructor() { }

  ngOnInit(): void {
  }

}
