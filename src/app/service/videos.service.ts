import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AVideo} from '../video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private videosUrl = 'http://localhost:8080/video';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET videos from the server */
  getVideos(): Observable<AVideo[]> {
    return this.http.get<AVideo[]>(this.videosUrl);
  }

  /** POST: add a new video to the server */
  // addVideo(video: Video): Observable<Video> {
  //   return this.http.post<Video>(this.videosUrl, video, this.httpOptions);
  // }

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
