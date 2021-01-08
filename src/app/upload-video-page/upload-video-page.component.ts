import { Component, OnInit } from '@angular/core';
import {VideosService} from '../service/videos.service';

@Component({
  selector: 'app-upload-video-page',
  templateUrl: './upload-video-page.component.html',
  styleUrls: ['./upload-video-page.component.css']
})
export class UploadVideoPageComponent implements OnInit {

  videoTitle = '';
  videoDescription = '';
  isDisabled = true;
  isVisible = 'd-none';
  disableNextButton = false;
  // fileToUpload: File | null | undefined;

  constructor(
    public videosService: VideosService) { }

  ngOnInit(): void {
  }
  // handleFileInput = (files: FileList) => {
  //    this.fileToUpload = files.item(0);
  // }
  //  uploadFileToActivity = () => {
  //    this.videosService.addVideo(this.fileToUpload).subscribe(data => {
  //      // do something, if upload success
  //    }, error => {
  //      console.log(error);
  //    });
  //  }

  next = () => {
    this.isDisabled = !this.isDisabled;
  }

  submitVideoDetails = () => {
    this.videoTitle = '';
    this.videoDescription = '';
    this.isDisabled = true;
    this.isVisible = '';
    this.disableNextButton = !this.disableNextButton;
  }

  uploadAnotherVideo = () => {
    this.isVisible = 'd-none';
    this.disableNextButton = !this.disableNextButton;

  }
}
