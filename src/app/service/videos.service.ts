import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../video';
import { API_URL } from '../app.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private videosUrl = 'http://localhost:8080/storage/video/allvideos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET videos from the server */
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl);
  }

  /** POST: add a new video to the server (storage) */
  addVideo(file: File): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    // @ts-ignore
    formData.append('video', file);

    const newRequest = new HttpRequest('POST', 'http://localhost:8080/storage/uploadVideo', formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(newRequest);
  }
   // addVideo = (file: File) => this.http.post<any> (
   // `${API_URL}/storage/uploadVideo`, {file}
   // ).pipe(
   //   map(
   //     response => {
   //       console.log(`API Response: ${response}`);
   //       // return response;
   //     }
   //   )
   // )

  // PUT: add video details (title, description)*/


/** DELETE: delete the video from the server */
  // deleteVideo(video: Video | number): Observable<Video> {
  //   const id = typeof video === 'number' ? video : video.id;
  //   const url = `${this.videosUrl}/${id}`;
  //
  //   return this.http.delete<Video>(url, this.httpOptions);
  // }

  /** PUT: update the video on the server */
  // updateVideo(video: Video): Observable<any> {
  //   return this.http.put(this.videosUrl, video, this.httpOptions);
  // }

}
