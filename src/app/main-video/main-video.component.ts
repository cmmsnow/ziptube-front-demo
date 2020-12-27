import { Component } from '@angular/core';
import { videos } from '../videos';

@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.component.html',
  styleUrls: ['./main-video.component.css']
})

export class MainVideoComponent {
  videos = videos;
}
