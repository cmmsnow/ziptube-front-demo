import {Component, OnInit} from '@angular/core';
import {VideosService} from '../service/videos.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Video} from '../video';

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
  selectedFiles!: undefined;
  currentFileUpload!: File;
  progress: { percentage: number } = {percentage: 0};

  // video!: Video;

  // progress: { percentage: number } = { percentage: 0 };

  constructor(
    public videosService: VideosService) {
  }

  ngOnInit(): void {
  }

  selectFile = (event: any) => {
    this.selectedFiles = event.target.files;
    console.log(`Selected File: ${this.selectedFiles}`);
  }

  upload = () => {
    this.progress.percentage = 0;

    // @ts-ignore
    this.currentFileUpload = this.selectedFiles.item(0);

    console.log(`File being uploaded: ${this.currentFileUpload}`);
    this.videosService.addVideo(this.currentFileUpload)
      .subscribe((event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      });

    this.selectedFiles = undefined;
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

  //
  submitVideoDetails = () => {
    this.videoTitle = '';
    this.videoDescription = '';
    this.isDisabled = true;
    this.isVisible = '';
    this.disableNextButton = !this.disableNextButton;
    // this.videosService.updateVideo();
  }

  uploadAnotherVideo = () => {
    this.isVisible = 'd-none';
    this.disableNextButton = !this.disableNextButton;

  }

  // save = (event: any) => {
  //
  //   this.video = event.target.files[0];
  //   console.log(this.video);
  // }
  //
  // next = () => {
  //   // this.progress.percentage = 0;
  //   this.videosService.addVideo(this.video)
  //     .subscribe(response => {
  //         // @ts-ignore
  //         if (response.videoId >= 1) {
  //           this.isDisabled = !this.isDisabled;
  //           console.log(response);
  //         }
  //       }
  //     );
  // }

}
