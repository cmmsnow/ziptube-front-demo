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

  getVideosByUsername = (userName: string) => this.http.get(
    `http://localhost:8080/storage/allvideosbyusername/${userName}`
  )
  // getVideosByUsername(userName: string | null): Observable<Video[]> {
  //   return this.http.get<Video[]>(`http://localhost:8080/storage/allvideosbyusername/${userName}`);
  // }

  /** POST: add a new video to the server (storage) */
  addVideo(video: Video): Observable<HttpEvent<any>> {
    const formData: any = new FormData();
    // @ts-ignore
    formData.append('video', this.form.get('video').value);
    const req = new HttpRequest('POST', 'http://localhost:8080/storage/uploadVideo', formData, {
      reportProgress: true,
      responseType: 'json',
      // @ts-ignore
      observe: 'events'
    });
    return this.http.request(req);
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

 // /** PUT: add video details (title, description)*/


/** DELETE: delete the video from the server */
  deleteVideo = (videoId: number) => this.http.delete<any>(
  `${API_URL}/storage/deletevideo/${videoId}`)
  // deleteVideo(video: Video | number): Observable<Video> {
  //   const id = typeof video === 'number' ? video : video.id;
  //   const url = `${this.videosUrl}/${id}`;
  //
  //   return this.http.delete<Video>(url, this.httpOptions);
  // }

  /** PUT: update the video on the server (title/description) */
  updateVideo = (videoId: number, userName: string | null, title: string, description: string) =>
    this.http.put<any>(
      `${API_URL}/storage/video/${videoId}`,
      {videoId, userName, title, description}
    )
}
