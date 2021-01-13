import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {VideosService} from '../service/videos.service';
import {Video} from '../video';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit, AfterContentChecked{
  videos!: Video[];
  selectedVideo!: Video;
  // myRouter!: Router;

  constructor(private videosService: VideosService) {}

  // constructor(private videosService: VideosService, private router: Router, private activeRoute: ActivatedRoute) {
  //   this.myRouter = router;
  //   this.activeRoute.params.subscribe(params => this.navigateByUrl(params[this.selectedVideo.videoId]));
  // }

  ngOnInit(): void {
    this.getVideos();
  }

  ngAfterContentChecked(): void {
    if (this.selectedVideo == null) {
      this.onSelect(this.getLastVideo());
    }
    // this.navigateByUrl(this.selectedVideo.videoId);
  }

  // navigateByUrl(videoId: number): void {
  //   this.router.navigate(['/', videoId]);
  // }

  getVideos(): void {
    this.videosService.getVideos()
      .subscribe((videos: Video[]) => this.videos = videos);
  }

  public getLastVideo(): Video {
    return this.videos[this.videos.length - 1];
  }

  public onSelect(video: Video): void {
    this.selectedVideo = video;
    console.log(this.selectedVideo.videoId);
    // this.navigateByUrl(this.selectedVideo.videoId);
  }

}
