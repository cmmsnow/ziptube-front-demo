import {Component, OnInit} from '@angular/core';
import {VideosService} from '../service/videos.service';
import {HttpClient, HttpEventType, HttpHeaders, HttpResponse} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Video} from '../video';
import {AUTHENTICATED_USER} from '../service/authentication.service';
import {API_URL} from '../app.constants';

@Component({
  selector: 'app-upload-video-page',
  templateUrl: './upload-video-page.component.html',
  styleUrls: ['./upload-video-page.component.css']
})
export class UploadVideoPageComponent implements OnInit {
  form: FormGroup;

  videoTitle = '';
  videoDescription = '';
  isDisabled = true;
  isVisible = 'd-none';
  disableNextButton = false;
  // selectedFiles!: undefined;
  currentFileUpload!: File;
  progress: { percentage: number } = {percentage: 0};
  editedVideo!: string;
  video!: Video;
  username!: string | null;
  title = '';
  description = '';
  videoId!: number;

  constructor(
    public videosService: VideosService,
    public formBuilder: FormBuilder,
    private http: HttpClient) {
    this.form = this.formBuilder.group({
      video: [null]
    });
  }

  ngOnInit(): void {
  }

  uploadFile = (event: any) => {
    // @ts-ignore
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      video: file
    });
    // @ts-ignore
    this.form.get('video').updateValueAndValidity();
    console.log(this.form.value);
  }

  submitForm = () => {
    const formData: any = new FormData();
    // @ts-ignore
    formData.append('video', this.form.get('video').value);

    this.progress.percentage = 0;

    // @ts-ignore
    this.http.post(`${API_URL}/storage/uploadVideo`, formData, {
      reportProgress: true,
      responseType: 'json',
      observe: 'response'
    })
      .subscribe(
        (response: any) => {
          if (response.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * response.loaded / response.total);
          } else if (response instanceof HttpResponse) {
            console.log('File is completely uploaded!');
          }
          if (response.status === 202) {
            this.isDisabled = false;
            this.videoId = response.body.videoId;
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  submitVideoDetails(): void {
    this.username = sessionStorage.getItem(AUTHENTICATED_USER);
    this.isDisabled = true;
    this.isVisible = '';
    this.disableNextButton = !this.disableNextButton;

    this.videosService.updateVideo(this.videoId, this.username, this.videoTitle, this.videoDescription).subscribe(
      response => {
        console.log(response);
      });
  }

  uploadAnotherVideo = () => {
    this.isVisible = 'd-none';
    this.disableNextButton = !this.disableNextButton;

  }
}
