import { Component, OnInit } from '@angular/core';
import { videos} from '../videos';

@Component({
  selector: 'app-main-video',
  templateUrl: './main-video.component.html',
  styleUrls: ['./main-video.component.css']
})
export class MainVideoComponent implements OnInit {
  videos = videos;

  constructor() { }

  ngOnInit(): void {
  }

}
