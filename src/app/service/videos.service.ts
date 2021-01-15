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

  private videosUrl = 'https://ziptubebackend.herokuapp.com/storage/video/allvideos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET videos from the server */
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl);
  }

  getVideosByUsername(userName: string | null): Observable<Video[]> {
    return this.http.get<Video[]>(`https://ziptubebackend.herokuapp.com/storage/allvideosbyusername/${userName}`);
  }

  /** POST: add a new video to the server (storage) */
  addVideo(file: File): Observable<HttpEvent<{}>> {
    console.log(`Video Service file: ${file}`);
    const data: FormData = new FormData();
    // @ts-ignore
    data.append('video', file);
    console.log(`Video Service data: ${data}`);
    const newRequest = new HttpRequest('POST', 'https://ziptubebackend.herokuapp.com/storage/uploadVideo', data, {
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
    this.http.put<any>(`${API_URL}/storage/video/${videoId}`, {videoId, userName, title, description}
    )
  // updateVideo(video: Video): Observable<any> {
  //   return this.http.put(this.videosUrl, video, this.httpOptions);
  // }

}
