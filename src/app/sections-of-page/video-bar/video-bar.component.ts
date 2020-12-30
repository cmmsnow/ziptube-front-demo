import { Component, OnInit } from '@angular/core';
import { OldVideos } from '../../old-videos';

@Component({
  selector: 'app-video-bar',
  templateUrl: './video-bar.component.html',
  styleUrls: ['./video-bar.component.css']
})
export class VideoBarComponent implements OnInit {
  videos = OldVideos;

  constructor() { }

  ngOnInit(): void {
  }

}
