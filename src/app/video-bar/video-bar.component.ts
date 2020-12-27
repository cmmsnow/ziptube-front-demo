import { Component } from '@angular/core';
import { videos } from '../videos';

@Component({
  selector: 'app-video-bar',
  templateUrl: './video-bar.component.html',
  styleUrls: ['./video-bar.component.css']
})

export class VideoBarComponent {
  videos = videos;
}
